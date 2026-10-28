Adicione duas novas funcionalidades ao site da APRI, mantendo exatamente o mesmo design system já usado no projeto (header vermelho/bordô, botões dourados, fundo bege claro, cards brancos com sombra suave, tipografia serifada nos títulos, mesma estrutura de tabs usada em "Centro de Conteúdos").
1. Nova aba "Bens Tombados" dentro de Centro de Conteúdos
Adicione uma terceira aba ao lado de "Conteúdos Institucionais" e "Conteúdos Dinâmicos", chamada "Bens Tombados".
Cabeçalho da página:
•	Título: "Bens Tombados de Itu"
•	Subtítulo: "Reunimos aqui, de forma acessível, os bens protegidos por lei nos âmbitos municipal, estadual e federal. As informações têm caráter informativo e cultural, para dados oficiais e atualizados, consulte sempre o órgão responsável."
Barra de filtros logo abaixo: filtro por "Esfera de Proteção" (Municipal / Estadual - CONDEPHAAT / Federal - IPHAN) e filtro por região/bairro.
Grid de cards, no mesmo padrão visual dos cards de "Blog e Notícias" (foto no topo, tag colorida indicando a esfera de proteção, título, endereço, resumo de 2-3 linhas, link "Saiba mais"). Use este card de exemplo para preencher o mock:
•	Tag: Estadual • CONDEPHAAT
•	Título: Igreja Matriz de Nossa Senhora da Candelária
•	Endereço: Praça Padre Miguel, Centro Histórico
•	Resumo: "Um dos marcos mais reconhecidos do centro histórico de Itu, erguida ainda no período colonial. Reformada diversas vezes ao longo dos séculos, guarda até hoje elementos originais de sua arquitetura religiosa."
•	Botão: Saiba mais →
Página de detalhe (ao clicar num card): galeria de fotos, histórico completo, e um bloco final destacado:
•	Título do bloco: "Situação de Tombamento"
•	Texto: "Este bem é protegido pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo), o que significa que qualquer intervenção — reforma, pintura, ampliação — depende de autorização prévia do órgão."
•	Botão: Consultar informação oficial →
Bloco de ajuda no final da listagem, no mesmo estilo do card "Ainda tem dúvidas?" já usado em "Como Participar":
•	Título: "Não encontrou o bem que procura?"
•	Texto: "Nossa lista está em constante atualização. Caso o imóvel que você busca não esteja aqui, você pode consultar diretamente o mapa oficial do Governo do Estado, indicando o endereço exato."
•	Botão: Acessar Portal IDE-SP →
2. Seção "Proteja o Patrimônio" (logo abaixo, antes do rodapé)
Fundo destacado, mesmo tom usado no bloco "Preserve a memória de Itu" da home.
•	Título: "Percebeu dano a um bem tombado?"
•	Texto de apoio: "A APRI atua na intermediação de projetos de restauro e na orientação da comunidade, mas não possui poder de fiscalização. Se você identificou uma alteração irregular em um imóvel protegido, o caminho correto é acionar diretamente o órgão responsável pela esfera de tombamento daquele bem."
Passo a passo numerado (1, 2, 3):
1.	Identifique a esfera de proteção do imóvel na lista de Bens Tombados acima
2.	Acione o canal oficial correspondente (veja abaixo)
3.	Em caso de dúvida sobre qual canal procurar, fale com a APRI
Três cards lado a lado, mesmo padrão dos cards de "Links Institucionais":
•	Card 1 — Prefeitura de Itu: "Responsável por bens com tombamento municipal e questões de licenciamento de obras no centro histórico." Botão: Entrar em contato
•	Card 2 — CONDEPHAAT: "Responsável por bens com tombamento estadual. Recebe denúncias e questionamentos através do sistema SEI do Governo de São Paulo." Botão: Acessar canal oficial
•	Card 3 — IPHAN: "Responsável por bens com tombamento federal, de relevância histórica e cultural nacional." Botão: Acessar canal oficial
Mantenha a paleta de cores, fontes e espaçamento idênticos ao restante do site já existente no arquivo.
Redesenhe os cards da seção "Publicações e Documentos Oficiais" (aba Conteúdos Institucionais, dentro de Centro de Conteúdos), removendo os múltiplos botões atuais e simplificando a interação. Mantenha o design system do site (cores, tipografia, sombra dos cards já usados no projeto).
Novo comportamento do card (visão de visitante, não logado):
•	O card inteiro é a área clicável — remova o botão "Fazer Login" de dentro do card.
•	Estrutura do card: tag de tipo de conteúdo (Artigo / Livro / Relatório) no canto superior, data, título do documento, breve descrição de uma linha, e um selo discreto no canto (ícone de cadeado + texto "Exclusivo Associados") — sem botão.
•	Ao clicar em qualquer parte do card, abrir um modal centralizado (não navegar de página) com: título "Conteúdo exclusivo para associados", texto explicando "Este material faz parte do acervo restrito da APRI, disponível para nossos associados", botão principal "Fazer Login" e um link secundário "Ainda não é associado? Saiba como se associar" apontando para a página Como Participar.
Novo comportamento do card (visão de associado, logado):
•	Mesmo layout de card, sem o selo de cadeado.
•	Clicar em qualquer parte do card leva direto à leitura/visualização do conteúdo — sem menu de opções ou botões extras competindo visualmente.
•	Se houver ação secundária de download, represente como um ícone pequeno (não um botão de texto) no canto do card, com peso visual claramente menor que o clique principal.
O objetivo é ter apenas uma ação clara por card em cada estado — nunca mais de um botão de texto visível ao mesmo tempo. Aplique o mesmo padrão de simplificação a todos os cards da seção "Publicações e Documentos Oficiais".



