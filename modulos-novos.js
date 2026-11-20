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
            id: 'assinar-premium',
            titulo: '👑 Assinar Acesso Premium (R$ 49,90 · 1 mês + 1 mês bônus)',
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
   5. AJUSTES VISUAIS MODULARES (SEM TOCAR NO index.html BLINDADO)
   - Botão dourado "COMEÇAR GRÁTIS" -> "RESOLUÇÃO DE QUESTÕES / Acesso Liberado"
   - Botão verde do 1º Simulado GMJ -> duas linhas centralizadas com "(50 Questões Gratuitas)"
   - Botão "Assinar Acesso Premium" -> duas linhas centralizadas com "(R$ 49,90 · 1 mês + 1 mês de bônus)"
   - Oculta "Clique Aqui para Iniciar o Simulador Interativo" enquanto o cartão
     de visitante ("RESOLUÇÃO DE QUESTÕES / Acesso Liberado") estiver visível,
     evitando dois botões redundantes com o mesmo destino; volta automaticamente
     quando o aluno entra na conta.
   - Oculta o botão repetido "Assinar Acesso Premium" quando o aluno já está logado
     no Plano Gratuito (pois o cartão da Área do Aluno já exibe "DESBLOQUEAR VERSÃO PREMIUM")
   ========================================================================== */
(function () {
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

    function aplicarAjustesVisuais() {
        try {
            var botoes = document.querySelectorAll('button, a, [onclick], [role="button"]');
            var temDesbloquearVisivel = false;
            var temBtnVisitanteVisivel = false;
            var btnAssinarVitrine = null;
            var btnSimuladorVitrine = null;

            for (var i = 0; i < botoes.length; i++) {
                var el = botoes[i];
                // Ignora containers que envolvem outros botões/links
                if (el.querySelector && el.querySelector('button, a')) continue;

                var texto = (el.textContent || '').replace(/\s+/g, ' ').trim();
                if (!texto) continue;

                // 1. Botão dourado: COMEÇAR GRÁTIS -> RESOLUÇÃO DE QUESTÕES + Acesso Liberado
                if (el.dataset.mmBtnGratuito === '1' || /come[cç]ar\s+gr[aá]tis/i.test(texto)) {
                    if (el.dataset.mmBtnGratuito !== '1') {
                        var iconeRaio = el.querySelector('svg, img');
                        var iconeHtml = iconeRaio ? iconeRaio.outerHTML : '⚡';

                        el.innerHTML =
                            '<span style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;line-height:1.2;text-align:center;width:100%;">' +
                                '<span style="display:inline-flex;align-items:center;justify-content:center;gap:6px;">' + iconeHtml + '<span>RESOLUÇÃO DE QUESTÕES</span></span>' +
                                '<span style="font-size:0.78em;font-weight:700;opacity:0.86;letter-spacing:0.4px;text-transform:none;">Acesso Liberado</span>' +
                            '</span>';
                        el.dataset.mmBtnGratuito = '1';
                    }
                    if (estaVisivel(el)) {
                        temBtnVisitanteVisivel = true;
                    }
                    continue;
                }

                // 2. Botão verde: 1º Simulado Guarda Municipal de Joinville + (50 Questões Gratuitas)
                if (
                    el.dataset.mmBtnSimulado !== '1' &&
                    /1[º°]?\s*simulado\s+guarda\s+municipal\s+de\s+joinville/i.test(texto) &&
                    /50\s*quest/i.test(texto)
                ) {
                    var iconeEscudo = el.querySelector('svg, img');
                    var escudoHtml = iconeEscudo ? iconeEscudo.outerHTML + ' ' : '🛡️ ';

                    el.innerHTML =
                        '<span style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;line-height:1.25;text-align:center;width:100%;">' +
                            '<span>' + escudoHtml + '1º Simulado Guarda Municipal de Joinville</span>' +
                            '<span style="font-size:0.88em;font-weight:600;opacity:0.92;">(50 Questões Gratuitas)</span>' +
                        '</span>';
                    el.dataset.mmBtnSimulado = '1';
                    continue;
                }

                // 3. Localiza o botão "Clique Aqui para Iniciar o Simulador Interativo"
                if (/iniciar\s+o\s+simulador\s+interativo/i.test(texto)) {
                    btnSimuladorVitrine = el;
                    continue;
                }

                // 4. Detecta se o cartão da Área do Aluno já mostra "DESBLOQUEAR VERSÃO PREMIUM" (conta gratuita logada)
                if (/desbloquear\s+vers[aã]o\s+premium/i.test(texto) && estaVisivel(el)) {
                    temDesbloquearVisivel = true;
                }

                // 5. Localiza e formata em duas linhas o botão de vitrine "Assinar Acesso Premium"
                if (/assinar\s+acesso\s+premium/i.test(texto)) {
                    btnAssinarVitrine = el;
                    if (el.dataset.mmBtnAssinar !== '1') {
                        el.innerHTML =
                            '<span style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;line-height:1.25;text-align:center;width:100%;">' +
                                '<span>👑 Assinar Acesso Premium</span>' +
                                '<span style="font-size:0.88em;font-weight:600;opacity:0.92;">(R$ 49,90 · 1 mês + 1 mês de bônus)</span>' +
                            '</span>';
                        el.dataset.mmBtnAssinar = '1';
                    }
                }
            }

            // Oculta "Clique Aqui para Iniciar o Simulador Interativo" para visitantes
            // (enquanto o botão "RESOLUÇÃO DE QUESTÕES / Acesso Liberado" estiver visível)
            if (btnSimuladorVitrine) {
                if (temBtnVisitanteVisivel) {
                    if (btnSimuladorVitrine.style.display !== 'none') {
                        btnSimuladorVitrine.style.setProperty('display', 'none', 'important');
                        btnSimuladorVitrine.dataset.mmOcultoVisitante = '1';
                    }
                } else if (btnSimuladorVitrine.dataset.mmOcultoVisitante === '1') {
                    btnSimuladorVitrine.style.removeProperty('display');
                    delete btnSimuladorVitrine.dataset.mmOcultoVisitante;
                }
            }

            // Oculta o botão repetido "Assinar Acesso Premium" apenas para quem já está logado no plano gratuito
            if (btnAssinarVitrine) {
                if (temDesbloquearVisivel) {
                    if (btnAssinarVitrine.style.display !== 'none') {
                        btnAssinarVitrine.style.setProperty('display', 'none', 'important');
                        btnAssinarVitrine.dataset.mmOcultoGratuito = '1';
                    }
                } else if (btnAssinarVitrine.dataset.mmOcultoGratuito === '1') {
                    btnAssinarVitrine.style.removeProperty('display');
                    delete btnAssinarVitrine.dataset.mmOcultoGratuito;
                }
            }
        } catch (err) {
            console.warn('Aviso nos ajustes visuais de modulos-novos.js:', err);
        }
    }

    function iniciarObservador() {
        aplicarAjustesVisuais();
        setTimeout(aplicarAjustesVisuais, 300);
        setTimeout(aplicarAjustesVisuais, 1000);
        setTimeout(aplicarAjustesVisuais, 2500);

        if (typeof MutationObserver !== 'undefined' && document.body) {
            var agendado = false;
            var observer = new MutationObserver(function () {
                if (agendado) return;
                agendado = true;
                setTimeout(function () {
                    agendado = false;
                    aplicarAjustesVisuais();
                }, 60);
            });
            observer.observe(document.body, {
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
