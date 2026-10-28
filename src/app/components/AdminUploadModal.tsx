import { useState } from "react";
import { X, Upload, Image } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./AdminUploadModal.module.css";

const GOLD = "#DBAD38";
const RED = "#A62D37";
const WINE = "#A64951";
const BROWN = "#4B1919";

interface AdminUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentType: "blog" | "projeto" | "evento";
}

export function AdminUploadModal({ isOpen, onClose, contentType }: AdminUploadModalProps) {
  const [form, setForm] = useState({ title: "", content: "", image: null as File | null });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Novo conteúdo:", contentType, form);
    alert(`${contentType === "blog" ? "Artigo" : contentType === "projeto" ? "Projeto" : "Evento"} publicado com sucesso!`);
    setForm({ title: "", content: "", image: null });
    setImagePreview(null);
    onClose();
  };

  const typeLabels = {
    blog: { title: "Novo Artigo", button: "Publicar Artigo" },
    projeto: { title: "Novo Projeto", button: "Publicar Projeto" },
    evento: { title: "Novo Evento", button: "Publicar Evento" },
  };

  const labels = typeLabels[contentType];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
                  {labels.title}
                </h2>
                <button
                  onClick={onClose}
                  className={styles.button}
                  aria-label="Fechar"
                >
                  <X size={24} color={BROWN} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Upload de Imagem */}
                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
                    Imagem de Capa
                  </label>
                  <div
                    className={styles.adminUploadModalStyle}
                    style={{ borderColor: `${RED}40`, backgroundColor: "#fafafa" }}
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    {imagePreview ? (
                      <div className={styles.adminUploadModalStyle2}>
                        <img src={imagePreview} alt="Preview" className={styles.image} />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setForm({ ...form, image: null });
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

                {/* Título */}
                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Título *
                  </label>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className={styles.input2}
                    style={{ borderColor: `${RED}40`, fontSize: "0.95rem" }}
                    placeholder={`Título do ${contentType === "blog" ? "artigo" : contentType === "projeto" ? "projeto" : "evento"}`}
                  />
                </div>

                {/* Conteúdo */}
                <div>
                  <label style={{ fontSize: "0.875rem", color: BROWN, fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Conteúdo *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    className={styles.textarea}
                    style={{ borderColor: `${RED}40`, fontSize: "0.9rem" }}
                    placeholder={`Escreva o conteúdo do ${contentType === "blog" ? "artigo" : contentType === "projeto" ? "projeto" : "evento"}...`}
                  />
                </div>

                {/* Botão Publicar */}
                <button
                  type="submit"
                  className={styles.button3}
                  style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
                >
                  {labels.button}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
