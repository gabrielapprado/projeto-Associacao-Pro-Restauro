import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Clock, Users, Calendar, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import styles from "./Cursos.module.css";

const RED = "#A62D37";

const NIVEL_BADGE_CLASS: Record<string, string> = {
  "Patrimônio": styles.levelBadgePatrimonio,
  "História": styles.levelBadgeHistoria,
  "Preservação": styles.levelBadgePreservacao,
  "Arquitetura": styles.levelBadgeArquitetura,
};

const cursos = [
  {
    id: 1,
    name: "História e Patrimônio de Itu",
    desc: "Conheça a trajetória histórica da cidade desde sua fundação até os dias atuais, explorando os principais patrimônios arquitetônicos e culturais que marcaram cada época.",
    duracao: "8 horas",
    vagas: 30,
    nivel: "História",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "15 Jun 2026",
  },
  {
    id: 2,
    name: "Introdução à Conservação Patrimonial",
    desc: "Aprenda os conceitos fundamentais de conservação e preservação do patrimônio histórico, incluindo técnicas básicas e legislação aplicável.",
    duracao: "12 horas",
    vagas: 25,
    nivel: "Preservação",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "22 Jun 2026",
  },
  {
    id: 3,
    name: "Arquitetura Colonial Paulista",
    desc: "Estudo aprofundado das características arquitetônicas do período colonial no interior de São Paulo, com foco em elementos construtivos e estilísticos.",
    duracao: "10 horas",
    vagas: 20,
    nivel: "Arquitetura",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "05 Jul 2026",
  },
  {
    id: 4,
    name: "Educação Patrimonial na Prática",
    desc: "Como desenvolver e aplicar projetos de educação patrimonial em escolas e espaços culturais, com metodologias ativas e exemplos práticos.",
    duracao: "16 horas",
    vagas: 30,
    nivel: "Patrimônio",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "12 Jul 2026",
  },
  {
    id: 5,
    name: "Técnicas de Restauro Histórico",
    desc: "Visão geral das principais técnicas utilizadas em projetos de restauro de edificações históricas, com estudos de caso reais.",
    duracao: "20 horas",
    vagas: 15,
    nivel: "Preservação",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "20 Jul 2026",
  },
  {
    id: 6,
    name: "Fotografia de Patrimônio",
    desc: "Aprenda a fotografar edificações históricas de forma profissional, valorizando detalhes arquitetônicos e produzindo registros de qualidade.",
    duracao: "6 horas",
    vagas: 20,
    nivel: "Patrimônio",
    img: "https://images.unsplash.com/photo-1761495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    proxima: "28 Jul 2026",
  },
];

export default function Cursos() {
  const [filterCategoria, setFilterCategoria] = useState<"Todos" | "Patrimônio" | "História" | "Preservação" | "Arquitetura">("Todos");

  // Filtrar cursos por categoria
  const cursosFiltrados = useMemo(() => {
    if (filterCategoria === "Todos") {
      return cursos;
    }
    return cursos.filter((c) => c.nivel === filterCategoria);
  }, [filterCategoria]);

  return (
    <div className={styles.page}>

      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Cursos APRI
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Cursos de educação patrimonial ministrados pela própria associação para aproximar a comunidade da história e cultura de Itu
          </p>
        </motion.div>
      </section>

      {/* Filtros */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.cursosStyle}>
              <label className={styles.label}>
                Filtrar por categoria
              </label>
              <select
                value={filterCategoria}
                onChange={(e) => setFilterCategoria(e.target.value as typeof filterCategoria)}
                className={`${styles.select} ${styles.filterSelect}`}
              >
                <option>Todos</option>
                <option>Patrimônio</option>
                <option>História</option>
                <option>Preservação</option>
                <option>Arquitetura</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className={styles.section2}>
        <div className={styles.grid}>
          {cursosFiltrados.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.cursosStyle2}>
                <img
                  src={c.img}
                  alt={c.name}
                  className={styles.image}
                  onError={(e) => {
                    const targets = [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png",
                    ];
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
                      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
                      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
                    ];
                    const el = e.currentTarget;
                    const idx = Number(el.dataset.fallbackIdx ?? 0);
                    if (idx < fallbacks.length) {
                      el.dataset.fallbackIdx = String(idx + 1);
                      el.src = fallbacks[idx];
                    }
                  }}
                />
                <span
                  className={`${styles.label2} ${NIVEL_BADGE_CLASS[c.nivel] ?? ""}`}
                >
                  {c.nivel}
                </span>
              </div>

              <div className={styles.cursosStyle3}>
                <h3 className={styles.heading}>
                  {c.name}
                </h3>
                <p className={styles.body}>{c.desc}</p>

                <div className={styles.cursosStyle4}>
                  <div className={styles.row2}>
                    <Clock size={16} color={RED} />
                    <span className={styles.metaText}>Duração: {c.duracao}</span>
                  </div>
                  <div className={styles.row2}>
                    <Users size={16} color={RED} />
                    <span className={styles.metaText}>{c.vagas} vagas disponíveis</span>
                  </div>
                  <div className={styles.row2}>
                    <Calendar size={16} color={RED} />
                    <span className={styles.metaText}>Próxima turma: {c.proxima}</span>
                  </div>
                </div>

                <Link
                  to="/contato"
                  className={styles.button}
                >
                  Inscrever-se
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Informações */}
      <section className={styles.section3}>
        <div className={styles.container2}>
          <h2 className={styles.heading2}>
            Por que fazer nossos cursos?
          </h2>
          <div className={styles.divider2} />

          <div className={styles.grid2}>
            {[
              { icon: BookOpen, title: "Conhecimento Aplicado", desc: "Conteúdo prático voltado à realidade local" },
              { icon: Users, title: "Instrutores Qualificados", desc: "Profissionais experientes em patrimônio" },
              { icon: ArrowRight, title: "Certificado APRI", desc: "Certificação reconhecida na área" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card2}
                >
                  <div className={styles.row3}>
                    <Icon size={32} color={RED} />
                  </div>
                  <h4 className={styles.infoCardTitle}>
                    {item.title}
                  </h4>
                  <p className={styles.body2}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
