export const GITHUB_USER = "mynameisrinax";

export const img = (file) => `${import.meta.env.BASE_URL}${file}`;

export const projects = [
  {
    title: "Stranded on a Raft",
    description:
      "A survival game where you drift at sea, gather supplies, and expand your raft. Featured in a GDevelop blog post.",
    tags: ["GDevelop", "Game design"],
    color: "#6AC7FF",
    image: "projects/stranded_on_a_raft.png",
    link: "https://gd.games/rinexusgames/stranded-on-a-raft",
  },
  {
    title: "Pisonet Simulator",
    description:
      "A game that recreates running a pisonet shop, with coin-operated timers and customers to manage.",
    tags: ["GDevelop", "Game design"],
    color: "#AEB4EC",
    image: "projects/pisonet_simulator.png",
    link: "https://play.google.com/store/apps/details?id=com.rinexusgames.pisonet",
  },
  {
    title: "Kusinero Master",
    description: "A cooking game where you prepare Filipino dishes against the clock.",
    tags: ["GDevelop", "Game design"],
    color: "#FFE479",
    image: "projects/kusinero_master.png",
    link: "https://gd.games/rinexusgames/kusineromaster",
  },
  {
    title: "AMORAP Website",
    description:
      "A web platform for Asenso Misamis Occidental Recreation and Adventure Park with online booking, tournament pages, and an admin panel.",
    tags: ["Next.js", "HTML", "CSS", "Typescript"],
    color: "#b36737",
    image: "projects/amorap.png",
    link: "https://amorap.ph",
  },
  {
    title: "Taginting",
    description:
      "A rhythm game that teaches the Gabbang, played with a custom Arduino controller. Built as a capstone project.",
    tags: ["Unity", "Arduino", "Game design", "Hardware"],
    color: "#AB2525",
    image: "projects/taginting.png",
    link: "https://github.com/mynameisrinax",
  },
];
