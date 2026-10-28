import { useState } from "react";
import { X, Upload, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./AdminFormModal.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";
const BROWN = "#4B1919";

type FormType = "conteudo" | "curso" | "projeto";

interface AdminFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: FormType;
  onSave: (data: any) => void;
}

export function AdminFormModal({ isOpen, onClose, type, onSave }: AdminFormModalProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [form, setForm] = useState<any>({
    titulo: "",
    descricao: "",
    tipo: "",
    status: "rascunho",
    imagem: null,
    duracao: "",
    responsavel: "",
    tipoProjeto: "educacional",
    statusProjeto: "",
    metas: "",
    valorArrecadado: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, imagem: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent, publicar: boolean) => {
    e.preventDefault();
    const finalData = { ...form, status: publicar ? "publicado" : "rascunho" };
    onSave(finalData);
    handleClose();
  };

  const handleClose = () => {
    setForm({
      titulo: "",
      descricao: "",
      tipo: "",
      status: "rascunho",
      imagem: null,
      duracao: "",
      responsavel: "",
      tipoProjeto: "educacional",
      statusProjeto: "",
      metas: "",
      valorArrecadado: "",
    });
    setImagePreview(null);
    onClose();
  };

  const getTitle = () => {
    if (type === "conteudo") return "Adicionar Conteúdo";
    if (type === "curso") return "Adicionar Curso";
    return "Adicionar Projeto";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className={styles.row}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={styles.card}
              style={{ border: `2px solid ${GOLD}` }}
            >
              <div className={styles.row2} style={{ borderColor: `${RED}20` }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: BROWN, fontSize: "1.5rem" }}>
                  {getTitle()}
                </h2>
                <button
                  onClick={handleClose}
                  className={styles.button}
                  aria-label="Fechar"
                >
                  <X size={24} color={BROWN} />
                </button>
              </div>

              <form className={styles.form}>
                {/* Upload de Imagem */}
                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
                    Imagem de Capa
                  </label>
                  <div
                    className={styles.adminFormModalStyle}
                    style={{ borderColor: `${RED}40`, backgroundColor: "#fafafa" }}
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    {imagePreview ? (
                      <div className={styles.adminFormModalStyle2}>
                        <img src={imagePreview} alt="Preview" className={styles.image} />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setForm({ ...form, imagem: null });
                            setImagePreview(null);
                          }}
                          className={styles.button2}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload size={40} color={RED} className={styles.icon} />
                        <p style={{ color: BROWN, fontWeight: 600, marginBottom: "0.25rem" }}>
                          Clique para fazer upload da imagem
                        </p>
                        <p style={{ color: "#999", fontSize: "0.8rem" }}>PNG, JPG até 5MB</p>
                      </div>
                    )}
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.input}
                  />
                </div>

                {/* Campos comuns */}
                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    {type === "projeto" ? "Nome do Projeto" : "Título"} *
                  </label>
                  <input
                    required
                    value={form.titulo}
                    onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                    className={styles.input2}
                    style={{ borderColor: `${RED}40`, fontSize: "0.95rem" }}
                    placeholder={type === "projeto" ? "Nome do projeto" : "Título"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Descrição *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.descricao}
                    onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                    className={styles.textarea}
                    style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                    placeholder="Escreva a descrição..."
                  />
                </div>

                {/* Campos específicos de Conteúdo */}
                {type === "conteudo" && (
                  <div>
                    <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                      Tipo de Conteúdo *
                    </label>
                    <select
                      required
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      className={styles.select}
                      style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="Artigo">Artigo</option>
                      <option value="Livro">Livro</option>
                      <option value="Relatório">Relatório</option>
                      <option value="Pesquisa">Pesquisa</option>
                    </select>
                  </div>
                )}

                {/* Campos específicos de Curso */}
                {type === "curso" && (
                  <div className={styles.grid}>
                    <div>
                      <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                        Duração *
                      </label>
                      <input
                        required
                        value={form.duracao}
                        onChange={(e) => setForm({ ...form, duracao: e.target.value })}
                        className={styles.select}
                        style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                        placeholder="Ex: 8 horas"
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                        Responsável pelo Curso *
                      </label>
                      <input
                        required
                        value={form.responsavel}
                        onChange={(e) => setForm({ ...form, responsavel: e.target.value })}
                        className={styles.select}
                        style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                        placeholder="Nome do responsável"
                      />
                    </div>
                  </div>
                )}

                {/* Campos específicos de Projeto */}
                {type === "projeto" && (
                  <>
                    <div className={styles.grid}>
                      <div>
                        <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                          Tipo de Projeto *
                        </label>
                        <select
                          required
                          value={form.tipoProjeto}
                          onChange={(e) => setForm({ ...form, tipoProjeto: e.target.value })}
                          className={styles.select}
                          style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                        >
                          <option value="educacional">Projeto Educacional (APRI)</option>
                          <option value="restauro">Projeto de Restauro</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                          Status *
                        </label>
                        <select
                          required
                          value={form.statusProjeto}
                          onChange={(e) => setForm({ ...form, statusProjeto: e.target.value })}
                          className={styles.select}
                          style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                        >
                          <option value="">Selecione</option>
                          <option value="Em andamento">Em andamento</option>
                          <option value="Planejamento">Planejamento</option>
                          <option value="Captando recursos">Captando recursos</option>
                          <option value="Concluído">Concluído</option>
                        </select>
                      </div>
                    </div>

                    {form.tipoProjeto === "educacional" && (
                      <div className={styles.grid}>
                        <div>
                          <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                            Meta de Arrecadação (R$) *
                          </label>
                          <input
                            required
                            type="number"
                            value={form.metas}
                            onChange={(e) => setForm({ ...form, metas: e.target.value })}
                            className={styles.select}
                            style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                            placeholder="0.00"
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                            Valor Arrecadado (R$)
                          </label>
                          <input
                            type="number"
                            value={form.valorArrecadado}
                            onChange={(e) => setForm({ ...form, valorArrecadado: e.target.value })}
                            className={styles.select}
                            style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Botões de Ação */}
                <div className={styles.row3}>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, false)}
                    className={styles.button3}
                    style={{ borderColor: GOLD, color: BROWN, backgroundColor: "white" }}
                  >
                    Salvar como Rascunho
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, true)}
                    className={styles.button4}
                    style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
                  >
                    Publicar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
