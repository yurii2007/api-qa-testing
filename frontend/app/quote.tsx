const Quote = () => {
  return (
    <>
      <p
        className="text-font-primary text-xs leading-5 font-bold tracking-wide text-center
      md:text-[1.375rem] md:leading-[1.875rem] xl:max-w-2xl mx-auto"
      >
        &ldquo;Regression testing. What is it? If the system compiles, that&apos;s good, if it
        boots, that&apos;s great!&rdquo;
      </p>
      <div className="w-32 md:w-80 h-[1px] mt-8 bg-btn-secondary mx-auto opacity-[0.15]"></div>
      <p className="mt-3 text-center text-xs leading-[0.875rem] tracking-wide font-medium text-font-primary md:text-lg md:leading-6">
        Linus Torvalds
      </p>
      <p className="mt-2 text-[0.625rem] font-medium leading-3 tracking-wide text-center text-font-secondary md:text-[0.875rem] md:leading-4">
        Linux kernel creator, hacker, 1969
      </p>
    </>
  );
};

export default Quote;
