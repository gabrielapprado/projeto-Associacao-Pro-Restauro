import { motion } from "motion/react";
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import styles from "./Transparencia.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";

const goalData = [{ name: "Arrecadado", value: 185000, fill: GOLD }, { name: "Meta", value: 300000, fill: "#e0d8cc" }];

const monthlyData = [
  { mes: "Jan", valor: 12400 },
  { mes: "Fev", valor: 8700 },
  { mes: "Mar", valor: 15200 },
  { mes: "Abr", valor: 21000 },
  { mes: "Mai", valor: 18500 },
  { mes: "Jun", valor: 24800 },
  { mes: "Jul", valor: 19600 },
  { mes: "Ago", valor: 22100 },
  { mes: "Set", valor: 16900 },
  { mes: "Out", valor: 25800 },
  { mes: "Nov", valor: 28300 },
  { mes: "Dez", valor: 31700 },
];

const allocations = [
  { category: "Restauro estrutural", pct: 60, value: "R$ 111.000" },
  { category: "Restauro de fachadas", pct: 20, value: "R$ 37.000" },
  { category: "Projetos técnicos", pct: 10, value: "R$ 18.500" },
  { category: "Administração", pct: 6, value: "R$ 11.100" },
  { category: "Comunicação e eventos", pct: 4, value: "R$ 7.400" },
];

const reports = [
  { title: "Relatório Anual 2023", type: "PDF", size: "2.4 MB", date: "Março 2024" },
  { title: "Prestação de Contas 1º Semestre 2024", type: "PDF", size: "1.8 MB", date: "Julho 2024" },
  { title: "Relatório de Impacto Social 2023", type: "PDF", size: "3.1 MB", date: "Fevereiro 2024" },
  { title: "Estatuto da Associação", type: "PDF", size: "0.9 MB", date: "2020" },
  { title: "Ata da Última Assembleia", type: "PDF", size: "0.5 MB", date: "Outubro 2024" },
];

const statsCards = [
  { label: "Meta Total", value: "R$ 300.000", sub: "Projeto Casarão do Centro", color: RED },
  { label: "Arrecadado", value: "R$ 185.000", sub: "", color: GOLD },
  { label: "Patronos", value: "128", sub: "Pessoas e empresas apoiadoras", color: "#2a7a5a" },
];

export default function Transparencia() {
  const pct = Math.round((185000 / 300000) * 100);
  statsCards[1].sub = `${pct}% da meta atingida`;

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>Transparência</h1>
          <div className={styles.divider} />
          <p className={styles.text}>
            Acreditamos que confiança se constrói com transparência. Veja como cada real é aplicado na restauração do patrimônio de Itu.
          </p>
        </motion.div>
      </section>

      {/* Painel de Impacto */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Impacto das Doações
          </h2>

          {/* Stats Cards */}
          <div className={styles.grid}>
            {statsCards.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.card}
                style={{ border: `2px solid ${s.color}30` }}
              >
                <p className={styles.text2}>{s.label}</p>
                <p
                  className={styles.text3}
                  style={{ color: s.color }}
                >
                  {s.value}
                </p>
                <p className={styles.text4}>{s.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Big */}
          <div className={styles.card2}>
            <div className={styles.row}>
              <span className={styles.label}>Meta de Arrecadação — Casarão do Centro</span>
              <span className={styles.label2}>{pct}%</span>
            </div>
            <div className={styles.transparenciaStyle}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className={styles.transparenciaStyle2}
              />
            </div>
            <div className={styles.row2}>
              <span className={styles.label3}>R$ 185.000 arrecadados</span>
              <span className={styles.label3}>Meta: R$ 300.000</span>
            </div>
          </div>

          {/* Charts */}
          <div className={styles.grid2}>
            <div className={styles.card3}>
              <h3 className={styles.heading2}>Arrecadação Mensal 2024</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ebe0" />
                  <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#888" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#888" }} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => [`R$ ${v.toLocaleString("pt-BR")}`, "Arrecadado"]} />
                  <Bar dataKey="valor" fill={GOLD} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.card3}>
              <h3 className={styles.heading2}>Alocação dos Recursos</h3>
              {allocations.map((a) => (
                <div key={a.category} className={styles.transparenciaStyle3}>
                  <div className={styles.row3}>
                    <span className={styles.label4}>{a.category}</span>
                    <span className={styles.label5}>{a.pct}% — {a.value}</span>
                  </div>
                  <div className={styles.transparenciaStyle4}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.pct}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={styles.transparenciaStyle2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className={styles.section2}>
        <div className={styles.container2}>
          <h2 className={styles.heading3}>
            Documentos e Relatórios
          </h2>
          <div className={styles.transparenciaStyle5}>
            {reports.map((r) => (
              <div
                key={r.title}
                className={styles.card4}
              >
                <div className={styles.row4}>
                  <div className={styles.row5}>
                    {r.type}
                  </div>
                  <div>
                    <p className={styles.text5}>{r.title}</p>
                    <p className={styles.text2}>{r.date} · {r.size}</p>
                  </div>
                </div>
                <button
                  className={styles.button}
                >
                  Baixar
                </button>
              </div>
            ))}
          </div>
          <p className={styles.text6}>
            CNPJ: 64.547.893/0001-72 · Entidade sem fins lucrativos certificada pelo CEBAS
          </p>
        </div>
      </section>
    </div>
  );
}
