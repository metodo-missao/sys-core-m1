// dados-concurso-de-pessoas.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('questoes_concurso_de_pessoas') // Tabela correta no Supabase
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { console.error("Erro:", error); return; }

    const questoesFormatadas = data.map(q => ({
        // CORRIGIDO AQUI: Alterado de "Aplicação da Lei Penal" para "Concurso de Pessoas"
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Penal - Concurso de Pessoas`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    renderizarSimulador(questoesFormatadas);
}
carregarQuestoes();