import { literature } from "@/constants/materials";

const LiteratureList = () => {
  return (
    <ul className="info-list md:max-w-[336px]">
      {literature.map((item, idx) => (
        <li key={idx}>
          <p className="info-list-item">
            {`${idx + 1}. ${item}`}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LiteratureList;
