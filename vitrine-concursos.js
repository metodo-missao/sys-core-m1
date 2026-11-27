/* ==========================================================================
   VITRINE MODULAR POR CARREIRAS + SUPORTE E CONTATO (MÉTODO MISSÃO)
   Arquivo independente: gerencia categorias expansíveis (GM, PM, PC, PP),
   cards de concursos, blocos de simulados e rodapé sem abrir o index.html
   ========================================================================== */
(function () {
    const EMAIL_SUPORTE = "contato@metodomissao.com";

    const CATEGORIAS_VITRINE = [
        {
            id: "guardas-municipais",
            titulo: "CONCURSOS GUARDAS MUNICIPAIS",
            etiqueta: "4 concursos",
            abertaPorPadrao: true,
            concursos: [
                {
                    id: "gm-campinas",
                    titulo: "GM CAMPINAS (SP)",
                    status: "Pós-Edital",
                    classeStatus: "status-pos",
                    detalhesHtml: "Banca: <strong>Vunesp</strong> • Prova: <strong>21/03/2027</strong>",
                    textoAcao: "Acessar 1º Simulado Gratuito →",
                    liberado: true,
                    corBordaMenu: "var(--cor-ouro)",
                    tituloMenu: "1º Simulado Gratuito GM Campinas (Vunesp) | 4 Blocos",
                    fundo: "img/fundos/campinas.png",
                    altFundo: "Campinas - Lagoa do Taquaral",
                    classeFundo: "",
                    brasao: "img/brasoes/gm-campinas.png",
                    altBrasao: "Brasão Guarda Municipal de Campinas",
                    classeBrasao: "ajuste-circulo",
                    blocos: [
                        {
                            titulo: "Bloco 1: Língua Portuguesa (Q01 a Q12)",
                            arquivo: "simulado-gmc-bloco1-portugues.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 2: Matemática, Raciocínio Lógico e Leg. Municipal (Q13 a Q20)",
                            arquivo: "simulado1-gm-campinas-bloco2.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 3: Conhecimentos Específicos I (Q21 a Q35)",
                            arquivo: "simulado1-gm-campinas-bloco3.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 4: Conhecimentos Específicos II (Q36 a Q50)",
                            arquivo: "simulado1-gm-campinas-bloco4.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            separador: true,
                            titulo: "Série Pós-Edital Premium • Mais 5 Simulados Inéditos até a Prova (Padrão Vunesp)"
                        },
                        {
                            titulo: "2º Simulado Completo GM Campinas (50 Questões • Vunesp)",
                            premium: true
                        },
                        {
                            titulo: "3º Simulado Completo GM Campinas (50 Questões • Vunesp)",
                            premium: true
                        },
                        {
                            titulo: "4º Simulado Completo GM Campinas (50 Questões • Vunesp)",
                            premium: true
                        },
                        {
                            titulo: "5º Simulado Completo GM Campinas (50 Questões • Vunesp)",
                            premium: true
                        },
                        {
                            titulo: "6º Simulado Completo GM Campinas • Revisão Final (50 Questões)",
                            premium: true
                        }
                    ]
                },
                {
                    id: "gcm-joinville",
                    titulo: "GCM JOINVILLE (SC)",
                    status: "Pré-Edital",
                    classeStatus: "status-pre",
                    detalhesHtml: "Banca: <strong>Instituto AOCP</strong>",
                    textoAcao: "Acessar 1º Simulado Gratuito →",
                    liberado: true,
                    corBordaMenu: "var(--cor-sucesso)",
                    tituloMenu: "1º Simulado Gratuito GCM Joinville (Instituto AOCP) | 4 Blocos",
                    fundo: "img/fundos/joinville.jpg",
                    altFundo: "Joinville - Pórtico e Moinho",
                    classeFundo: "",
                    brasao: "img/brasoes/gcm-joinville.png",
                    altBrasao: "Brasão Guarda Civil Municipal de Joinville",
                    classeBrasao: "ajuste-circulo",
                    blocos: [
                        {
                            titulo: "Bloco 1: Língua Portuguesa (Q01 a Q10)",
                            arquivo: "simulado-gmj-bloco1-portugues.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 2: Raciocínio Lógico e Joinville/SC (Q11 a Q20)",
                            arquivo: "simulado-gmj-bloco2.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 3: Conhecimentos Específicos I (Q21 a Q35)",
                            arquivo: "simulado-gmj-bloco3.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 4: Conhecimentos Específicos II (Q36 a Q50)",
                            arquivo: "simulado-gmj-bloco4.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            separador: true,
                            titulo: "Série Pré-Edital Premium • Mais 5 Simulados Inéditos até a Prova (Padrão Instituto AOCP)"
                        },
                        {
                            titulo: "2º Simulado Completo GCM Joinville (50 Questões • Instituto AOCP)",
                            premium: true
                        },
                        {
                            titulo: "3º Simulado Completo GCM Joinville (50 Questões • Instituto AOCP)",
                            premium: true
                        },
                        {
                            titulo: "4º Simulado Completo GCM Joinville (50 Questões • Instituto AOCP)",
                            premium: true
                        },
                        {
                            titulo: "5º Simulado Completo GCM Joinville (50 Questões • Instituto AOCP)",
                            premium: true
                        },
                        {
                            titulo: "6º Simulado Completo GCM Joinville • Revisão Final (50 Questões)",
                            premium: true
                        }
                    ]
                },
                {
                    id: "gm-balneario-camboriu",
                    titulo: "GM BALNEÁRIO CAMBORIÚ (SC)",
                    status: "Pré-Edital",
                    classeStatus: "status-pre",
                    detalhesHtml: "Banca: <strong>FURB</strong>",
                    textoAcao: "Simulados em breve",
                    liberado: false,
                    fundo: "img/fundos/balneario-camboriu.png",
                    altFundo: "Balneário Camboriú - Praia Central",
                    classeFundo: "",
                    brasao: "img/brasoes/gm-balneario-camboriu.png",
                    altBrasao: "Brasão Guarda Municipal de Balneário Camboriú",
                    classeBrasao: "ajuste-bc",
                    blocos: []
                },
                {
                    id: "gcm-florianopolis",
                    titulo: "GCM FLORIANÓPOLIS (SC)",
                    status: "Pré-Edital",
                    classeStatus: "status-pre",
                    detalhesHtml: "Banca: <strong>A definir</strong>",
                    textoAcao: "Simulados em breve",
                    liberado: false,
                    fundo: "img/fundos/florianopolis.png",
                    altFundo: "Florianópolis - Ponte Hercílio Luz",
                    classeFundo: "fundo-floripa",
                    brasao: "img/brasoes/gcm-florianopolis.png",
                    altBrasao: "Brasão Guarda Civil Municipal de Florianópolis",
                    classeBrasao: "ajuste-circulo",
                    blocos: []
                }
            ]
        },
        {
            id: "policia-militar",
            titulo: "CONCURSOS POLÍCIA MILITAR",
            etiqueta: "1 concurso",
            abertaPorPadrao: false,
            concursos: [
                {
                    id: "pmpr-soldado",
                    titulo: "PMPR • SOLDADO (PR)",
                    status: "Pré-Edital",
                    classeStatus: "status-pre",
                    detalhesHtml: "<strong>1.000 vagas</strong> autorizadas • Banca: <strong>A definir</strong>",
                    textoAcao: "Simulados em breve",
                    liberado: false,
                    fundo: "img/fundos/parana.jpg",
                    fundoFallback: "img/fundos/parana.png",
                    altFundo: "Polícia Militar do Paraná",
                    classeFundo: "",
                    brasao: "img/brasoes/pmpr.png",
                    brasaoFallback: "img/brasoes/pmpr.svg",
                    altBrasao: "Brasão Oficial da Polícia Militar do Paraná",
                    classeBrasao: "ajuste-pmpr",
                    blocos: []
                }
            ]
        },
        {
            id: "policia-civil",
            titulo: "CONCURSOS POLÍCIA CIVIL",
            etiqueta: "1 concurso",
            abertaPorPadrao: false,
            concursos: [
                {
                    id: "pcmg-pre-edital",
                    titulo: "PCMG • CARREIRAS POLICIAIS (MG)",
                    status: "Pré-Edital",
                    classeStatus: "status-pre",
                    detalhesHtml: "Concurso autorizado • <strong>Mini Simulados em 2 Blocos</strong>",
                    textoAcao: "Acessar 1º Mini Simulado Gratuito →",
                    liberado: true,
                    corBordaMenu: "var(--cor-ouro)",
                    tituloMenu: "1º Mini Simulado Gratuito PCMG (Pré-Edital) | 2 Blocos • 40 Questões",
                    fundo: "img/fundos/pcmg.jpg",
                    altFundo: "Polícia Civil de Minas Gerais",
                    classeFundo: "",
                    brasao: "img/brasoes/pcmg.png",
                    altBrasao: "Brasão Oficial da Polícia Civil de Minas Gerais",
                    classeBrasao: "ajuste-pmpr",
                    blocos: [
                        {
                            titulo: "Bloco 1: Lei Orgânica da PCMG • LC 129/13 e Lei 5.406/69 (Q01 a Q20)",
                            arquivo: "simulado-pcmg-bloco1.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            titulo: "Bloco 2: Direito Penal e Direito Processual Penal (Q21 a Q40)",
                            arquivo: "simulado-pcmg-bloco2.html",
                            cor: "var(--cor-sucesso)"
                        },
                        {
                            separador: true,
                            titulo: "Série Pré-Edital Premium • Próximos Mini Simulados Inéditos PCMG"
                        },
                        {
                            titulo: "2º Mini Simulado PCMG: Direito Constitucional + Direito Administrativo (40 Questões)",
                            premium: true
                        },
                        {
                            titulo: "3º Mini Simulado PCMG: Criminologia + Direitos Humanos + Leg. Extravagante (40 Questões)",
                            premium: true
                        },
                        {
                            titulo: "4º Mini Simulado PCMG: Língua Portuguesa + Raciocínio Lógico/Informática (40 Questões)",
                            premium: true
                        }
                    ]
                }
            ]
        },
        {
            id: "policia-penal",
            titulo: "CONCURSOS POLÍCIA PENAL",
            etiqueta: "Em breve",
            emBreve: true,
            abertaPorPadrao: false,
            mensagemBreve: "Simulados inéditos direcionados à Polícia Penal com foco em Legislação Especial e Execução Penal chegam em breve.",
            concursos: []
        }
    ];

    /* ======================================================================
       1. MOTOR AUTOMÁTICO DA VITRINE EXPANSÍVEL POR CARREIRA
       ====================================================================== */
    try {
        const gridOriginal = document.querySelector(".vitrine-grid");
        const mainLinks = document.querySelector("main.links-container");

        if (gridOriginal && mainLinks) {
            if (!document.getElementById("mm-vitrine-categorias-css")) {
                const styleCat = document.createElement("style");
                styleCat.id = "mm-vitrine-categorias-css";
                styleCat.textContent =
                    "#mm-vitrine-categorias{width:100%;display:flex;flex-direction:column;gap:14px;margin-top:6px;}" +
                    ".mm-cat-bloco{width:100%;scroll-margin-top:18px;}" +
                    ".mm-cat-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;" +
                    "padding:14px 18px;border-radius:12px;cursor:pointer;text-align:left;" +
                    "background:linear-gradient(145deg,rgba(6,28,72,0.88) 0%,rgba(2,15,42,0.94) 100%);" +
                    "border:1px solid rgba(255,202,40,0.28);box-shadow:0 8px 20px rgba(0,0,0,0.3);" +
                    "transition:border-color .2s ease,background .2s ease,transform .15s ease;}" +
                    ".mm-cat-btn:hover{border-color:rgba(255,202,40,0.72);transform:translateY(-1px);}" +
                    ".mm-cat-btn.aberta{border-color:rgba(255,202,40,0.75);" +
                    "background:linear-gradient(145deg,rgba(9,36,90,0.94) 0%,rgba(3,19,54,0.98) 100%);}" +
                    ".mm-cat-esq{display:flex;align-items:center;gap:11px;min-width:0;}" +
                    ".mm-cat-barra{width:4px;height:22px;border-radius:3px;flex-shrink:0;background:#ffca28;}" +
                    ".mm-cat-titulo{color:#ffffff;font-size:15px;font-weight:900;letter-spacing:0.9px;" +
                    "text-transform:uppercase;line-height:1.25;}" +
                    ".mm-cat-dir{display:flex;align-items:center;gap:10px;flex-shrink:0;}" +
                    ".mm-cat-badge{font-size:11px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;" +
                    "padding:4px 9px;border-radius:999px;background:rgba(255,202,40,0.14);" +
                    "border:1px solid rgba(255,202,40,0.42);color:#ffca28;}" +
                    ".mm-cat-badge.breve{background:rgba(148,163,184,0.14);border-color:rgba(148,163,184,0.35);color:#cbd5e1;}" +
                    ".mm-cat-seta{color:#ffca28;font-size:13px;transition:transform .22s ease;}" +
                    ".mm-cat-btn.aberta .mm-cat-seta{transform:rotate(180deg);}" +
                    ".mm-cat-conteudo{display:none;padding-top:16px;padding-bottom:6px;}" +
                    ".mm-cat-conteudo.aberta{display:block;}" +
                    ".mm-cat-conteudo .vitrine-grid{margin-top:0 !important;}" +
                    ".mm-cat-vazio{padding:18px 20px;border-radius:12px;text-align:left;" +
                    "background:rgba(3,18,48,0.78);border:1px dashed rgba(255,202,40,0.35);" +
                    "color:#cbd5e1;font-size:13.5px;line-height:1.5;display:flex;align-items:center;gap:12px;}" +
                    ".mm-cat-vazio i{color:#ffca28;font-size:18px;flex-shrink:0;}" +
                    ".medalhao-brasao.medalhao-pmpr{overflow:visible !important;border-radius:0 !important;" +
                    "background:transparent !important;border:none !important;box-shadow:none !important;}" +
                    ".medalhao-brasao img.ajuste-pmpr{width:100% !important;height:100% !important;" +
                    "object-fit:contain !important;transform:none !important;" +
                    "filter:drop-shadow(0 4px 10px rgba(0,0,0,0.65));}" +
                    "@media(min-width:681px){.mm-cat-conteudo .vitrine-grid.mm-grid-unico{grid-template-columns:repeat(2,minmax(0,1fr)) !important;}}" +
                    "@media(max-width:600px){.mm-cat-btn{padding:12px 14px;}.mm-cat-titulo{font-size:13.2px;letter-spacing:0.6px;}" +
                    ".mm-cat-badge{font-size:10px;padding:3px 7px;}}";
                document.head.appendChild(styleCat);
            }

            ["menu-simulado-gmj", "menu-simulado-gmc"].forEach(function (idAntigo) {
                const elAntigo = document.getElementById(idAntigo);
                if (elAntigo) elAntigo.style.display = "none";
            });

            const paiGrid = gridOriginal.parentNode;
            if (paiGrid) {
                Array.from(paiGrid.children).forEach(function (filho) {
                    if (
                        filho !== gridOriginal &&
                        !filho.contains(gridOriginal) &&
                        /GUARDAS?\s+MUNICIPAIS/i.test(filho.textContent || "")
                    ) {
                        filho.style.display = "none";
                    }
                });
            }

            const slotAntigo = document.getElementById("mm-vitrine-submenus");
            if (slotAntigo) slotAntigo.remove();

            let containerCategorias = document.getElementById("mm-vitrine-categorias");
            if (!containerCategorias) {
                containerCategorias = document.createElement("div");
                containerCategorias.id = "mm-vitrine-categorias";
                paiGrid.insertBefore(containerCategorias, gridOriginal);
            }

            gridOriginal.style.display = "none";
            containerCategorias.innerHTML = "";

            function fecharTodosOsMenus() {
                document.querySelectorAll(".secao-topicos").forEach(function (sec) {
                    sec.style.display = "none";
                });
            }

            function alternarMenuConcurso(secId) {
                const alvo = document.getElementById(secId);
                if (!alvo) return;
                const jaAberto = alvo.style.display === "block";
                fecharTodosOsMenus();
                if (!jaAberto) {
                    alvo.style.display = "block";
                    alvo.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }
            }

            ["btn-comecar-gratis", "btn-gabarita"].forEach(function (btnId) {
                const b = document.getElementById(btnId);
                if (b) {
                    b.addEventListener("click", function () {
                        containerCategorias.querySelectorAll(".secao-topicos").forEach(function (s) {
                            s.style.display = "none";
                        });
                    });
                }
            });

            CATEGORIAS_VITRINE.forEach(function (cat) {
                const bloco = document.createElement("div");
                bloco.className = "mm-cat-bloco";
                bloco.id = "cat-bloco-" + cat.id;

                const btnCat = document.createElement("button");
                btnCat.type = "button";
                btnCat.className = cat.abertaPorPadrao ? "mm-cat-btn aberta" : "mm-cat-btn";
                btnCat.setAttribute("aria-expanded", cat.abertaPorPadrao ? "true" : "false");

                const classeBadge = cat.emBreve ? "mm-cat-badge breve" : "mm-cat-badge";
                btnCat.innerHTML =
                    '<span class="mm-cat-esq">' +
                        '<span class="mm-cat-barra"></span>' +
                        '<span class="mm-cat-titulo">' + cat.titulo + '</span>' +
                    '</span>' +
                    '<span class="mm-cat-dir">' +
                        '<span class="' + classeBadge + '">' + cat.etiqueta + '</span>' +
                        '<i class="fa-solid fa-chevron-down mm-cat-seta"></i>' +
                    '</span>';

                const conteudo = document.createElement("div");
                conteudo.className = cat.abertaPorPadrao ? "mm-cat-conteudo aberta" : "mm-cat-conteudo";

                if (Array.isArray(cat.concursos) && cat.concursos.length > 0) {
                    const gridCat = document.createElement("div");
                    gridCat.className = cat.concursos.length === 1 ? "vitrine-grid mm-grid-unico" : "vitrine-grid";

                    const slotMenusCat = document.createElement("div");
                    slotMenusCat.className = "mm-cat-submenus";
                    slotMenusCat.style.width = "100%";

                    cat.concursos.forEach(function (c) {
                        const card = document.createElement("a");
                        card.href = "javascript:void(0);";
                        card.className = c.liberado ? "card-concurso" : "card-concurso card-em-breve";
                        card.id = "card-vitrine-" + c.id;

                        const classeFundo = c.classeFundo ? "capa-fundo " + c.classeFundo : "capa-fundo";
                        const classeAcao = c.liberado ? "card-acao card-acao-liberado" : "card-acao card-acao-breve";
                        const iconeAcao = c.liberado ? "" : ' <i class="fa-regular fa-clock" style="margin-left: 4px;"></i>';
                        const classeMedalhao = c.classeBrasao === "ajuste-pmpr" ? "medalhao-brasao medalhao-pmpr" : "medalhao-brasao";
                        const onErrorFundo = c.fundoFallback
                            ? ' onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'' + c.fundoFallback + '\';}"'
                            : "";
                        const onErrorBrasao = c.brasaoFallback
                            ? ' onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'' + c.brasaoFallback + '\';}"'
                            : "";

                        card.innerHTML =
                            '<div class="card-capa">' +
                                '<img src="' + c.fundo + '" alt="' + c.altFundo + '" class="' + classeFundo + '"' + onErrorFundo + '>' +
                                '<div class="capa-overlay"></div>' +
                                '<div class="capa-conteudo">' +
                                    '<div class="' + classeMedalhao + '">' +
                                        '<img src="' + c.brasao + '" alt="' + c.altBrasao + '" class="' + (c.classeBrasao || "") + '"' + onErrorBrasao + '>' +
                                    '</div>' +
                                    '<span class="capa-marca">MÉTODO MISSÃO</span>' +
                                '</div>' +
                            '</div>' +
                            '<div class="card-info">' +
                                '<h3 class="card-titulo">' + c.titulo + '</h3>' +
                                '<span class="badge-status ' + c.classeStatus + '">' + c.status + '</span>' +
                                '<p class="card-detalhes">' + c.detalhesHtml + '</p>' +
                                '<span class="' + classeAcao + '">' + c.textoAcao + iconeAcao + '</span>' +
                            '</div>';

                        gridCat.appendChild(card);

                        if (c.liberado && Array.isArray(c.blocos) && c.blocos.length > 0) {
                            const secId = "menu-vitrine-" + c.id;
                            const corMenu = c.corBordaMenu || "var(--cor-ouro)";

                            const sec = document.createElement("section");
                            sec.id = secId;
                            sec.className = "secao-topicos";
                            sec.style.display = "none";
                            sec.style.marginTop = "20px";
                            sec.style.borderStyle = "dashed";
                            sec.style.borderColor = corMenu;

                            const h3 = document.createElement("h3");
                            h3.className = "titulo-secao";
                            h3.style.color = corMenu;
                            h3.style.fontSize = "13px";
                            h3.innerHTML = '<i class="fa-solid fa-bullseye fa-fw" style="margin-right: 6px;"></i>' + (c.tituloMenu || c.titulo);
                            sec.appendChild(h3);

                            const lista = document.createElement("div");
                            lista.className = "lista-aulas";

                            c.blocos.forEach(function (b) {
                                if (b.separador) {
                                    const divSep = document.createElement("div");
                                    divSep.style.cssText =
                                        "margin:14px 0 4px;padding-top:12px;border-top:1px dashed rgba(255,204,0,0.35);" +
                                        "font-size:11.5px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;" +
                                        "color:#ffcc00;text-align:left;";
                                    divSep.innerHTML = '<i class="fa-solid fa-crown fa-fw" style="margin-right: 6px;"></i>' + b.titulo;
                                    lista.appendChild(divSep);
                                    return;
                                }

                                const a = document.createElement("a");
                                a.className = "aula-item";

                                if (b.emBreve) {
                                    a.href = "javascript:void(0);";
                                    a.style.borderLeft = "4px solid var(--cor-ouro)";
                                    a.style.opacity = "0.65";
                                    a.style.cursor = "default";
                                    a.innerHTML =
                                        '<span><i class="fa-regular fa-clock fa-fw" style="margin-right: 8px; color: var(--cor-ouro);"></i>' + b.titulo + '</span>' +
                                        '<span class="seta-iniciar">EM BREVE</span>';
                                } else if (b.premium) {
                                    a.href = "acesso-premium.html";
                                    if (b.arquivo) a.setAttribute("data-destino-premium", b.arquivo);
                                    a.style.borderLeft = "4px solid #ffcc00";
                                    a.style.backgroundColor = "#041d4d";
                                    a.style.opacity = "0.85";
                                    a.innerHTML =
                                        '<span><i class="fa-solid fa-lock fa-fw" style="margin-right: 8px; color: #ffcc00;"></i>' + b.titulo + '</span>' +
                                        '<span class="seta-iniciar" style="color: #ffcc00;">VER PLANO PREMIUM <i class="fa-solid fa-crown" style="margin-left: 4px;"></i></span>';
                                } else {
                                    const corItem = b.cor || "var(--cor-sucesso)";
                                    a.href = b.arquivo || "javascript:void(0);";
                                    a.style.borderLeft = "4px solid " + corItem;
                                    a.innerHTML =
                                        '<span><i class="fa-solid fa-file-lines fa-fw" style="margin-right: 8px; color: ' + corItem + ';"></i>' + b.titulo + '</span>' +
                                        '<span class="seta-iniciar" style="color: ' + corItem + ';">INICIAR <i class="fa-solid fa-play" style="margin-left: 4px;"></i></span>';
                                }

                                lista.appendChild(a);
                            });

                            sec.appendChild(lista);
                            slotMenusCat.appendChild(sec);

                            card.addEventListener("click", function () {
                                alternarMenuConcurso(secId);
                            });
                        }
                    });

                    conteudo.appendChild(gridCat);
                    conteudo.appendChild(slotMenusCat);
                } else {
                    const aviso = document.createElement("div");
                    aviso.className = "mm-cat-vazio";
                    aviso.innerHTML =
                        '<i class="fa-regular fa-clock"></i>' +
                        '<span>' + (cat.mensagemBreve || "Novos simulados inéditos chegam em breve.") + '</span>';
                    conteudo.appendChild(aviso);
                }

                btnCat.addEventListener("click", function () {
                    const jaAberta = conteudo.classList.contains("aberta");

                    if (jaAberta) {
                        btnCat.classList.remove("aberta");
                        btnCat.setAttribute("aria-expanded", "false");
                        conteudo.classList.remove("aberta");
                        conteudo.querySelectorAll(".secao-topicos").forEach(function (sec) {
                            sec.style.display = "none";
                        });
                    } else {
                        btnCat.classList.add("aberta");
                        btnCat.setAttribute("aria-expanded", "true");
                        conteudo.classList.add("aberta");
                        setTimeout(function () {
                            bloco.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        }, 40);
                    }
                });

                bloco.appendChild(btnCat);
                bloco.appendChild(conteudo);
                containerCategorias.appendChild(bloco);
            });
        }
    } catch (errVitrine) {
        console.error("MM-VITRINE falhou (vitrine fixa segue normal):", errVitrine);
    }

    /* ======================================================================
       2. BLOCO DE SUPORTE E CONTATO (ACIMA DO RODAPÉ INSTITUCIONAL)
       ====================================================================== */
    try {
        const footer = document.querySelector("footer.footer-institucional");
        if (footer && !document.getElementById("mm-bloco-suporte")) {
            if (!document.getElementById("mm-suporte-css")) {
                const style = document.createElement("style");
                style.id = "mm-suporte-css";
                style.textContent =
                    ".mm-suporte-box{width:100%;max-width:820px;margin:34px auto 0;padding:18px 22px;border-radius:14px;" +
                    "background:linear-gradient(155deg,rgba(6,28,72,0.92) 0%,rgba(2,14,38,0.96) 100%);" +
                    "border:1px solid rgba(255,202,40,0.32);box-shadow:0 12px 28px rgba(0,0,0,0.38);" +
                    "display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;}" +
                    ".mm-suporte-info{display:flex;align-items:center;gap:13px;text-align:left;}" +
                    ".mm-suporte-icone{width:42px;height:42px;border-radius:11px;flex-shrink:0;display:flex;align-items:center;justify-content:center;" +
                    "background:rgba(255,202,40,0.12);border:1px solid rgba(255,202,40,0.4);color:#ffca28;font-size:17px;}" +
                    ".mm-suporte-titulo{font-size:12px;font-weight:900;letter-spacing:1.3px;text-transform:uppercase;color:#ffca28;}" +
                    ".mm-suporte-sub{font-size:13px;color:#cbd5e1;margin-top:3px;line-height:1.4;}" +
                    ".mm-suporte-acoes{display:flex;align-items:center;flex-wrap:wrap;gap:10px;}" +
                    ".mm-suporte-link{display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border-radius:10px;" +
                    "background:rgba(2,12,34,0.85);border:1px solid rgba(56,189,248,0.32);color:#ffffff;text-decoration:none;" +
                    "font-size:13px;font-weight:700;transition:border-color .2s ease,color .2s ease;}" +
                    ".mm-suporte-link:hover{border-color:#ffca28;color:#ffca28;}" +
                    ".mm-suporte-copiar{display:inline-flex;align-items:center;gap:7px;padding:10px 14px;border-radius:10px;cursor:pointer;" +
                    "background:linear-gradient(135deg,#ffe082 0%,#ffca28 55%,#ffa000 100%);border:none;color:#02112e;" +
                    "font-size:12px;font-weight:900;letter-spacing:0.4px;text-transform:uppercase;transition:transform .15s ease,filter .15s ease;}" +
                    ".mm-suporte-copiar:hover{transform:translateY(-1px);filter:brightness(1.06);}" +
                    ".mm-suporte-copiar.copiado{background:linear-gradient(135deg,#22c55e,#15803d);color:#ffffff;}" +
                    "@media(max-width:680px){.mm-suporte-box{flex-direction:column;align-items:stretch;padding:16px;}" +
                    ".mm-suporte-acoes{width:100%;}.mm-suporte-link,.mm-suporte-copiar{flex:1;justify-content:center;}}";
                document.head.appendChild(style);
            }

            const box = document.createElement("section");
            box.id = "mm-bloco-suporte";
            box.className = "mm-suporte-box";
            box.setAttribute("aria-label", "Suporte e Contato");

            box.innerHTML =
                '<div class="mm-suporte-info">' +
                    '<div class="mm-suporte-icone"><i class="fa-solid fa-headset"></i></div>' +
                    '<div>' +
                        '<div class="mm-suporte-titulo">Suporte e Contato</div>' +
                        '<div class="mm-suporte-sub">Dúvidas sobre simulados, acesso ou Plano Premium? Fale com a equipe:</div>' +
                    '</div>' +
                '</div>' +
                '<div class="mm-suporte-acoes">' +
                    '<a href="mailto:' + EMAIL_SUPORTE + '" class="mm-suporte-link">' +
                        '<i class="fa-regular fa-envelope"></i>' +
                        '<span>' + EMAIL_SUPORTE + '</span>' +
                    '</a>' +
                    '<button type="button" id="mm-btn-copiar-email" class="mm-suporte-copiar">' +
                        '<i class="fa-regular fa-copy"></i>' +
                        '<span>Copiar e-mail</span>' +
                    '</button>' +
                '</div>';

            footer.parentNode.insertBefore(box, footer);

            const btnCopiar = document.getElementById("mm-btn-copiar-email");
            if (btnCopiar) {
                btnCopiar.addEventListener("click", function () {
                    function marcarCopiado() {
                        btnCopiar.classList.add("copiado");
                        btnCopiar.innerHTML = '<i class="fa-solid fa-check"></i><span>Copiado!</span>';
                        setTimeout(function () {
                            btnCopiar.classList.remove("copiado");
                            btnCopiar.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copiar e-mail</span>';
                        }, 2200);
                    }

                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(EMAIL_SUPORTE).then(marcarCopiado).catch(function () {
                            window.prompt("Copie o e-mail de suporte:", EMAIL_SUPORTE);
                        });
                    } else {
                        window.prompt("Copie o e-mail de suporte:", EMAIL_SUPORTE);
                    }
                });
            }
        }
    } catch (errSuporte) {
        console.error("MM-SUPORTE falhou (rodapé segue normal):", errSuporte);
    }
})();
