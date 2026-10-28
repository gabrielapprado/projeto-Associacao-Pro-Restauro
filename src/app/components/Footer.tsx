import { Link } from "react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logoImage from "../../imports/logo_white_text.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#4B1919", fontFamily: "'Lato', sans-serif" }} className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.footerStyle}>
          <div className={styles.footerStyle2}>
            <img src={logoImage} alt="APRI" style={{ height: "50px" }} />
          </div>
          <p style={{ color: "#d4a89e", fontSize: "0.875rem", lineHeight: 1.7 }}>
            Associação Pró-Restauro de Itu. Preservando a história para as futuras gerações.
          </p>
          <div className={styles.row}>
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={styles.button}
                style={{ backgroundColor: "#A62D37" }}
              >
                <Icon size={18} color="#DBAD38" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: "#DBAD38", fontFamily: "'Playfair Display', serif", marginBottom: "1rem", fontSize: "1rem" }}>Navegação</h4>
          {[
            { label: "Início", to: "/" },
            { label: "Projetos", to: "/projetos" },
            { label: "Cursos", to: "/cursos" },
            { label: "Centro de Conteúdos", to: "/centro-conteudos" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className={styles.button2} style={{ color: "#d4a89e", fontSize: "0.875rem" }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ color: "#DBAD38", fontFamily: "'Playfair Display', serif", marginBottom: "1rem", fontSize: "1rem" }}>Mais</h4>
          {[
            { label: "Seja um Associado", to: "/associe-se" },
            { label: "Seja um Patrono", to: "/patrono" },
            { label: "Parceiros", to: "/parceiros" },
            { label: "Sobre a Associação", to: "/sobre" },
            { label: "Contato", to: "/contato" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className={styles.button2} style={{ color: "#d4a89e", fontSize: "0.875rem" }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#DBAD38", fontFamily: "'Playfair Display', serif", marginBottom: "1rem", fontSize: "1rem" }}>Contato</h4>
          <div className={styles.footerStyle3}>
            <div className={styles.row2}>
              <MapPin size={16} color="#DBAD38" className={styles.icon} />
              <span style={{ color: "#d4a89e", fontSize: "0.875rem" }}>Rua Dr. José Elias, 9 - Centro, Itu, SP 13300-250</span>
            </div>
            <div className={styles.row3}>
              <Phone size={16} color="#DBAD38" />
              <span style={{ color: "#d4a89e", fontSize: "0.875rem" }}>(11) 2715-5878</span>
            </div>
            <div className={styles.row3}>
              <Mail size={16} color="#DBAD38" />
              <span style={{ color: "#d4a89e", fontSize: "0.875rem" }}>contato@apri.org.br</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} className={styles.footerStyle4}>
        <p style={{ color: "#9a6a60", fontSize: "0.8rem" }}>
          © 2026 APRI — Associação Pró-Restauro de Itu — CNPJ 64.547.893/0001-72
        </p>
      </div>
    </footer>
  );
}
