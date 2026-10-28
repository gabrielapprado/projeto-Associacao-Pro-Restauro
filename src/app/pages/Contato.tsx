import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import styles from "./Contato.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", msg: "" });
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
          <h1 className={styles.heroTitle}>Contato</h1>
          <div className={styles.divider} />
          <p className={styles.text}>
            Tem alguma dúvida sobre como apoiar ou quer conhecer melhor nosso trabalho? Entre em contato!
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.contatoStyle}>
            <div>
              <h2 className={styles.subHeading}>Fale Conosco</h2>
              <div className={styles.divider2} />
            </div>

            {[
              {
                icon: MapPin,
                title: "Endereço",
                lines: ["Rua Dr. José Elias, 9 - Centro", "Itu, São Paulo, Brazil", "CEP 13300-250"],
              },
              {
                icon: Phone,
                title: "Telefone / WhatsApp",
                lines: ["(11) 2715-5878"],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: ["contato@apri.org.br"],
              },
              {
                icon: Clock,
                title: "Horário de Atendimento",
                lines: ["Segunda a Sexta: 9h – 17h"],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className={styles.card}>
                <div className={styles.contatoStyle2}>
                  <Icon size={20} color={GOLD} />
                </div>
                <div>
                  <p className={styles.text2}>{title}</p>
                  {lines.map((l) => (
                    <p key={l} className={styles.text3}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={styles.contatoStyle3}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.card2}
              >
                <CheckCircle size={64} color={RED} className={styles.icon} />
                <h3 className={styles.heading}>Mensagem enviada!</h3>
                <p className={styles.text4}>
                  Recebemos sua mensagem e responderemos em até 2 dias úteis. Obrigado pelo seu interesse em preservar o patrimônio de Itu!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className={styles.button}
                >
                  Enviar nova mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formHeading}>Envie sua mensagem</h3>
                <div className={styles.grid2}>
                  <div>
                    <label className={styles.label}>Nome completo *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={styles.input}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className={styles.label}>E-mail *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={styles.input}
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>
                <div className={styles.grid2}>
                  <div>
                    <label className={styles.label}>Telefone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={styles.input}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className={styles.label}>Assunto *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={styles.input}
                      style={{ color: form.subject ? "#333" : "#aaa" }}
                    >
                      <option value="" disabled>Selecione...</option>
                      <option>Interesse no curso</option>
                      <option>Quero ser patrono</option>
                      <option>Dúvidas sobre projetos</option>
                      <option>Parceria institucional</option>
                      <option>Voluntariado</option>
                      <option>Imprensa</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={styles.label}>Mensagem *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className={styles.textarea}
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>
                <button
                  type="submit"
                  className={styles.button2}
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.column}>
            <MapPin size={48} color={RED} className={styles.icon2} />
            <p className={styles.heading2}>Itu, São Paulo</p>
            <p className={styles.text5}>Rua Dr. José Elias, 9 - Centro</p>
            <button
              className={styles.button3}
              onClick={() => window.open("https://maps.google.com/?q=Rua+Dr.+José+Elias,+9+-+Centro,+Itu,+São+Paulo,+13300-250", "_blank")}
            >
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
