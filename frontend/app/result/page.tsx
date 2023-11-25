import Donut from "./donut";
import ResultDesc from "./desc"

const Page = () => {
  return (
    <main className="px-5 pt-8 pb-10">
      <h2 className="text-xs font-bold leading-4 tracking-wide text-center text-font-primary">Results</h2>
      <h3 className="mt-3 text-[0.625rem] font-medium leading-3 tracking-wide text-center text-font-primary">
        [ Testing theory_]
      </h3>
      <div className="divider mt-4"></div>
      <Donut />
      <ResultDesc />
    </main>
  );
};

export default Page;
