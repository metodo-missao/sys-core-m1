// dados-direito-penal-crimes-contra-pessoa.js
async function carregarQuestoes() {
    const { data, error } = await supabaseClient
        .from('direito_penal_crimes_contra_pessoa') // Tabela no Supabase
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) { 
        console.error("Erro ao carregar questões do Supabase:", error); 
        return; 
    }

    const questoesFormatadas = data.map(q => ({
        titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Penal (Arts. 121 a 154-B)`,
        enunciado: q.enunciado,
        alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
        correta: ['A', 'B', 'C', 'D', 'E'].indexOf(q.gabarito.toUpperCase()),
        letraGabarito: q.gabarito,
        explicacao: q.explicacao
    }));
    
    // Chama o motor renderizador (blindado em motor-simulador.js)
    renderizarSimulador(questoesFormatadas);
}

// Inicializa a carga de questões
carregarQuestoes();