import Image from "next/image";
import devPhoto from "@/public/dev.jpg";

import LinkList from "./link_list";
import ContactsList from "./contact_list";

const DevCard = () => {
  return (
    <article className="mt-5 bg-white shadow-lg rounded-b-lg pb-4">
      <Image
        src={devPhoto}
        alt="Portrait of Developer"
        priority
        className="w-[280px] h-[320px] object-cover object-top"
      />
      <p className="mt-5 text-font-primary text-sm font-bold leading-3 tracking-widest text-center">
        Yurii Shymanskyi
      </p>
      <h3 className="mt-2 text-xs font-normal leading-3 tracking-wide text-center text-font-secondary">
        Full-Stack Developer
      </h3>
      <ContactsList />
      <LinkList />
    </article>
  );
};

export default DevCard;
