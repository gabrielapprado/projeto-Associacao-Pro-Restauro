import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Users, FileText, DollarSign, TrendingUp, Download, Calendar, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import styles from "./AreaAssociado.module.css";

const RED = "#A62D37";
const WINE = "#A64951";
const TERRACOTA = "#D98B48";
const GOLD = "#DBAD38";

const atas = [
  { id: 1, titulo: "Ata da Assembleia Geral Ordinária 2026", data: "15 Abr 2026", arquivo: "#" },
  { id: 2, titulo: "Ata da Reunião de Diretoria — Março 2026", data: "10 Mar 2026", arquivo: "#" },
  { id: 3, titulo: "Ata da Assembleia Extraordinária 2025", data: "20 Dez 2025", arquivo: "#" },
  { id: 4, titulo: "Ata da Reunião de Diretoria — Novembro 2025", data: "15 Nov 2025", arquivo: "#" },
];

const relatorios = [
  { id: 1, titulo: "Relatório de Atividades 2025", tipo: "Anual", data: "Jan 2026", arquivo: "#" },
  { id: 2, titulo: "Prestação de Contas 2º Semestre 2025", tipo: "Financeiro", data: "Jan 2026", arquivo: "#" },
  { id: 3, titulo: "Relatório de Projetos Educacionais 2025", tipo: "Projetos", data: "Dez 2025", arquivo: "#" },
  { id: 4, titulo: "Prestação de Contas 1º Semestre 2025", tipo: "Financeiro", data: "Jul 2025", arquivo: "#" },
];

const associados = [
  { id: 1, nome: "Geraldo Gonçalves Jr", email: "geraldo.goncalves@email.com" },
  { id: 2, nome: "Neusa Maria Trettel Scavacini", email: "neusa.scavacini@email.com" },
  { id: 3, nome: "Rosangela Aparecida de Mazi Carnevalli Pereira", email: "rosangela.pereira@email.com" },
  { id: 4, nome: "Marcos Aparecido Passoni", email: "marcos.passoni@email.com" },
  { id: 5, nome: "Maria Silva Santos", email: "maria.silva@email.com" },
  { id: 6, nome: "João Carlos Oliveira", email: "joao.oliveira@email.com" },
  { id: 7, nome: "Ana Paula Costa", email: "ana.costa@email.com" },
  { id: 8, nome: "Pedro Henrique Souza", email: "pedro.souza@email.com" },
  { id: 9, nome: "Carla Ferreira Lima", email: "carla.lima@email.com" },
  { id: 10, nome: "Roberto Alves Neto", email: "roberto.neto@email.com" },
];

export default function AreaAssociado() {
  const navigate = useNavigate();
  const { userType, logout } = useAuth();
  const [searchAssociado, setSearchAssociado] = useState("");

  useEffect(() => {
    if (userType !== "associado" && userType !== "administrador") {
      navigate("/login");
    }
  }, [userType, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (userType !== "associado" && userType !== "administrador") {
    return null;
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.row}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className={styles.heroTitle}>
                Área do Associado
              </h1>
              <div className={styles.divider} />
              <p className={styles.heroSubtitle}>
                Bem-vindo à área restrita da APRI
              </p>
            </motion.div>
            <button
              onClick={handleLogout}
              className={styles.button}
            >
              <LogOut size={18} /> Sair
            </button>
          </div>
        </div>
      </section>

      {/* Dados Gerais */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Dados Gerais da Associação
          </h2>

          <div className={styles.grid}>
            {[
              { icon: Users, label: "Total de Associados", value: "47", color: RED },
              { icon: TrendingUp, label: "Projetos Ativos", value: "12", color: TERRACOTA },
              { icon: DollarSign, label: "Arrecadação Total 2026", value: "R$ 28.450", color: GOLD },
              { icon: Calendar, label: "Próxima Assembleia", value: "20 Jun", color: WINE },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <div className={styles.row2}>
                    <Icon size={36} color={item.color} />
                  </div>
                  <p className={styles.body}>{item.label}</p>
                  <p className={styles.heading2}>
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atas de Reuniões */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Atas de Reuniões
          </h2>

          <div className={styles.grid2}>
            {atas.map((ata, i) => (
              <motion.div
                key={ata.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <div className={styles.row3}>
                  <div className={styles.row4}>
                    <h3 className={styles.heading3}>
                      {ata.titulo}
                    </h3>
                    <p className={styles.body2}>Data: {ata.data}</p>
                  </div>
                  <a
                    href={ata.arquivo}
                    className={styles.button2}
                  >
                    <Download size={16} /> Baixar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relatórios Internos */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Relatórios Internos
          </h2>

          <div className={styles.grid2}>
            {relatorios.map((rel, i) => (
              <motion.div
                key={rel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card2}
              >
                <div className={styles.row3}>
                  <div className={styles.row4}>
                    <span className={styles.label}>
                      {rel.tipo}
                    </span>
                    <h3 className={styles.heading3}>
                      {rel.titulo}
                    </h3>
                    <p className={styles.body2}>Publicado em: {rel.data}</p>
                  </div>
                  <a
                    href={rel.arquivo}
                    className={styles.button2}
                  >
                    <Download size={16} /> Baixar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Associados */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Lista de Associados
          </h2>

          {/* Campo de Pesquisa */}
          <div className={styles.card3}>
            <div className={styles.areaAssociadoStyle}>
              <label className={styles.label2}>
                Pesquisar por nome
              </label>
              <input
                type="text"
                value={searchAssociado}
                onChange={(e) => setSearchAssociado(e.target.value)}
                placeholder="Digite o nome..."
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.grid3}>
            {associados
              .filter((assoc) =>
                assoc.nome.toLowerCase().includes(searchAssociado.toLowerCase())
              )
              .map((assoc, i) => {
              const iniciais = assoc.nome
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return (
                <motion.div
                  key={assoc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={styles.card4}
                >
                  <div className={styles.row5}>
                    <div
                      className={`${styles.row6} ${styles.avatarCircle}`}
                    >
                      {iniciais}
                    </div>
                    <div className={styles.row7}>
                      <h3 className={styles.heading4}>
                        {assoc.nome}
                      </h3>
                      <p className={styles.text}>
                        {assoc.email}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informações Institucionais */}
      <section className={styles.section}>
        <div className={styles.container2}>
          <h2 className={styles.heading5}>
            Informações Institucionais
          </h2>

          <div className={styles.areaAssociadoStyle2}>
            <div className={styles.card5}>
              <h3 className={styles.heading6}>
                Composição da Diretoria Atual
              </h3>
              <div className={styles.grid4}>
                {[
                  { cargo: "Presidente", nome: "Geraldo Gonçalves Jr" },
                  { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini" },
                  { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni" },
                  { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira" },
                ].map((membro) => (
                  <div key={membro.cargo} className={styles.areaAssociadoStyle3}>
                    <p className={styles.text2}>{membro.cargo}</p>
                    <p className={styles.text3}>{membro.nome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card5}>
              <h3 className={styles.heading6}>
                Detalhamento Financeiro
              </h3>
              <div className={styles.areaAssociadoStyle4}>
                <div className={styles.row8}>
                  <span className={styles.label3}>Contribuições de Associados</span>
                  <span className={styles.text3}>R$ 16.920,00</span>
                </div>
                <div className={styles.row8}>
                  <span className={styles.label3}>Patronos — Projetos Educacionais</span>
                  <span className={styles.text3}>R$ 11.530,00</span>
                </div>
                <div className={styles.row9}>
                  <span className={styles.text3}>Total Arrecadado em 2026</span>
                  <span className={styles.label4}>R$ 28.450,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
