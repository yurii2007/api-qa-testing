import { resources } from "@/constants/materials";

const ResourcesList = () => {
  return (
    <ul className="info-list gap-0">
      {resources.map((item, idx) => (
        <li key={idx}>
          <a href={item.link} className="group info-list-item">
            {idx + 1}.&nbsp;
            <span className="underline group-hover:text-blue-600 transition-colors">
              {item.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ResourcesList;
