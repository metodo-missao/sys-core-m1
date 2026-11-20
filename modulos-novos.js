/* ==========================================================================
   MÉTODO MISSÃO — GAVETA MODULAR (modulos-novos.js)
   --------------------------------------------------------------------------
   REGRA DE OURO:
   - Tudo o que for NOVO na plataforma entra SOMENTE neste arquivo.
   - O index.html principal fica CONGELADO e BLINDADO.
   - Se este arquivo tiver qualquer erro, o site principal continua 100% no ar.
   ========================================================================== */

window.MM_MODULOS = {

    /* ----------------------------------------------------------------------
       1. BOTÕES ISOLADOS NA PÁGINA INICIAL (VITRINE)
       - Pode ser um link direto (ex: Assinar Premium)
       - Ou um novo Simulado com vários blocos (adicionando "itens: [...]")
       - posicao: "base" (abaixo do Simulado GMJ) ou "topo" (acima do Simulador)
       - ocultarParaPremium: true -> some automaticamente para quem já pagou
       ---------------------------------------------------------------------- */
    botoesVitrine: [
        {
            id: 'meu-desempenho',
            titulo: '📊 Meu Desempenho (Acertos e Erros)',
            href: 'meu-desempenho.html',
            posicao: 'topo',
            cor: '#00e5ff',
            fundo: '#031842',
            corTexto: '#ffffff',
            brilho: '0 0 15px rgba(0, 229, 255, 0.18)',
            ocultarParaPremium: false
        },
        {
            id: 'assinar-premium',
            titulo: '👑 Assinar Acesso Premium (R$ 49,90 · 1 mês + 1 mês de bônus)',
            href: 'acesso-premium.html',
            posicao: 'base',
            cor: '#ffca28',
            fundo: '#041d4d',
            corTexto: '#ffca28',
            brilho: '0 0 18px rgba(255, 202, 40, 0.25)',
            ocultarParaPremium: true
        }

        /* EXEMPLO PARA FUTURO SIMULADO (basta eu gerar e colar aqui):
        ,{
            id: 'simulado-pmsc-1',
            titulo: '🚓 1º Simulado PMSC (Grátis)',
            tituloMenu: '🎯 1º Simulado PMSC — Blocos',
            posicao: 'base',
            cor: '#00e5ff',
            itens: [
                { titulo: 'Bloco 1: Português', arquivo: 'simulado-pmsc-bloco1.html', premium: false },
                { titulo: 'Bloco 2: Direito Penal', arquivo: 'simulado-pmsc-bloco2.html', premium: true }
            ]
        }
        */
    ],

    /* ----------------------------------------------------------------------
       2. NOVAS MATÉRIAS COMPLETAS (entram dentro de "Escolha a Matéria")
       ---------------------------------------------------------------------- */
    novasMaterias: [
        /* EXEMPLO PARA FUTURA MATÉRIA:
        {
            id: 'direito-administrativo',
            titulo: '🏛️ DIREITO ADMINISTRATIVO',
            tituloMenu: '👑 Aulas de Direito Administrativo',
            cor: '#ffcc00',
            fundo: '#041d4d',
            badge: 'VER AULAS 👇',
            aulas: [
                { titulo: 'Princípios da Administração (Aula Grátis)', arquivo: 'adm-principios.html', premium: false },
                { titulo: 'Poderes Administrativos', arquivo: 'adm-poderes.html', premium: true }
            ]
        }
        */
    ],

    /* ----------------------------------------------------------------------
       3. NOVAS AULAS EM MATÉRIAS QUE JÁ EXISTEM NO INDEX
       IDs disponíveis:
       - menu-aulas-penal
       - menu-aulas-constitucional
       - menu-aulas-informatica
       - menu-aulas-dudh
       - menu-aulas-maria-penha
       - menu-aulas-convencao
       - menu-aulas-estatuto-pcd
       - menu-aulas-igualdade-racial
       ---------------------------------------------------------------------- */
    novasAulas: [
        /* EXEMPLO PARA NOVA AULA EM MATÉRIA EXISTENTE:
        {
            menuId: 'menu-aulas-penal',
            titulo: 'Questões: Crimes Contra a Administração Pública',
            arquivo: 'direito-penal-crimes-administracao.html',
            premium: true
        }
        */
    ],

    /* ----------------------------------------------------------------------
       4. LIBERAR AULAS QUE HOJE ESTÃO COMO "EM BREVE" NO INDEX
       Quando você criar o HTML de uma aula antiga que ainda está sem link,
       basta colocar o nome exato dela e o arquivo aqui.
       ---------------------------------------------------------------------- */
    liberarEmBreve: {
        /* EXEMPLO:
        'Poder Judiciário (Art. 92 ao 100, 125 e 126)': 'constitucional-poder-judiciario.html'
        */
    }

};

/* ==========================================================================
   5. AJUSTE ISOLADO DE INTERFACE (SEM MEXER NO index.html)
   - Visitante (deslogado): esconde "#btn-gabarita" para evitar duplicidade
     com o botão "⚡ COMEÇAR GRÁTIS" dentro da Área do Aluno.
   - Aluno logado (gratuito ou premium): assim que o MM-LOGIN atualiza a
     Área do Aluno e remove o botão "COMEÇAR GRÁTIS", o botão do Simulador
     Interativo reaparece automaticamente.
   ========================================================================== */
(function () {
    try {
        function sincronizarBotaoSimulador() {
            var area = document.getElementById('area-aluno');
            var btnSimulador = document.getElementById('btn-gabarita');
            if (!btnSimulador) return;

            var areaVisivel = area && window.getComputedStyle(area).display !== 'none';
            var temComecarGratis = areaVisivel && !!area.querySelector('#btn-comecar-gratis');

            btnSimulador.style.display = temComecarGratis ? 'none' : '';
        }

        function iniciarObservador() {
            sincronizarBotaoSimulador();

            var areaAluno = document.getElementById('area-aluno');
            if (areaAluno && typeof MutationObserver !== 'undefined') {
                var observador = new MutationObserver(sincronizarBotaoSimulador);
                observador.observe(areaAluno, {
                    childList: true,
                    attributes: true,
                    attributeFilter: ['style']
                });
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', iniciarObservador);
        } else {
            iniciarObservador();
        }
    } catch (err) {
        console.error('MM-MODULOS | erro ao sincronizar botão do simulador:', err);
    }
})();