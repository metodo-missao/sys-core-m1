// dados-simulado-gmj-bloco1.js

function parsearCSV(textoCSV) {
    const linhas = [];
    let linhaAtual = [];
    let campoAtual = '';
    let dentroDeAspas = false;

    for (let i = 0; i < textoCSV.length; i++) {
        const char = textoCSV[i];
        const proxChar = textoCSV[i + 1];

        if (char === '"') {
            if (dentroDeAspas && proxChar === '"') {
                campoAtual += '"';
                i++;
            } else {
                dentroDeAspas = !dentroDeAspas;
            }
        } else if (char === ',' && !dentroDeAspas) {
            linhaAtual.push(campoAtual.trim());
            campoAtual = '';
        } else if ((char === '\r' || char === '\n') && !dentroDeAspas) {
            if (char === '\r' && proxChar === '\n') {
                i++;
            }
            linhaAtual.push(campoAtual.trim());
            if (linhaAtual.length > 1 || linhaAtual[0] !== '') {
                linhas.push(linhaAtual);
            }
            linhaAtual = [];
            campoAtual = '';
        } else {
            campoAtual += char;
        }
    }

    if (campoAtual || linhaAtual.length > 0) {
        linhaAtual.push(campoAtual.trim());
        linhas.push(linhaAtual);
    }

    if (linhas.length < 2) return [];

    const cabecalhos = linhas[0].map(h => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));
    const dados = [];

    for (let i = 1; i < linhas.length; i++) {
        const valores = linhas[i];
        const objeto = {};
        cabecalhos.forEach((cabecalho, index) => {
            objeto[cabecalho] = valores[index] || '';
        });
        dados.push(objeto);
    }

    return dados;
}

function formatarParaSimulador(listaBruta) {
    return listaBruta.map((q, idx) => {
        const numQuestao = q.numero_da_questao || q.numero || (idx + 1);
        const gabaritoLetra = (q.gabarito || q.correta || 'A').toString().trim().toUpperCase();

        const alternativas = [
            q.alternativa_a || q.opcao_a,
            q.alternativa_b || q.opcao_b,
            q.alternativa_c || q.opcao_c,
            q.alternativa_d || q.opcao_d,
            q.alternativa_e || q.opcao_e
        ].filter(Boolean);

        return {
            titulo: `Questão ${numQuestao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Língua Portuguesa`,
            enunciado: q.enunciado || q.texto,
            alternativas: alternativas,
            correta: ['A', 'B', 'C', 'D', 'E'].indexOf(gabaritoLetra),
            letraGabarito: gabaritoLetra,
            explicacao: q.explicacao || q.comentario || 'Gabarito oficial comentado conforme a norma-padrão.'
        };
    });
}

async function carregarQuestoes() {
    let carregouViaSupabase = false;

    // Tentativa 1: Tabela no Supabase
    if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('simulado_gmj_bloco1')
                .select('*')
                .order('numero_da_questao', { ascending: true });

            if (!error && data && data.length > 0) {
                const questoes = formatarParaSimulador(data);
                renderizarSimulador(questoes);
                carregouViaSupabase = true;
            }
        } catch (e) {
            console.warn("Supabase indisponível, carregando arquivo CSV local...", e);
        }
    }

    // Tentativa 2: Leitura automática do arquivo CSV local
    if (!carregouViaSupabase) {
        try {
            const resposta = await fetch('simulado_gmj_bloco1.csv');
            if (!resposta.ok) throw new Error("Não foi possível carregar o arquivo CSV.");

            const textoCSV = await resposta.text();
            const dadosParseados = parsearCSV(textoCSV);
            const questoes = formatarParaSimulador(dadosParseados);

            if (typeof renderizarSimulador === 'function') {
                renderizarSimulador(questoes);
            }
        } catch (erro) {
            console.error("Erro ao carregar as questões:", erro);
        }
    }
}

carregarQuestoes();