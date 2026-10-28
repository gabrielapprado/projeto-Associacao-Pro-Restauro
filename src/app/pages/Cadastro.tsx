import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { Mail, Lock, User, Eye, EyeOff, Phone, CheckCircle } from "lucide-react";
import styles from "./Cadastro.module.css";

const RED = "#A62D37";

export default function Cadastro() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const newErrors: string[] = [];

    // Validações
    if (form.name.trim().length < 3) {
      newErrors.push("Nome deve ter pelo menos 3 caracteres");
    }

    if (!form.email.includes("@")) {
      newErrors.push("E-mail inválido");
    }

    if (form.phone.length < 10) {
      newErrors.push("Telefone inválido");
    }

    if (form.password.length < 6) {
      newErrors.push("Senha deve ter pelo menos 6 caracteres");
    }

    if (form.password !== form.confirmPassword) {
      newErrors.push("As senhas não coincidem");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simular cadastro bem-sucedido
    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  if (success) {
    return (
      <div className={styles.page}>
        <div className={styles.row}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.card}
          >
            <CheckCircle size={64} color={RED} className={styles.icon} />
            <h2 className={styles.heading}>
              Cadastro realizado com sucesso!
            </h2>
            <p className={styles.text}>
              Seu cadastro foi enviado para análise. Em breve você receberá um e-mail com as instruções para ativação da sua conta.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.card2}
        >
          <div className={styles.cadastroStyle}>
            <h1 className={styles.heading2}>
              Cadastre-se
            </h1>
            <div className={styles.divider} />
            <p className={styles.text2}>
              Preencha os dados abaixo para criar sua conta
            </p>
          </div>

          {errors.length > 0 && (
            <div className={styles.cadastroStyle2}>
              {errors.map((error, i) => (
                <p key={i} className={styles.text3}>
                  • {error}
                </p>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>
                Nome completo
              </label>
              <div className={styles.cadastroStyle3}>
                <User size={18} color="#999" className={styles.icon2} />
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={styles.input}
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>
                E-mail
              </label>
              <div className={styles.cadastroStyle3}>
                <Mail size={18} color="#999" className={styles.icon2} />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={styles.input}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>
                Telefone
              </label>
              <div className={styles.cadastroStyle3}>
                <Phone size={18} color="#999" className={styles.icon2} />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={styles.input}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>
                Senha
              </label>
              <div className={styles.cadastroStyle3}>
                <Lock size={18} color="#999" className={styles.icon2} />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={styles.input2}
                  placeholder="Mínimo 6 caracteres"
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

            <div>
              <label className={styles.label}>
                Confirmar senha
              </label>
              <div className={styles.cadastroStyle3}>
                <Lock size={18} color="#999" className={styles.icon2} />
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  className={styles.input2}
                  placeholder="Repita a senha"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.button}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={styles.button2}
            >
              Cadastrar
            </button>
          </form>

          <div className={styles.cadastroStyle4}>
            <p className={styles.text4}>
              Já possui uma conta?{" "}
              <Link to="/login" className={styles.button3}>
                Entrar
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
