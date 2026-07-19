// =========================================================================
// BANCO DE DADOS LOCAL — AULA 03: DO CONCURSO DE PESSOAS (MÉTODO MISSÃO)
// =========================================================================
const meusSimulados = [
    {
        titulo: `Questão 01 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Tício e Mévio combinam verbalmente a prática de um crime de furto qualificado em um estabelecimento comercial. No dia dos fatos, Tício desiste voluntariamente antes de iniciar qualquer ato de execução e permanece em sua residência. Mévio, agindo sozinho, vai até o local, quebra a vidraça, ingressa no estabelecimento e subtrai as mercadorias. Considerando as disposições expressas do Artigo 31 do Código Penal sobre a punibilidade do ajuste, da determinação ou instigação e do auxílio, assinale a afirmativa correta em relação à conduta de Tício:`,
        alternativas: [
            `A) Tício responderá pelo crime de furto qualificado consumado na qualidade de partícipe por força da Teoria Monista adotada pelo Código Penal.`,
            `B) Tício responderá apenas por crime de furto simples na modalidade tentada, aplicando-se a redução de pena de um sexto a um terço.`,
            `C) O ajuste meramente verbal entre Tício e Mévio não é punível, haja vista que a conduta de furto executada por Mévio ocorreu de forma autônoma e sem atos de execução por parte de Tício.`,
            `D) Tício responderá por crime de associação criminosa isolado em concurso material com os atos executórios praticados por Mévio.`,
            `E) Tício responderá pelo crime na modalidade culposa em razão da negligência no dever de impedir o resultado ilícito combinado.`
        ],
        correta: 2, 
        letraGabarito: `C`,
        explicacao: `A resolução encontra-se na literalidade do Artigo 31 do Código Penal: "O ajuste, a determinação ou instigação e o auxílio, salvo disposição em contrário, não são puníveis, se o crime não chega, pelo menos, a ser tentado". Como Tício não iniciou nenhum ato executório e o furto foi praticado exclusivamente por Mévio de forma autônoma (rompendo o nexo de causalidade com o ajuste prévio de coautoria), o ajuste de Tício permanece impunível.`
    },
    {
        titulo: `Questão 02 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Determinado indivíduo, que exerce a função pública de escrivão de polícia, decide subtrair um computador da repartição onde trabalha para proveito próprio. Ele conta com o auxílio material direto de seu irmão, que é particular e sabe perfeitamente que o agente é funcionário público e se vale dessa facilidade. Ambos consumam o delito. Diante das regras de comunicabilidade de condições e circunstâncias de caráter pessoal previstas no Artigo 30 do Código Penal, assinale a opção correta:`,
        alternativas: [
            `A) O funcionário público responderá pelo crime de peculato-furto e o particular responderá pelo crime autônomo de furto comum, em razão da incomunicabilidade absoluta das qualidades pessoais.`,
            `B) Ambos responderão pelo crime de peculato-furto, uma vez que a condição de funcionário público é elementar do crime e se comunica ao particular que tinha ciência dela.`,
            `C) O processo em relação ao particular deve ser extinto, posto que o tipo de peculato é classificado como crime próprio e exige qualidade especial do sujeito ativo.`,
            `D) O particular responderá por peculato com pena reduzida de metade, e o funcionário público responderá por peculato em sua modalidade majorada de um terço.`,
            `E) Ambos responderão por furto qualificado pelo concurso de pessoas, operando-se a desclassificação forçada para o crime mais brando.`
        ],
        correta: 1, 
        letraGabarito: `B`,
        explicacao: `A alternativa reflete estritamente o teor do Artigo 30 do Código Penal: "Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime". Como a qualidade de funcionário público é elementar do crime próprio de peculato (Artigo 312 do CP), ela se estende e se comunica ao particular (coautor ou partícipe) que concorreu para o fato conhecendo essa condição.`
    },
    {
        titulo: `Questão 03 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Mévio induz e instiga seu amigo Caio a cometer um crime de roubo majorado pelo emprego de arma branca contra um transeunte. Caio aceita a ideia e executa integralmente os atos executórios que levaram à consumação do delito patrimonial, enquanto Mévio permanece vigiando o local para garantir a fuga. Sabendo que o Código Penal adota a Teoria Monista (ou unitária) como regra geral, assinale o enquadramento correto da conduta dos agentes à luz do Artigo 29, <em>caput</em>, do CP:`,
        alternativas: [
            `A) Caio responderá como autor e Mévio não responderá por crime algum, pois a participação moral não é punida pelo direito penal brasileiro.`,
            `B) Caio e Mévio responderão em processos apartados, sendo aplicada a Teoria Pluralista para fragmentar a infração penal conforme o grau de violência de cada comportamento.`,
            `C) Ambos cometeram o crime de roubo majorado e incidem nas penas a este cominadas, na medida de sua culpabilidade, haja vista que quem concorre para o crime incide na mesma infração penal.`,
            `D) Mévio responderá por crime autônomo de constrangimento ilegal e Caio responderá individualmente pelo crime de roubo consumado.`,
            `E) Aplica-se a absolvição compulsória a ambos os agentes em razão da impossibilidade técnica de individualização judicial imediata da conduta.`
        ],
        correta: 2, 
        letraGabarito: `C`,
        explicacao: `A regra do Artigo 29, <em>caput</em>, do Código Penal acolhe a Teoria Monista (ou unitária): "Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade". Portanto, embora tenham praticado atos formalmente distintos (um executou a grave ameaça e o outro realizou a instigação e vigilância), ambos incidem no mesmo tipo penal unificado.`
    },
    {
        titulo: `Questão 04 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Tício resolve participar de um crime de furto simples planejado por seu comparsa. Sua participação consiste estritamente em emprestar uma chave micha para a abertura da porta de uma residência abandonada. Durante a execução, de forma totalmente imprevista e sem qualquer ajuste com Tício, o comparsa decide desferir pauladas na vítima que dormia no local, consumando um latrocínio. De acordo com o Artigo 29, § 2º do Código Penal (Cooperação dolosamente distinta), qual será o tratamento penal conferido a Tício?`,
        alternativas: [
            `A) Tício responderá obrigatoriamente por latrocínio consumado em coautoria funcional, em razão da aplicação cega da Teoria Monista absoluta.`,
            `B) Ser-lhe-á aplicada a pena do crime menos grave que quis participar (furto simples), aumentada até metade se o resultado mais grave era previsível.`,
            `C) Tício responderá por homicídio culposo em concurso com o crime de furto qualificado por rompimento de obstáculo.`,
            `D) O processo penal de Tício será anulado, uma vez que a lei penal impede a punição de partícipes quando houver desvio subjetivo quantitativo.`,
            `E) Tício responderá como coautor de roubo simples consumado, desprezando-se a violência física praticada pelo comparsa.`
        ],
        correta: 1, 
        letraGabarito: `B`,
        explicacao: `A hipótese trata da Cooperação Dolosamente Distinta do Artigo 29, § 2º, do CP: "Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave". Tício responde pelo dolo de furto, sofrendo o aumento de até metade caso a violência do latrocínio fosse considerada previsível.`
    },
    {
        titulo: `Questão 05 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `No que tange à autoria, coautoria e participação no Direito Penal brasileiro, assinale a alternativa que está em perfeita consonância com os parâmetros da culpabilidade e da minorante da participação de menor importância disposta no Artigo 29, § 1º, do Código Penal:`,
        alternativas: [
            `A) Se a participação for de menor importância, a pena será reduzida de um sexto a um terço, devendo o juiz fundamentar o patamar fixado com base na relevância causal da conduta.`,
            `B) A participação de menor importância autoriza o magistrado a substituir a pena privativa de liberdade por multa, mesmo que o crime envolva grave ameaça.`,
            `C) O Código Penal determina que a pena do partícipe de menor importância seja reduzida fixamente da metade, sem margem discricionária para o julgador.`,
            `D) A causa de diminuição da participação de menor importância é plenamente extensível aos coautores que dominam o curso final do fato típico.`,
            `E) A menor importância da conduta afasta a própria tipicidade material do crime por aplicação direta do princípio da insignificância processual.`
        ],
        correta: 0, 
        letraGabarito: `A`,
        explicacao: `Conforme dispõe expressamente o Artigo 29, § 1º, do Código Penal: "Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço". Trata-se de uma causa de diminuição aplicável na terceira fase da dosimetria da pena, restrita à figura do partícipe (visto que o coautor executa atos de autoria funcional e seu peso causal impede tal minoração).`
    },
    {
        titulo: `Questão 06 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `No que tange às teorias que buscam explicar a natureza jurídica da participação criminal no concurso de agentes, a doutrina em âmbito nacional aponta qual modelo de acessoriedade como o acolhido de forma geral pelo Código Penal brasileiro?`,
        alternativas: [
            `A) Teoria da Acessoriedade Mínima, bastando que o fato principal praticado pelo autor seja meramente típico.`,
            `B) Teoria da Acessoriedade Limitada, exigindo-se que a conduta principal do autor seja um fato típico e ilícito (antijurídico).`,
            `C) Teoria da Acessoriedade Máxima, que demanda que o fato principal do autor seja típico, ilícito e culpável.`,
            `D) Teoria da Hiperacessoriedade, exigindo-se que o fato principal do autor seja típico, ilícito, culpável e que o autor sofra punição efetiva.`,
            `E) Teoria da Autonomia Absoluta, na qual a conduta do partícipe possui tipicidade independente e desvinculada do autor principal.`
        ],
        correta: 1, 
        letraGabarito: `B`,
        explicacao: `Embora o Código Penal não declare expressamente em seu texto, a doutrina e a jurisprudência criminal aplicada nas provas de Carreiras Policiais sedimentam que o Brasil adotou a Teoria da Acessoriedade Limitada (ou restrita). Para que o partícipe seja punido por sua conduta acessória, basta que o autor principal tenha iniciado a execução de um fato que preencha os requisitos de tipicidade e ilicitude, sendo dispensável a análise da culpabilidade do autor.`
    },
    {
        titulo: `Questão 07 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Tício e Mévio, agindo em concurso de agentes e com unidade de desígnios, decidem praticar um furto noturno em uma residência. No momento da execução fática, Tício ingressa no imóvel enquanto Mévio permanece do lado de fora prestando vigilância e apoio logístico na calçada. Desconhecido de ambos, Caio, inimigo pessoal do proprietário da casa e sem qualquer vínculo ou ajuste com Tício e Mévio, aproveita-se da janela aberta por eles e também subtrai objetos da residência. Diante da dinâmica narrada, a conduta isolada de Caio caracteriza:`,
        alternativas: [
            `A) Coautoria sucessiva material por adesão implícita de vontades.`,
            `B) Autoria colateral, haja vista a ausência de liame subjetivo (vínculo psicológico) entre os agentes concorrentes.`,
            `C) Coautoria funcional por domínio comum do fato típico praticado.`,
            `D) Participação por cumplicidade omissiva em relação aos primeiros autores.`,
            `E) Crime de furto de autoria incerta, gerando a absolvição compulsória de todos os envolvidos.`
        ],
        correta: 1, 
        letraGabarito: `B`,
        explicacao: `A hipótese reflete o conceito clássico de Autoria Colateral. Ela ocorre quando dois ou mais agentes executam o mesmo fato criminoso de forma concomitante, mas sem que haja entre eles qualquer liame subjetivo (ajuste, acordo ou vínculo psicológico). Sem o liame subjetivo, não se configura o concurso de pessoas do artigo 29 do CP, respondendo cada agente individualmente por sua própria conduta.`
    },
    {
        titulo: `Questão 08 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Considere a figura jurídica da autoria mediata no Direito Penal brasileiro. Assinale a alternativa que indica uma hipótese fática que configura juridicamente a ocorrência desse instituto à luz da doutrina e do Código Penal:`,
        alternativas: [
            `A) O agente comete o crime impulsionado por embriaguez voluntária e completa pelo álcool ou substâncias de efeitos análogos.`,
            `B) Dois indivíduos realizam a conduta típica dividindo as tarefas de execução material de forma idêntica e simultânea no tempo.`,
            `C) O autor executa o crime utilizando-se de uma pessoa sem capacidade de discernimento ou sob coação moral irresistível como mero instrumento material executório.`,
            `D) O crime é praticado por meio de omissão imprópria por agente que detinha a posição jurídica de garante do resultado.`,
            `E) O mentor intelectual planeja os detalhes do roubo bancário e contrata terceiros que executam o crime com total liberdade de arbítrio.`
        ],
        correta: 2, 
        letraGabarito: `C`,
        explicacao: `Na autoria mediata, o autor (mediato) domina a vontade de um terceiro, utilizando-o como mero instrumento (corpo ou executor sem dolo/culpa) para a realização da conduta proibida. Ocorre principalmente nas hipóteses de erro determinado por terceiro (Art. 20, § 2º do CP) e de coação moral irresistível ou obediência hierárquica (Art. 22 do CP). O executor direto atua sem culpabilidade ou sem dolo.`
    },
    {
        titulo: `Questão 09 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `A cooperação dolosamente distinta, prevista no Artigo 29, § 2º, do Código Penal, excepciona pontualmente a aplicação rígida da Teoria Monista. A respeito dos critérios técnicos de aplicação e exasperação de pena contidos no referido parágrafo, assinale a afirmativa correta:`,
        alternativas: [
            `A) A pena do crime menos grave será aumentada até a metade na hipótese de ter sido estritamente previsível o resultado mais grave.`,
            `B) O juiz aplicará a pena do crime mais grave reduzida de dois terços se o agente provar que não possuía registros criminais.`,
            `C) A previsibilidade do resultado mais grave autoriza a imposição de pena em dobro para o mandante intelectual do crime.`,
            `D) O desvio subjetivo entre os concorrentes gera a anulação absoluta da instrução processual penal por violação à ampla defesa.`,
            `E) A majoração de pena prevista no parágrafo aplica-se de forma conclusão mesmo se o resultado mais grave decorrer de caso fortuito.`
        ],
        correta: 0, 
        letraGabarito: `A`,
        explicacao: `A alternativa reproduz fielmente a segunda parte do texto do Artigo 29, § 2º, do Código Penal: "...essa pena [do crime menos grave] será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave". Trata-se da consagração legal da responsabilidade penal baseada na previsibilidade objetiva do desvio dos comparsas.`
    },
    {
        titulo: `Questão 10 (Inédita/Carreiras Policiais - 2026) - Direito Penal - Do Concurso de Pessoas`,
        enunciado: `Tício instiga Mévio a subtrair as joias de uma residência. Mévio, convencido pelos argumentos de Tício, vai até o local portando ferramentas de arrombamento. Contudo, ao se aproximar do imóvel, depara-se com um forte esquema de segurança privada e decide voluntariamente ir embora, sem iniciar qualquer ato de execução material do furto. Diante do exposto e do Artigo 31 do Código Penal, assinale o desfecho correto em relação à responsabilidade de Tício:`,
        alternativas: [
            `A) Tício responderá por tentativa de furto simples qualificado pela instigação moral.`,
            `B) Tício não será punido, uma vez que o crime planejado não chegou sequer a ser tentado por Mévio, operando-se a impunibilidade do ato acessório.`,
            `C) Aplica-se a Tício a pena de crime de perigo abstrato isolado por violação à paz pública.`,
            `D) Tício responderá por ato preparatório punível com metade da pena abstrata do furto consumado.`,
            `E) Operar-se-á o perdão judicial automático em benefício de Tício em razão da desistência voluntária do executor.`
        ],
        correta: 1, 
        letraGabarito: `B`,
        explicacao: `A questão cobra a exata aplicação prática do Artigo 31 do Código Penal. O ordenamento brasileiro adota a Teoria da Hiperacessoriedade Mitigada. Os atos de participação (instigação, induzimento ou auxílio material) só ganham relevância penal se o autor principal ingressar, no mínimo, na fase de tentativa da infração. Como Mévio desistiu antes de iniciar a execução, a conduta de Tício permanece irrelevante para o direito penal.`
    }
];
