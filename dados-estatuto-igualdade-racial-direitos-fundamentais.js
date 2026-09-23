// dados-estatuto-igualdade-racial-direitos-fundamentais.js
async function carregarQuestoes() {
    // Puxa as questões da tabela específica no Supabase
    const { data, error } = await supabaseClient
        .from('estatuto_igualdade_racial_direitos_fundamentais') 
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Igualdade Racial: Direitos Fundamentais (Arts. 11 ao 32)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    
    // Chama o motor renderizador central (presumindo que o motor-simulador.js exponha essa função)
    renderizarSimulador(questoesFormatadas);
}

// Inicializa a carga de questões
carregarQuestoes();