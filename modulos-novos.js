/* ==========================================================================
   MÉTODO MISSÃO — GAVETA MODULAR (modulos-novos.js)
   - Roda de forma 100% isolada sem mexer nos scripts blindados do index.html
   ========================================================================== */

window.MM_MODULOS = {

    /* ----------------------------------------------------------------------
       1. CARDS DE APOIO (MEU DESEMPENHO + ASSINAR PREMIUM LADO A LADO)
       ---------------------------------------------------------------------- */
    botoesVitrine: [
        {
            id: 'meu-desempenho',
            titulo: 'Meu Desempenho',
            href: 'meu-desempenho.html',
            posicao: 'base',
            cor: '#00e5ff',
            corTexto: '#ffffff',
            brilho: '0 10px 26px rgba(0, 229, 255, 0.12)',
            ocultarParaPremium: false
        },
        {
            id: 'assinar-premium',
            titulo: 'Assinar Acesso Premium',
            href: 'acesso-premium.html',
            posicao: 'base',
            cor: '#ffca28',
            corTexto: '#ffca28',
            brilho: '0 10px 28px rgba(255, 202, 40, 0.16)',
            ocultarParaPremium: true
        }
    ],

    /* ----------------------------------------------------------------------
       2. NOVAS MATÉRIAS COMPLETAS (entram dentro de "Escolha a Matéria")
       ---------------------------------------------------------------------- */
    novasMaterias: [],

    /* ----------------------------------------------------------------------
       3. NOVAS AULAS EM MATÉRIAS QUE JÁ EXISTEM NO INDEX
       ---------------------------------------------------------------------- */
    novasAulas: [],

    /* ----------------------------------------------------------------------
       4. LIBERAR AULAS QUE HOJE ESTÃO COMO "EM BREVE" NO INDEX
       ---------------------------------------------------------------------- */
    liberarEmBreve: {}

};

/* ==========================================================================
   5. ORGANIZAÇÃO MODULAR DA INTERFACE + ÍCONES SVG + SINCRONIZAÇÃO DE LOGIN
   ========================================================================== */
(function () {
    var SVG_GRAFICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>';
    var SVG_ESTRELA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    var SVG_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
    var SVG_SETA = '<svg class="cam-seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

    function estaVisivel(el) {
        if (!el) return false;
        var atual = el;
        while (atual && atual !== document.body && atual.nodeType === 1) {
            var estilo = window.getComputedStyle(atual);
            if (estilo.display === 'none' || estilo.visibility === 'hidden' || estilo.opacity === '0') {
                return false;
            }
            atual = atual.parentElement;
        }
        var rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
    }

    function transformarCardModerno(linkEl, titulo, subtitulo, cor, iconeSvg) {
        if (!linkEl || linkEl.dataset.mmCard === '1') return;
        linkEl.classList.remove('link-item');
        linkEl.classList.add('card-acao-moderno');
        linkEl.style.borderColor = cor;

        linkEl.innerHTML =
            '<span class="cam-icone" style="color:' + cor + ';border-color:' + cor + ';">' + iconeSvg + '</span>' +
            '<span class="cam-texto">' +
                '<span class="cam-titulo" style="color:' + (linkEl.style.color || '#ffffff') + ';">' + titulo + '</span>' +
                '<span class="cam-subtitulo">' + subtitulo + '</span>' +
            '</span>' +
            SVG_SETA;

        linkEl.dataset.mmCard = '1';
    }

    function organizarBlocos() {
        var vitrine = document.querySelector('.secao-vitrine');
        var menuGmj = document.getElementById('menu-simulado-gmj');
        var slotBase = document.getElementById('slot-vitrine-base');

        // 1. Move os 4 blocos de Joinville para abrir logo abaixo da vitrine de Guardas Municipais
        if (vitrine && menuGmj && menuGmj.parentElement !== vitrine) {
            vitrine.appendChild(menuGmj);
        }

        // 2. Move o slot de cards (Meu Desempenho + Assinar Premium) para baixo da vitrine
        if (vitrine && slotBase) {
            slotBase.classList.add('mm-cards-base');
            if (slotBase.previousElementSibling !== vitrine) {
                vitrine.insertAdjacentElement('afterend', slotBase);
            }

            var cardDesempenho = slotBase.querySelector('a[href="meu-desempenho.html"]');
            transformarCardModerno(
                cardDesempenho,
                'Meu Desempenho',
                'Acompanhe seus acertos, erros e evolução por aula',
                '#00e5ff',
                SVG_GRAFICO
            );

            var cardPremium = slotBase.querySelector('a[href="acesso-premium.html"]');
            transformarCardModerno(
                cardPremium,
                'Assinar Acesso Premium',
                'R$ 49,90 · 1 mês + 1 mês de bônus (liberação automática)',
                '#ffca28',
                SVG_ESTRELA
            );
        }

        // 3. Troca o emoji do botão do Simulador (exibido quando o aluno faz login) por ícone SVG
        var btnSimulador = document.getElementById('btn-gabarita');
        if (btnSimulador && btnSimulador.dataset.mmSvg !== '1') {
            btnSimulador.innerHTML = SVG_CHECK + '<span>Iniciar Simulador por Matérias</span>';
            btnSimulador.dataset.mmSvg = '1';
        }
    }

    function sincronizarInterface() {
        try {
            organizarBlocos();

            var area = document.getElementById('area-aluno');
            var btnSimulador = document.getElementById('btn-gabarita');
            var btnComecarGratis = area ? area.querySelector('#btn-comecar-gratis') : null;
            var temVisitanteVisivel = !!(btnComecarGratis && estaVisivel(btnComecarGratis));

            // Visitante vê "RESOLUÇÃO DE QUESTÕES"; logado vê "Iniciar Simulador por Matérias"
            if (btnSimulador) {
                btnSimulador.style.display = temVisitanteVisivel ? 'none' : '';
            }

            // Detecta quando o MM-LOGIN blindado trocou a Área do Aluno para o estado logado
            var estaLogado = !!(area && area.querySelector('.aa-topo'));
            if (estaLogado) {
                area.classList.add('area-aluno-logado');

                // Atualiza o botão "Entrar" da barra superior para "Sair"
                var tbLogin = document.getElementById('topbar-login');
                if (tbLogin && tbLogin.dataset.mmLogado !== '1') {
                    tbLogin.href = 'sair.html';
                    var spLogin = tbLogin.querySelector('span');
                    if (spLogin) spLogin.textContent = 'Sair';
                    tbLogin.dataset.mmLogado = '1';
                }

                // Remove emojis caseiros do estado logado gerado pelo script blindado
                var badge = area.querySelector('.aa-badge');
                if (badge && badge.textContent.indexOf('\uD83D\uDC51') !== -1) {
                    badge.textContent = badge.textContent.replace('\uD83D\uDC51', '').trim();
                }
                var sub = area.querySelector('.aa-sub');
                if (sub && sub.textContent.indexOf('\uD83D\uDC47') !== -1) {
                    sub.textContent = sub.textContent.replace('\uD83D\uDC47', '').trim();
                }
                var btnDesb = area.querySelector('a[href="acesso-premium.html"]');
                if (btnDesb && btnDesb.textContent.indexOf('\uD83D\uDC51') !== -1) {
                    btnDesb.textContent = btnDesb.textContent.replace('\uD83D\uDC51', '').trim();
                }
            }

            // Oculta card repetido "Assinar Acesso Premium" quando o aluno logado no plano gratuito já vê o botão na Área do Aluno
            var slotBase = document.getElementById('slot-vitrine-base');
            var cardPremium = slotBase ? slotBase.querySelector('a[href="acesso-premium.html"]') : null;
            if (cardPremium && String(window.MM_PLANO || '').toLowerCase() !== 'premium') {
                var temDesbloquear = !!(area && /desbloquear\s+vers[aã]o\s+premium/i.test(area.textContent || ''));
                if (temDesbloquear) {
                    cardPremium.style.display = 'none';
                    cardPremium.dataset.mmOcultoGratuito = '1';
                } else if (cardPremium.dataset.mmOcultoGratuito === '1') {
                    cardPremium.style.display = '';
                    delete cardPremium.dataset.mmOcultoGratuito;
                }
            }
        } catch (err) {
            console.warn('MM-MODULOS | aviso na sincronização:', err);
        }
    }

    function iniciarObservador() {
        sincronizarInterface();
        setTimeout(sincronizarInterface, 300);
        setTimeout(sincronizarInterface, 1200);

        var areaAluno = document.getElementById('area-aluno');
        if (areaAluno && typeof MutationObserver !== 'undefined') {
            var observer = new MutationObserver(sincronizarInterface);
            observer.observe(areaAluno, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarObservador);
    } else {
        iniciarObservador();
    }
})();
