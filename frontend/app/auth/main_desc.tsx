const MainDesc = () => {
  return (
    <div>
      <h1 className="font-extrabold leading-6 text-xl text-left md:text-3xl md:leading-9  xl:text-4xl xl:leading-10 xl:tracking-wide">
        Pro Test
      </h1>
      <p
        className="mt-[0.5rem] text-[0.75rem] leading-5 font-medium [&>span]:font-semibold text-font-secondary [&>span]:text-font-primary
  md:mt-5 md:leading-9 md:text md:text-base md:tracking-wide xl:[&>span]:font-bold xl:text-lg xl:leading-9"
      >
        <span>[</span> We will help you find weak points in knowledge so that you can
        strengthen it. We will show you what is relevant to know for a&nbsp;
        <strong className="font-semibold text-font-primary xl:font-bold">QA Engineer</strong> and will
        try to make the learning process more diverse_ <span>]</span>
      </p>
    </div>
  );
};

export default MainDesc;
