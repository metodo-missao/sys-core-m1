/* ==========================================================================
   PROTEÇÃO EXTRA + MARCA D'ÁGUA SOBRE A FOLHA A4 (MÉTODO MISSÃO)
   Arquivo modular: aplica marca d'água diagonal sobre o caderno de prova
   (com troca automática entre Folha Azul e Folha Branca) e reforça a
   blindagem contra cópia e toque longo no celular.
   ========================================================================== */
(function () {
    try {
        if (window.__MM_PROTECAO_SIMULADO_ATIVA__) return;
        window.__MM_PROTECAO_SIMULADO_ATIVA__ = true;

        const SVG_ESCURO =
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='165'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' transform='rotate(-25 170 82)' fill='rgba(255,255,255,0.065)' font-family='Segoe UI, Arial, sans-serif' font-weight='800' font-size='12px' letter-spacing='1'%3EM%C3%89TODO MISS%C3%83O %E2%80%A2 METODOMISSAO.COM%3C/text%3E%3C/svg%3E\")";

        const SVG_CLARO =
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='165'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' transform='rotate(-25 170 82)' fill='rgba(2,17,46,0.065)' font-family='Segoe UI, Arial, sans-serif' font-weight='800' font-size='12px' letter-spacing='1'%3EM%C3%89TODO MISS%C3%83O %E2%80%A2 METODOMISSAO.COM%3C/text%3E%3C/svg%3E\")";

        if (!document.getElementById("mm-protecao-simulado-css")) {
            const style = document.createElement("style");
            style.id = "mm-protecao-simulado-css";
            style.textContent =
                /* Bloqueio de toque longo (iOS/Android), seleção e arrasto */
                "html,body,.folha-a4,.questao-item,.bloco-texto,.comentario-box,.alternativa-btn{" +
                    "-webkit-touch-callout:none !important;" +
                    "-webkit-user-select:none !important;" +
                    "-moz-user-select:none !important;" +
                    "-ms-user-select:none !important;" +
                    "user-select:none !important;" +
                    "-webkit-user-drag:none !important;" +
                "}" +
                "img{-webkit-touch-callout:none !important;-webkit-user-drag:none !important;pointer-events:none;}" +

                /* Marca d'água por cima da Folha A4 (Modo Noturno / Folha Azul) */
                ".folha-a4{position:relative !important;overflow:hidden !important;}" +
                ".folha-a4::after{" +
                    "content:'';" +
                    "position:absolute;" +
                    "inset:0;" +
                    "z-index:5;" +
                    "pointer-events:none;" +
                    "background-image:" + SVG_ESCURO + ";" +
                    "background-repeat:repeat;" +
                "}" +

                /* Adaptação automática para o Modo Claro (Folha Branca) */
                ".caderno-paginas.modo-papel .folha-a4::after{" +
                    "background-image:" + SVG_CLARO + ";" +
                "}" +

                /* Camada de reserva para simulados que não usam .folha-a4 */
                "#mm-marca-dagua-fixa{" +
                    "position:fixed;" +
                    "inset:0;" +
                    "z-index:9990;" +
                    "pointer-events:none;" +
                    "background-image:" + SVG_ESCURO + ";" +
                    "background-repeat:repeat;" +
                "}";

            document.head.appendChild(style);
        }

        /* Se a página não tiver folhas A4, aplica camada fixa por cima */
        function garantirCamadaReserva() {
            if (!document.querySelector(".folha-a4") && !document.getElementById("mm-marca-dagua-fixa")) {
                const camada = document.createElement("div");
                camada.id = "mm-marca-dagua-fixa";
                camada.setAttribute("aria-hidden", "true");
                document.body.appendChild(camada);
            }
        }

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", garantirCamadaReserva);
        } else {
            garantirCamadaReserva();
        }

        /* Reforço silencioso contra seleção, arrasto e cópia (sem duplicar alertas) */
        document.addEventListener("selectstart", function (e) {
            const tag = e.target && e.target.tagName;
            if (tag !== "INPUT" && tag !== "TEXTAREA") {
                e.preventDefault();
            }
        });

        document.addEventListener("dragstart", function (e) {
            e.preventDefault();
        });

        document.addEventListener("copy", function (e) {
            e.preventDefault();
            if (e.clipboardData) {
                e.clipboardData.setData("text/plain", "Conteúdo Protegido por Direitos Autorais - Método Missão (metodomissao.com)");
            }
        });

        document.addEventListener("cut", function (e) {
            e.preventDefault();
        });

        /* Proteção extra ao alternar de aba/app no celular */
        function alterarDesfoque(ativar) {
            const alvo = document.getElementById("simulador-container");
            if (alvo) {
                alvo.style.filter = ativar ? "blur(15px)" : "none";
            }
        }

        document.addEventListener("visibilitychange", function () {
            alterarDesfoque(document.hidden);
        });

        window.addEventListener("pageshow", function () {
            alterarDesfoque(false);
        });
    } catch (err) {
        console.error("MM-PROTECAO-SIMULADO falhou (prova segue normal):", err);
    }
})();