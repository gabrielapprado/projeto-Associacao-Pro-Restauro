import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Users, ArrowRight, Star, Plus } from "lucide-react";
import { AdminUploadModal } from "../components/AdminUploadModal";
import styles from "./Eventos.module.css";

const GOLD = "#DBAD38";

const events = [
  {
    id: 1,
    title: "Visita Guiada: Casarão do Centro",
    type: "Visita Guiada",
    date: "15 Mar 2025",
    time: "09h00 – 11h30",
    location: "Rua Direita, 42 – Centro, Itu",
    desc: "Explore os bastidores da restauração do Casarão do Centro com nossos arquitetos e historiadores. Veja de perto as técnicas utilizadas na recuperação de edifícios coloniais.",
    spots: 20,
    spotsLeft: 7,
    patronOnly: false,
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    title: "Palestra: Patrimônio Cultural e Desenvolvimento Urbano",
    type: "Palestra",
    date: "22 Mar 2025",
    time: "19h00 – 21h00",
    location: "Centro Cultural de Itu – Auditório Principal",
    desc: "O Prof. Dr. Marcos Fabris (USP) discutirá como a preservação do patrimônio histórico pode impulsionar o desenvolvimento econômico e turístico das cidades do interior paulista.",
    spots: 150,
    spotsLeft: 83,
    patronOnly: false,
    img: "https://images.unsplash.com/photo-1763224810010-4e5d23f261af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    title: "Concerto Beneficente: Memórias Musicais de Itu",
    type: "Evento Cultural",
    date: "05 Abr 2025",
    time: "20h00 – 22h30",
    location: "Igreja Matriz de Itu – Praça da Matriz",
    desc: "Uma noite especial com a Orquestra Municipal de Itu interpretando músicas que marcaram a história da cidade. Renda revertida integralmente para o Projeto Teatro Municipal.",
    spots: 300,
    spotsLeft: 142,
    patronOnly: false,
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 4,
    title: "Exposição Fotográfica: Antes e Depois",
    type: "Exposição",
    date: "10 Abr 2025",
    time: "Seg-Sex 9h–18h, Sáb 9h–14h",
    location: "Museu Republicano Convenção de Itu",
    desc: "Mostra fotográfica comparando o estado atual dos edifícios históricos com registros históricos do início do século XX. Entrada gratuita.",
    spots: 0,
    spotsLeft: 0,
    patronOnly: false,
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 5,
    title: "Jantar Gala dos Patronos 2025",
    type: "Exclusivo Patronos",
    date: "26 Abr 2025",
    time: "20h00 – 00h00",
    location: "Palacete Histórico Álvim – Salão Nobre",
    desc: "Evento anual exclusivo para patronos da associação. Jantar com culinária histórica ituense, homenagens aos principais apoiadores e apresentação dos projetos para 2025–2026.",
    spots: 60,
    spotsLeft: 24,
    patronOnly: true,
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 6,
    title: "Workshop: Técnicas de Restauro Colonial",
    type: "Workshop",
    date: "10 Mai 2025",
    time: "08h00 – 17h00",
    location: "Casarão do Centro – Canteiro de Obras",
    desc: "Aprenda com os mestres restauradores as técnicas históricas de aplicação de estuque, pintura calcária e recuperação de madeiras centenárias. Vagas limitadas.",
    spots: 15,
    spotsLeft: 5,
    patronOnly: false,
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

const typeColor: Record<string, { bg: string; text: string }> = {
  "Visita Guiada": { bg: "#e8f4f8", text: "#0a5c7f" },
  "Palestra": { bg: "#f3e5f5", text: "#6a0dad" },
  "Evento Cultural": { bg: "#fff8e1", text: "#8a6200" },
  "Exposição": { bg: "#e8f5e9", text: "#1e8449" },
  "Exclusivo Patronos": { bg: "#1a3a30", text: "#D4A017" },
  "Workshop": { bg: "#fbe9e7", text: "#b71c1c" },
};

export default function Eventos() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <AdminUploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} contentType="evento" />

      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Agenda Cultural
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Visitas guiadas, palestras, exposições e eventos exclusivos para patronos. Faça parte da comunidade que preserva a história de Itu.
          </p>
        </motion.div>
      </section>

      {/* Events */}
      <section className={styles.section}>
        <div className={styles.container}>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className={styles.button}
          >
            <Plus size={18} /> Adicionar evento
          </button>
        </div>
        <div className={styles.container2}>
          {events.map((ev, i) => {
            const tc = typeColor[ev.type] || { bg: "#f5efe3", text: "#555" };
            const isFree = ev.spots === 0;
            const pctFull = ev.spots > 0 ? Math.round(((ev.spots - ev.spotsLeft) / ev.spots) * 100) : 100;
            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`${styles.grid} ${
                  ev.patronOnly ? styles.eventosStyle : styles.eventosStyle2
                }`}
              >
                <div className={styles.eventosStyle3}>
                  <img src={ev.img} alt={ev.title} className={styles.image} />
                  {ev.patronOnly && (
                    <div className={styles.row}>
                      <Star size={12} /> Exclusivo Patronos
                    </div>
                  )}
                </div>
                <div className={styles.column}>
                  <div>
                    <div className={styles.row2}>
                      <span
                        className={styles.label}
                        style={{ backgroundColor: tc.bg, color: tc.text }}
                      >
                        {ev.type}
                      </span>
                    </div>
                    <h3 className={styles.eventTitle}>{ev.title}</h3>
                    <p className={styles.body}>{ev.desc}</p>
                    <div className={styles.row3}>
                      <span className={styles.label2}>
                        <Calendar size={15} color={GOLD} /> {ev.date}
                      </span>
                      <span className={styles.label2}>
                        <Clock size={15} color={GOLD} /> {ev.time}
                      </span>
                      <span className={styles.label2}>
                        <MapPin size={15} color={GOLD} /> {ev.location}
                      </span>
                    </div>
                  </div>

                  <div className={styles.row4}>
                    {!isFree && ev.spots > 0 && (
                      <div className={styles.row5}>
                        <div className={styles.row6}>
                          <span className={styles.label3}>
                            <Users size={12} /> {ev.spotsLeft} vagas restantes de {ev.spots}
                          </span>
                          <span className={styles.label4}>{pctFull}% preenchido</span>
                        </div>
                        <div className={styles.eventosStyle4}>
                          <div
                            className={styles.eventosStyle5}
                            style={{ width: `${pctFull}%`, backgroundColor: pctFull > 80 ? "#e53935" : GOLD }}
                          />
                        </div>
                      </div>
                    )}
                    {isFree && <span className={styles.label5}>Entrada gratuita — sem inscrição necessária</span>}
                    <button
                      className={`${styles.button2} ${
                        ev.patronOnly ? styles.button3 : styles.button4
                      }`}
                    >
                      {ev.patronOnly ? "Sou Patrono — Inscrever-me" : isFree ? "Saiba Mais" : "Inscrever-me"} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Patrono Banner */}
      <section className={styles.hero2}>
        <Star size={36} color={GOLD} className={styles.icon} />
        <h2 className={styles.heading}>
          Patronos têm acesso <span className={styles.label6}>prioritário e exclusivo</span>
        </h2>
        <p className={styles.heroSubtitle2}>
          Seja um patrono e garanta convites para eventos exclusivos, visitas privadas e muito mais.
        </p>
        <a href="/patrono" className={styles.button5}>
          Quero ser Patrono
        </a>
      </section>
    </div>
  );
}
