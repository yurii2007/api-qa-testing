import { link } from "./definitions";

export const authLinks: link[] = [
  { name: "Home", path: "/" },
  { name: "Materials", path: "/useful-info" },
  { name: "Contacts", path: "/contacts" },
];

export const unAuthLinks: link[] = [{ name: "Contacts", path: "/contacts" }];
