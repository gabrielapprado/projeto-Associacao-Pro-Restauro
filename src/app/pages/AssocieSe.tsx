import { useState } from "react";
import { motion } from "motion/react";
import { Users, FileText, DollarSign, CheckCircle, Download, Paperclip } from "lucide-react";
import styles from "./AssocieSe.module.css";

const RED = "#A62D37";

export default function AssocieSe() {
  const [form, setForm] = useState({ name: "", email: "", message: "", file: null as File | null });
  const [sent, setSent] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitação de associação:", form);
    setSent(true);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Associe-se à APRI
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Faça parte de uma iniciativa voltada à preservação do patrimônio histórico, artístico e cultural de Itu
          </p>
        </motion.div>
      </section>

      {/* O que é */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.associeSeStyle}
          >
            <h2 className={`${styles.sectionHeading} ${styles.heading}`}>
              O que é ser Associado
            </h2>
            <div className={styles.divider} />
            <p className={styles.body}>
              A APRI é uma associação civil aberta à participação de pessoas interessadas na preservação do patrimônio
              histórico, artístico e cultural de Itu.
            </p>
            <p className={styles.body2}>
              Ao se associar, você passa a integrar uma iniciativa voltada à valorização da memória, ao fortalecimento
              da identidade local e ao apoio a projetos de preservação cultural.
            </p>
            <p className={styles.body2}>
              A associação é voluntária e sem fins lucrativos. Os associados participam das atividades institucionais
              e acompanham os projetos desenvolvidos pela APRI.
            </p>
          </motion.div>

          {/* Cards de Benefícios */}
          <div className={styles.grid}>
            {[
              {
                icon: Users,
                title: "Participe",
                desc: "Acompanhe assembleias e atividades institucionais",
              },
              {
                icon: FileText,
                title: "Contribua",
                desc: "Apoie projetos de preservação cultural e educação patrimonial",
              },
              {
                icon: CheckCircle,
                title: "Fortaleça",
                desc: "Ajude a valorizar a identidade e memória de Itu",
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
                    <div className={styles.associeSeStyle2}>
                      <Icon size={28} color={RED} />
                    </div>
                  </div>
                  <h3 className={styles.infoCardTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.body3}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como se Associar */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionHeading} ${styles.heading2}`}>
            Como se Associar
          </h2>
          <div className={styles.divider} />

          <div className={styles.card2}>
            <h3 className={styles.heading3}>
              Processo de Associação
            </h3>
            <div className={styles.associeSeStyle3}>
              <div className={styles.row2}>
                <div className={`${styles.row3} ${styles.stepCircle}`}>
                  1
                </div>
                <div>
                  <p className={styles.body4}>
                    O pedido de associação à APRI ocorre por meio de <strong>solicitação formal</strong>, conforme os
                    critérios e procedimentos estabelecidos em seu Estatuto Social.
                  </p>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={`${styles.row3} ${styles.stepCircle}`}>
                  2
                </div>
                <div>
                  <p className={styles.body4}>
                    As solicitações recebidas são submetidas à apreciação da <strong>Assembleia Geral</strong>, responsável
                    pela deliberação sobre a admissão de novos associados.
                  </p>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={`${styles.row3} ${styles.stepCircle}`}>
                  3
                </div>
                <div>
                  <p className={styles.body4}>
                    Antes de solicitar sua associação, é <strong>indispensável a leitura do Estatuto Social da APRI</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.associeSeStyle4}>
              <a
                href="/APRI_Estatuto_Reg.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={styles.button}
              >
                <Download size={18} /> Baixar Estatuto Social
              </a>
            </div>
          </div>

          {/* Contribuição */}
          <div className={styles.card3}>
            <div className={styles.row4}>
              <DollarSign size={32} color={RED} />
              <h3 className={styles.heading4}>
                Contribuição Financeira
              </h3>
            </div>
            <p className={styles.body5}>
              Existe uma contribuição financeira que deverá ser efetuada pelo associado. Ela é <strong>semestral</strong> e
              deverá ser integralizada até o mês de <strong>maio (1ª parcela)</strong> e de <strong>novembro (2ª parcela)</strong>.
            </p>
            <div className={`${styles.associeSeStyle5} ${styles.amountBox}`}>
              <p className={styles.amountLabel}>Valor de cada parcela em 2026:</p>
              <p className={styles.amountValue}>
                R$ 60,00
              </p>
              <p className={styles.amountNote}>(sessenta reais)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className={styles.section}>
        <div className={styles.container2}>
          <h2 className={styles.heading5}>
            Solicite sua Associação
          </h2>
          <div className={styles.divider} />

          <div className={styles.card4}>
            <p className={styles.body6}>
              Para solicitar sua associação:
            </p>
            <ol className={styles.body7}>
              <li className={styles.associeSeStyle6}>Faça o download da <strong>Ficha de Inscrição para Associado Efetivo</strong></li>
              <li className={styles.associeSeStyle6}>Preencha todos os campos solicitados</li>
              <li className={styles.associeSeStyle6}>Anexe o documento no formulário abaixo ou envie diretamente para <strong>contato@apri.org.br</strong></li>
            </ol>
            <div className={styles.associeSeStyle7}>
              <a
                href="/Ficha-de-Inscricao-Associado-efetivo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={styles.button2}
              >
                <Download size={16} /> Baixar Ficha de Inscrição
              </a>
            </div>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.card5}
            >
              <CheckCircle size={56} color={RED} className={styles.icon} />
              <h3 className={styles.successTitle}>Solicitação Enviada!</h3>
              <p className={styles.body8}>
                Recebemos sua solicitação de associação. Em breve nossa equipe entrará em contato com as próximas orientações.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
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
              <div>
                <label className={styles.formLabel}>Mensagem (opcional)</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${styles.textarea} ${styles.formInput}`}
                  placeholder="Conte-nos um pouco sobre seu interesse..."
                />
              </div>
              <div>
                <label className={styles.formLabel}>
                  Anexar Ficha de Inscrição *
                </label>
                <div className={styles.associeSeStyle8}>
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className={styles.input2}
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className={`${styles.label} ${styles.fileUpload}`}
                  >
                    <Paperclip size={18} color={RED} />
                    <span className={styles.body9}>
                      {form.file ? form.file.name : "Clique para anexar arquivo"}
                    </span>
                  </label>
                </div>
                <p className={styles.text}>
                  Formatos aceitos: PDF, DOC, DOCX
                </p>
              </div>
              <button
                type="submit"
                className={styles.button3}
              >
                Enviar Solicitação
              </button>
              <p className={styles.text2}>
                A ficha contém declaração expressa de ciência e concordância com o Estatuto Social da APRI
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
