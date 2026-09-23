// dados-estatuto-pcd-acesso-justica-crimes.js
async function carregarQuestoes() {
    // Puxa as questões da tabela específica no Supabase
    const { data, error } = await supabaseClient
        .from('estatuto_pcd_acesso_justica_crimes') 
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - EPD: Acesso à Justiça e Crimes (Arts. 79 ao 91)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    
    // Chama o motor renderizador central
    renderizarSimulador(questoesFormatadas);
}

// Inicializa a carga de questões
carregarQuestoes();