import { useNavigate } from "react-router";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import styles from "./Projetos.module.css";

const projetosRestauro = [
  {
    id: 1,
    name: "Casarão do Centro",
    year: 1890,
    desc: "Construído em 1890, o Casarão do Centro foi sede da primeira prefeitura de Itu. Suas paredes de taipa guardam décadas de história política e cultural da cidade.",
    img: "https://images.unsplash.com/photo-1770349694179-0f0706ae2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 2,
    name: "Antiga Escola de Itu",
    year: 1912,
    desc: "A Escola Estadual Visconde de Taunay, fundada em 1912, foi a primeira instituição de ensino público de Itu. Formou gerações de itueanos.",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 3,
    name: "Teatro Municipal",
    year: 1905,
    desc: "O Teatro Municipal de Itu, inaugurado em 1905, foi palco das maiores apresentações artísticas da cidade no século XX.",
    img: "https://images.unsplash.com/photo-1732392246715-d7989a77ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 4,
    name: "Estação Ferroviária",
    year: 1897,
    desc: "A antiga Estação da Estrada de Ferro Sorocabana foi o ponto de chegada de milhares de imigrantes que ajudaram a construir Itu.",
    img: "https://images.unsplash.com/photo-1623197259647-0ff8e5da9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 5,
    name: "Sobrado Colonial — Rua XV",
    year: 1850,
    desc: "Um dos mais antigos sobrados coloniais de Itu, datado de 1850. A edificação preserva elementos arquitetônicos raros.",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 6,
    name: "Palacete da Família Alvim",
    year: 1920,
    desc: "O Palacete Alvim é um exemplar raro da arquitetura eclética do início do século XX em Itu.",
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
];

const projetosEducacionais = [
  {
    id: 1,
    name: "Folhetos Educativos",
    desc: "Produção de materiais informativos sobre os patrimônios históricos de Itu, distribuídos gratuitamente em escolas e espaços culturais da cidade.",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Em andamento",
    raised: "R$ 8.500",
    goal: "R$ 15.000",
    progress: 57,
    patronos: 12,
  },
  {
    id: 2,
    name: "Maquetes 3D Interativas",
    desc: "Desenvolvimento de maquetes tridimensionais de edifícios históricos para exposições permanentes e atividades educativas em escolas.",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Captando recursos",
    raised: "R$ 3.200",
    goal: "R$ 12.000",
    progress: 27,
    patronos: 5,
  },
  {
    id: 3,
    name: "Palestras em Escolas",
    desc: "Ciclo de palestras sobre educação patrimonial voltado para estudantes do ensino fundamental e médio da rede pública de Itu.",
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Em andamento",
    raised: "R$ 5.800",
    goal: "R$ 8.000",
    progress: 73,
    patronos: 8,
  },
  {
    id: 4,
    name: "Material Didático Colonial",
    desc: "Criação de apostilas e materiais didáticos sobre arquitetura colonial para uso em cursos e oficinas da APRI.",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Planejamento",
    raised: "R$ 1.500",
    goal: "R$ 10.000",
    progress: 15,
    patronos: 3,
  },
  {
    id: 5,
    name: "Exposições Fotográficas",
    desc: "Produção de exposições itinerantes comparando registros históricos e fotografias atuais dos patrimônios de Itu.",
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Captando recursos",
    raised: "R$ 4.100",
    goal: "R$ 18.000",
    progress: 23,
    patronos: 6,
  },
];

function getStatusClass(status: string): string {
  if (status === "Em andamento") return styles.statusEmAndamento;
  if (status === "Planejamento") return styles.statusPlanejamento;
  return styles.statusCaptando;
}

export default function Projetos() {
  const navigate = useNavigate();

  const handleEstatutoClick = () => {
    
    navigate("/associe-se");
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Projetos APRI
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Conheça os projetos de restauro que acompanhamos e os projetos educacionais que você pode patrocinar
          </p>
        </motion.div>
      </section>

      {/* PROJETOS DE RESTAURO */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.projetosStyle}>
            <h2 className={styles.heading}>
              Projetos de Restauro
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              Os projetos de restauro são iniciativas voltadas à recuperação e preservação de bens históricos e culturais.
              Nesses casos, a APRI atua como <strong>intermediadora</strong>, conectando órgãos responsáveis, especialistas
              e instituições envolvidas no processo.
            </p>
            <p className={styles.body2}>
              Esses projetos <strong>não dependem de doações ou patronos</strong>, sendo conduzidos a partir de diretrizes
              técnicas e institucionais, com foco na conservação adequada do patrimônio.
            </p>
            <div className={styles.projetosStyle2}>
              <a
                href="#"
                download="Estatuto-APRI.pdf"
                className={styles.buttonEstatuto}
              >
                <u> Confira o Estatuto APRI</u>
              </a>
            </div>
          </div>

          <div className={styles.grid}>
            {projetosRestauro.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={styles.card}
              >
                <div className={styles.projetosStyle3}>
                  <img src={p.img} alt={p.name} className={styles.image} />
                  <span className={styles.label}>
                    Est. {p.year}
                  </span>
                </div>

                <div className={styles.projetosStyle4}>
                  <h3 className={styles.heading2}>
                    {p.name}
                  </h3>
                  <p className={styles.body3}>{p.desc}</p>

                  <button className={styles.button2}>
                    Leia a História
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS DE EDUCAÇÃO PATRIMONIAL */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.projetosStyle}>
            <h2 className={styles.heading}>
              Projetos de Educação Patrimonial
            </h2>
            <div className={styles.divider} />
            <p className={styles.body2}>
              Os projetos da APRI são iniciativas desenvolvidas pela própria associação, com foco na valorização e divulgação
              do patrimônio cultural por meio de ações educativas e informativas.
            </p>
            <p className={styles.body4}>
              Para que esses projetos aconteçam, contamos com o apoio de <strong>patronos</strong>. Ao se tornar patrono,
              é possível escolher qual projeto deseja apoiar, contribuindo diretamente para a realização de ações específicas.
            </p>
          </div>

          <div className={styles.grid}>
            {projetosEducacionais.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <div className={styles.projetosStyle3}>
                  <img src={p.img} alt={p.name} className={styles.image2} />
                  <span
                    className={`${styles.label2} ${getStatusClass(p.status)}`}
                  >
                    {p.status}
                  </span>
                </div>

                <div className={styles.column}>
                  <h3 className={styles.heading2}>
                    {p.name}
                  </h3>
                  <p className={styles.body5}>{p.desc}</p>

                  {/* Progress */}
                  <div className={styles.projetosStyle5}>
                    <div className={styles.row}>
                      <span className={styles.progressLabel}>Arrecadado: {p.raised}</span>
                      <span className={styles.progressPercent}>{p.progress}%</span>
                    </div>
                    <div className={`${styles.projetosStyle6} ${styles.progressTrack}`}>
                      <div className={`${styles.projetosStyle7} ${styles.progressFill}`} style={{ width: `${p.progress}%` }} />
                    </div>
                    <div className={styles.row2}>
                      <span className={styles.label3}>Meta: {p.goal}</span>
                      <span className={styles.label3}>
                        <Users size={12} className={styles.icon} /> {p.patronos} patronos
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/patrono"
                    className={styles.button3}
                  >
                    Seja Patrono
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section3}>
        <h2 className={styles.heading3}>Quer saber mais?</h2>
        <p className={styles.body6}>
          Entre em contato para conhecer melhor nossos projetos e formas de participação.
        </p>
        <div className={styles.row3}>
          <Link
            to="/contato"
            className={styles.button4}
          >
            Fale Conosco <ArrowRight size={16} />
          </Link>
          <Link
            to="/patrono"
            className={styles.button5}
          >
            Seja Patrono <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
