/* ==========================================================================
   VITRINE MODULAR POR CARREIRAS + MAPEAMENTO ANALÍTICO + SUPORTE (MÉTODO MISSÃO)
   Arquivo independente: gerencia categorias expansíveis (GM, PM, PC, PP),
   cards de concursos, carrossel de mapeamento do edital, blocos de simulados
   e rodapé sem precisar alterar o index.html
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
                    mapeamentoAnalitico: {
                        titulo: "Raio-X Analítico do Edital PCMG (Padrão FGV)",
                        subtitulo: "Veja o mapeamento das 12 disciplinas e em qual simulado cada conteúdo é treinado",
                        rodape: "Base analítica: Edital nº 4/2024 (banca FGV, Investigador de Polícia I, 70 questões objetivas).",
                        materias: [
                            {
                                bloco: "basicas",
                                modulo: "Módulo I • Básicas",
                                disciplina: "Língua Portuguesa",
                                peso: "10 questões • 14,3% da prova",
                                topicos: "Interpretação e compreensão de textos, coesão e coerência, Redação Oficial (pronomes de tratamento, ofício, memorando, relatório e parecer), semântica, pontuação e sintaxe.",
                                simulado: "4º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "basicas",
                                modulo: "Módulo I • Básicas",
                                disciplina: "Raciocínio Lógico-Matemático",
                                peso: "06 questões • 8,6% da prova",
                                topicos: "Proposições, conectivos e equivalências lógicas, conjuntos, porcentagem e juros, proporcionalidade, contagem e probabilidade, geometria básica, estatística (média, moda, mediana e desvio padrão) e plano cartesiano.",
                                simulado: "4º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "basicas",
                                modulo: "Módulo I • Básicas",
                                disciplina: "Informática Básica",
                                peso: "08 questões • 11,4% da prova",
                                topicos: "Windows 10 e Linux, redes TCP/IP (IPv4/IPv6, DNS, DHCP, switches e SNMP), Chrome, Outlook, Microsoft Office 2016 e LibreOffice 7.1.6, segurança digital e LGPD, criptografia PGP, ICP-Brasil e software livre (BSD e GPL).",
                                simulado: "4º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "basicas",
                                modulo: "Módulo I • Básicas",
                                disciplina: "Lei Orgânica da PCMG",
                                peso: "06 questões • 8,6% da prova",
                                topicos: "Lei Estadual nº 5.406/1969 (Livro V, Título XVII: Regime Disciplinar completo) e LC Estadual nº 129/2013 (estrutura orgânica, prerrogativas, direitos, remoção, licenças, aposentadoria, carreiras, estágio probatório e Anexos I a III).",
                                simulado: "Liberado agora • 1º Mini Simulado • Bloco 1 (Q01 a Q20)",
                                arquivo: "simulado-pcmg-bloco1.html",
                                liberado: true
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Direito Administrativo",
                                peso: "06 questões • 8,6% da prova",
                                topicos: "Princípios da Administração Pública, Administração direta e indireta, agentes públicos, Lei nº 8.429/1992 (Improbidade Administrativa), poderes administrativos, atos (requisitos, atributos, revogação e anulação), serviços públicos e responsabilidade civil do Estado.",
                                simulado: "2º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Direito Constitucional",
                                peso: "06 questões • 8,6% da prova",
                                topicos: "Princípios fundamentais, direitos e garantias fundamentais (individuais, coletivos e sociais), organização do Estado, funções essenciais à Justiça e Defesa do Estado e das Instituições Democráticas.",
                                simulado: "2º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Direito Penal",
                                peso: "05 questões • 7,1% da prova",
                                topicos: "Princípios penais constitucionais, tempo e lugar do crime, contagem de prazo, fato típico, erro, ilicitude, culpabilidade, concurso de pessoas e de crimes, penas, extinção da punibilidade e crimes em espécie (pessoa, patrimônio, dignidade sexual e Administração Pública).",
                                simulado: "Liberado agora • 1º Mini Simulado • Bloco 2 (Q21 a Q30)",
                                arquivo: "simulado-pcmg-bloco2.html",
                                liberado: true
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Direito Processual Penal",
                                peso: "05 questões • 7,1% da prova",
                                topicos: "Direitos e garantias processuais penais, Inquérito Policial (arts. 4º a 23 do CPP), Ação Penal (arts. 24 a 62 do CPP), teoria geral da prova, cadeia de custódia, reconhecimento, busca e apreensão, prisão em flagrante, prisão preventiva e medidas cautelares.",
                                simulado: "Liberado agora • 1º Mini Simulado • Bloco 2 (Q31 a Q40)",
                                arquivo: "simulado-pcmg-bloco2.html",
                                liberado: true
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Legislação Penal e Processual Extravagante",
                                peso: "04 questões • 5,7% da prova",
                                topicos: "11 leis fechadas do edital: LEP (7.210/84), Hediondos (8.072/90), Ordem Econômica e Tributária (8.137/90), Interceptação Telefônica (9.296/96), CTB (9.503/97), Estatuto do Desarmamento (10.826/03), Maria da Penha (11.340/06), Drogas (11.343/06), Crime Organizado (12.850/13), Abuso de Autoridade (13.869/19) e Pacote Anticrime (13.964/19).",
                                simulado: "3º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Noções de Direitos Humanos",
                                peso: "04 questões • 5,7% da prova",
                                topicos: "Teoria geral e evolução histórica, sistemas global (ONU) e interamericano (OEA), tratados internacionais na CF/88 (EC nº 45/2004), grupos vulneráveis, Política Nacional de Direitos Humanos, Agenda 2030 (ODS) e segurança pública.",
                                simulado: "3º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Noções de Medicina Legal",
                                peso: "05 questões • 7,1% da prova",
                                topicos: "Perícias, documentos médico-legais, antropologia forense e identificação, traumatologia (energias mecânicas, químicas, físicas e asfixias em espécie), tanatologia e cronotanatognose, sexologia e psicopatologia médico-legal.",
                                simulado: "5º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            },
                            {
                                bloco: "especificas",
                                modulo: "Módulo II • Específicas",
                                disciplina: "Noções de Criminologia",
                                peso: "05 questões • 7,1% da prova",
                                topicos: "Conceito, objeto, método e funções da Criminologia, escolas clássica e positivista, teorias sociológicas (anomia, subculturas, Labeling Approach e criminologia crítica), modelos de prevenção, justiça consensual e criminologia do reconhecimento.",
                                simulado: "3º Mini Simulado PCMG (Série Pré-Edital Premium)",
                                liberado: false
                            }
                        ]
                    },
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
                        },
                        {
                            titulo: "5º Mini Simulado PCMG: Medicina Legal + Revisão Estratégica FGV (40 Questões)",
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
       1. MOTOR AUTOMÁTICO DA VITRINE EXPANSÍVEL + CARROSSEL ANALÍTICO
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
                    ".mm-mapa-wrap{margin:12px 0 16px;width:100%;}" +
                    ".mm-mapa-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;" +
                    "padding:13px 16px;border-radius:11px;cursor:pointer;text-align:left;" +
                    "background:linear-gradient(145deg,rgba(8,36,92,0.92) 0%,rgba(2,16,46,0.96) 100%);" +
                    "border:1px solid rgba(56,189,248,0.42);box-shadow:0 6px 18px rgba(0,0,0,0.32);" +
                    "transition:border-color .2s ease,transform .15s ease;}" +
                    ".mm-mapa-toggle:hover,.mm-mapa-toggle.aberto{border-color:#ffca28;transform:translateY(-1px);}" +
                    ".mm-mapa-toggle-esq{display:flex;align-items:center;gap:12px;min-width:0;}" +
                    ".mm-mapa-icone{width:38px;height:38px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;" +
                    "background:rgba(56,189,248,0.14);border:1px solid rgba(56,189,248,0.4);color:#38bdf8;font-size:16px;}" +
                    ".mm-mapa-toggle.aberto .mm-mapa-icone{background:rgba(255,202,40,0.16);border-color:rgba(255,202,40,0.5);color:#ffca28;}" +
                    ".mm-mapa-t-titulo{font-size:13px;font-weight:900;color:#ffffff;letter-spacing:0.4px;text-transform:uppercase;line-height:1.3;}" +
                    ".mm-mapa-t-sub{font-size:12px;color:#cbd5e1;margin-top:2px;line-height:1.35;}" +
                    ".mm-mapa-t-dir{display:flex;align-items:center;gap:8px;flex-shrink:0;}" +
                    ".mm-mapa-pill-ver{font-size:10.5px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;" +
                    "padding:4px 9px;border-radius:999px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.4);color:#7dd3fc;}" +
                    ".mm-mapa-toggle.aberto .mm-mapa-pill-ver{background:rgba(255,202,40,0.16);border-color:rgba(255,202,40,0.45);color:#ffca28;}" +
                    ".mm-mapa-seta{color:#ffca28;font-size:12px;transition:transform .22s ease;}" +
                    ".mm-mapa-toggle.aberto .mm-mapa-seta{transform:rotate(180deg);}" +
                    ".mm-mapa-painel{display:none;margin-top:10px;padding:15px;border-radius:12px;" +
                    "background:rgba(2,14,40,0.92);border:1px solid rgba(255,202,40,0.34);box-shadow:inset 0 1px 0 rgba(255,255,255,0.05);}" +
                    ".mm-mapa-painel.aberto{display:block;animation:mmMapaFade .2s ease;}" +
                    "@keyframes mmMapaFade{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}" +
                    ".mm-mapa-filtros{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px;}" +
                    ".mm-mapa-tabs{display:flex;flex-wrap:wrap;gap:6px;}" +
                    ".mm-mapa-tab{padding:6px 11px;border-radius:8px;cursor:pointer;font-size:11.5px;font-weight:800;letter-spacing:0.3px;" +
                    "background:rgba(255,255,255,0.04);border:1px solid rgba(148,163,184,0.28);color:#cbd5e1;transition:all .15s ease;}" +
                    ".mm-mapa-tab:hover{border-color:#ffca28;color:#ffffff;}" +
                    ".mm-mapa-tab.ativo{background:rgba(255,202,40,0.18);border-color:#ffca28;color:#ffca28;}" +
                    ".mm-mapa-dica{font-size:11px;color:#94a3b8;font-weight:600;}" +
                    ".mm-mapa-card{padding:16px;border-radius:10px;text-align:left;" +
                    "background:linear-gradient(160deg,rgba(6,27,70,0.95) 0%,rgba(3,17,48,0.98) 100%);" +
                    "border:1px solid rgba(56,189,248,0.28);touch-action:pan-y;}" +
                    ".mm-mapa-card-topo{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px;}" +
                    ".mm-mapa-mod{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.6px;" +
                    "padding:4px 9px;border-radius:999px;background:rgba(56,189,248,0.14);border:1px solid rgba(56,189,248,0.35);color:#7dd3fc;}" +
                    ".mm-mapa-mod.especificas{background:rgba(255,202,40,0.14);border-color:rgba(255,202,40,0.4);color:#ffca28;}" +
                    ".mm-mapa-peso{font-size:11px;font-weight:800;color:#e2e8f0;padding:4px 9px;border-radius:999px;" +
                    "background:rgba(2,12,34,0.75);border:1px solid rgba(148,163,184,0.28);}" +
                    ".mm-mapa-disc{font-size:16px;font-weight:900;color:#ffffff;margin-bottom:8px;letter-spacing:0.2px;}" +
                    ".mm-mapa-label{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.7px;color:#94a3b8;margin-bottom:4px;}" +
                    ".mm-mapa-topicos{font-size:13px;line-height:1.54;color:#cbd5e1;margin-bottom:14px;}" +
                    ".mm-mapa-status{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;" +
                    "padding:10px 12px;border-radius:8px;font-size:12px;font-weight:800;}" +
                    ".mm-mapa-status.liberado{background:rgba(34,197,94,0.14);border:1px solid rgba(34,197,94,0.45);color:#86efac;}" +
                    ".mm-mapa-status.breve{background:rgba(255,202,40,0.1);border:1px solid rgba(255,202,40,0.38);color:#fde68a;}" +
                    ".mm-mapa-status-txt{display:flex;align-items:center;gap:7px;line-height:1.35;}" +
                    ".mm-mapa-btn-abrir{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:7px;" +
                    "background:#22c55e;color:#02112e;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.4px;" +
                    "text-decoration:none;flex-shrink:0;transition:filter .15s ease;}" +
                    ".mm-mapa-btn-abrir:hover{filter:brightness(1.08);}" +
                    ".mm-mapa-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;}" +
                    ".mm-mapa-seta-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:8px;cursor:pointer;" +
                    "background:rgba(255,255,255,0.05);border:1px solid rgba(148,163,184,0.3);color:#f1f5f9;font-size:12px;font-weight:800;" +
                    "transition:border-color .15s ease,color .15s ease;}" +
                    ".mm-mapa-seta-btn:hover{border-color:#ffca28;color:#ffca28;}" +
                    ".mm-mapa-centro{display:flex;flex-direction:column;align-items:center;gap:6px;}" +
                    ".mm-mapa-contador{font-size:11.5px;font-weight:800;color:#ffca28;letter-spacing:0.5px;}" +
                    ".mm-mapa-dots{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:5px;}" +
                    ".mm-mapa-dot{width:8px;height:8px;border-radius:999px;border:none;padding:0;cursor:pointer;" +
                    "background:rgba(148,163,184,0.38);transition:width .18s ease,background .18s ease;}" +
                    ".mm-mapa-dot.ativo{width:20px;background:#ffca28;}" +
                    ".mm-mapa-rodape{margin-top:11px;padding-top:9px;border-top:1px solid rgba(148,163,184,0.18);" +
                    "font-size:11px;color:#94a3b8;text-align:center;line-height:1.4;}" +
                    ".mm-cat-submenus .secao-topicos{width:100%;max-width:600px;margin-left:auto;margin-right:auto;box-sizing:border-box;}" +
                    ".mm-cat-submenus .aula-item{gap:12px;align-items:center;}" +
                    ".mm-cat-submenus .aula-item>span:first-child{flex:1;min-width:0;text-align:left;line-height:1.4;}" +
                    ".mm-cat-submenus .seta-iniciar{white-space:nowrap;flex-shrink:0;}" +
                    "@media(min-width:681px){.mm-cat-conteudo .vitrine-grid.mm-grid-unico{grid-template-columns:repeat(2,minmax(0,1fr)) !important;}}" +
                    "@media(max-width:600px){.mm-cat-btn{padding:12px 14px;}.mm-cat-titulo{font-size:13.2px;letter-spacing:0.6px;}" +
                    ".mm-cat-badge{font-size:10px;padding:3px 7px;}" +
                    ".mm-mapa-toggle{padding:11px 12px;}.mm-mapa-pill-ver{display:none;}.mm-mapa-dica{display:none;}" +
                    ".mm-mapa-card{padding:13px;}.mm-mapa-disc{font-size:14.5px;}.mm-mapa-seta-btn span{display:none;}.mm-cat-submenus .secao-topicos{max-width:100%;}.mm-cat-submenus .seta-iniciar{font-size:11px;}}";
                document.head.appendChild(styleCat);
            }

            function criarBlocoMapeamento(mapa, idConcurso) {
                const materiasTodas = Array.isArray(mapa.materias) ? mapa.materias : [];
                if (materiasTodas.length === 0) return null;

                const qtdBasicas = materiasTodas.filter(function (m) { return m.bloco === "basicas"; }).length;
                const qtdEspecificas = materiasTodas.filter(function (m) { return m.bloco === "especificas"; }).length;

                let filtroAtual = "todas";
                let listaFiltrada = materiasTodas.slice();
                let indiceAtual = 0;

                const wrap = document.createElement("div");
                wrap.className = "mm-mapa-wrap";
                wrap.id = "mm-mapa-" + idConcurso;

                const btnToggle = document.createElement("button");
                btnToggle.type = "button";
                btnToggle.className = "mm-mapa-toggle";
                btnToggle.setAttribute("aria-expanded", "false");
                btnToggle.innerHTML =
                    '<span class="mm-mapa-toggle-esq">' +
                        '<span class="mm-mapa-icone"><i class="fa-solid fa-chart-pie"></i></span>' +
                        '<span>' +
                            '<div class="mm-mapa-t-titulo">' + mapa.titulo + '</div>' +
                            '<div class="mm-mapa-t-sub">' + mapa.subtitulo + '</div>' +
                        '</span>' +
                    '</span>' +
                    '<span class="mm-mapa-t-dir">' +
                        '<span class="mm-mapa-pill-ver">Abrir mapa</span>' +
                        '<i class="fa-solid fa-chevron-down mm-mapa-seta"></i>' +
                    '</span>';

                const painel = document.createElement("div");
                painel.className = "mm-mapa-painel";

                const barraFiltros = document.createElement("div");
                barraFiltros.className = "mm-mapa-filtros";
                barraFiltros.innerHTML =
                    '<div class="mm-mapa-tabs">' +
                        '<button type="button" class="mm-mapa-tab ativo" data-filtro="todas">Todas (' + materiasTodas.length + ')</button>' +
                        '<button type="button" class="mm-mapa-tab" data-filtro="basicas">Básicas (' + qtdBasicas + ')</button>' +
                        '<button type="button" class="mm-mapa-tab" data-filtro="especificas">Específicas (' + qtdEspecificas + ')</button>' +
                    '</div>' +
                    '<span class="mm-mapa-dica"><i class="fa-solid fa-arrows-left-right" style="margin-right:4px;"></i>Navegue pelas disciplinas</span>';

                const card = document.createElement("div");
                card.className = "mm-mapa-card";

                const nav = document.createElement("div");
                nav.className = "mm-mapa-nav";

                const btnPrev = document.createElement("button");
                btnPrev.type = "button";
                btnPrev.className = "mm-mapa-seta-btn";
                btnPrev.setAttribute("aria-label", "Disciplina anterior");
                btnPrev.innerHTML = '<i class="fa-solid fa-chevron-left"></i><span>Anterior</span>';

                const centro = document.createElement("div");
                centro.className = "mm-mapa-centro";

                const elContador = document.createElement("div");
                elContador.className = "mm-mapa-contador";

                const elDots = document.createElement("div");
                elDots.className = "mm-mapa-dots";

                centro.appendChild(elContador);
                centro.appendChild(elDots);

                const btnNext = document.createElement("button");
                btnNext.type = "button";
                btnNext.className = "mm-mapa-seta-btn";
                btnNext.setAttribute("aria-label", "Próxima disciplina");
                btnNext.innerHTML = '<span>Próxima</span><i class="fa-solid fa-chevron-right"></i>';

                nav.appendChild(btnPrev);
                nav.appendChild(centro);
                nav.appendChild(btnNext);

                const rodape = document.createElement("div");
                rodape.className = "mm-mapa-rodape";
                rodape.textContent = mapa.rodape || "";

                painel.appendChild(barraFiltros);
                painel.appendChild(card);
                painel.appendChild(nav);
                if (mapa.rodape) painel.appendChild(rodape);

                function renderSlide() {
                    if (!listaFiltrada.length) return;
                    if (indiceAtual < 0) indiceAtual = listaFiltrada.length - 1;
                    if (indiceAtual >= listaFiltrada.length) indiceAtual = 0;

                    const m = listaFiltrada[indiceAtual];
                    const classeMod = m.bloco === "especificas" ? "mm-mapa-mod especificas" : "mm-mapa-mod";
                    const classeStatus = m.liberado ? "mm-mapa-status liberado" : "mm-mapa-status breve";
                    const iconeStatus = m.liberado
                        ? '<i class="fa-solid fa-circle-check"></i>'
                        : '<i class="fa-solid fa-crown"></i>';
                    const botaoAbrir = (m.liberado && m.arquivo)
                        ? '<a href="' + m.arquivo + '" class="mm-mapa-btn-abrir">Iniciar agora <i class="fa-solid fa-play"></i></a>'
                        : "";

                    card.innerHTML =
                        '<div class="mm-mapa-card-topo">' +
                            '<span class="' + classeMod + '">' + m.modulo + '</span>' +
                            '<span class="mm-mapa-peso">' + m.peso + '</span>' +
                        '</div>' +
                        '<div class="mm-mapa-disc">' + m.disciplina + '</div>' +
                        '<div class="mm-mapa-label">Pontos-chave mapeados no edital:</div>' +
                        '<div class="mm-mapa-topicos">' + m.topicos + '</div>' +
                        '<div class="' + classeStatus + '">' +
                            '<span class="mm-mapa-status-txt">' + iconeStatus + '<span>' + m.simulado + '</span></span>' +
                            botaoAbrir +
                        '</div>';

                    elContador.textContent = (indiceAtual + 1) + " / " + listaFiltrada.length;

                    elDots.innerHTML = "";
                    listaFiltrada.forEach(function (_, idx) {
                        const dot = document.createElement("button");
                        dot.type = "button";
                        dot.className = idx === indiceAtual ? "mm-mapa-dot ativo" : "mm-mapa-dot";
                        dot.setAttribute("aria-label", "Ir para disciplina " + (idx + 1));
                        dot.addEventListener("click", function () {
                            indiceAtual = idx;
                            renderSlide();
                        });
                        elDots.appendChild(dot);
                    });
                }

                barraFiltros.querySelectorAll(".mm-mapa-tab").forEach(function (tab) {
                    tab.addEventListener("click", function () {
                        filtroAtual = tab.getAttribute("data-filtro") || "todas";
                        barraFiltros.querySelectorAll(".mm-mapa-tab").forEach(function (t) {
                            t.classList.remove("ativo");
                        });
                        tab.classList.add("ativo");

                        if (filtroAtual === "todas") {
                            listaFiltrada = materiasTodas.slice();
                        } else {
                            listaFiltrada = materiasTodas.filter(function (m) {
                                return m.bloco === filtroAtual;
                            });
                        }
                        indiceAtual = 0;
                        renderSlide();
                    });
                });

                btnPrev.addEventListener("click", function () {
                    indiceAtual--;
                    renderSlide();
                });

                btnNext.addEventListener("click", function () {
                    indiceAtual++;
                    renderSlide();
                });

                let toqueInicioX = 0;
                card.addEventListener("touchstart", function (e) {
                    if (e.touches && e.touches.length === 1) {
                        toqueInicioX = e.touches[0].clientX;
                    }
                }, { passive: true });

                card.addEventListener("touchend", function (e) {
                    if (!e.changedTouches || e.changedTouches.length !== 1) return;
                    const deltaX = e.changedTouches[0].clientX - toqueInicioX;
                    if (Math.abs(deltaX) >= 40) {
                        if (deltaX < 0) {
                            indiceAtual++;
                        } else {
                            indiceAtual--;
                        }
                        renderSlide();
                    }
                }, { passive: true });

                btnToggle.addEventListener("click", function () {
                    const jaAberto = painel.classList.contains("aberto");
                    const pill = btnToggle.querySelector(".mm-mapa-pill-ver");
                    if (jaAberto) {
                        painel.classList.remove("aberto");
                        btnToggle.classList.remove("aberto");
                        btnToggle.setAttribute("aria-expanded", "false");
                        if (pill) pill.textContent = "Abrir mapa";
                    } else {
                        painel.classList.add("aberto");
                        btnToggle.classList.add("aberto");
                        btnToggle.setAttribute("aria-expanded", "true");
                        if (pill) pill.textContent = "Ocultar mapa";
                        renderSlide();
                    }
                });

                renderSlide();
                wrap.appendChild(btnToggle);
                wrap.appendChild(painel);
                return wrap;
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

                            if (c.mapeamentoAnalitico) {
                                const blocoMapa = criarBlocoMapeamento(c.mapeamentoAnalitico, c.id);
                                if (blocoMapa) sec.appendChild(blocoMapa);
                            }

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
                                        '<span class="seta-iniciar" style="color: ' + corItem + ';">INICIAR AGORA <i class="fa-solid fa-play" style="margin-left: 4px;"></i></span>';
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
