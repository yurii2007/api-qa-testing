import LiteratureList from "./literature";
import ResourcesList from "./resources";

const InfoList = ({ name }: { name: "literature" | "resources" }) => {
  return (
    <>
      <h2
        className={`text-font-primary text-left text-lg md:text-[1.375rem] font-bold leading-6 xl:leading-7 tracking-wide ${
          name === "resources" ? "mt-8" : ""
        }`}
      >
        Useful <br className="md:hidden" /> {name}
      </h2>
      <div className="divider ml-0 mt-3 md:mt-5 md:w-[21rem]"></div>
      {name === "literature" && <LiteratureList />}
      {name === "resources" && <ResourcesList />}
    </>
  );
};

export default InfoList;
