import DevCard from "./devCard";

const Page = () => {
  return (
    <main className="px-5 py-11">
      <h2 className="text-center text-font-primary text-lg font-bold leading-5 tracking-wide">
        Developer
      </h2>
      <div className="divider mt-[0.875rem]"></div>
      <DevCard />
    </main>
  );
};

export default Page;
