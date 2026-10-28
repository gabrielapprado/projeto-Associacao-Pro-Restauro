import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logoImage from "../../imports/logo_white_text.png";
import styles from "./Navbar.module.css";

const links = [
  { label: "Início", to: "/" },
  { label: "Projetos", to: "/projetos" },
  { label: "Cursos", to: "/cursos" },
  { label: "Centro de Conteúdos", to: "/centro-conteudos" },
  { label: "Como Participar", to: "/como-participar" },
  { label: "Parceiros", to: "/parceiros" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav style={{ backgroundColor: "#A62D37", fontFamily: "'Lato', sans-serif" }} className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Logo */}
          <Link to="/" className={styles.button} onClick={() => setOpen(false)}>
            <img src={logoImage} alt="APRI" style={{ height: "45px" }} />
          </Link>

          {/* Desktop Links */}
          <div className={styles.row2}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  color: pathname === l.to ? "#DBAD38" : "#f5d5c0",
                  fontSize: "0.83rem",
                  letterSpacing: "0.03em",
                  fontWeight: pathname === l.to ? 700 : 400,
                  padding: "0.4rem 0.75rem",
                  borderBottom: pathname === l.to ? "2px solid #DBAD38" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
                className={styles.button2}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.row3}>
            <Link
              to="/login"
              className={styles.button3}
              style={{ backgroundColor: "transparent", color: "#fff", border: "1px solid #DBAD38", fontFamily: "'Lato', sans-serif" }}
            >
              Entrar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={styles.button4}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ backgroundColor: "#8a1f28" }} className={styles.navbarStyle}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                color: pathname === l.to ? "#DBAD38" : "#f5d5c0",
                fontWeight: pathname === l.to ? 700 : 400,
                display: "block",
                padding: "0.65rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                fontSize: "0.95rem",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.column}>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className={styles.button5}
              style={{ backgroundColor: "transparent", color: "#fff", border: "1px solid #DBAD38" }}
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
