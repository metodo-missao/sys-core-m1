// Conexão direta com o cofre do Supabase
async function carregarQuestoes() {
    // Busca os dados exclusivamente da tabela desta aula e ordena pelo número
    const { data, error } = await supabaseClient
        .from('questoes_imputabilidade')
        .select('*')
        .order('numero_da_questao', { ascending: true });

    if (error) {
        console.error("Erro ao buscar questões:", error);
        return;
    }

    if (data && data.length > 0) {
        // Formata os dados do Supabase para o padrão que o seu HTML exige
        const questoesFormatadas = data.map(q => ({
            titulo: `Questão ${q.numero_da_questao.toString().padStart(2, '0')} (Inédita/Carreiras Policiais - 2026) - Direito Penal - Imputabilidade`,
            enunciado: q.enunciado,
            alternativas: [
                q.alternativa_a,
                q.alternativa_b,
                q.alternativa_c,
                q.alternativa_d,
                q.alternativa_e
            ],
            // Converte a letra do gabarito (A, B, C...) no número da opção (0, 1, 2...)
            correta: q.gabarito.toUpperCase() === 'A' ? 0 :
                q.gabarito.toUpperCase() === 'B' ? 1 :
                    q.gabarito.toUpperCase() === 'C' ? 2 :
                        q.gabarito.toUpperCase() === 'D' ? 3 : 4,
            letraGabarito: q.gabarito,
            explicacao: q.explicacao
        }));

        // Envia as questões para a tela (o contador do HTML fará a leitura da quantidade automaticamente)
        renderizarSimulador(questoesFormatadas);
    }
}

// Dispara a função assim que a página é acessada
carregarQuestoes();