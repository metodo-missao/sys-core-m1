/**
 * Módulo de Integração Supabase - Lei Maria da Penha (Art. 13 ao 17)
 * Tabela Supabase: legislacao_maria_penha_procedimentos
 */

async function carregarQuestoes() {
    if (typeof supabaseClient === 'undefined') {
        console.error("Erro: supabaseClient não foi inicializado corretamente.");
        return;
    }

    const { data, error } = await supabaseClient
        .from('legislacao_maria_penha_procedimentos')
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    if (!data || data.length === 0) {
        console.warn("Nenhuma questão encontrada na tabela 'legislacao_maria_penha_procedimentos'.");
        return;
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita / Carreiras Policiais - 2026) - Lei Maria da Penha (Art. 13 ao 17)`,
        enunciado: q.enunciado,
        alternativas: [
            q.alternativa_a, 
            q.alternativa_b, 
            q.alternativa_c, 
            q.alternativa_d, 
            q.alternativa_e
        ],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito.toUpperCase(),
        explicacao: q.explicacao
    }));

    if (typeof renderizarSimulador === 'function') {
        renderizarSimulador(questoesFormatadas);
    } else {
        console.error("Função renderizarSimulador não encontrada no motor do simulador.");
    }
}

document.addEventListener('DOMContentLoaded', carregarQuestoes);