import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, Briefcase, Heart, HandshakeIcon, ArrowRight, Check } from "lucide-react";
import styles from "./ComoParticipar.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";
const WINE = "#A64951";
const TERRACOTA = "#D98B48";

const formasParticipacao = [
  {
    icon: Users,
    title: "Seja Associado",
    subtitle: "Faça parte da comunidade APRI",
    desc: "Como associado, você faz parte da comunidade APRI, participa de assembleias, tem acesso aos cursos e eventos, e contribui com uma taxa semestral simbólica de R$ 60,00 (paga em maio e novembro). É ideal para quem deseja acompanhar de perto as ações da associação e colaborar de forma contínua.",
    beneficios: [
      "Participação nas Assembleias Gerais",
      "Acesso prioritário a cursos e eventos",
      "Direito a voto nas decisões da APRI",
      "Acesso à Área do Associado com documentos institucionais",
      "Certificado de associado",
    ],
    requisitos: "Preencher ficha de inscrição e efetuar pagamento semestral de R$ 60,00",
    link: "/associe-se",
    buttonText: "Associe-se agora",
    color: RED,
    destaque: false,
  },
  {
    icon: Briefcase,
    title: "Seja Patrono",
    subtitle: "Apoie projetos educacionais específicos",
    desc: "Como patrono, você apoia financeiramente projetos específicos de educação patrimonial. Pode escolher qual iniciativa deseja patrocinar e contribui para a produção de conhecimento técnico voltado ao interesse público, como folhetos educativos, maquetes 3D, palestras em escolas e materiais didáticos.",
    beneficios: [
      "Escolha do projeto a ser apoiado",
      "Reconhecimento público como patrono",
      "Relatórios periódicos sobre o projeto",
      "Certificado de apoio cultural",
      "Possibilidade de uso para incentivo fiscal (quando aplicável)",
    ],
    requisitos: "Contribuição financeira destinada a projeto educacional específico",
    link: "/patrono",
    buttonText: "Seja um Patrono",
    color: GOLD,
    destaque: true,
  },
  {
    icon: Heart,
    title: "Voluntariado",
    subtitle: "Doe seu tempo e conhecimento",
    desc: "Voluntários são essenciais para o funcionamento da APRI. Você pode contribuir com seu conhecimento técnico, ajudar na organização de eventos, atuar na comunicação, dar suporte administrativo ou participar de ações educativas. Profissionais de diversas áreas são bem-vindos.",
    beneficios: [
      "Experiência prática em preservação patrimonial",
      "Networking com profissionais da área",
      "Certificado de horas de voluntariado",
      "Participação em projetos relevantes",
      "Contribuição direta para a comunidade",
    ],
    requisitos: "Disponibilidade de tempo e comprometimento com a causa",
    link: "/contato",
    buttonText: "Quero ser voluntário",
    color: TERRACOTA,
    destaque: false,
  },
  {
    icon: HandshakeIcon,
    title: "Parceria Institucional",
    subtitle: "Colaboração entre instituições",
    desc: "Se você representa uma instituição (empresa, universidade, órgão público, associação profissional), a APRI está aberta a parcerias que compartilhem do compromisso com a preservação do patrimônio cultural. Podemos colaborar em projetos conjuntos, ações educativas, pesquisas e eventos.",
    beneficios: [
      "Desenvolvimento de projetos conjuntos",
      "Fortalecimento da marca institucional",
      "Acesso a rede de parceiros",
      "Visibilidade em eventos e publicações",
      "Contribuição para responsabilidade social",
    ],
    requisitos: "Alinhamento com os valores e missão da APRI",
    link: "/contato",
    buttonText: "Propor parceria",
    color: WINE,
    destaque: false,
  },
];

export default function ComoParticipar() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.container}
        >
          <h1 className={styles.heroTitle}>
            Como Participar
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Existem diversas formas de contribuir com a preservação do patrimônio cultural de Itu.
            Escolha a que melhor se adapta ao seu perfil e faça parte dessa história.
          </p>
        </motion.div>
      </section>

      {/* Formas de Participação */}
      <section className={styles.section}>
        <div className={styles.container2}>
          {formasParticipacao.map((forma, i) => {
            const Icon = forma.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card}
                style={{ border: forma.destaque ? `3px solid ${forma.color}` : `2px solid ${forma.color}40` }}
              >
                {forma.destaque && (
                  <div className={styles.comoParticiparStyle} style={{ backgroundColor: forma.color }}>
                    <span className={styles.label}>
                      Destaque
                    </span>
                  </div>
                )}

                <div className={styles.grid}>
                  {/* Coluna 1: Título e Descrição */}
                  <div className={styles.comoParticiparStyle2}>
                    <div className={styles.row}>
                      <div className={styles.comoParticiparStyle3} style={{ backgroundColor: `${forma.color}20` }}>
                        <Icon size={32} color={forma.color} />
                      </div>
                      <div>
                        <h2 className={styles.heading}>
                          {forma.title}
                        </h2>
                        <p className={styles.text} style={{ color: forma.color }}>{forma.subtitle}</p>
                      </div>
                    </div>

                    <p className={styles.body}>
                      {forma.desc}
                    </p>

                    <div className={styles.comoParticiparStyle4}>
                      <h4 className={styles.beneficiosHeading}>
                        Benefícios:
                      </h4>
                      <div className={styles.comoParticiparStyle5}>
                        {forma.beneficios.map((beneficio, idx) => (
                          <div key={idx} className={styles.row2}>
                            <Check size={18} color={forma.color} className={styles.icon} />
                            <span className={styles.body2}>{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.comoParticiparStyle6} style={{ backgroundColor: `${forma.color}10` }}>
                      <p className={styles.text2}>
                        <strong className={styles.comoParticiparStyle7}>Requisitos:</strong> {forma.requisitos}
                      </p>
                    </div>
                  </div>

                  {/* Coluna 2: CTA */}
                  <div className={styles.column}>
                    <div className={styles.comoParticiparStyle8} style={{ backgroundColor: `${forma.color}10` }}>
                      <p className={styles.interesadoText}>
                        Interessado?
                      </p>
                      <Link
                        to={forma.link}
                        className={styles.button}
                        style={{ backgroundColor: forma.color, color: forma.destaque ? "#1a1a1a" : "#fff" }}
                      >
                        {forma.buttonText} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Comparativo */}
      <section className={styles.section2}>
        <div className={styles.container3}>
          <div className={styles.comoParticiparStyle9}>
            <h2 className={styles.heading2}>
              Qual a diferença?
            </h2>
            <div className={styles.divider} />
            <p className={styles.body3}>
              Entenda as principais diferenças entre ser Associado e ser Patrono
            </p>
          </div>

          <div className={styles.grid2}>
            {/* Associado */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${styles.card2} ${styles.associadoCard}`}
            >
              <div className={styles.row3}>
                <Users size={32} color={RED} />
                <h3 className={styles.comparisonHeading}>
                  Associado
                </h3>
              </div>
              <div className={styles.comoParticiparStyle10}>
                <div className={styles.row2}>
                  <Check size={18} color={RED} className={styles.icon2} />
                  <p className={styles.body2}>Vínculo contínuo com a APRI</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={RED} className={styles.icon2} />
                  <p className={styles.body2}>Participação em decisões institucionais</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={RED} className={styles.icon2} />
                  <p className={styles.body2}>Contribuição semestral de R$ 60,00</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={RED} className={styles.icon2} />
                  <p className={styles.body2}>Acesso a cursos e eventos exclusivos</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={RED} className={styles.icon2} />
                  <p className={styles.body2}>Ideal para quem quer estar próximo das ações</p>
                </div>
              </div>
            </motion.div>

            {/* Patrono */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card3}
            >
              <div className={styles.row3}>
                <Briefcase size={32} color={GOLD} />
                <h3 className={styles.comparisonHeading}>
                  Patrono
                </h3>
              </div>
              <div className={styles.comoParticiparStyle10}>
                <div className={styles.row2}>
                  <Check size={18} color={GOLD} className={styles.icon2} />
                  <p className={styles.body2}>Apoio financeiro a projetos específicos</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={GOLD} className={styles.icon2} />
                  <p className={styles.body2}>Escolha do projeto educacional a apoiar</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={GOLD} className={styles.icon2} />
                  <p className={styles.body2}>Contribuição de valor livre</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={GOLD} className={styles.icon2} />
                  <p className={styles.body2}>Reconhecimento público no projeto</p>
                </div>
                <div className={styles.row2}>
                  <Check size={18} color={GOLD} className={styles.icon2} />
                  <p className={styles.body2}>Ideal para quem quer apoiar causas específicas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.hero2}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.container4}
        >
          <h2 className={styles.heading3}>
            Ainda tem dúvidas?
          </h2>
          <p className={styles.heroSubtitle2}>
            Entre em contato conosco e descubra a melhor forma de contribuir com a preservação do patrimônio cultural de Itu.
          </p>
          <Link
            to="/contato"
            className={styles.button2}
          >
            Fale Conosco <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
