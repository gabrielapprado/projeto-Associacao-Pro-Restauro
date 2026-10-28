import { motion } from "motion/react";
import { Landmark, Users, FileText, BookOpen, GraduationCap, HandshakeIcon, Download, Shield, Eye } from "lucide-react";
import heroImage from "../../imports/imagem_rua_docarmo.jpeg";
import styles from "./Sobre.module.css";

const RED = "#A62D37";

export default function Sobre() {
  return (
    <div className={styles.page}>
      {/* Seção 1 — Apresentação */}
      <section className={styles.section}>
        <div className={styles.sobreStyle} style={{ backgroundImage: `url(${heroImage})` }} />
        <div className={`${styles.sobreStyle2} ${styles.heroGradient}`} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className={styles.heroTitle}>
              Sobre a APRI
            </h1>
            <div className={styles.sobreStyle3} />
            <p className={styles.heroSubtitle}>
              A APRI (Associação Pró-Restauro de Itu) é uma organização da sociedade civil sem fins lucrativos, fundada em 2025, que atua na preservação do patrimônio histórico, arquitetônico e cultural da cidade de Itu. Nossa missão é identificar, documentar, pesquisar e promover ações de conservação e restauro dos bens culturais de interesse público, articulando parcerias com órgãos públicos, iniciativa privada e a comunidade local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção 2 — O que fazemos */}
      <section className={styles.section2}>
        <div className={styles.container2}>
          <div className={styles.sobreStyle4}>
            <h2 className={styles.heading}>
              O que fazemos
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid}>
            {[
              {
                icon: Landmark,
                title: "Restauro e Conservação",
                desc: "Articulamos e intermediamos projetos de restauro de edificações históricas em parceria com órgãos de preservação e proprietários de imóveis tombados.",
              },
              {
                icon: HandshakeIcon,
                title: "Articulação Institucional",
                desc: "Atuamos como ponte entre a sociedade civil, poder público (CONDEPHAAT, IPHAN, Prefeitura) e proprietários de patrimônio para viabilizar ações de preservação.",
              },
              {
                icon: FileText,
                title: "Pesquisa",
                desc: "Desenvolvemos pesquisas históricas, levantamentos fotográficos e documentais sobre o patrimônio de Itu, produzindo conhecimento técnico de interesse público.",
              },
              {
                icon: GraduationCap,
                title: "Educação Patrimonial",
                desc: "Realizamos cursos, palestras, publicações e materiais educativos para sensibilizar a comunidade sobre a importância da preservação do patrimônio cultural.",
              },
            ].map((item, i) => {
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
                    <div className={styles.sobreStyle5}>
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

      {/* Seção 3 — Como atuamos */}
      <section className={styles.section3}>
        <div className={styles.container3}>
          <h2 className={styles.heading3}>
            Como atuamos
          </h2>
          <div className={styles.sobreStyle6} />
          <div className={styles.card2}>
            <p className={styles.body2}>
              A APRI <strong>não executa obras de restauro diretamente</strong>. Nossa atuação é de <strong>articulação institucional</strong>, intermediando a relação entre proprietários de imóveis tombados, órgãos de preservação (CONDEPHAAT, IPHAN, Prefeitura Municipal de Itu) e profissionais especializados em restauro. Identificamos demandas, auxiliamos na elaboração de projetos técnicos, buscamos fontes de financiamento (leis de incentivo, editais públicos, patrocínio privado) e acompanhamos a execução das obras por empresas especializadas e devidamente habilitadas. Dessa forma, garantimos que os projetos de restauro sejam realizados com rigor técnico, respeito às normas de preservação e transparência na aplicação de recursos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4 — Estrutura */}
      <section className={styles.section2}>
        <div className={styles.container4}>
          <div className={styles.sobreStyle4}>
            <h2 className={styles.heading}>
              Estrutura
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid2}>
            {/* Diretoria */}
            <div className={styles.card3}>
              <h3 className={styles.directorHeadingLg}>
                Diretoria
              </h3>
              <div className={styles.sobreStyle7}>
                {[
                  { cargo: "Presidente", nome: "Geraldo Gonçalves Jr", email: "presidencia@apri.org.br" },
                  { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini", email: "vice-presidencia@apri.org.br" },
                  { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira", email: "secretaria@apri.org.br" },
                  { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni", email: "tesouraria@apri.org.br" },
                  { cargo: "Diretor Técnico", nome: "Emerson Ribeiro Castilho", email: "dir.tecnica@apri.org.br" },
                ].map((item, i) => (
                  <div key={i} className={styles.row2}>
                    <Users size={20} color={RED} className={styles.icon} />
                    <div className={styles.row3}>
                      <p className={styles.text}>{item.cargo}</p>
                      <p className={styles.body3}>{item.nome}</p>
                      <p className={styles.text2}>{item.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conselhos */}
            <div className={styles.sobreStyle8}>
              <div className={styles.card3}>
                <h3 className={styles.directorHeadingMd}>
                  Conselho Administrativo
                </h3>
                <div className={styles.sobreStyle9}>
                  {["Cândida Terezinha Rosa Brites", "Larissa Vieira Caldas", "Rafaello Carlo Ianni Lorenzon"].map((nome) => (
                    <div key={nome} className={styles.sobreStyle10}>
                      {nome}
                    </div>
                  ))}
                </div>
                <p className={styles.text3}>
                  conselho.administrativo@apri.org.br
                </p>
              </div>

              <div className={styles.card3}>
                <h3 className={styles.directorHeadingMd}>
                  Conselho Fiscal
                </h3>
                <div className={styles.sobreStyle9}>
                  {["Adelino Cesar Rodrigues de Castro", "Atílio Antônio Scalet", "Josmar Fernando Leocci Camargo"].map((nome) => (
                    <div key={nome} className={styles.sobreStyle10}>
                      {nome}
                    </div>
                  ))}
                </div>
                <p className={styles.text3}>
                  conselho.fiscal@apri.org.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Documentos */}
      <section className={styles.section3}>
        <div className={styles.container4}>
          <div className={styles.sobreStyle4}>
            <h2 className={styles.heading}>
              Documentos
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid3}>
            {[
              { title: "Estatuto Social", desc: "Documento que estabelece as diretrizes, finalidades e estrutura da APRI." },
              { title: "Ata de Fundação", desc: "Registro oficial da fundação da associação em 2025." },
              { title: "Regimento Interno", desc: "Normas que regulam o funcionamento interno da organização." },
            ].map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.card4}
              >
                <div className={styles.row}>
                  <div className={styles.sobreStyle5}>
                    <FileText size={32} color={RED} />
                  </div>
                </div>
                <h3 className={styles.heading4}>
                  {doc.title}
                </h3>
                <p className={styles.body4}>
                  {doc.desc}
                </p>
                <button
                  className={styles.button}
                >
                  <Download size={16} /> Baixar PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 6 — Governança */}
      <section className={styles.section2}>
        <div className={styles.container5}>
          <div className={styles.sobreStyle11}>
            <h2 className={styles.heading}>
              Governança
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.card2}>
            <div className={styles.row4}>
              <Shield size={36} color={RED} className={styles.icon2} />
              <div>
                <h3 className={styles.heading5}>
                  Responsabilidade e Qualidade
                </h3>
                <p className={styles.body5}>
                  A APRI opera com base em princípios de <strong>governança responsável</strong>, assegurando que todas as decisões sejam tomadas de forma colegiada pela Diretoria e Conselhos, com prestação de contas regular aos associados. Todos os projetos de restauro intermediados pela associação seguem rigorosos padrões técnicos estabelecidos pelos órgãos de preservação (CONDEPHAAT, IPHAN) e são acompanhados por profissionais habilitados. A gestão financeira é submetida anualmente ao Conselho Fiscal e apresentada em Assembleia Geral Ordinária, garantindo transparência e uso adequado dos recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7 — Transparência */}
      <section className={styles.section3}>
        <div className={styles.container5}>
          <div className={styles.sobreStyle11}>
            <h2 className={styles.heading}>
              Transparência
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.card2}>
            <div className={styles.row5}>
              <Eye size={36} color={RED} className={styles.icon2} />
              <div>
                <h3 className={styles.heading5}>
                  Compromisso com a Informação Pública
                </h3>
                <p className={styles.body5}>
                  A APRI está comprometida com a <strong>transparência gradual</strong> de suas ações e resultados. Informações institucionais, documentos oficiais (estatuto, atas, relatórios) e dados sobre projetos de restauro e educação patrimonial são progressivamente disponibilizados ao público através deste site, em especial na Área do Associado e no Centro de Conteúdos. Trabalhamos continuamente para ampliar o acesso à informação, consolidar nossa base documental e prestar contas à sociedade sobre o uso de recursos e os impactos gerados pela associação na preservação do patrimônio de Itu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
