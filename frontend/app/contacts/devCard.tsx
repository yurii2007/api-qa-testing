import Image from "next/image";
import devPhoto from "@/public/dev.jpg";

import LinkList from "./link_list";
import ContactsList from "./contact_list";

const DevCard = () => {
  return (
    <article className="w-[280px] md:w-[420px] mt-5 bg-white shadow-lg rounded-b-lg pb-4 md:pb-6">
      <Image
        src={devPhoto}
        alt="Portrait of Developer"
        priority
        className="w-[280px] h-[320px] md:w-[420px] md:h-[480px] object-cover object-top"
      />
      <p className="mt-5 text-font-primary text-sm md:text-base font-bold leading-3 tracking-widest text-center">
        Yurii Shymanskyi
      </p>
      <h3 className="mt-2 text-xs font-normal leading-3 md:text-sm tracking-wide text-center text-font-secondary">
        Full-Stack Developer
      </h3>
      <ContactsList />
      <LinkList />
    </article>
  );
};

export default DevCard;
