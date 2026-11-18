// ==========================================================================
// motor-simulado-prova.js — MOTOR EXCLUSIVO MODO PROVA (MÉTODO MISSÃO)
// Gabarito e explicações liberados somente ao finalizar o bloco.
// ==========================================================================

(function () {
    const estilosProva = document.createElement('style');
    estilosProva.textContent = `
        @media (max-width: 600px) {
            body { padding: 12px 8px; }
            .questao-bloco, .mini-aula-bloco { padding: 16px 12px; }
            .questao-texto-bloco { font-size: 15px; margin-bottom: 18px; }
            .opcoes-container > div { gap: 6px !important; }
            .opcao { padding: 10px; font-size: 15px; line-height: 1.4; }
            .opcao input { margin-right: 10px; width: 18px; height: 18px; flex-shrink: 0; }
            .btn-tesoura { padding: 6px 8px; font-size: 13px; flex-shrink: 0; }
        }

        .painel-finalizar {
            background-color: #031842;
            border: 2px solid #ffca28;
            border-radius: 12px;
            padding: 28px 24px;
            margin-top: 10px;
            margin-bottom: 30px;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .progresso-bloco {
            color: #8a99ad;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .progresso-bloco strong {
            color: #ffca28;
        }

        .btn-finalizar-bloco {
            background-color: #ffca28;
            color: #02112e;
            border: none;
            padding: 15px 32px;
            font-size: 1rem;
            font-weight: 800;
            border-radius: 8px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: transform 0.15s ease, opacity 0.2s ease;
        }

        .btn-finalizar-bloco:hover {
            opacity: 0.92;
        }

        .btn-finalizar-bloco:active {
            transform: scale(0.98);
        }

        .aviso-pendentes {
            display: none;
            margin-top: 16px;
            padding: 12px 16px;
            background-color: #02112e;
            border: 1px solid #ff4d4d;
            border-radius: 8px;
            color: #ff4d4d;
            font-size: 0.92rem;
            font-weight: 600;
            line-height: 1.5;
        }

        .grade-gabarito {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 22px;
        }

        .badge-gab {
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 700;
            background-color: #02112e;
            border: 1px solid #0b2c6e;
            color: #ffffff;
        }

        .badge-gab.acerto {
            border-color: #2ecc71;
            color: #2ecc71;
        }

        .badge-gab.erro {
            border-color: #ff4d4d;
            color: #ff4d4d;
        }

        .gabarito-comentado-card {
            background-color: #031842;
            border: 1px solid #0b2c6e;
            border-left: 5px solid #2ecc71;
            border-radius: 10px;
            padding: 24px;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }

        .gabarito-comentado-card.errou {
            border-left-color: #ff4d4d;
        }

        .btn-proximo-bloco {
            display: inline-block;
            margin-top: 22px;
            background-color: #ffca28;
            color: #02112e;
            text-decoration: none;
            padding: 14px 28px;
            font-size: 0.95rem;
            font-weight: 800;
            border-radius: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .destaque-pendente {
            border-color: #ff4d4d !important;
            box-shadow: 0 0 12px rgba(255, 77, 77, 0.35);
        }
    `;
    document.head.appendChild(estilosProva);
})();

// Remove aviso antigo caso exista no HTML
const botaoAntigo = document.querySelector('.info-simulado');
if (botaoAntigo) {
    botaoAntigo.style.display = 'none';
}

// Estado do bloco atual
const LETRAS_OPCOES = ['A', 'B', 'C', 'D', 'E'];
let questoesBlocoAtual = [];
let blocoFinalizado = false;

function extrairNumeroQuestao(titulo, fallbackIndex) {
    const match = (titulo || '').match(/Quest[aã]o\s+(\d+)/i);
    if (match) return match[1].padStart(2, '0');
    return String(fallbackIndex + 1).padStart(2, '0');
}

function obterLinkProximoBloco() {
    const caminho = window.location.pathname.toLowerCase();
    if (caminho.includes('bloco1')) {
        return { href: 'simulado-gmj-bloco2.html', texto: 'Avançar para o Bloco 2 ▶' };
    }
    if (caminho.includes('bloco2')) {
        return { href: 'simulado-gmj-bloco3.html', texto: 'Avançar para o Bloco 3 ▶' };
    }
    if (caminho.includes('bloco3')) {
        return { href: 'simulado-gmj-bloco4.html', texto: 'Avançar para o Bloco 4 ▶' };
    }
    if (caminho.includes('bloco4')) {
        return { href: 'index.html', texto: '🏆 Simulado Finalizado — Voltar ao Início' };
    }
    return { href: 'index.html', texto: 'Voltar ao Início' };
}

// Renderiza o bloco em Modo Prova (sem botão confirmar individual e sem spoiler de gabarito)
function renderizarSimulador(listaQuestoes) {
    questoesBlocoAtual = listaQuestoes || [];
    blocoFinalizado = false;
    const totalQuestoes = questoesBlocoAtual.length;

    const container = document.getElementById('simulador-container');
    container.innerHTML = '';

    const avisoInicio = document.createElement('div');
    avisoInicio.style = "display: flex; align-items: flex-start; gap: 8px; text-align: left; margin-bottom: 30px; padding: 15px; background-color: #02112e; border: 1px dashed #ffca28; border-radius: 8px; color: #ffffff; line-height: 1.5; text-transform: uppercase;";
    avisoInicio.innerHTML = `
        <strong style="color: #ffca28; white-space: nowrap;">🎯 MODO PROVA:</strong>
        <span>Este bloco contém <strong style="color: #ffffff;">${totalQuestoes} questões</strong>. Marque todas as alternativas e clique em <strong style="color: #ffca28;">Finalizar Bloco</strong> ao final da página para liberar o placar e o gabarito comentado.</span>
    `;
    container.appendChild(avisoInicio);

    questoesBlocoAtual.forEach((q, qIndex) => {
        const bloco = document.createElement('div');
        bloco.className = 'questao-bloco';
        bloco.id = `bloco-q${qIndex}`;

        let alternativasHTML = '';
        q.alternativas.forEach((alt, altIndex) => {
            const letra = LETRAS_OPCOES[altIndex] || '';
            const textoJaTemLetra = /^[A-Ea-e]\)\s/.test(alt.trim());
            const prefixoLetra = textoJaTemLetra
                ? ''
                : `<strong style="color: #ffca28; margin-right: 6px;">${letra})</strong>`;

            alternativasHTML += `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <label class="opcao" id="q${qIndex}-opt${altIndex}" style="flex: 1; margin-bottom: 0;">
                        <input type="radio" name="radar-q${qIndex}" value="${altIndex}" onchange="atualizarContadorBloco(${qIndex})">
                        <span>${prefixoLetra}${alt}</span>
                    </label>
                    <button type="button" class="btn-tesoura" onclick="cortarAlternativa(${qIndex}, ${altIndex})" title="Eliminar alternativa">✂️</button>
                </div>`;
        });

        bloco.innerHTML = `
            <div class="questao-texto-bloco">
                <span class="questao-titulo-inline">${q.titulo}</span><br>${q.enunciado}
            </div>
            <div class="assinatura-suave">MÉTODO MISSÃO • METODOMISSAO.COM</div>
            <div class="opcoes-container" id="grupo-q${qIndex}" style="margin-bottom: 0;">${alternativasHTML}</div>
        `;
        container.appendChild(bloco);
    });

    // Painel de finalização no rodapé do bloco
    const painelFinalizar = document.createElement('div');
    painelFinalizar.className = 'painel-finalizar';
    painelFinalizar.id = 'painel-finalizar';
    painelFinalizar.innerHTML = `
        <div class="progresso-bloco">
            Questões respondidas neste bloco: <strong id="contador-marcadas">0</strong> de <strong>${totalQuestoes}</strong>
        </div>
        <button type="button" class="btn-finalizar-bloco" onclick="finalizarBloco()">
            ✅ Finalizar Bloco e Ver Gabarito
        </button>
        <div class="aviso-pendentes" id="aviso-pendentes"></div>
    `;
    container.appendChild(painelFinalizar);
}

// Atualiza o contador simples de questões marcadas e remove alerta visual da questão respondida
function atualizarContadorBloco(qIndex) {
    if (typeof qIndex === 'number') {
        const card = document.getElementById(`bloco-q${qIndex}`);
        if (card) card.classList.remove('destaque-pendente');
    }

    let marcadas = 0;
    for (let i = 0; i < questoesBlocoAtual.length; i++) {
        const inputs = document.getElementsByName(`radar-q${i}`);
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].checked) {
                marcadas++;
                break;
            }
        }
    }

    const elContador = document.getElementById('contador-marcadas');
    if (elContador) elContador.textContent = marcadas;
}

// Função da Tesourinha para riscar/desriscar alternativas
function cortarAlternativa(qIndex, altIndex) {
    if (blocoFinalizado) return;

    const opcaoEl = document.getElementById(`q${qIndex}-opt${altIndex}`);
    const inputEl = opcaoEl.querySelector('input[type="radio"]');
    const grupo = document.getElementById(`grupo-q${qIndex}`);

    if (grupo.classList.contains('travado')) return;

    if (opcaoEl.classList.contains('riscada')) {
        opcaoEl.classList.remove('riscada');
        inputEl.disabled = false;
    } else {
        opcaoEl.classList.add('riscada');
        inputEl.checked = false;
        inputEl.disabled = true;
        atualizarContadorBloco();
    }
}

// Corrige todas as questões de uma vez e gera o Gabarito Comentado ao final do bloco
function finalizarBloco() {
    if (blocoFinalizado) return;

    const respostasAluno = [];
    const pendentes = [];
    let primeiroPendenteIdx = -1;

    questoesBlocoAtual.forEach((q, qIndex) => {
        const inputs = document.getElementsByName(`radar-q${qIndex}`);
        let selecionadoIndex = -1;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                selecionadoIndex = i;
                break;
            }
        }

        const card = document.getElementById(`bloco-q${qIndex}`);
        if (selecionadoIndex === -1) {
            pendentes.push(`Q${extrairNumeroQuestao(q.titulo, qIndex)}`);
            if (primeiroPendenteIdx === -1) primeiroPendenteIdx = qIndex;
            if (card) card.classList.add('destaque-pendente');
        } else {
            if (card) card.classList.remove('destaque-pendente');
        }
        respostasAluno.push(selecionadoIndex);
    });

    const avisoPendentes = document.getElementById('aviso-pendentes');
    if (pendentes.length > 0) {
        if (avisoPendentes) {
            avisoPendentes.style.display = 'block';
            avisoPendentes.innerHTML = `⚠️ Responda todas as questões antes de finalizar o bloco.<br>Faltam marcar: <strong>${pendentes.join(', ')}</strong>.`;
        }
        const primeiroCard = document.getElementById(`bloco-q${primeiroPendenteIdx}`);
        if (primeiroCard) {
            primeiroCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    blocoFinalizado = true;
    const painelFinalizar = document.getElementById('painel-finalizar');
    if (painelFinalizar) painelFinalizar.style.display = 'none';

    let acertos = 0;
    const totalQuestoes = questoesBlocoAtual.length;
    let gradeHTML = '';
    let comentariosHTML = '';

    questoesBlocoAtual.forEach((q, qIndex) => {
        const selecionadoIndex = respostasAluno[qIndex];
        const indexCorreto = q.correta;
        const acertou = selecionadoIndex === indexCorreto;
        const numQ = extrairNumeroQuestao(q.titulo, qIndex);
        const letraMarcada = LETRAS_OPCOES[selecionadoIndex] || '-';
        const letraCorreta = q.letraGabarito || LETRAS_OPCOES[indexCorreto] || '-';

        // Trava as opções da questão e destaca visualmente no caderno
        const grupo = document.getElementById(`grupo-q${qIndex}`);
        if (grupo) grupo.classList.add('travado');

        const elementoCorreto = document.getElementById(`q${qIndex}-opt${indexCorreto}`);
        const elementoSelecionado = document.getElementById(`q${qIndex}-opt${selecionadoIndex}`);

        if (acertou) {
            acertos++;
            if (elementoCorreto) elementoCorreto.style.borderColor = '#2ecc71';
            gradeHTML += `<div class="badge-gab acerto">Q${numQ}: ${letraCorreta} ✅</div>`;
        } else {
            if (elementoSelecionado) elementoSelecionado.style.borderColor = '#ff4d4d';
            if (elementoCorreto) elementoCorreto.style.borderColor = '#2ecc71';
            gradeHTML += `<div class="badge-gab erro">Q${numQ}: ${letraMarcada} → ${letraCorreta} ❌</div>`;
        }

        comentariosHTML += `
            <div class="gabarito-comentado-card ${acertou ? '' : 'errou'}">
                <div style="color: #ffca28; font-weight: 700; margin-bottom: 10px; font-size: 0.98rem;">
                    ${q.titulo}
                </div>
                <div class="status-alerta ${acertou ? 'status-acertou' : 'status-errou'}" style="margin-bottom: 8px; font-size: 1rem;">
                    ${acertou ? '✅ Acertou!' : `❌ Errou — Você marcou: ${letraMarcada}`}
                </div>
                <div class="gabarito-letra" style="font-size: 1.05rem; margin-bottom: 10px;">
                    Gabarito Oficial: ${letraCorreta}
                </div>
                <div style="line-height: 1.65; color: #cbd5e1; font-size: 0.95rem;">
                    ${q.explicacao}
                </div>
            </div>
        `;
    });

    const aproveitamento = Math.round((acertos / totalQuestoes) * 100);
    const erros = totalQuestoes - acertos;
    const proximo = obterLinkProximoBloco();

    const container = document.getElementById('simulador-container');
    const blocoResultado = document.createElement('section');
    blocoResultado.id = 'resultado-final-bloco';

    blocoResultado.innerHTML = `
        <div class="questao-bloco" style="border: 2px solid #ffca28; text-align: center;">
            <div style="position: relative; z-index: 1;">
                <h2 style="color: #ffca28; font-size: 1.6rem; margin-top: 0; margin-bottom: 12px; font-weight: 800; text-transform: uppercase;">
                    🏆 BLOCO CONCLUÍDO
                </h2>
                <p style="font-size: 1.15rem; color: #ffffff; margin-bottom: 8px;">
                    Acertos: <span style="color: #2ecc71; font-weight: 800;">${acertos}</span> &nbsp;|&nbsp;
                    Erros: <span style="color: #ff4d4d; font-weight: 800;">${erros}</span> &nbsp;|&nbsp;
                    Total: <strong>${totalQuestoes}</strong>
                </p>
                <div style="font-size: 1.8rem; font-weight: 900; color: ${aproveitamento >= 70 ? '#2ecc71' : '#ffca28'}; margin-bottom: 12px;">
                    Aproveitamento: ${aproveitamento}%
                </div>
                <p style="color: #a5b1c2; font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">
                    ${aproveitamento >= 70
                        ? '🔥 Excelente índice! Padrão competitivo para aprovação.'
                        : '📚 Revise os comentários abaixo para fechar as lacunas antes de avançar.'}
                </p>
                <div class="grade-gabarito">${gradeHTML}</div>
                <a href="${proximo.href}" class="btn-proximo-bloco">${proximo.texto}</a>
            </div>
        </div>

        <h3 style="color: #ffca28; font-size: 1.25rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin: 35px 0 20px 0;">
            📋 GABARITO COMENTADO DO BLOCO
        </h3>
        ${comentariosHTML}

        <div style="text-align: center; margin-top: 25px;">
            <a href="${proximo.href}" class="btn-proximo-bloco">${proximo.texto}</a>
        </div>
    `;

    container.appendChild(blocoResultado);
    blocoResultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// PROTOCOLO RED TEAM — PROTEÇÃO INTEGRAL (INCLUINDO BLUR AO PERDER FOCO)
// ==========================================================================
function mostrarAlerta(evento) {
    if (evento) evento.preventDefault();
    const alerta = document.getElementById('alerta-protecao');
    if (alerta) alerta.style.display = 'flex';
}

function fecharAlerta() {
    const alerta = document.getElementById('alerta-protecao');
    if (alerta) alerta.style.display = 'none';
}

document.addEventListener('contextmenu', mostrarAlerta);
document.addEventListener('copy', mostrarAlerta);

document.addEventListener('keydown', function (evento) {
    if (evento.ctrlKey || evento.metaKey) {
        const tecla = evento.key.toLowerCase();
        if (tecla === 'c' || tecla === 'p' || tecla === 's' || tecla === 'u') {
            mostrarAlerta(evento);
        }
    }
    if (
        evento.key === 'F12' ||
        (evento.ctrlKey && evento.shiftKey && (evento.key === 'I' || evento.key === 'i' || evento.key === 'J' || evento.key === 'j'))
    ) {
        mostrarAlerta(evento);
    }
});

document.addEventListener('keyup', function (evento) {
    if (evento.key === 'PrintScreen' || evento.keyCode === 44) {
        try {
            navigator.clipboard.writeText('Conteúdo Protegido por Direitos Autorais - Método Missão 2026');
        } catch (e) {}
        mostrarAlerta(evento);
    }
});

window.addEventListener('blur', function () {
    const alvo = document.querySelector('.container') || document.getElementById('simulador-container');
    if (alvo) alvo.style.filter = 'blur(15px)';
});

window.addEventListener('focus', function () {
    const alvo = document.querySelector('.container') || document.getElementById('simulador-container');
    if (alvo) alvo.style.filter = 'none';
});