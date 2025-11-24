export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  role: string;
  summary: string;
  skills: string; // Comma separated for simplicity in input, parsed in view
  experience: Experience[];
  education: Education[];
}

export const INITIAL_RESUME_STATE: ResumeData = {
  fullName: "Seu Nome Completo",
  role: "Desenvolvedor de Software",
  email: "contato@exemplo.com",
  phone: "(11) 99999-9999",
  linkedin: "linkedin.com/in/seunome",
  location: "São Paulo, SP",
  summary: "Profissional dedicado com vasta experiência em resolução de problemas complexos. Apaixonado por tecnologia e inovação.",
  skills: "React, TypeScript, Node.js, Tailwind CSS, SQL, Git",
  experience: [
    {
      id: "1",
      company: "Empresa Tech Ltda",
      position: "Desenvolvedor Frontend Sênior",
      startDate: "2021-01",
      endDate: "",
      current: true,
      description: "Liderança técnica de equipe, desenvolvimento de interfaces modernas utilizando React e melhoria de performance da aplicação em 40%."
    }
  ],
  education: [
    {
      id: "1",
      institution: "Universidade Tecnologia",
      degree: "Bacharelado em Ciência da Computação",
      startDate: "2016-02",
      endDate: "2020-12",
      description: "Foco em engenharia de software e inteligência artificial."
    }
  ]
};