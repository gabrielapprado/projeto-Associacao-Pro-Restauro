import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Clock, Tag, ArrowRight, Plus } from "lucide-react";
import { AdminUploadModal } from "../components/AdminUploadModal";
import styles from "./Blog.module.css";

const posts = [
  {
    id: 1,
    title: "A História da Igreja Matriz de Itu: 300 anos de fé e arquitetura",
    excerpt: "Erguida no século XVIII, a Igreja Matriz Nossa Senhora da Candelária é o símbolo mais reconhecível de Itu. Conheça sua fascinante história construtiva e os desafios da sua preservação.",
    category: "História",
    readTime: "8 min",
    date: "12 Nov 2024",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    title: "Arquitetura Colonial Paulista: características e relevância",
    excerpt: "O interior paulista concentra um rico acervo de edificações coloniais. Entenda os elementos arquitetônicos que definem o estilo colonial brasileiro e por que sua preservação é urgente.",
    category: "Arquitetura",
    readTime: "6 min",
    date: "28 Out 2024",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    title: "Por que preservar é mais barato do que demolir e reconstruir?",
    excerpt: "Estudos apontam que restaurar um edifício histórico custa, em média, 40% menos do que demolir e construir do zero — e ainda preserva memória e identidade cultural.",
    category: "Preservação",
    readTime: "5 min",
    date: "15 Out 2024",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 4,
    title: "Itu e a Lei do Exagero: história e cultura por trás do mito",
    excerpt: "De onde vem a lenda de que tudo em Itu é grande? A tradição cultural da cidade vai muito além do humor — e revela uma comunidade profundamente ligada à sua identidade histórica.",
    category: "Cultura",
    readTime: "4 min",
    date: "02 Out 2024",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 5,
    title: "Imigração italiana e a transformação arquitetônica de Itu",
    excerpt: "No final do século XIX, imigrantes italianos trouxeram consigo novas técnicas construtivas que moldaram a paisagem urbana de Itu. Conheça esse capítulo esquecido da história da cidade.",
    category: "História",
    readTime: "7 min",
    date: "18 Set 2024",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 6,
    title: "O papel do turismo cultural na valorização do patrimônio",
    excerpt: "Cidades com patrimônio histórico bem preservado atraem até 3x mais turistas e geram mais renda local. Entenda como a restauração de edifícios históricos impulsiona a economia de Itu.",
    category: "Turismo",
    readTime: "5 min",
    date: "05 Set 2024",
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

const categories = ["Todos", "História", "Arquitetura", "Preservação", "Cultura", "Turismo"];

const catColor: Record<string, string> = {
  História: "#8a4000",
  Arquitetura: "#1a5276",
  Preservação: "#1e8449",
  Cultura: "#6a1d8a",
  Turismo: "#0a5c7f",
};

export default function Blog() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <AdminUploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} contentType="blog" />

      {/* Header */}
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className={styles.heroTitle}>
            Memória e História de Itu
          </h1>
          <div className={styles.divider} />
          <p className={styles.heroSubtitle}>
            Artigos, curiosidades e histórias sobre o patrimônio cultural de Itu. Educação patrimonial para todos.
          </p>
        </motion.div>
      </section>

      {/* Admin Button + Category Filter */}
      <div className={styles.blogStyle}>
        <div className={styles.container}>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className={styles.button}
          >
            <Plus size={18} /> Adicionar artigo
          </button>
        </div>
        <div className={styles.row}>
          {categories.map((c) => (
            <button
              key={c}
              className={`${styles.button2} ${
                c === "Todos"
                  ? styles.button3
                  : styles.button4
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <section className={styles.section}>
        <div className={styles.container2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.grid}
          >
            <img src={posts[0].img} alt={posts[0].title} className={styles.image} />
            <div className={styles.column}>
              <span
                className={styles.label}
                style={{ color: catColor[posts[0].category] || "#555" }}
              >
                Em Destaque · {posts[0].category}
              </span>
              <h2 className={styles.featuredHeading}>{posts[0].title}</h2>
              <p className={styles.body}>{posts[0].excerpt}</p>
              <div className={styles.row2}>
                <span className={styles.label2}>
                  <Clock size={13} /> {posts[0].readTime}
                </span>
                <span className={styles.label3}>{posts[0].date}</span>
              </div>
              <button className={styles.button5}>
                Ler mais <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className={styles.section2}>
        <div className={styles.grid2}>
          {posts.slice(1).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.blogStyle2}>
                <img src={p.img} alt={p.title} className={styles.image2} />
              </div>
              <div className={styles.blogStyle3}>
                <div className={styles.row3}>
                  <span
                    className={styles.label4}
                    style={{ color: catColor[p.category] || "#555" }}
                  >
                    <Tag size={10} className={styles.icon} />{p.category}
                  </span>
                  <span className={styles.label5}>{p.date}</span>
                </div>
                <h3 className={styles.cardHeading}>{p.title}</h3>
                <p className={styles.text}>{p.excerpt}</p>
                <div className={styles.row4}>
                  <span className={styles.label6}>
                    <Clock size={12} /> {p.readTime}
                  </span>
                  <button className={styles.button6}>
                    Ler mais <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
