import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { FileText, BookOpen, Briefcase, LogOut, Plus, Edit, Trash2, Users, X, Save, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { AdminFormModal } from "../components/AdminFormModal";
import styles from "./PainelAdmin.module.css";

const RED = "#A62D37";
const BROWN = "#4B1919";

type Section = "conteudos" | "cursos" | "projetos" | "associados";
type ModalType = "conteudo" | "curso" | "projeto" | null;

type Associado = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  status: "Ativo" | "Inativo" | "Pendente";
  dataAssociacao: string;
  participacao: string;
  idade: string;
  estadoCivil: string;
  nacionalidade: string;
  naturalidade: string;
  dataNascimento: string;
  profissao: string;
  cpf: string;
  documentoIdentidade: string;
  orgaoExpedidor: string;
  endereco: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
};

type InfoAssociado = {
  totalAssociados: string;
  projetosAtivos: string;
  arrecadacaoTotal: string;
  proximaAssembleia: string;
};

type DiretoriaMembro = {
  cargo: string;
  nome: string;
};

type EditingAssociado = Associado | null;

export default function PainelAdmin() {
  const navigate = useNavigate();
  const { userType, logout } = useAuth();
  const [activeSection, setActiveSection] = useState<Section>("conteudos");
  const [modalType, setModalType] = useState<ModalType>(null);

  // Estados para Gestão de Associados
  const [associados, setAssociados] = useState<Associado[]>([
    { id: 1, nome: "Maria Silva Santos", email: "maria.silva@email.com", telefone: "(11) 99876-5432", status: "Ativo", dataAssociacao: "Mar 2025", participacao: "Associada", idade: "52", estadoCivil: "Casada", nacionalidade: "Brasileira", naturalidade: "Itu/SP", dataNascimento: "15/03/1974", profissao: "Arquiteta", cpf: "123.456.789-00", documentoIdentidade: "12.345.678-9", orgaoExpedidor: "SSP/SP", endereco: "Rua das Flores", numero: "123", bairro: "Centro", cep: "13300-000", cidade: "Itu", estado: "SP" },
    { id: 2, nome: "João Carlos Oliveira", email: "joao.oliveira@email.com", telefone: "(11) 98765-4321", status: "Ativo", dataAssociacao: "Mar 2025", participacao: "Associado", idade: "48", estadoCivil: "Casado", nacionalidade: "Brasileiro", naturalidade: "São Paulo/SP", dataNascimento: "22/07/1978", profissao: "Engenheiro Civil", cpf: "234.567.890-11", documentoIdentidade: "23.456.789-0", orgaoExpedidor: "SSP/SP", endereco: "Av. Brasil", numero: "456", bairro: "Vila Santa Terezinha", cep: "13301-000", cidade: "Itu", estado: "SP" },
    { id: 3, nome: "Ana Paula Costa", email: "ana.costa@email.com", telefone: "(11) 97654-3210", status: "Ativo", dataAssociacao: "Abr 2025", participacao: "Associada", idade: "44", estadoCivil: "Solteira", nacionalidade: "Brasileira", naturalidade: "Campinas/SP", dataNascimento: "10/11/1982", profissao: "Contadora", cpf: "345.678.901-22", documentoIdentidade: "34.567.890-1", orgaoExpedidor: "SSP/SP", endereco: "Rua São Paulo", numero: "789", bairro: "Jardim Padre Bento", cep: "13302-000", cidade: "Itu", estado: "SP" },
    { id: 4, nome: "Pedro Henrique Souza", email: "pedro.souza@email.com", telefone: "(11) 96543-2109", status: "Ativo", dataAssociacao: "Abr 2025", participacao: "Associado", idade: "39", estadoCivil: "Casado", nacionalidade: "Brasileiro", naturalidade: "Sorocaba/SP", dataNascimento: "05/02/1987", profissao: "Advogado", cpf: "456.789.012-33", documentoIdentidade: "45.678.901-2", orgaoExpedidor: "SSP/SP", endereco: "Praça da República", numero: "321", bairro: "Centro", cep: "13300-100", cidade: "Itu", estado: "SP" },
    { id: 5, nome: "Carla Ferreira Lima", email: "carla.lima@email.com", telefone: "(11) 95432-1098", status: "Ativo", dataAssociacao: "Mai 2025", participacao: "Associada", idade: "35", estadoCivil: "Divorciada", nacionalidade: "Brasileira", naturalidade: "Itu/SP", dataNascimento: "18/09/1991", profissao: "Professora de História", cpf: "567.890.123-44", documentoIdentidade: "56.789.012-3", orgaoExpedidor: "SSP/SP", endereco: "Rua Dom Pedro I", numero: "654", bairro: "Vila Gatti", cep: "13303-000", cidade: "Itu", estado: "SP" },
    { id: 6, nome: "Roberto Alves Neto", email: "roberto.neto@email.com", telefone: "(11) 94321-0987", status: "Pendente", dataAssociacao: "Abr 2026", participacao: "Associado", idade: "28", estadoCivil: "Solteiro", nacionalidade: "Brasileiro", naturalidade: "Jundiaí/SP", dataNascimento: "30/06/1998", profissao: "Designer Gráfico", cpf: "678.901.234-55", documentoIdentidade: "67.890.123-4", orgaoExpedidor: "SSP/SP", endereco: "Rua Barão do Itaim", numero: "987", bairro: "Pirapitingui", cep: "13304-000", cidade: "Itu", estado: "SP" },
  ]);
  const [editingAssociado, setEditingAssociado] = useState<EditingAssociado>(null);
  const [infoAssociado, setInfoAssociado] = useState<InfoAssociado>({
    totalAssociados: "47",
    projetosAtivos: "12",
    arrecadacaoTotal: "R$ 28.450",
    proximaAssembleia: "20 Jun",
  });
  const [editingInfo, setEditingInfo] = useState(false);
  const [infoTemp, setInfoTemp] = useState<InfoAssociado>({ ...{ totalAssociados: "47", projetosAtivos: "12", arrecadacaoTotal: "R$ 28.450", proximaAssembleia: "20 Jun" } });
  const [diretoria, setDiretoria] = useState<DiretoriaMembro[]>([
    { cargo: "Presidente", nome: "Geraldo Gonçalves Jr" },
    { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini" },
    { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira" },
    { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni" },
  ]);
  const [editingDiretoria, setEditingDiretoria] = useState(false);
  const [diretoriaTemp, setDiretoriaTemp] = useState<DiretoriaMembro[]>([]);

  // Estados para filtros de associados
  const [searchAssociado, setSearchAssociado] = useState("");
  const [filterStatus, setFilterStatus] = useState<"Todos" | "Ativo" | "Inativo" | "Pendente">("Todos");
  const [sortOrder, setSortOrder] = useState<"A-Z" | "Z-A">("A-Z");

  // Estados para armazenar os dados
  const [conteudos, setConteudos] = useState([
    { id: 1, titulo: "Manual de Preservação do Patrimônio", tipo: "Artigo", status: "Publicado", data: "Mar 2026" },
    { id: 2, titulo: "História Arquitetônica de Itu", tipo: "Livro", status: "Publicado", data: "Jan 2026" },
    { id: 3, titulo: "Relatório Anual 2025", tipo: "Relatório", status: "Rascunho", data: "Dez 2025" },
  ]);

  const [cursos, setCursos] = useState([
    { id: 1, titulo: "História e Patrimônio de Itu", duracao: "8h", responsavel: "Prof. João Silva", status: "Publicado" },
    { id: 2, titulo: "Introdução à Conservação", duracao: "12h", responsavel: "Profa. Ana Costa", status: "Publicado" },
    { id: 3, titulo: "Arquitetura Colonial Paulista", duracao: "10h", responsavel: "Prof. Carlos Mendes", status: "Rascunho" },
  ]);

  const [projetosRestauro, setProjetosRestauro] = useState([
    { id: 1, nome: "Casarão do Centro", status: "Em andamento" },
    { id: 2, nome: "Teatro Municipal", status: "Planejamento" },
  ]);

  const [projetosEducacionais, setProjetosEducacionais] = useState([
    { id: 1, nome: "Folhetos Educativos", arrecadado: "R$ 8.500", meta: "R$ 15.000" },
    { id: 2, nome: "Maquetes 3D", arrecadado: "R$ 3.200", meta: "R$ 12.000" },
  ]);

  useEffect(() => {
    if (userType !== "administrador") {
      navigate("/login");
    }
  }, [userType, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSaveConteudo = (data: any) => {
    const novoConteudo = {
      id: conteudos.length + 1,
      titulo: data.titulo,
      tipo: data.tipo,
      status: data.status === "publicado" ? "Publicado" : "Rascunho",
      data: new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
    };
    setConteudos([...conteudos, novoConteudo]);
  };

  const handleSaveCurso = (data: any) => {
    const novoCurso = {
      id: cursos.length + 1,
      titulo: data.titulo,
      duracao: data.duracao,
      responsavel: data.responsavel,
      status: data.status === "publicado" ? "Publicado" : "Rascunho",
    };
    setCursos([...cursos, novoCurso]);
  };

  const handleSaveProjeto = (data: any) => {
    if (data.tipoProjeto === "educacional") {
      const novoProjeto = {
        id: projetosEducacionais.length + 1,
        nome: data.titulo,
        arrecadado: `R$ ${data.valorArrecadado || "0"}`,
        meta: `R$ ${data.metas}`,
      };
      setProjetosEducacionais([...projetosEducacionais, novoProjeto]);
    } else {
      const novoProjeto = {
        id: projetosRestauro.length + 1,
        nome: data.titulo,
        status: data.statusProjeto,
      };
      setProjetosRestauro([...projetosRestauro, novoProjeto]);
    }
  };

  const handleDeleteConteudo = (id: number) => {
    if (confirm("Deseja realmente excluir este conteúdo?")) {
      setConteudos(conteudos.filter((c) => c.id !== id));
    }
  };

  const handleDeleteCurso = (id: number) => {
    if (confirm("Deseja realmente excluir este curso?")) {
      setCursos(cursos.filter((c) => c.id !== id));
    }
  };

  // Função para filtrar associados
  const getFilteredAssociados = () => {
    let filtered = [...associados];

    // Filtro por nome
    if (searchAssociado) {
      filtered = filtered.filter((a) =>
        a.nome.toLowerCase().includes(searchAssociado.toLowerCase())
      );
    }

    // Filtro por status
    if (filterStatus !== "Todos") {
      filtered = filtered.filter((a) => a.status === filterStatus);
    }

    // Ordenação alfabética
    filtered.sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.nome.localeCompare(b.nome);
      } else {
        return b.nome.localeCompare(a.nome);
      }
    });

    return filtered;
  };

  if (userType !== "administrador") {
    return null;
  }

  return (
    <div className={styles.page}>
      <AdminFormModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || "conteudo"}
        onSave={(data) => {
          if (modalType === "conteudo") handleSaveConteudo(data);
          else if (modalType === "curso") handleSaveCurso(data);
          else if (modalType === "projeto") handleSaveProjeto(data);
        }}
      />

      {/* Header */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div>
              <h1 className={styles.heroTitle}>
                Painel Administrativo
              </h1>
              <div className={styles.divider} />
              <p className={styles.heroSubtitle}>
                Gerenciamento de conteúdos do site
              </p>
            </div>
            <button
              onClick={handleLogout}
              className={styles.button}
            >
              <LogOut size={18} /> Sair
            </button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className={`${styles.painelAdminStyle} ${styles.stickyTabBar}`}>
        <div className={styles.container2}>
          {[
            { key: "conteudos" as Section, label: "Conteúdos", icon: FileText },
            { key: "cursos" as Section, label: "Cursos", icon: BookOpen },
            { key: "projetos" as Section, label: "Projetos", icon: Briefcase },
            { key: "associados" as Section, label: "Gestão de Associados", icon: Users },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`${styles.button2} ${activeSection === item.key ? styles.tabActive : styles.tabInactive}`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* CONTEÚDOS */}
          {activeSection === "conteudos" && (
            <div>
              <div className={styles.row2}>
                <h2 className={styles.heading}>
                  Gerenciar Conteúdos
                </h2>
                <button
                  onClick={() => setModalType("conteudo")}
                  className={styles.button}
                >
                  <Plus size={18} /> Adicionar Conteúdo
                </button>
              </div>

              <div className={styles.card}>
                <div className={styles.painelAdminStyle2}>
                  {conteudos.map((item) => (
                    <div key={item.id} className={styles.row3}>
                      <div className={styles.row4}>
                        <h3 className={styles.heading2}>{item.titulo}</h3>
                        <div className={styles.row5}>
                          <span className={styles.body}>{item.tipo}</span>
                          <span className={styles.label}>•</span>
                          <span className={item.status === "Publicado" ? styles.statusPublicado : styles.statusRascunho}>
                            {item.status}
                          </span>
                          <span className={styles.label}>•</span>
                          <span className={styles.label}>{item.data}</span>
                        </div>
                      </div>
                      <div className={styles.row6}>
                        <button
                          className={`${styles.button3} ${styles.btnEdit}`}
                        >
                          <Edit size={16} color={RED} />
                        </button>
                        <button
                          onClick={() => handleDeleteConteudo(item.id)}
                          className={`${styles.button3} ${styles.btnDelete}`}
                        >
                          <Trash2 size={16} color="#d32f2f" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CURSOS */}
          {activeSection === "cursos" && (
            <div>
              <div className={styles.row2}>
                <h2 className={styles.heading}>
                  Gerenciar Cursos
                </h2>
                <button
                  onClick={() => setModalType("curso")}
                  className={styles.button}
                >
                  <Plus size={18} /> Adicionar Curso
                </button>
              </div>

              <div className={styles.card}>
                <div className={styles.painelAdminStyle2}>
                  {cursos.map((item) => (
                    <div key={item.id} className={styles.row3}>
                      <div className={styles.row4}>
                        <h3 className={styles.heading2}>{item.titulo}</h3>
                        <div className={styles.row5}>
                          <span className={styles.body}>{item.duracao}</span>
                          <span className={styles.label}>•</span>
                          <span className={styles.body}>{item.responsavel}</span>
                          <span className={styles.label}>•</span>
                          <span className={item.status === "Publicado" ? styles.statusPublicado : styles.statusRascunho}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className={styles.row6}>
                        <button
                          className={`${styles.button3} ${styles.btnEdit}`}
                        >
                          <Edit size={16} color={RED} />
                        </button>
                        <button
                          onClick={() => handleDeleteCurso(item.id)}
                          className={`${styles.button3} ${styles.btnDelete}`}
                        >
                          <Trash2 size={16} color="#d32f2f" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PROJETOS */}
          {activeSection === "projetos" && (
            <div>
              <div className={styles.row2}>
                <h2 className={styles.heading}>
                  Gerenciar Projetos
                </h2>
                <button
                  onClick={() => setModalType("projeto")}
                  className={styles.button}
                >
                  <Plus size={18} /> Adicionar Projeto
                </button>
              </div>

              <div className={styles.grid}>
                <div>
                  <h3 className={`${styles.subheadingSm} ${styles.heading3}`}>
                    Projetos de Restauro
                  </h3>
                  <div className={styles.card}>
                    <div className={styles.painelAdminStyle2}>
                      {projetosRestauro.map((item) => (
                        <div key={item.id} className={styles.row3}>
                          <div>
                            <h4 className={styles.heading4}>{item.nome}</h4>
                            <span className={styles.body}>{item.status}</span>
                          </div>
                          <button
                            className={`${styles.button3} ${styles.btnEdit}`}
                          >
                            <Edit size={16} color={RED} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`${styles.subheadingSm} ${styles.heading3}`}>
                    Projetos Educacionais (APRI)
                  </h3>
                  <div className={styles.card}>
                    <div className={styles.painelAdminStyle2}>
                      {projetosEducacionais.map((item) => (
                        <div key={item.id} className={styles.painelAdminStyle3}>
                          <div className={styles.row7}>
                            <h4 className={styles.heading4}>{item.nome}</h4>
                            <button
                              className={`${styles.button3} ${styles.btnEdit}`}
                            >
                              <Edit size={16} color={RED} />
                            </button>
                          </div>
                          <div className={styles.row8}>
                            <span className={styles.body2}>{item.arrecadado}</span>
                            <span className={styles.label}>Meta: {item.meta}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* GESTÃO DE ASSOCIADOS */}
          {activeSection === "associados" && (
            <div className={styles.painelAdminStyle4}>
              <div className={styles.row7}>
                <h2 className={styles.heading}>
                  Gestão de Associados
                </h2>
              </div>

              {/* Dados exibidos na Área do Associado */}
              <div>
                <div className={styles.row9}>
                  <h3 className={styles.subheadingMd}>
                    Dados Gerais (visíveis na Área do Associado)
                  </h3>
                  {!editingInfo ? (
                    <button
                      onClick={() => { setEditingInfo(true); setInfoTemp({ ...infoAssociado }); }}
                      className={`${styles.button4} ${styles.btnEditInfo}`}
                    >
                      <Edit size={16} /> Editar
                    </button>
                  ) : (
                    <div className={styles.row6}>
                      <button
                        onClick={() => { setInfoAssociado({ ...infoTemp }); setEditingInfo(false); }}
                        className={styles.button}
                      >
                        <Save size={16} /> Salvar
                      </button>
                      <button
                        onClick={() => setEditingInfo(false)}
                        className={`${styles.button5} ${styles.btnCancel}`}
                      >
                        <X size={16} /> Cancelar
                      </button>
                    </div>
                  )}
                </div>

                <div className={styles.card}>
                  <div className={styles.grid2}>
                    {[
                      { label: "Total de Associados", key: "totalAssociados" as keyof InfoAssociado },
                      { label: "Projetos Ativos", key: "projetosAtivos" as keyof InfoAssociado },
                      { label: "Arrecadação Total 2026", key: "arrecadacaoTotal" as keyof InfoAssociado },
                      { label: "Próxima Assembleia", key: "proximaAssembleia" as keyof InfoAssociado },
                    ].map(({ label, key }) => (
                      <div key={key} className={styles.painelAdminStyle3}>
                        <p className={`${styles.labelXs} ${styles.text}`}>{label}</p>
                        {editingInfo ? (
                          <input
                            value={infoTemp[key]}
                            onChange={(e) => setInfoTemp({ ...infoTemp, [key]: e.target.value })}
                            className={`${styles.input} ${styles.fieldInput}`}
                          />
                        ) : (
                          <p className={styles.statValue}>
                            {infoAssociado[key]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Composição da Diretoria */}
              <div>
                <div className={styles.row9}>
                  <h3 className={styles.subheadingMd}>
                    Composição da Diretoria
                  </h3>
                  {!editingDiretoria ? (
                    <button
                      onClick={() => { setEditingDiretoria(true); setDiretoriaTemp(diretoria.map(d => ({ ...d }))); }}
                      className={`${styles.button4} ${styles.btnEditInfo}`}
                    >
                      <Edit size={16} /> Editar
                    </button>
                  ) : (
                    <div className={styles.row6}>
                      <button
                        onClick={() => { setDiretoria([...diretoriaTemp]); setEditingDiretoria(false); }}
                        className={styles.button}
                      >
                        <Save size={16} /> Salvar
                      </button>
                      <button
                        onClick={() => setEditingDiretoria(false)}
                        className={`${styles.button5} ${styles.btnCancel}`}
                      >
                        <X size={16} /> Cancelar
                      </button>
                    </div>
                  )}
                </div>

                <div className={styles.card}>
                  <div className={styles.grid3}>
                    {(editingDiretoria ? diretoriaTemp : diretoria).map((membro, idx) => (
                      <div key={membro.cargo} className={styles.painelAdminStyle3}>
                        <p className={`${styles.labelXs} ${styles.text2}`}>{membro.cargo}</p>
                        {editingDiretoria ? (
                          <input
                            value={diretoriaTemp[idx].nome}
                            onChange={(e) => {
                              const updated = [...diretoriaTemp];
                              updated[idx] = { ...updated[idx], nome: e.target.value };
                              setDiretoriaTemp(updated);
                            }}
                            className={`${styles.input2} ${styles.fieldInput}`}
                          />
                        ) : (
                          <p className={styles.heading4}>{membro.nome}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lista de Associados */}
              <div>
                <div className={styles.row9}>
                  <h3 className={styles.subheadingMd}>
                    Cadastro de Associados
                  </h3>
                  <button
                    onClick={() => {
                      const novoId = associados.length + 1;
                      const novoAssociado: Associado = {
                        id: novoId,
                        nome: "Novo Associado",
                        email: "email@exemplo.com",
                        telefone: "(11) 00000-0000",
                        status: "Pendente",
                        dataAssociacao: new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
                        participacao: "Associado",
                        idade: "",
                        estadoCivil: "Solteiro",
                        nacionalidade: "Brasileira",
                        naturalidade: "",
                        dataNascimento: "",
                        profissao: "",
                        cpf: "",
                        documentoIdentidade: "",
                        orgaoExpedidor: "",
                        endereco: "",
                        numero: "",
                        bairro: "",
                        cep: "",
                        cidade: "",
                        estado: "SP",
                      };
                      setAssociados([novoAssociado, ...associados]);
                      setEditingAssociado(novoAssociado);
                    }}
                    className={styles.button}
                  >
                    <Plus size={18} /> Adicionar Associado
                  </button>
                </div>

                {/* Filtros */}
                <div className={styles.card2}>
                  <div className={styles.grid4}>
                    <div>
                      <label className={`${styles.labelSm} ${styles.label2}`}>
                        Pesquisar por nome
                      </label>
                      <input
                        type="text"
                        value={searchAssociado}
                        onChange={(e) => setSearchAssociado(e.target.value)}
                        placeholder="Digite o nome..."
                        className={`${styles.input3} ${styles.fieldInput}`}
                      />
                    </div>
                    <div>
                      <label className={`${styles.labelSm} ${styles.label2}`}>
                        Filtrar por status
                      </label>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                        className={`${styles.select} ${styles.fieldInput}`}
                      >
                        <option>Todos</option>
                        <option>Ativo</option>
                        <option>Inativo</option>
                        <option>Pendente</option>
                      </select>
                    </div>
                    <div>
                      <label className={`${styles.labelSm} ${styles.label2}`}>
                        Ordenar
                      </label>
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as typeof sortOrder)}
                        className={`${styles.select} ${styles.fieldInput}`}
                      >
                        <option>A-Z</option>
                        <option>Z-A</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.card3}>
                  {getFilteredAssociados().map((assoc) => (
                    <div key={assoc.id}>
                      <div
                        className={styles.row10}
                        onClick={() => setEditingAssociado(editingAssociado?.id === assoc.id ? null : assoc)}
                      >
                        <div className={styles.row4}>
                          <div className={styles.row11}>
                            <h4 className={styles.heading4}>{assoc.nome}</h4>
                            <span
                              className={`${styles.label3} ${assoc.status === "Ativo" ? styles.statusAtivo : assoc.status === "Pendente" ? styles.statusPendente : styles.statusInativo}`}
                            >
                              {assoc.status}
                            </span>
                          </div>
                          <p className={styles.body3}>{assoc.email} · {assoc.telefone}</p>
                        </div>
                        <div className={styles.row12}>
                          {editingAssociado?.id === assoc.id ? <ChevronUp size={18} color={RED} /> : <ChevronDown size={18} color={RED} />}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm("Deseja realmente excluir este associado?")) {
                                setAssociados(associados.filter((a) => a.id !== assoc.id));
                                if (editingAssociado?.id === assoc.id) setEditingAssociado(null);
                              }
                            }}
                            className={`${styles.button3} ${styles.btnDelete}`}
                          >
                            <Trash2 size={15} color="#d32f2f" />
                          </button>
                        </div>
                      </div>

                      {editingAssociado?.id === assoc.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className={`${styles.painelAdminStyle5} ${styles.detailPanel}`}
                        >
                          {/* Resumo Superior */}
                          <div className={`${styles.painelAdminStyle6} ${styles.detailBorder}`}>
                            <h4 className={styles.heading5}>
                              {editingAssociado.nome}
                            </h4>
                            <p className={styles.body4}>{editingAssociado.email}</p>
                          </div>

                          {/* Dados do Associado */}
                          <div>
                            <h5 className={styles.heading6}>
                              Dados do Associado
                            </h5>
                            <div className={styles.grid5}>
                              <div>
                                <label className={styles.labelSm}>Nome completo</label>
                                <input
                                  value={editingAssociado.nome}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, nome: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Idade</label>
                                <input
                                  value={editingAssociado.idade}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, idade: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Estado civil</label>
                                <select
                                  value={editingAssociado.estadoCivil}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, estadoCivil: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                >
                                  <option>Solteiro</option>
                                  <option>Casado</option>
                                  <option>Divorciado</option>
                                  <option>Viúvo</option>
                                  <option>Solteira</option>
                                  <option>Casada</option>
                                  <option>Divorciada</option>
                                  <option>Viúva</option>
                                </select>
                              </div>
                              <div>
                                <label className={styles.labelSm}>Nacionalidade</label>
                                <input
                                  value={editingAssociado.nacionalidade}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, nacionalidade: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Naturalidade</label>
                                <input
                                  value={editingAssociado.naturalidade}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, naturalidade: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Data de nascimento</label>
                                <input
                                  value={editingAssociado.dataNascimento}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, dataNascimento: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                  placeholder="DD/MM/AAAA"
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Profissão</label>
                                <input
                                  value={editingAssociado.profissao}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, profissao: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>CPF</label>
                                <input
                                  value={editingAssociado.cpf}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, cpf: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                  placeholder="000.000.000-00"
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Documento de identidade</label>
                                <input
                                  value={editingAssociado.documentoIdentidade}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, documentoIdentidade: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Órgão expedidor</label>
                                <input
                                  value={editingAssociado.orgaoExpedidor}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, orgaoExpedidor: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                  placeholder="SSP/SP"
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Telefone</label>
                                <input
                                  value={editingAssociado.telefone}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, telefone: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>E-mail</label>
                                <input
                                  value={editingAssociado.email}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, email: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Endereço de Referência */}
                          <div>
                            <h5 className={styles.heading6}>
                              Endereço de Referência
                            </h5>
                            <div className={styles.grid5}>
                              <div>
                                <label className={styles.labelSm}>Endereço</label>
                                <input
                                  value={editingAssociado.endereco}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, endereco: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Número</label>
                                <input
                                  value={editingAssociado.numero}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, numero: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Bairro</label>
                                <input
                                  value={editingAssociado.bairro}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, bairro: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>CEP</label>
                                <input
                                  value={editingAssociado.cep}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, cep: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                  placeholder="00000-000"
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Cidade</label>
                                <input
                                  value={editingAssociado.cidade}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, cidade: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div>
                                <label className={styles.labelSm}>Estado</label>
                                <select
                                  value={editingAssociado.estado}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, estado: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                >
                                  <option>AC</option><option>AL</option><option>AP</option><option>AM</option><option>BA</option>
                                  <option>CE</option><option>DF</option><option>ES</option><option>GO</option><option>MA</option>
                                  <option>MT</option><option>MS</option><option>MG</option><option>PA</option><option>PB</option>
                                  <option>PR</option><option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
                                  <option>RS</option><option>RO</option><option>RR</option><option>SC</option><option>SP</option>
                                  <option>SE</option><option>TO</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Informações de Associação */}
                          <div>
                            <h5 className={styles.heading6}>
                              Informações de Associação
                            </h5>
                            <div className={styles.grid5}>
                              <div>
                                <label className={styles.labelSm}>Status</label>
                                <select
                                  value={editingAssociado.status}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, status: e.target.value as Associado["status"] })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                >
                                  <option>Ativo</option>
                                  <option>Inativo</option>
                                  <option>Pendente</option>
                                </select>
                              </div>
                              <div>
                                <label className={styles.labelSm}>Data de Associação</label>
                                <input
                                  value={editingAssociado.dataAssociacao}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, dataAssociacao: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                              <div className={styles.painelAdminStyle7}>
                                <label className={styles.labelSm}>Participação / Cargo</label>
                                <input
                                  value={editingAssociado.participacao}
                                  onChange={(e) => setEditingAssociado({ ...editingAssociado, participacao: e.target.value })}
                                  className={`${styles.input4} ${styles.fieldInput}`}
                                />
                              </div>
                            </div>
                          </div>

                          <div className={`${styles.row13} ${styles.detailBorder}`}>
                            <button
                              onClick={() => {
                                setAssociados(associados.map((a) => a.id === editingAssociado.id ? { ...editingAssociado } : a));
                                setEditingAssociado(null);
                              }}
                              className={styles.button}
                            >
                              <Save size={16} /> Salvar alterações
                            </button>
                            <button
                              onClick={() => setEditingAssociado(null)}
                              className={`${styles.button5} ${styles.btnCancel}`}
                            >
                              <X size={16} /> Cancelar
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
