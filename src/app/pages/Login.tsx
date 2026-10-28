import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";

const RED = "#A62D37";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(form.username, form.password);

    if (success) {
      if (form.username === "associado") {
        navigate("/area-associado");
      } else if (form.username === "administrador") {
        navigate("/painel-admin");
      }
    } else {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.card}
        >
          <div className={styles.loginStyle}>
            <h1 className={styles.heading}>
              Entrar
            </h1>
            <div className={styles.divider} />
          </div>

          {error && (
            <div className={styles.row2}>
              <AlertCircle size={18} color={RED} />
              <span className={styles.label}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label2}>
                Usuário
              </label>
              <div className={styles.loginStyle2}>
                <Mail size={18} color="#999" className={styles.icon} />
                <input
                  required
                  type="text"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className={styles.input}
                  placeholder="Digite seu usuário"
                />
              </div>
            </div>

            <div>
              <label className={styles.label2}>
                Senha
              </label>
              <div className={styles.loginStyle2}>
                <Lock size={18} color="#999" className={styles.icon} />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={styles.input2}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.button}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={styles.button2}
            >
              Entrar
            </button>
          </form>

          <div className={styles.loginStyle3}>
            <p className={styles.text}>
              Não possui Cadastro?{" "}
              <Link to="/cadastro" className={styles.button3}>
                Cadastre-se
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
