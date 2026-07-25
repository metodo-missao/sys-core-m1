// Variáveis de controle globais
let totalQuestoes = 0;
let respondidas = 0;
let acertos = 0;

// Função que busca as questões direto da tabela específica no Supabase
async function carregarAulaDoSupabase(nomeTabela) {
    try {
        // Agora ele busca diretamente na tabela informada (ex: 'questoes_penas')
        const { data, error } = await supabase
            .from(nomeTabela)
            .select('*');

        if (error) throw error;

        if (data && data.length > 0) {
            renderizarSimulador(data);
        } else {
            document.getElementById('simulador-container').innerHTML = `
                <div style="text-align: center; color: #ffca28; padding: 20px;">
                    Nenhuma questão encontrada nesta tabela do Supabase.
                </div>`;
        }
    } catch (err) {
        console.error("Erro ao conectar com o Supabase:", err);
    }
}

// Renderiza as questões na tela com a tesourinha integrada
function renderizarSimulador(listaQuestoes) {
    totalQuestoes = listaQuestoes.length;
    respondidas = 0;
    acertos = 0;

    const container = document.getElementById('simulador-container');
    container.innerHTML = '';

    const avisoInicio = document.createElement('div');
    avisoInicio.style = "display: flex; align-items: flex-start; gap: 8px; text-align: left; margin-bottom: 30px; padding: 15px; background-color: #02112e; border: 1px dashed #ffca28; border-radius: 8px; color: #ffffff; line-height: 1.5; text-transform: uppercase;";
    avisoInicio.innerHTML = `
        <strong style="color: #ffca28; white-space: nowrap;">🎯 FOCO NA MISSÃO:</strong>
        <span>Este bloco contém <strong style="color: #ffffff;">${totalQuestoes} questões</strong> estruturadas no mapeamento estratégico da lei seca atualizada.</span>
    `;
    container.appendChild(avisoInicio);

    listaQuestoes.forEach((q, qIndex) => {
        const bloco = document.createElement('div');
        bloco.className = 'questao-bloco';
        bloco.id = `bloco-q${qIndex}`;

        let alternativasHTML = '';
        q.alternativas.forEach((alt, altIndex) => {
            alternativasHTML += `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <label class="opcao" id="q${qIndex}-opt${altIndex}">
                        <input type="radio" name="radar-q${qIndex}" value="${altIndex}">${alt}
                    </label>
                    <button type="button" class="btn-tesoura" onclick="cortarAlternativa(${qIndex}, ${altIndex})" title="Eliminar alternativa">✂️</button>
                </div>`;
        });

        bloco.innerHTML = `
            <div class="questao-texto-bloco">
                <span class="questao-titulo-inline">${q.titulo}</span><br>${q.enunciado}
            </div>
            <div class="assinatura-suave">MÉTODO MISSÃO • METODOMISSAO.COM</div>
            <div class="opcoes-container" id="grupo-q${qIndex}">${alternativasHTML}</div>
            <button type="button" class="btn-verificar" id="btn-q${qIndex}" onclick="validarResposta(${qIndex}, ${q.correta})">CONFIRMAR</button>
            <div class="feedback-box" id="feed-q${qIndex}">
                <div class="status-alerta" id="status-q${qIndex}"></div>
                <div class="gabarito-letra">Gabarito: ${q.letraGabarito}</div>
                <div style="line-height: 1.6; color: #a5b1c2;">${q.explicacao}</div>
            </div>
        `;
        container.appendChild(bloco);
    });
}

// Função da Tesourinha para riscar/desriscar alternativas
function cortarAlternativa(qIndex, altIndex) {
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
    }
}

// Validação da resposta marcada pelo aluno
function validarResposta(qIndex, indexCorreto) {
    const inputs = document.getElementsByName(`radar-q${qIndex}`);
    let selecionadoIndex = -1;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) { selecionadoIndex = i; break; }
    }

    if (selecionadoIndex === -1) {
        alert("Por favor, selecione uma alternativa antes de confirmar!");
        return;
    }

    document.getElementById(`grupo-q${qIndex}`).classList.add('travado');
    document.getElementById(`btn-q${qIndex}`).style.display = 'none';

    const elementoCorreto = document.getElementById(`q${qIndex}-opt${indexCorreto}`);
    const elementoSelecionado = document.getElementById(`q${qIndex}-opt${selecionadoIndex}`);
    const statusBox = document.getElementById(`status-q${qIndex}`);
    const feedbackBox = document.getElementById(`feed-q${qIndex}`);

    respondidas++;

    if (selecionadoIndex === indexCorreto) {
        elementoCorreto.style.borderColor = '#2ecc71';
        statusBox.innerHTML = "✅ Certo!";
        statusBox.className = "status-alerta status-acertou";
        acertos++;
    } else {
        elementoSelecionado.style.borderColor = '#ff4d4d';
        elementoCorreto.style.borderColor = '#2ecc71';
        feedbackBox.style.borderLeftColor = '#ff4d4d';
        statusBox.innerHTML = "❌ Errada!";
        statusBox.className = "status-alerta status-errou";
    }

    feedbackBox.style.display = 'block';

    if (respondidas === totalQuestoes) {
        gerarPlacarFinal();
    }
}

// Placar Final ao concluir todas as questões
function gerarPlacarFinal() {
    const container = document.getElementById('simulador-container');
    const aproveitamento = Math.round((acertos / totalQuestoes) * 100);
    const painelResultado = document.createElement('div');

    painelResultado.className = 'questao-bloco';
    painelResultado.style.border = '2px solid #ffca28';
    painelResultado.style.textAlign = 'center';

    painelResultado.innerHTML = `
        <h2 style="color: #ffca28; font-size: 1.6rem; margin-top: 0; font-weight: 800; text-transform: uppercase;">
            🏆 SIMULADO CONCLUÍDO
        </h2>
        <p style="font-size: 1.2rem; color: #ffffff; margin-bottom: 10px;">
            Você acertou <span style="color: #2ecc71; font-weight: 800;">${acertos}</span> de um total de <strong>${totalQuestoes}</strong> questões.
        </p>
        <div style="font-size: 1.8rem; font-weight: 900; color: #2ecc71; margin-bottom: 15px;">
            Aproveitamento: ${aproveitamento}%
        </div>
        <p style="color: #a5b1c2; font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">
            ${aproveitamento >= 70 ? "🔥 Excelente índice! Você assimilou muito bem as regras deste módulo." : "📚 Desempenho mediano. Vale a pena revisar o resumo e tentar novamente."}
        </p>
    `;

    container.appendChild(painelResultado);
}

// Script Red Team (Proteções contra cópia e inspeção)
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
        if (tecla === 'c' || tecla === 'p' || tecla === 's' || tecla === 'u') { mostrarAlerta(evento); }
    }
    if (evento.key === 'F12' || (evento.ctrlKey && evento.shiftKey && (evento.key === 'I' || evento.key === 'J'))) { mostrarAlerta(evento); }
});
document.addEventListener('keyup', function (evento) { if (evento.key === 'PrintScreen' || evento.keyCode === 44) mostrarAlerta(evento); });