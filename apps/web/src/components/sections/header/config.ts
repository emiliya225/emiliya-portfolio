import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 5;
//

const links: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
    thumbnail: "projects.jpg",
  },
  {
    title: "Resume",
    href: "/resume.pdf",
    thumbnail: "resume.jpg",
  },
];

export { linkLimit, links };
