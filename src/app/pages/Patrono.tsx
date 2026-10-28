import { useState } from "react";
import { motion } from "motion/react";
import { Heart, BookOpen, Users, Building, CheckCircle } from "lucide-react";
import styles from "./Patrono.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";

const projetosEducacionais = [
  "Folhetos Educativos sobre Patrimônio de Itu",
  "Maquetes 3D Interativas de Edifícios Históricos",
  "Palestras em Escolas sobre Educação Patrimonial",
  "Material Didático sobre Arquitetura Colonial",
  "Exposições Fotográficas do Patrimônio",
];

export default function Patrono() {
  const [form, setForm] = useState({ name: "", email: "", org: "", projeto: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Seja Parte da História
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Junte-se à APRI e contribua para a preservação do patrimônio histórico de Itu
          </p>
        </motion.div>
      </section>

      {/* Sobre a ONG */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.patronoStyle}
          >
            <h2 className={styles.heading}>
              O que é a APRI?
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              A Associação Pró-Restauro de Itu (APRI) é uma organização sem fins lucrativos dedicada à preservação, restauração e
              valorização do patrimônio histórico de Itu. Trabalhamos para garantir que as futuras gerações possam conhecer e
              se conectar com a rica história da cidade através dos seus edifícios e monumentos históricos.
            </p>
          </motion.div>

          {/* Cards de Benefícios */}
          <div className={styles.grid}>
            {[
              {
                icon: BookOpen,
                title: "Educação Patrimonial",
                desc: "Promovemos o conhecimento sobre a importância histórica e arquitetônica do patrimônio de Itu.",
              },
              {
                icon: Building,
                title: "Restauração",
                desc: "Atuamos diretamente na recuperação e manutenção de edifícios históricos em risco.",
              },
              {
                icon: Users,
                title: "Comunidade",
                desc: "Conectamos pessoas interessadas em preservar a memória cultural da cidade.",
              },
              {
                icon: Heart,
                title: "Impacto Cultural",
                desc: "Fortalecemos a identidade local e promovemos o turismo cultural sustentável.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.row}>
                    <div className={styles.patronoStyle2}>
                      <Icon size={28} color={RED} />
                    </div>
                  </div>
                  <h3 className={styles.heading2}>
                    {item.title}
                  </h3>
                  <p className={styles.body2}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que participar */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.patronoStyle3}
          >
            <h2 className={styles.heading}>
              Por que você deve participar?
            </h2>
            <div className={styles.divider} />
          </motion.div>

          <div className={styles.grid2}>
            {[
              {
                title: "Preserve a memória cultural",
                text: "Cada edifício histórico conta uma história única sobre Itu. Ao se juntar à APRI, você contribui para manter viva essa memória para as próximas gerações.",
              },
              {
                title: "Fortaleça a identidade local",
                text: "O patrimônio histórico é fundamental para a identidade de uma cidade. Sua participação ajuda a valorizar e fortalecer o que torna Itu única.",
              },
              {
                title: "Impulsione o turismo cultural",
                text: "Cidades com patrimônio bem preservado atraem mais visitantes e geram desenvolvimento econômico sustentável para toda a comunidade.",
              },
              {
                title: "Faça parte de uma comunidade",
                text: "Conecte-se com pessoas que compartilham o mesmo interesse em história, arquitetura e preservação cultural.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.row2}
              >
                <CheckCircle size={24} color={GOLD} className={styles.icon} />
                <div>
                  <h3 className={styles.participationHeading}>
                    {item.title}
                  </h3>
                  <p className={styles.body3}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className={styles.section3}>
        <div className={styles.container2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.card2}
          >
            <h2 className={styles.ctaHeading}>
              Faça a Diferença
            </h2>
            <p className={styles.body4}>
              Sua participação é fundamental para preservar a história de Itu. Junte-se a nós e ajude a manter vivo o
              patrimônio cultural da cidade para as futuras gerações.
            </p>
            <a
              href="#formulario"
              className={styles.button}
            >
              Quero ser patrono
            </a>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className={styles.section4}>
        <div className={styles.container2}>
          <h2 className={styles.heading3}>
            Cadastre-se como Patrono
          </h2>
          <div className={styles.divider} />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.card3}
            >
              <CheckCircle size={56} color={RED} className={styles.icon2} />
              <h3 className={styles.successTitle}>Obrigado pelo seu interesse!</h3>
              <p className={styles.body5}>Em breve nossa equipe entrará em contato com todas as informações para oficializar sua participação na APRI.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.grid3}>
                <div>
                  <label className={styles.formLabel}>Nome completo *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${styles.input} ${styles.formInput}`}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className={styles.formLabel}>E-mail *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${styles.input} ${styles.formInput}`}
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>
              <div>
                <label className={styles.formLabel}>Empresa / Organização (opcional)</label>
                <input
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className={`${styles.input2} ${styles.formInput}`}
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label className={styles.formLabel}>Projeto Educacional que deseja patrocinar *</label>
                <select
                  required
                  value={form.projeto}
                  onChange={(e) => setForm({ ...form, projeto: e.target.value })}
                  className={`${styles.input2} ${styles.formInput}`}
                >
                  <option value="">Selecione um projeto</option>
                  {projetosEducacionais.map((projeto) => (
                    <option key={projeto} value={projeto}>
                      {projeto}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Mensagem ou dúvidas</label>
                <textarea
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className={`${styles.textarea} ${styles.formInput}`}
                  placeholder="Conte-nos mais sobre seu interesse..."
                />
              </div>
              <button
                type="submit"
                className={styles.button2}
              >
                Quero ser Patrono
              </button>
              <p className={styles.privacyNote}>
                Seus dados são tratados com total sigilo. Não compartilhamos informações pessoais.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
