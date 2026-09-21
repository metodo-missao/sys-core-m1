// dados-dudh-direitos-sociais.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('dudh_direitos_sociais_culturais') // Tabela exclusiva deste assunto
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - DUDH (Arts. 22 ao 27)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    
    // Chama o motor renderizador (já blindado em motor-simulador.js)
    renderizarSimulador(questoesFormatadas);
}

// Inicializa a carga de questões
carregarQuestoes();