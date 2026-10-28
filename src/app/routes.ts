import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Patrono from "./pages/Patrono";
import Cursos from "./pages/Cursos";
import CentroConteudos from "./pages/CentroConteudos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import AssocieSe from "./pages/AssocieSe";
import AreaAssociado from "./pages/AreaAssociado";
import PainelAdmin from "./pages/PainelAdmin";
import Parceiros from "./pages/Parceiros";
import ComoParticipar from "./pages/ComoParticipar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projetos", Component: Projetos },
      { path: "patrono", Component: Patrono },
      { path: "associe-se", Component: AssocieSe },
      { path: "cursos", Component: Cursos },
      { path: "centro-conteudos", Component: CentroConteudos },
      { path: "como-participar", Component: ComoParticipar },
      { path: "parceiros", Component: Parceiros },
      { path: "sobre", Component: Sobre },
      { path: "contato", Component: Contato },
      { path: "login", Component: Login },
      { path: "cadastro", Component: Cadastro },
      { path: "area-associado", Component: AreaAssociado },
      { path: "painel-admin", Component: PainelAdmin },
    ],
  },
]);
