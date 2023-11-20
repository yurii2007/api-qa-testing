import Image from "next/image";
import copyRight from "@/public/svg/copyright.svg";
import heart from "@/public/svg/orange_heart.svg";

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-bg-footer w-full py-[0.625rem] px-5 md:py-5">
      <p className="flex flex-wrap text-[0.625rem] leading-3 tracking-[0.03em] text-left items-center justify-center text-font-footer gap-1 md:text-xs">
        <Image src={copyRight} alt="copyright icon image" className="w-[18px] h-[18px]" />
        2021 <span className="footer__span"></span> All Rights Reserved
        <span className="footer__span"></span> Developed with
        <Image src={heart} alt="orange heart emoji" className="w-[16px] h-[16px]" />
        by <a href="#" className="underline">GoIT students</a>
      </p>
    </footer>
  );
};

export default Footer;
