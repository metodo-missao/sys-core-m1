// dados-acao-penal.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('da_acao_penal') // Nome da Tabela
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { console.error("Erro:", error); return; }

    const questoesFormatadas = data.map(q => ({
        // AQUI ESTÁ O AJUSTE: O texto fixo ajustado para a aula correta
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Penal - Da Ação Penal`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    renderizarSimulador(questoesFormatadas);
}
carregarQuestoes();