import githubLogo from "@/public/svg/github.svg";
import linkedinLogo from "@/public/svg/linkedin.svg";
import telegramLogo from "@/public/svg/telegram.svg";
import phoneIcon from "@/public/svg/phone.svg";
import mailIcon from "@/public/svg/mail.svg";

import { link } from "./definitions";

export const authLinks: link[] = [
  { name: "Home", path: "/" },
  { name: "Materials", path: "/useful-info" },
  { name: "Contacts", path: "/contacts" },
];

export const unAuthLinks: link[] = [{ name: "Contacts", path: "/contacts" }];

export const socialLinks = [
  { src: githubLogo, link: "https://github.com/yurii2007", alt: "Github icon with link" },
  {
    src: linkedinLogo,
    link: "https://www.linkedin.com/in/yurii-shymanskyi-313640278/",
    alt: "Linkedin icon with link",
  },
  { src: telegramLogo, link: "https://t.me/pokoj206", alt: "Telegram icon with link" },
];

export const contactsLinks = [
  {
    icon: phoneIcon,
    credentials: "+380 67 132 26 12",
    alt: "phone icon",
  },
  { icon: mailIcon, credentials: "yurash862@gmail.com", alt: "mail icon" },
];
