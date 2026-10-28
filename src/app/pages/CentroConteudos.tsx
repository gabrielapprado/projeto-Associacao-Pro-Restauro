import { useState, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { Calendar, Tag, Clock, ArrowRight, Download, ExternalLink, Lock, X, ChevronLeft, MapPin, AlertTriangle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import styles from "./CentroConteudos.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";
const WINE = "#A64951";
const TERRACOTA = "#D98B48";

const ESFERA_COLOR: Record<string, string> = {
  Municipal: TERRACOTA,
  Estadual: WINE,
  Federal: "#1a5276",
};

const institucionais = [
  {
    id: 1,
    tipo: "Artigo",
    titulo: "Manual de Preservação do Patrimônio Histórico de Itu",
    desc: "Guia completo sobre técnicas e boas práticas de preservação aplicadas ao contexto de Itu.",
    data: "Mar 2026",
    link: "#",
    restrito: true,
  },
  {
    id: 2,
    tipo: "Livro",
    titulo: "História Arquitetônica de Itu: Séculos XVIII a XX",
    desc: "Publicação institucional que documenta a evolução arquitetônica da cidade ao longo de três séculos.",
    data: "Jan 2026",
    link: "#",
    restrito: true,
  },
  {
    id: 3,
    tipo: "Relatório",
    titulo: "Relatório Anual de Atividades 2025",
    desc: "Prestação de contas detalhada das ações, projetos e recursos da APRI em 2025.",
    data: "Dez 2025",
    link: "#",
    restrito: true,
  },
  {
    id: 4,
    tipo: "Artigo",
    titulo: "Educação Patrimonial: Metodologias e Aplicações",
    desc: "Documento técnico sobre estratégias de educação patrimonial desenvolvidas pela APRI.",
    data: "Nov 2025",
    link: "#",
    restrito: true,
  },
];

const linksExternos = [
  {
    titulo: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)",
    url: "http://portal.iphan.gov.br/",
    desc: "Portal oficial do IPHAN com informações sobre patrimônio cultural brasileiro",
  },
  {
    titulo: "CONDEPHAAT",
    url: "http://www.cultura.sp.gov.br/condephaat/",
    desc: "Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo",
  },
  {
    titulo: "VERSALIC",
    url: "http://versalic.cultura.gov.br/",
    desc: "Portal de visualização do sistema de apoio às Leis de Incentivo à Cultura",
  },
  {
    titulo: "Lei Rouanet — Projetos de Preservação",
    url: "http://leideincentivoacultura.cultura.gov.br/",
    desc: "Projetos de preservação do patrimônio cultural aprovados na Lei Rouanet",
  },
  {
    titulo: "ProAC ICMS",
    url: "http://www.proac.sp.gov.br/",
    desc: "Programa de Ação Cultural do Estado de São Paulo",
  },
];

const blogPosts = [
  {
    id: 1,
    titulo: "A importância da preservação do Centro Histórico",
    categoria: "Preservação",
    data: "02 Mai 2026",
    leitura: "5 min",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    titulo: "Como identificar estilos arquitetônicos coloniais",
    categoria: "Arquitetura",
    data: "28 Abr 2026",
    leitura: "7 min",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    titulo: "Restauro da Igreja Matriz: avanços e desafios",
    categoria: "Notícias",
    data: "20 Abr 2026",
    leitura: "4 min",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

const eventos = [
  {
    id: 1,
    titulo: "Palestra: Patrimônio e Desenvolvimento Urbano",
    data: "15 Jun 2026",
    local: "Auditório APRI",
    vagas: 50,
    img: "https://images.unsplash.com/photo-1763224810010-4e5d23f261af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    titulo: "Visita Guiada: Casarões do Centro Histórico",
    data: "22 Jun 2026",
    local: "Saída da Praça da Matriz",
    vagas: 25,
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    titulo: "Workshop: Fotografia de Patrimônio",
    data: "30 Jun 2026",
    local: "Sede APRI",
    vagas: 15,
    img: "https://images.unsplash.com/photo-1735551031738-037221642171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

interface BemTombado {
  id: number;
  titulo: string;
  endereco: string;
  esfera: "Municipal" | "Estadual" | "Federal";
  orgao: string;
  bairro: string;
  resumo: string;
  img: string;
  imgs: string[];
  historico: string;
  situacaoTexto: string;
  linkOficial: string;
}

const bensTombados: BemTombado[] = [
  {
    id: 1,
    titulo: "Igreja Matriz de Nossa Senhora da Candelária",
    endereco: "Praça Padre Miguel, Centro Histórico",
    esfera: "Estadual",
    orgao: "CONDEPHAAT",
    bairro: "Centro Histórico",
    resumo: "Um dos marcos mais reconhecidos do centro histórico de Itu, erguida ainda no período colonial. Reformada diversas vezes ao longo dos séculos, guarda até hoje elementos originais de sua arquitetura religiosa.",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1517822882498-77a99a9e5bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "A Igreja Matriz de Nossa Senhora da Candelária é um dos edifícios religiosos mais antigos de Itu, com suas fundações remontando ao século XVIII. Construída em estilo colonial luso-brasileiro, a edificação passou por diversas reformas ao longo dos séculos XIX e XX, sem perder, contudo, seus elementos estruturais e ornamentais originais. A torre sineira, os altares laterais em talha dourada e o piso em pedra portuguesa são testemunhos vivos da devoção e do refinamento artístico da época colonial. O tombamento estadual pelo CONDEPHAAT reconheceu a excepcional importância deste bem para a identidade cultural de Itu e do Estado de São Paulo.",
    situacaoTexto: "Este bem é protegido pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo), o que significa que qualquer intervenção — reforma, pintura, ampliação — depende de autorização prévia do órgão.",
    linkOficial: "http://www.cultura.sp.gov.br/condephaat/",
  },
  {
    id: 2,
    titulo: "Museu Republicano Convenção de Itu",
    endereco: "Rua Barão do Itaim, 67 — Centro",
    esfera: "Federal",
    orgao: "IPHAN",
    bairro: "Centro Histórico",
    resumo: "Sede histórica da Convenção Republicana de 1873, onde se lançaram as bases do movimento republicano brasileiro. O edifício neoclássico abriga hoje um museu com acervo de grande relevância para a história política do país.",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Em 18 de abril de 1873, a cidade de Itu sediou a Convenção Republicana que reuniu líderes de todo o interior paulista para elaborar o manifesto republicano e fundar o Partido Republicano Paulista. O sobrado onde ocorreu o evento, construído no início do século XIX, tornou-se um símbolo da luta pela República no Brasil. Tombado pelo IPHAN como patrimônio histórico nacional, o edifício foi restaurado e transformado em museu pela Universidade de São Paulo, preservando documentos, mobiliário e artefatos da época.",
    situacaoTexto: "Este bem é protegido pelo IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional), que classifica o imóvel como de relevância histórica e cultural nacional. Qualquer intervenção exige autorização prévia do instituto.",
    linkOficial: "http://portal.iphan.gov.br/",
  },
  {
    id: 3,
    titulo: "Antiga Estação Ferroviária de Itu",
    endereco: "Av. Tiradentes, s/n — Bairro Estação",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Bairro Estação",
    resumo: "Construída no final do século XIX para atender à Estrada de Ferro Sorocabana, a estação é um exemplar raro da arquitetura ferroviária paulista. Desativada como terminal de passageiros, mantém sua estrutura original preservada.",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "A Estação Ferroviária de Itu foi inaugurada em 1887, como parte do traçado da Estrada de Ferro Sorocabana que ligava o interior ao Porto de Santos. Sua arquitetura em tijolos aparentes, com marquise metálica e colunas de ferro fundido importadas da Europa, reflete o período de prosperidade cafeeira da região. O movimento ferroviário foi fundamental para o desenvolvimento econômico e social de Itu nas primeiras décadas do século XX. Tombada pelo município, a edificação é objeto de um projeto de revitalização que prevê seu uso cultural e turístico.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
  {
    id: 4,
    titulo: "Convento Nossa Senhora do Carmo",
    endereco: "Largo do Carmo, 1 — Centro Histórico",
    esfera: "Estadual",
    orgao: "CONDEPHAAT",
    bairro: "Centro Histórico",
    resumo: "Conjunto arquitetônico do século XVIII formado pela igreja e convento carmelita, com notável acervo de arte sacra. O claustro e as pinturas do forro da nave são considerados obras excepcionais da arte colonial paulista.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Fundado pelos frades carmelitas em meados do século XVIII, o Convento Nossa Senhora do Carmo é um dos conjuntos religiosos mais completos e bem preservados do interior paulista. Além da Igreja, o complexo inclui o convento propriamente dito, com celas, refeitório e biblioteca, e o claustro central — um espaço de meditação em estilo colonial com jardim e fonte originais. As pinturas do forro da nave, atribuídas a artistas locais do século XVIII, representam cenas da vida de Nossa Senhora e dos santos carmelitas, compondo um ciclo pictórico de rara qualidade.",
    situacaoTexto: "Este bem é protegido pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo), o que significa que qualquer intervenção — reforma, pintura, ampliação — depende de autorização prévia do órgão.",
    linkOficial: "http://www.cultura.sp.gov.br/condephaat/",
  },
  {
    id: 5,
    titulo: "Solar dos Andrades",
    endereco: "Rua Visconde do Rio Claro, 145 — Centro",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Centro",
    resumo: "Casarão oitocentista pertencente a uma das famílias mais influentes da oligarquia cafeeira de Itu. A fachada neoclássica e as pinturas decorativas internas são exemplares raros da arquitetura doméstica de elite do século XIX.",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Construído entre 1855 e 1862, o Solar dos Andrades é um dos poucos exemplares sobreviventes das residências aristocráticas que pontuavam o centro de Itu no auge do ciclo do café. A fachada em cantaria com pilastras toscanas e frontão triangular revela a influência do neoclassicismo europeu que chegava ao Brasil naquele período. O interior mantém forros em madeira pintada, assoalhos de peroba-rosa e azulejos portugueses que decoram os ambientes de serviço. O tombamento municipal foi declarado em 2001, após ameaça de demolição para construção de edifício comercial.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
  {
    id: 6,
    titulo: "Palacete Marechal Floriano",
    endereco: "Rua XV de Novembro, 210 — Centro",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Centro",
    resumo: "Sobrado de arquitetura eclética construído no início do século XX, com fachada ornamentada em estuque e platibanda decorada. Pertenceu a uma família de comerciantes ligada ao desenvolvimento urbano de Itu durante a República Velha.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Erguido entre 1902 e 1906, o Palacete Marechal Floriano é um dos poucos exemplares do ecletismo arquitetônico ainda preservados no centro de Itu. Sua fachada, com pilastras coríntias, janelas em arco pleno e ornamentos em estuque importados da Europa, reflete a prosperidade da burguesia local no início do século XX. O imóvel funcionou sucessivamente como residência particular, sede de clube social e, nas últimas décadas, como escritório comercial. O tombamento municipal, declarado em 2009, foi motivado pelo risco de demolição para implantação de um estacionamento. Desde então, o edifício aguarda recursos para restauro integral da fachada e cobertura.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
];

const bairros = ["Todos", ...Array.from(new Set(bensTombados.map((b) => b.bairro)))];

type Tab = "institucional" | "dinamico" | "tombados";
type Esfera = "Todos" | "Municipal" | "Estadual" | "Federal";

export default function CentroConteudos() {
  const [activeTab, setActiveTab] = useState<Tab>("institucional");
  const [loginModal, setLoginModal] = useState(false);
  const [selectedBem, setSelectedBem] = useState<BemTombado | null>(null);
  const [filterEsfera, setFilterEsfera] = useState<Esfera>("Todos");
  const [filterBairro, setFilterBairro] = useState("Todos");
  const channelsRef = useRef<HTMLDivElement>(null);
  const { userType } = useAuth();

  const scrollToChannels = () => {
    channelsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isAssociado = userType === "associado" || userType === "administrador";

  const bensFiltrados = useMemo(() => {
    return bensTombados.filter((b) => {
      const esferaOk = filterEsfera === "Todos" || b.esfera === filterEsfera;
      const bairroOk = filterBairro === "Todos" || b.bairro === filterBairro;
      return esferaOk && bairroOk;
    });
  }, [filterEsfera, filterBairro]);

  const tabLabels: { key: Tab; label: string }[] = [
    { key: "institucional", label: "Conteúdos Institucionais" },
    { key: "dinamico", label: "Conteúdos Dinâmicos" },
    { key: "tombados", label: "Bens Tombados" },
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Centro de Conteúdos
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Acesse materiais institucionais, artigos, notícias e eventos da APRI
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.tabBorder}`}>
            {tabLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setSelectedBem(null); }}
                className={`${styles.button} ${activeTab === key ? styles.tabBtnActive : styles.tabBtnInactive}`}
              >
                {label}
                {activeTab === key && (
                  <div className={`${styles.centroConteudosStyle} ${styles.tabIndicator}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEÚDOS INSTITUCIONAIS ── */}
      {activeTab === "institucional" && (
        <>
          <section className={styles.section2}>
            <div className={styles.container}>
              <div className={styles.centroConteudosStyle2}>
                <h2 className={styles.heading}>
                  Publicações e Documentos Oficiais
                </h2>
                <p className={styles.body}>
                  Artigos técnicos, livros, relatórios e materiais produzidos pela APRI
                </p>
              </div>

              <div className={styles.grid}>
                {institucionais.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => { if (!isAssociado) setLoginModal(true); }}
                    className={styles.card}
                  >
                    {/* Type tag + date row */}
                    <div className={styles.row2}>
                      <span
                        className={`${styles.label} ${styles.tipoBadge}`}
                      >
                        {item.tipo}
                      </span>
                      <div className={styles.row3}>
                        <span className={styles.label2}>{item.data}</span>
                        {/* Download icon for associates only */}
                        {isAssociado && (
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className={styles.button2}
                            title="Baixar documento"
                          >
                            <Download size={15} color="#4B1919" />
                          </button>
                        )}
                        {/* Lock badge for non-associates */}
                        {!isAssociado && item.restrito && (
                          <span
                            className={`${styles.label3} ${styles.lockBadge}`}
                          >
                            <Lock size={11} /> Associados
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className={styles.heading2}>
                      {item.titulo}
                    </h3>
                    <p className={styles.body2}>
                      {item.desc}
                    </p>

                    {isAssociado && (
                      <div className={styles.row4}>
                        Acessar conteúdo <ArrowRight size={14} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Links Institucionais Externos */}
          <section className={styles.section3}>
            <div className={styles.container}>
              <div className={styles.centroConteudosStyle2}>
                <h2 className={styles.heading}>
                  Links Institucionais
                </h2>
                <p className={styles.body}>
                  Órgãos e programas de apoio ao patrimônio cultural
                </p>
              </div>

              <div className={styles.grid2}>
                {linksExternos.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.button3}
                  >
                    <div className={styles.row5}>
                      <h3 className={styles.heading3}>
                        {link.titulo}
                      </h3>
                      <ExternalLink size={18} color={RED} className={styles.icon} />
                    </div>
                    <p className={styles.body3}>{link.desc}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CONTEÚDOS DINÂMICOS ── */}
      {activeTab === "dinamico" && (
        <>
          <section className={styles.section2}>
            <div className={styles.container}>
              <div className={styles.centroConteudosStyle3}>
                <h2 className={styles.heading}>
                  Blog e Notícias
                </h2>
                <p className={styles.body}>
                  Artigos, novidades e atualizações sobre patrimônio e cultura
                </p>
              </div>

              <div className={styles.grid3}>
                {blogPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.card2}
                  >
                    <img src={post.img} alt={post.titulo} className={styles.image} />
                    <div className={styles.centroConteudosStyle4}>
                      <div className={styles.row6}>
                        <Tag size={12} color={RED} />
                        <span className={styles.label4}>{post.categoria}</span>
                        <span className={styles.label2}>• {post.data}</span>
                      </div>
                      <h3 className={styles.heading4}>
                        {post.titulo}
                      </h3>
                      <div className={styles.row7}>
                        <span className={styles.label5}>
                          <Clock size={12} /> {post.leitura}
                        </span>
                        <button className={styles.button4}>
                          Ler mais <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section3}>
            <div className={styles.container}>
              <div className={styles.centroConteudosStyle3}>
                <h2 className={styles.heading}>
                  Próximos Eventos
                </h2>
                <p className={styles.body}>
                  Participe de palestras, visitas e workshops promovidos pela APRI
                </p>
              </div>

              <div className={styles.grid3}>
                {eventos.map((ev, i) => (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.card3}
                  >
                    <img src={ev.img} alt={ev.titulo} className={styles.image} />
                    <div className={styles.centroConteudosStyle4}>
                      <div className={styles.row6}>
                        <Calendar size={14} color={RED} />
                        <span className={styles.label6}>{ev.data}</span>
                      </div>
                      <h3 className={styles.heading4}>
                        {ev.titulo}
                      </h3>
                      <p className={styles.body4}>
                        📍 {ev.local}
                      </p>
                      <p className={styles.text}>
                        {ev.vagas} vagas disponíveis
                      </p>
                      <button
                        className={styles.button5}
                      >
                        Inscrever-se
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── BENS TOMBADOS ── */}
      {activeTab === "tombados" && !selectedBem && (
        <>
          {/* Section header */}
          <section className={styles.section4}>
            <div className={styles.container}>
              <div className={styles.centroConteudosStyle5}>
                <h2 className={styles.headingFluidBrown}>
                  Bens Tombados de Itu
                </h2>
                <p className={styles.body5}>
                  Reunimos aqui, de forma acessível, os bens protegidos por lei nos âmbitos municipal, estadual e federal. As informações têm caráter informativo e cultural — para dados oficiais e atualizados, consulte sempre o órgão responsável.
                </p>
              </div>

              {/* Filters */}
              <div className={styles.row8}>
                <div>
                  <label className={styles.labelSm}>
                    Esfera de Proteção
                  </label>
                  <select
                    value={filterEsfera}
                    onChange={(e) => setFilterEsfera(e.target.value as Esfera)}
                    className={`${styles.select} ${styles.filterSelect}`}
                  >
                    <option value="Todos">Todos</option>
                    <option value="Municipal">Municipal</option>
                    <option value="Estadual">Estadual — CONDEPHAAT</option>
                    <option value="Federal">Federal — IPHAN</option>
                  </select>
                </div>
                <div>
                  <label className={styles.labelSm}>
                    Região / Bairro
                  </label>
                  <select
                    value={filterBairro}
                    onChange={(e) => setFilterBairro(e.target.value)}
                    className={`${styles.select2} ${styles.filterSelect}`}
                  >
                    {bairros.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cards grid */}
              {bensFiltrados.length === 0 ? (
                <p className={styles.text2}>
                  Nenhum bem tombado encontrado para os filtros selecionados.
                </p>
              ) : (
                <div className={styles.grid4}>
                  {bensFiltrados.map((bem, i) => (
                    <motion.div
                      key={bem.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedBem(bem)}
                      className={styles.card4}
                    >
                      <div className={styles.centroConteudosStyle6}>
                        <img src={bem.img} alt={bem.titulo} className={styles.image2} />
                        <span
                          className={styles.label7}
                          style={{ backgroundColor: ESFERA_COLOR[bem.esfera] }}
                        >
                          {bem.esfera} • {bem.orgao}
                        </span>
                      </div>
                      <div className={styles.centroConteudosStyle4}>
                        <h3 className={styles.heading5}>
                          {bem.titulo}
                        </h3>
                        <p className={styles.text3}>
                          <MapPin size={13} className={styles.icon2} /> {bem.endereco}
                        </p>
                        <p className={styles.body6}>
                          {bem.resumo}
                        </p>
                        <span className={styles.label8}>
                          Saiba mais <ArrowRight size={14} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Help block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${styles.centroConteudosStyle7} ${styles.helpBlock}`}
              >
                <h3 className={styles.heading6}>
                  Não encontrou o bem que procura?
                </h3>
                <p className={styles.body7}>
                  Nossa lista está em constante atualização. Caso o imóvel que você busca não esteja aqui, você pode consultar diretamente o mapa oficial do Governo do Estado, indicando o endereço exato.
                </p>
                <a
                  href="https://ide.sp.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button6}
                >
                  Acessar Portal IDE-SP <ExternalLink size={15} />
                </a>
              </motion.div>
            </div>
          </section>

          {/* Proteja o Patrimônio */}
          <section className={`${styles.section5} ${styles.sectionDarkBrown}`}>
            <div className={styles.container2}>
              <div className={styles.centroConteudosStyle8}>
                <div className={styles.row9}>
                  <AlertTriangle size={36} color={GOLD} />
                </div>
                <h2 className={`${styles.headingFluidBrown} ${styles.heading7}`}>
                  Percebeu dano a um bem tombado?
                </h2>
                <p className={`${styles.protectSubtitle} ${styles.text4}`}>
                  A APRI atua na intermediação de projetos de restauro e na orientação da comunidade, mas não possui poder de fiscalização. Se você identificou uma alteração irregular em um imóvel protegido, o caminho correto é acionar diretamente o órgão responsável pela esfera de tombamento daquele bem.
                </p>
              </div>

              {/* Numbered steps */}
              <div className={styles.column}>
                {[
                  { text: "Identifique a esfera de proteção (Municipal, Estadual e Federal) do imóvel na lista de Bens Tombados acima", hasLink: false },
                  { text: "Acione o canal oficial correspondente (veja ", hasLink: true },
                  { text: "Em caso de dúvida sobre qual canal procurar, fale com a APRI", hasLink: false },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`${styles.row10} ${styles.stepCard}`}
                  >
                    <span
                      className={`${styles.label9} ${styles.stepCircle}`}
                    >
                      {i + 1}
                    </span>
                    <p className={styles.stepCardText}>
                      {step.hasLink ? (
                        <>
                          {step.text}
                          <button
                            onClick={scrollToChannels}
                            className={`${styles.button7} ${styles.scrollBtn}`}
                          >
                            abaixo
                          </button>
                          )
                        </>
                      ) : step.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Channel cards */}
              <div ref={channelsRef} className={styles.grid5}>
                {[
                  {
                    titulo: "Prefeitura de Itu",
                    badge: "Use se o tombamento for Municipal",
                    desc: "Responsável por bens com tombamento municipal e questões de licenciamento de obras no centro histórico.",
                    btn: "Entrar em contato",
                    url: "https://www.itu.sp.gov.br/",
                  },
                  {
                    titulo: "CONDEPHAAT",
                    badge: "Use se o tombamento for Estadual",
                    desc: "Responsável por bens com tombamento estadual. Recebe denúncias e questionamentos através do sistema SEI do Governo de São Paulo.",
                    btn: "Acessar canal oficial",
                    url: "http://www.cultura.sp.gov.br/condephaat/",
                  },
                  {
                    titulo: "IPHAN",
                    badge: "Use se o tombamento for Federal",
                    desc: "Responsável por bens com tombamento federal, de relevância histórica e cultural nacional.",
                    btn: "Acessar canal oficial",
                    url: "http://portal.iphan.gov.br/",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.card5}
                  >
                    <span
                      className={`${styles.label10} ${styles.channelBadge}`}
                    >
                      {card.badge}
                    </span>
                    <h4 className={styles.heading8}>
                      {card.titulo}
                    </h4>
                    <p className={styles.body8}>{card.desc}</p>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button8}
                    >
                      {card.btn} <ExternalLink size={13} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── BEM TOMBADO DETAIL VIEW ── */}
      {activeTab === "tombados" && selectedBem && (
        <section className={styles.section6}>
          <div className={styles.container3}>
            {/* Back button */}
            <button
              onClick={() => setSelectedBem(null)}
              className={`${styles.button9} ${styles.backBtn}`}
            >
              <ChevronLeft size={18} /> Voltar para Bens Tombados
            </button>

            {/* Tag */}
            <span
              className={styles.label11}
              style={{ backgroundColor: ESFERA_COLOR[selectedBem.esfera] }}
            >
              {selectedBem.esfera} • {selectedBem.orgao}
            </span>

            <h1 className={`${styles.headingFluidBrownXl} ${styles.heading9}`}>
              {selectedBem.titulo}
            </h1>
            <p className={styles.text5}>
              <MapPin size={14} /> {selectedBem.endereco}
            </p>

            {/* Gallery */}
            <div className={styles.grid6}>
              {selectedBem.imgs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${selectedBem.titulo} — foto ${i + 1}`}
                  className={`${styles.image3} ${i === 0 ? styles.image4 : styles.image5}`}
                />
              ))}
            </div>

            {/* History */}
            <div className={styles.centroConteudosStyle3}>
              <h2 className={styles.heading6}>
                Histórico
              </h2>
              <div className={styles.detailDivider} />
              <p className={styles.body9}>{selectedBem.historico}</p>
            </div>

            {/* Situação de Tombamento block */}
            <div className={`${styles.centroConteudosStyle9} ${styles.tombamentoBlock}`}>
              <h3 className={styles.heading8}>
                Situação de Tombamento
              </h3>
              <p className={styles.body10}>
                {selectedBem.situacaoTexto}
              </p>
              <a
                href={selectedBem.linkOficial}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button10}
              >
                Consultar informação oficial <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── LOGIN MODAL ── */}
      {loginModal && (
        <div
          className={`${styles.row11} ${styles.modalOverlay}`}
          onClick={() => setLoginModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className={styles.card6}
          >
            <button
              onClick={() => setLoginModal(false)}
              className={styles.button11}
            >
              <X size={20} color="#999" />
            </button>

            <div
              className={`${styles.row12} ${styles.lockIconBg}`}
            >
              <Lock size={24} color={RED} />
            </div>

            <h3 className={styles.heading8}>
              Conteúdo exclusivo para associados
            </h3>
            <p className={styles.body11}>
              Este material faz parte do acervo restrito da APRI, disponível para nossos associados.
            </p>

            <a
              href="/login"
              className={styles.button12}
            >
              Fazer Login
            </a>
            <a
              href="/como-participar"
              className={styles.button13}
            >
              Ainda não é associado? Saiba como se associar
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
}
