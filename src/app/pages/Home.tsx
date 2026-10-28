import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Target, Shield, HandshakeIcon, BookOpen, Users, Briefcase } from "lucide-react";
import heroImage from "../../imports/imagem_rua_docarmo.jpeg";
import styles from "./Home.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";

const valores = [
  { title: "Transparência", desc: "Prestação de contas clara e acessível a todos" },
  { title: "Responsabilidade", desc: "Compromisso sério com a preservação cultural" },
  { title: "Colaboração", desc: "Trabalho conjunto com comunidade e órgãos públicos" },
];

const cursos = [
  {
    name: "História e Patrimônio de Itu",
    desc: "Conheça a trajetória histórica e os principais patrimônios da cidade",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    name: "Introdução à Conservação",
    desc: "Aprenda conceitos básicos sobre preservação e conservação patrimonial",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    name: "Arquitetura Colonial Paulista",
    desc: "Entenda as características da arquitetura histórica do interior de São Paulo",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

const projetos = [
  {
    name: "Folhetos Educativos",
    desc: "Produção de materiais informativos sobre os patrimônios históricos de Itu, distribuídos gratuitamente em escolas e espaços culturais.",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    name: "Maquetes 3D Interativas",
    desc: "Desenvolvimento de maquetes tridimensionais de edifícios históricos para exposições e atividades educativas.",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    name: "Palestras em Escolas",
    desc: "Ciclo de palestras sobre educação patrimonial voltado para estudantes do ensino fundamental e médio.",
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.section}>
        <div
          className={styles.homeStyle}
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className={`${styles.homeStyle2} ${styles.heroGradient}`} />
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={styles.homeStyle3}
          >
            <span className={styles.label}>
              Associação Pró-Restauro · Itu, SP
            </span>
            <h1 className={styles.heroTitle}>
              Preservar o passado é{" "}
              <em className={styles.homeStyle4}>construir o futuro</em> da cidade.
            </h1>
            <p className={styles.heroSubtitle}>
              Juntos, vamos valorizar a história de Itu e deixar um legado para as próximas gerações.
            </p>
            <Link
              to="/como-participar"
              className={styles.button}
            >
              <span className={styles.label2}>
                → Faça parte desta iniciativa.
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SOBRE A APRI */}
      <section className={styles.section2}>
        <div className={styles.container2}>
          <div className={styles.homeStyle5}>
            <h2 className={styles.heading}>Sobre a APRI</h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              Somos uma entidade sem fins lucrativos dedicada à preservação do patrimônio material e imaterial de Itu.
              Nossa atuação consiste na organização e encaminhamento de projetos de restauro aos órgãos competentes,
              além do desenvolvimento de iniciativas de educação patrimonial. <strong>É fundamental destacar que a APRI não executa as obras de restauro e intervenções físicas de forma direta; sua atuação é de caráter estritamente institucional e gerencial.</strong>
            </p>
          </div>

          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.container3}
          >
            <h3 className={styles.heading2}>
              Nossa Missão
            </h3>
            <p className={styles.body2}>
              Promover a preservação do patrimônio histórico, cultural e artístico de Itu, valorizando a memória coletiva
              e fortalecendo o vínculo da comunidade com sua história. Atuamos de forma responsável e transparente,
              intermediando projetos de restauro junto aos órgãos competentes e desenvolvendo ações educativas que
              aproximam as pessoas do patrimônio cultural da cidade.
            </p>
          </motion.div>

          {/* Valores */}
          <div className={styles.homeStyle6}>
            <h3 className={styles.heading3}>Nossos Valores</h3>
            <div className={styles.divider2} />
          </div>
          <div className={styles.grid}>
            {valores.map((v, i) => {
              const icons = [Shield, Target, HandshakeIcon];
              const Icon = icons[i];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.row}>
                    <div className={styles.homeStyle7}>
                      <Icon size={32} color={RED} />
                    </div>
                  </div>
                  <h4 className={styles.heading4}>
                    {v.title}
                  </h4>
                  <p className={styles.body3}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className={styles.homeStyle8}>
            <Link
              to="/como-participar"
              className={styles.button2}
            >
              Junte-se a nós <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section className={styles.section3}>
        <div className={styles.container2}>
          <div className={styles.homeStyle5}>
            <h2 className={styles.heading}>Cursos APRI</h2>
            <div className={styles.divider} />
            <p className={styles.body4}>
              Cursos ministrados pela própria associação, desenvolvidos para fomentar a educação patrimonial e
              aproximar a comunidade da história de Itu.
            </p>
          </div>

          <div className={styles.grid2}>
            {cursos.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <img src={c.img} alt={c.name} className={styles.image} />
                <div className={styles.homeStyle9}>
                  <h3 className={styles.heading4}>
                    {c.name}
                  </h3>
                  <p className={styles.body5}>{c.desc}</p>
                  <Link
                    to="/cursos"
                    className={styles.button3}
                  >
                    Acesse <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.homeStyle10}>
            <Link
              to="/cursos"
              className={styles.button4}
            >
              Ver todos os cursos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJETOS DE EDUCAÇÃO PATRIMONIAL */}
      <section className={styles.section4}>
        <div className={styles.container2}>
          <div className={styles.homeStyle5}>
            <h2 className={styles.heading}>
              Projetos de Educação Patrimonial
            </h2>
            <div className={styles.divider} />
            <p className={styles.body6}>
              Os projetos de educação patrimonial da APRI são iniciativas voltadas à valorização e preservação do patrimônio
              cultural por meio de ações educativas e informativas, como a produção de folhetos, materiais explicativos,
              maquetes 3D e outros recursos que ajudam a aproximar a comunidade desse tema. Esses projetos são desenvolvidos
              pela própria associação e contam com o apoio de patronos para se tornarem realidade. Ao se tornar patrono,
              é possível escolher qual projeto deseja apoiar, contribuindo diretamente para a realização de ações específicas.
            </p>
          </div>

          <div className={styles.grid2}>
            {projetos.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <img src={p.img} alt={p.name} className={styles.image2} />
                <div className={styles.homeStyle9}>
                  <h3 className={styles.heading5}>
                    {p.name}
                  </h3>
                  <p className={styles.body7}>{p.desc}</p>
                  <button
                    className={styles.button5}
                  >
                    Saiba Mais <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO PARTICIPAR */}
      <section className={styles.section3}>
        <div className={styles.container2}>
          <div className={styles.homeStyle5}>
            <h2 className={styles.heading}>Como Participar</h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid3}>
            {/* Associado */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card3}
            >
              <div className={styles.row2}>
                <div className={styles.homeStyle11}>
                  <Users size={40} color={RED} />
                </div>
              </div>
              <h3 className={styles.heading6}>
                Seja Associado
              </h3>
              <p className={styles.body8}>
                Como associado, você faz parte da comunidade APRI, participa de assembleias, tem acesso aos cursos e
                eventos, contribuindo com uma taxa anual simbólica. É ideal para quem deseja acompanhar de perto as
                ações da associação e colaborar de forma contínua.
              </p>
              <div className={styles.homeStyle8}>
                <Link
                  to="/associe-se"
                  className={styles.button6}
                >
                  Saiba Mais
                </Link>
              </div>
            </motion.div>

            {/* Patrono */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card4}
            >
              <div className={styles.homeStyle12}>
                Destaque
              </div>
              <div className={styles.row2}>
                <div className={styles.homeStyle13}>
                  <Briefcase size={40} color={GOLD} />
                </div>
              </div>
              <h3 className={styles.heading6}>
                Seja Patrono
              </h3>
              <p className={styles.body8}>
                Como patrono, você apoia financeiramente projetos específicos de educação patrimonial.
                Pode escolher qual iniciativa deseja patrocinar, contribuindo para a produção de conhecimento técnico
                voltado ao interesse público.
              </p>
              <div className={styles.homeStyle8}>
                <Link
                  to="/patrono"
                  className={styles.button7}
                >
                  Quero Ser Patrono <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p className={styles.heroSubtitle2}>Faça parte desta história</p>
          <h2 className={styles.heading7}>
            Preserve a memória de <span className={styles.homeStyle4}>Itu</span>
          </h2>
          <p className={styles.heroSubtitle3}>
            Juntos, vamos valorizar a história e garantir que as próximas gerações conheçam o patrimônio cultural de Itu.
          </p>
          <Link
            to="/patrono"
            className={styles.button8}
          >
            Quero Apoiar <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
