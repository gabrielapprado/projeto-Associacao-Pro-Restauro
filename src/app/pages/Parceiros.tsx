import { motion } from "motion/react";
import { Link } from "react-router";
import { Handshake, Users, Heart, TrendingUp, Mail, ArrowRight } from "lucide-react";
import styles from "./Parceiros.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";

const tiposParceiros = [
  {
    icon: Handshake,
    title: "Apoiadores Institucionais",
    desc: "Instituições que contribuem com suporte técnico, institucional ou estrutural para o desenvolvimento das ações da APRI.",
  },
  {
    icon: Users,
    title: "Coautores de Projetos",
    desc: "Parceiros que participam diretamente da construção e execução de projetos em conjunto com a associação.",
  },
  {
    icon: Heart,
    title: "Patronos",
    desc: "Responsáveis pelo apoio a projetos específicos da APRI, contribuindo para sua viabilização.",
  },
  {
    icon: TrendingUp,
    title: "Investidores",
    desc: "Apoiam iniciativas da associação por meio de recursos destinados a projetos e ações institucionais.",
  },
];

const parceiros = [
  { nome: "FATEC Votorantim", site: "#" },
  { nome: "Revista Campo & Cidade", site: "#" },
  { nome: "Associação dos Engenheiros e Arquitetos de Itu", site: "#" },
  { nome: "JPN Assessoria Contábil", site: "#" },
  { nome: "Instituto Traço", site: "#" },
];

const destaques = [
  {
    title: "Parceria com FATEC Votorantim",
    desc: "Colaboração técnica no desenvolvimento do site institucional da APRI, contribuindo para a modernização e fortalecimento da presença digital da associação.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    title: "Instituto Traço",
    desc: "Parceria estratégica na realização de cursos e capacitações sobre preservação patrimonial, alcançando centenas de participantes na região.",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    title: "Revista Campo & Cidade",
    desc: "Difusão das ações da APRI através de publicações especializadas, ampliando a visibilidade dos projetos de preservação cultural.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

export default function Parceiros() {
  return (
    <div className={styles.page}>
      {/* Seção 1 — Apresentação */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.container}
        >
          <h1 className={styles.heroTitle}>
            Parceiros
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            A APRI desenvolve suas atividades por meio da colaboração com diferentes instituições, profissionais e apoiadores.
            As parcerias são fundamentais para viabilizar projetos, fortalecer iniciativas e ampliar o alcance das ações voltadas
            à preservação do patrimônio cultural.
          </p>
        </motion.div>
      </section>

      {/* Seção 2 — Tipos de Parceiros */}
      <section className={styles.section}>
        <div className={styles.container2}>
          <div className={styles.parceirosStyle}>
            <h2 className={styles.heading}>
              Tipos de Parceiros
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid}>
            {tiposParceiros.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.row}>
                    <div className={styles.parceirosStyle2}>
                      <Icon size={36} color={RED} />
                    </div>
                  </div>
                  <h3 className={styles.heading2}>
                    {item.title}
                  </h3>
                  <p className={styles.body}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 3 — Lista de Parceiros */}
      <section className={styles.section2}>
        <div className={styles.container2}>
          <div className={styles.parceirosStyle}>
            <h2 className={styles.heading}>
              Nossos Parceiros
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid2}>
            {parceiros.map((parceiro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <div className={styles.row2}>
                  <Handshake size={32} color={RED} />
                </div>
                <h4 className={styles.heading3}>
                  {parceiro.nome}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Destaque de Parcerias */}
      <section className={styles.section}>
        <div className={styles.container2}>
          <div className={styles.parceirosStyle}>
            <h2 className={styles.heading}>
              Destaque de Parcerias
            </h2>
            <div className={styles.divider} />
            <p className={styles.body2}>
              Algumas parcerias se destacam pelo impacto gerado nos projetos desenvolvidos, contribuindo diretamente para a
              preservação e valorização do patrimônio cultural.
            </p>
          </div>

          <div className={styles.grid3}>
            {destaques.map((destaque, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card3}
              >
                <img src={destaque.img} alt={destaque.title} className={styles.image} />
                <div className={styles.parceirosStyle3}>
                  <h3 className={styles.heading2}>
                    {destaque.title}
                  </h3>
                  <p className={styles.body}>{destaque.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Seja um Parceiro */}
      <section className={styles.hero2}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.container3}
        >
          <div className={styles.row}>
            <div className={styles.parceirosStyle4}>
              <Mail size={40} color={GOLD} />
            </div>
          </div>
          <h2 className={styles.heading4}>
            Seja um Parceiro
          </h2>
          <p className={styles.heroSubtitle2}>
            A APRI está aberta a novas parcerias que compartilhem do compromisso com a preservação do patrimônio cultural.
            Se sua instituição deseja colaborar com nossas iniciativas, entre em contato conosco.
          </p>
          <Link
            to="/contato"
            className={styles.button}
          >
            Entrar em contato <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
