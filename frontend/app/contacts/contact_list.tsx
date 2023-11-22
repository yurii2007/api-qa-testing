import Image from "next/image";
import { contactsLinks } from "../lib/constants/links";

const ContactsList = () => {
  return (
    <ul className="mt-3 px-3 flex flex-col gap-3">
      {contactsLinks.map((link) => (
        <li className="flex gap-2 items-center" key={link.alt}>
          <Image src={link.icon} alt={link.alt} width={20} height={20} />
          <p className="text-font-primary text-xs font-medium leading-3 tracking-widest">
            {link.credentials}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
