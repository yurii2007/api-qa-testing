import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/svg/arrow.svg";

const HomeLinks = () => {
  return (
    <div className="mx-auto flex flex-col gap-5 mt-10">
      <Link href="/test" className="home-link bg-btn-secondary">
        QA technical training
        <Image src={Arrow} alt="arrow" />
      </Link>
      <Link href="/test" className="home-link bg-btn-primary">
        Testing theory
        <Image src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
};

export default HomeLinks;
