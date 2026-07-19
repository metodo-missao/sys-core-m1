// Configuração do Supabase
const supabaseUrl = 'https://kulaumnlntcepiikqpts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1bGF1bW5sbnRjZXBpaWtxcHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNDU2NDMsImV4cCI6MjA5OTkyMTY0M30.GFPptPiuy1TEao-_n_GQVlfvX7R4gDwTaY8h1ZxU76s';

// MUDANÇA AQUI: criamos uma variável com nome diferente
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Busca e Renderização
async function carregarEIniciar() {
    try {
        // MUDANÇA AQUI: usamos o nome novo
        const { data, error } = await supabaseClient
            .from('questoes_acao_penal')
            .select('*');

        if (error) throw error;

        // Tradutor
        const mapaGabarito = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4 };

        const meusSimulados = data.map((q) => {
            const letra = String(q.gabarito).trim().toUpperCase();
            const indiceCorreto = mapaGabarito[letra] !== undefined ? mapaGabarito[letra] : 0;

            return {
                titulo: `Questão ${q.numero_da_questao} - Direito Penal`,
                enunciado: q.enunciado,
                alternativas: [q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e],
                correta: indiceCorreto,
                letraGabarito: letra,
                explicacao: q.explicacao
            };
        });

        renderizarSimulador(meusSimulados);

    } catch (err) {
        console.error("Erro ao carregar do Supabase:", err);
    }
}

// Inicia
carregarEIniciar();