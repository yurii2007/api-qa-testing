import { literature, resources } from "@/constants/materials";

const Content = () => {
  return (
    <section>
      <h2 className="text-font-primary text-left text-lg font-bold leading-6 tracking-wide">
        Useful <br /> literature
      </h2>
      <div className="divider ml-0 mt-3"></div>
      <ul className="mt-2 flex flex-col gap-1">
        {literature.map((item, idx) => (
          <li key={idx}>
            <p className="text-left text-font-primary font-medium leading-4 tracking-wide text-[0.625rem]">
              {`${idx + 1}. ${item}`}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-font-primary text-left text-lg font-bold leading-6 tracking-wide">
        Useful <br /> resources
      </h2>
      <div className="divider ml-0 mt-3"></div>
      <ul className="mt-2 flex flex-col">
        {resources.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              className="text-left text-font-primary font-medium leading-4 tracking-wide text-[0.625rem]"
            >
              {idx + 1}.&nbsp;<span className="underline">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
