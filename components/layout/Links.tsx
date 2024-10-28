export const Links: NavLink[] = [
  { text: "Home", link: "/" },
  { text: "About us", link: "/about-us" },
  { text: "Services", link: "/services" },
  { text: "Projects", link: "/projects" },
];

type NavLink = {
  text: string;
  link: string;
};
