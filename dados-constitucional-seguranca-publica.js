// dados-constitucional-seguranca-publica.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('constitucional_seguranca_publica') // Nome da Tabela no Supabase
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { console.error("Erro:", error); return; }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Constitucional - Segurança Pública (Art. 144)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    renderizarSimulador(questoesFormatadas);
}
carregarQuestoes();