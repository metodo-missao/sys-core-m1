const dadosMateria = {
    materia: "Direito Penal",
    topico: "Dos Crimes Contra a Pessoa (Arts. 121 a 154-B do Código Penal)",
    questoes: [
        {
            id: 1,
            enunciado: "Durante um patrulhamento em área conflagrada, um policial militar é reconhecido por integrantes de uma facção criminosa. Sabendo que o agente público estava de folga e desarmado acompanhado de seu irmão, os criminosos efetuam disparos contra o irmão do policial, com a intenção manifesta de atingir o servidor por vingança funcional. O irmão sobrevive, sofrendo lesões graves. De acordo com as disposições do Artigo 121 do Código Penal, assinale a opção correta quanto à tipificação do fato:",
            alternativas: {
                A: "Trata-se de tentativa de homicídio simples em concurso formal com lesão corporal de natureza grave.",
                B: "O fato constitui tentativa de homicídio qualificado apenas pela futilidade do motivo e pelo emprego de meio cruel.",
                C: "O crime restou descaracterizado quanto à qualificadora funcional, pois a agressão foi direcionada ao irmão e não ao próprio policial militar.",
                D: "Configura tentativa de homicídio qualificado pela condição de parente consanguíneo até o terceiro grau de agente de segurança pública, em razão dessa condição.",
                E: "Aplica-se a qualificadora de homicídio funcional apenas se a vítima direta for parente em linha reta de primeiro grau (pai ou filho)."
            },
            gabarito: "D",
            explicacao: "Nos termos do Artigo 121, § 2º, inciso VII, do Código Penal, o homicídio é qualificado se praticado contra autoridade ou agente integrante do sistema de segurança pública no exercício da função ou em razão dela, OU CONTRA SEU CÔNJUGE, COMPANHEIRO OU PARENTE CONSANGUÍNEO ATÉ O TERCEIRO GRAU, EM RAZÃO DESSA CONDIÇÃO. Como o irmão é parente consanguíneo em 2º grau colateral, incide a qualificadora funcional em sua forma tentada."
        },
        {
            id: 2,
            enunciado: "Em um fórum de discussão na internet, Caio envia sistematicamente mensagens e vídeos a uma adolescente de 14 anos de idade, instigando-a a praticar atos de automutilação nas pernas. A jovem, influenciada pelos conteúdos recebidos, realiza cortes profundos, sofrendo lesões corporais de natureza grave. Considerando a disciplina legal do Artigo 122 do Código Penal, Caio responderá por:",
            alternativas: {
                A: "Lesão corporal grave (Art. 129, § 1º) em autoria mediata, pois a vítima é menor de 15 anos.",
                B: "Induzimento, instigação ou auxílio a automutilação com a pena duplicada, visto que a vítima é menor de idade.",
                C: "Corrupção de menores em concurso material com lesão corporal culposa de trânsito.",
                D: "Induzimento a automutilação na forma simples, pois a qualificadora de lesão grave só se aplica aos casos de tentativa de suicídio.",
                E: "Conduta penalmente atípica, haja vista que a automutilação efetuada pela própria vítima afasta o nexo causal do instigador."
            },
            gabarito: "B",
            explicacao: "Conforme o Artigo 122, § 1º, do CP, se da automutilação resulta lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 1 a 3 anos. Ademais, nos termos do § 3º, inciso I, do mesmo artigo, a pena é DUPLICADA se o crime é cometido contra menor ou pessoa que tem diminuída a capacidade de resistência."
        },
        {
            id: 3,
            enunciado: "Durante uma abordagem policial veiculada ao vivo em rede social, o abordado dirige-se ostensivamente ao Capitão da Polícia Militar afirmando: 'Você é um corrupto, ladrão e desonesto, vive cobrando propina de comerciantes aqui do bairro!'. No entanto, o abordado não atribui nenhum fato específico delimitado no tempo ou espaço. À luz do Código Penal no capítulo dos Crimes Contra a Honra, assinale a afirmativa correta:",
            alternativas: {
                A: "A conduta caracteriza o crime de calúnia (Art. 138), haja vista a atribuição explícita do delito de corrupção passiva.",
                B: "Configura o crime de difamação (Art. 139), pois o ato ofendeu a reputação objetiva do policial perante os internautas.",
                C: "O fato é penalmente atípico, pois o excesso verbal cometido durante abordagem policial é coberto pelo exercício regular de direito.",
                D: "Trata-se do crime de desacato praticado em concurso formal imperfeito com calúnia majorada.",
                E: "A conduta configura o crime de injúria (Art. 140), pois consistiu na atribuição de qualidades negativas e genéricas, sem a imputação de fato determinado delimitado no tempo e no espaço."
            },
            gabarito: "E",
            explicacao: "A calúnia (Art. 138) exige a imputação falsa de FATO DETERMINADO qualificado como crime. Xinguamentos e atribuições de qualidades pejorativas genéricas (ex: 'ladrão', 'corrupto', 'desonesto') atintem a honra subjetiva (decoro e dignidade), configurando o crime de INJÚRIA (Art. 140 do CP)."
        },
        {
            id: 4,
            enunciado: "O delito de lesão corporal traz no Artigo 129 do Código Penal qualificadoras que alteram os limites das penas abstratas em razão da gravidade do resultado produzido na vítima. Assinale a alternativa que indica corretamente uma hipótese legal de lesão corporal GRAVÍSSIMA (Art. 129, § 2º):",
            alternativas: {
                A: "Deformidade permanente.",
                B: "Incapacidade para as ocupações habituais, por mais de trinta dias.",
                C: "Perigo de vida.",
                D: "Aceleração de parto.",
                E: "Debilidade permanente de membro, sentido ou função."
            },
            gabarito: "A",
            explicacao: "Segundo o Artigo 129, § 2º, inciso IV, do CP, a Deformidade Permanente é qualificadora da lesão corporal GRAVÍSSIMA. As alternativas B, C, D e E constituem hipóteses de lesão corporal GRAVE (Art. 129, § 1º, incisos I, II, IV e III, respectivamente)."
        },
        {
            id: 5,
            enunciado: "O condutor de um veículo, por imprudência, atropela um pedestre em via pública, causando-lhe ferimentos severos, e foge do local. Um cidadão que passava pelo local presenciou todo o ocorrido e, embora estivesse com telefone celular funcionando e sem sofrer qualquer risco pessoal, negou-se expressamente a acionar o serviço público de emergência para a vítima, que faleceu antes do resgate. Quanto ao CIDADÃO que recusou pedir o socorro, é correto afirmar:",
            alternativas: {
                A: "Responde pelo crime de homicídio culposo na direção de veículo automotor em coautoria por omissão imprópria.",
                B: "Responderá por omissão de socorro, tendo sua pena aumentada de metade em razão da ocorrência do resultado morte.",
                C: "Responderá pelo crime de omissão de socorro (Art. 135), tendo sua pena triplicada em virtude de ter resultado a morte da vítima.",
                D: "Não cometeu crime, pois o dever legal de socorrer a vítima recai exclusivamente sobre o condutor que provocou o acidente.",
                E: "Responderá pelo crime de abandono de incapaz qualificado pela morte, por ter assumido a posição de garante ao presenciar a emergência."
            },
            gabarito: "C",
            explicacao: "O cidadão omisso comete o crime de Omissão de Socorro (Art. 135 do CP). O parágrafo único do Artigo 135 estabelece que a pena é aumentada de metade se da omissão resulta lesão corporal de natureza grave, e TRIPLICADA se resulta a morte da vítima."
        },
        {
            id: 6,
            enunciado: "Um homem, inconformado com o fim do relacionamento, passa a perseguir reiteradamente sua ex-namorada: envia dezenas de mensagens diárias, aguarda-a na porta do trabalho e segue-a em locais públicos, invadindo sua privacidade e restringindo sua liberdade de locomoção. De acordo com o Artigo 147-A do Código Penal (Perseguição), assinale a afirmativa correta:",
            alternativas: {
                A: "A conduta é atípica na esfera penal, resolvendo-se apenas com a concessão de medidas protetivas de urgência.",
                B: "O crime de perseguição é de ação penal pública condicionada à representação da vítima e tem sua pena aumentada de metade se praticado contra mulher por razões da condição do sexo feminino.",
                C: "Configura crime de ação penal pública incondicionada, dispensando qualquer manifestação de vontade da vítima para o oferecimento da denúncia.",
                D: "A conduta absorve o crime de violência psicológica contra a mulher, sendo a pena diminuída de um terço se o agente agir por paixão reprimida.",
                E: "Trata-se de contravenção penal de perturbação da tranquilidade, que revogou os artigos relativos à violência doméstica."
            },
            gabarito: "B",
            explicacao: "O Artigo 147-A, § 1º, inciso II, do CP estabelece aumento de pena de metade se o crime é cometido contra mulher por razões da condição do sexo feminino. Ademais, o § 3º determina expressamente que se trata de crime de ação penal pública CONDICIONADA à representação."
        },
        {
            id: 7,
            enunciado: "Criminosos privam a liberdade de um comerciante mantendo-o retido em um cativeiro por 20 (vinte) dias. Durante esse período, a vítima é submetida a maus-tratos e a grave sofrimento físico e moral em razão das péssimas condições impostas. No tocante à tipificação legal prevista no Artigo 148 do Código Penal, os agentes responderão por:",
            alternativas: {
                A: "Sequestro simples em concurso material com crime de tortura.",
                B: "Extorsão mediante sequestro (Art. 159), visto que o tempo de cativeiro superior a 15 dias gera presunção de intuito econômico.",
                C: "Constrangimento ilegal qualificado com pena privativa de liberdade de cumprimento obrigatório em regime fechado.",
                D: "Sequestro e cárcere privado na forma simples, pois os maus-tratos absorvem o sofrimento moral do retido.",
                E: "Sequestro e cárcere privado qualificado, haja vista que a privação da liberdade durou mais de 15 dias e a vítima foi submetida a grave sofrimento físico ou moral em razão dos maus-tratos."
            },
            gabarito: "E",
            explicacao: "O Artigo 148, § 1º, incisos III e V, do CP traz expressamente as qualificadoras do sequestro e cárcere privado quando a privação da liberdade dura mais de quinze dias (inciso III) e quando a vítima é submetida a grave sofrimento físico ou moral em razão de maus-tratos (inciso V)."
        },
        {
            id: 8,
            enunciado: "O Artigo 147-B do Código Penal criminaliza a violência psicológica contra a mulher. No tocante aos elementos constitutivos deste tipo penal inserido no capítulo dos crimes contra a liberdade individual, assinale a afirmativa correta:",
            alternativas: {
                A: "Exige obrigatoriamente para sua consumação o resultado de lesão corporal de natureza grave atestada por laudo pericial.",
                B: "Aplica-se exclusivamente aos crimes cometidos no âmbito da relação de namoro com coabitação sob o mesmo teto.",
                C: "Pune a conduta de causar dano emocional à mulher que a prejudique e perturbe seu pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões.",
                D: "É crime de ação penal pública incondicionada com pena de reclusão de 4 a 8 anos e multa, inafiançável na fase policial.",
                E: "É infração penal de menor potencial ofensivo que admite a transação penal e o acordo de não persecução penal de forma irrestrita."
            },
            gabarito: "C",
            explicacao: "O Artigo 147-B do CP dispõe: 'Causar dano emocional à mulher que a prejudique e perturbe seu pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões, mediante ameaça, constrangimento, humilhação, manipulação, isolamento, chantagem, ridicularização, limitação do direito de ir e vir ou qualquer outro meio que cause prejuízo à sua saúde psicológica e autodeterminação'."
        },
        {
            id: 9,
            enunciado: "Mário, sem o consentimento de Juliana, grávida de 4 meses, ministra-lhe clandestinamente uma substância abortiva misturada à sua bebida. Juliana sofre contrações severas e expulsa o feto, que falece. Em decorrência direta das complicações graves geradas pela medicação, Juliana também vem a óbito três dias após o fato. Diante do quadro fático e do disposto nos artigos 125 e 127 do Código Penal, Mário responderá por:",
            alternativas: {
                A: "Aborto provocado por terceiro sem o consentimento da gestante (Art. 125), com a pena duplicada pelo fato de ter resultado a morte da gestante (Art. 127).",
                B: "Homicídio qualificado pelo emprego de veneno em concurso material com aborto simples.",
                C: "Lesão corporal seguida de morte em concurso formal com aborto culposo.",
                D: "Aborto sem consentimento com a pena aumentada de um terço em razão da morte da gestante.",
                E: "Concurso formal impróprio entre feminicídio consumado e aborto provocado por terceiro com consentimento."
            },
            gabarito: "A",
            explicacao: "O crime principal é o aborto provocado por terceiro sem o consentimento da gestante (Art. 125). O Artigo 127 do CP prevê a forma qualificada pelo resultado culposo sobre a gestante: se resulta lesão corporal grave, a pena aumenta de um terço; SE RESULTA A MORTE DA GESTANTE, A PENA É DUPLICADA."
        },
        {
            id: 10,
            enunciado: "Em fiscalização conjunta em área rural, policiais e auditores do trabalho flagram trabalhadores submetidos a jornadas exaustivas e condições degradantes de trabalho, tendo seus documentos pessoais retidos pelo fazendeiro sob o argumento de compensar dívidas de alimentação. De acordo com o Artigo 149 do Código Penal:",
            alternativas: {
                A: "O crime subsiste apenas se demonstrado o emprego de violência física direta ou cerceamento por vigilância armada.",
                B: "A retenção de documentos e a servidão por dívida constituem condutas atípicas se houver contrato assinado prévio.",
                C: "Trata-se de infração meramente administrativa trabalhista, cuja punibilidade é extinta com o pagamento das verbas rescisórias.",
                D: "Configura o crime de redução a condição análoga à de escravo, cuja pena é aumentada de metade se o crime é cometido contra criança ou adolescente ou por motivo de preconceito de raça, cor, etnia, religião ou origem.",
                E: "O tipo penal exige para a caracterização do crime que a propriedade rural esteja localizada em zona de fronteira internacional."
            },
            gabarito: "D",
            explicacao: "O Artigo 149 do CP pune a redução a condição análoga à de escravo (incluindo submissão a jornada exaustiva, condições degradantes ou retenção de documentos). O § 2º estabelece que a pena é aumentada de METADE se o crime é cometido contra criança ou adolescente (I) ou por motivo de preconceito de raça, cor, etnia, religião ou origem (II)."
        }
    ]
};