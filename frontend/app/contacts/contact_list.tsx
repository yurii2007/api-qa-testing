import Image from "next/image";
import { contactsLinks } from "@/constants/links";

const ContactsList = () => {
  return (
    <ul className="mt-3 px-3 md:px-7 flex flex-col gap-3">
      {contactsLinks.map((link) => (
        <li className="flex gap-2 md:gap-3 items-center" key={link.alt}>
          <Image src={link.icon} alt={link.alt} width={20} height={20} />
          <p className="text-font-primary text-xs md:text-sm font-medium leading-3 tracking-widest">
            {link.credentials}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
