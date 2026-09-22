// dados-aplicacao-lei-penal.js

// Parser de CSV para garantir suporte total a textos entre aspas e quebras de linha
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

// Mapeador universal para o formato do simulador
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
            titulo: `Questão ${numQuestao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Penal - Da Aplicação da Lei Penal`,
            enunciado: q.enunciado || q.texto,
            alternativas: alternativas,
            correta: ['A', 'B', 'C', 'D', 'E'].indexOf(gabaritoLetra),
            letraGabarito: gabaritoLetra,
            explicacao: q.explicacao || q.comentario || 'Gabarito oficial mantido conforme a legislação vigente.'
        };
    });
}

// Carregador Principal (Supabase com Fallback Automático para CSV local)
async function carregarQuestoes() {
    let carregouViaSupabase = false;

    // Tentativa 1: Supabase
    if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('questoes_aplicacao_lei_penal')
                .select('*')
                .order('numero_da_questao', { ascending: true });

            if (!error && data && data.length > 0) {
                const questoes = formatarParaSimulador(data);
                renderizarSimulador(questoes);
                carregouViaSupabase = true;
            }
        } catch (e) {
            console.warn("Supabase indisponível, recorrendo ao arquivo CSV local...", e);
        }
    }

    // Tentativa 2: Leitura direta do arquivo .csv local
    if (!carregouViaSupabase) {
        try {
            const resposta = await fetch('questoes-aplicacao-lei-penal.csv');
            if (!resposta.ok) throw new Error("Não foi possível carregar o arquivo CSV.");
            
            const textoCSV = await resposta.text();
            const dadosParseados = parsearCSV(textoCSV);
            const questoes = formatarParaSimulador(dadosParseados);

            if (typeof renderizarSimulador === 'function') {
                renderizarSimulador(questoes);
            } else {
                console.error("Função renderizarSimulador não foi encontrada em motor-simulador.js");
            }
        } catch (erro) {
            console.error("Erro ao carregar as questões do CSV:", erro);
        }
    }
}

// Inicia o carregamento
carregarQuestoes();