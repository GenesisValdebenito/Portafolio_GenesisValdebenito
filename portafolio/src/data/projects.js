import {
  ShieldIcon,
  CakeIcon,
  DatabaseIcon,
  ServerIcon,
  PinIcon,
  PhoneIcon,
} from "../components/icons.jsx";

export const projects = [
  {
    title: "DANI · Plataforma GRC",
    status: "En producción",
    role: "Desarrollo Fullstack",
    context: "Alloxentric · 2026",
    Icon: ShieldIcon,
    name: "DANI — Governance, Risk & Compliance",
    description:
      "Plataforma de gobernanza, riesgo y cumplimiento ISO 27001:2022 para Alloxentric. Analiza documentos normativos con IA basada en RAG y centraliza la gestión de controles y evidencias de cumplimiento.",
    tags: [
      { label: "React" },
      { label: "FastAPI" },
      { label: "Python" },
      { label: "Supabase" },
      { label: "RAG" },
      { label: "ISO 27001", highlight: true },
    ],
    links: [
      { label: "Demo en vivo", href: "https://dani-iso-27001.vercel.app" },
      { label: "Repositorio", href: "https://github.com/GenesisValdebenito/Dani-ISO27001" },
    ],
  },
  {
    title: "Pastelería Mil Sabores",
    status: "Mejora continua",
    role: "Desarrollo Fullstack",
    context: "Proyecto colaborativo",
    Icon: CakeIcon,
    name: "Pastelería Mil Sabores",
    description:
      "Sistema web fullstack con catálogo de productos, carrito de compras, historial de pedidos y autenticación JWT. Incluye paneles diferenciados para clientes y administradores.",
    tags: [{ label: "React" }, { label: "Spring Boot" }, { label: "MySQL" }, { label: "JWT" }],
    links: [{ label: "Repositorio", href: "https://github.com/GenesisValdebenito/pasteleria-SB" }],
  },
  {
    title: "Gestión Académica",
    status: "Finalizado",
    role: "Base de Datos",
    context: "Proyecto colaborativo",
    Icon: DatabaseIcon,
    name: "Sistema de Gestión Académica",
    description:
      "Modelamiento de datos con MER normalizado en Oracle SQL Data Modeler. Procedimientos, funciones, packages, cursores, triggers de auditoría y reportes en APEX.",
    tags: [{ label: "Oracle PL/SQL" }, { label: "APEX" }, { label: "MongoDB" }],
    links: [
      { label: "Repositorio", href: "https://github.com/GenesisValdebenito/sistema-gestion-academica" },
    ],
  },
  {
    title: "GameStore EKS",
    status: "En desarrollo",
    role: "Fullstack + DevOps",
    context: "Proyecto personal",
    Icon: ServerIcon,
    name: "GameStore — CRUD en Kubernetes (EKS)",
    description:
      "Aplicación CRUD para un catálogo de videojuegos: frontend en Nginx, API REST en Node/Express y persistencia en MySQL, contenerizada y desplegada en Amazon EKS con CI/CD vía GitHub Actions y ECR.",
    tags: [
      { label: "Node.js" },
      { label: "Express" },
      { label: "MySQL" },
      { label: "Docker" },
      { label: "AWS EKS", highlight: true },
      { label: "GitHub Actions" },
    ],
    links: [
      { label: "Repositorio", href: "https://github.com/GenesisValdebenito/tienda-perritos-eks2" },
    ],
  },
  {
    title: "CaffeMap Chile",
    status: "En planificación",
    role: "Desarrollo Fullstack",
    context: "Proyecto académico",
    Icon: PinIcon,
    name: "CaffeMap Chile",
    description:
      "Directorio interactivo de cafeterías en Chile, con búsqueda geográfica y mapa. Desarrollado en conjunto con un compañero como proyecto académico.",
    tags: [{ label: "React" }, { label: "Node.js" }, { label: "PostgreSQL" }],
    links: [{ label: "Repositorio", href: "https://github.com/GVQ-uwu/CaffeMap-Chile" }],
  },
  {
    title: "App Móvil Retail",
    status: "Finalizado",
    role: "Product / Scrum",
    context: "Proyecto colaborativo",
    Icon: PhoneIcon,
    name: "App Móvil para Supermercado Retail",
    description:
      "Planificación y diseño ágil de una app de gestión de inventario: historias de usuario, user story map, estimaciones con Planning Poker y prototipado en Figma.",
    tags: [{ label: "Scrum" }, { label: "Figma" }, { label: "Jira" }],
    links: [],
    noLinkText: "Proyecto de diseño / sin repositorio público",
  },
];