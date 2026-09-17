// dados-legislacao-maria-da-penha-procedimentos.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('legislacao_maria_penha_procedimentos') // Nome da Tabela no Supabase
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Lei Maria da Penha (Art. 13 ao 17)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    renderizarSimulador(questoesFormatadas);
}
carregarQuestoes();