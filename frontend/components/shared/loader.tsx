import Lottie from "lottie-react";

import loaderDataAnim from "@/public/animation/bugListAnim.json";

const Loader = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <Lottie animationData={loaderDataAnim} loop={true} />
    </div>
  );
};

export default Loader;
