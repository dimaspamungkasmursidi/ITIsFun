import React from "react";
import Button from "../../atoms/Button";

const Hero = () => {
  return (
    <section className="flex justify-center py-6 lg:flex-nowrap xl:justify-between items-center flex-wrap-reverse sm:px-10">
      {/* Left */}
      <div className="flex flex-col gap-6 md:max-w-xl mt-6 px-6">
        <div>
          <h1 className="text-5xl font-bold londrina-black textShadow-title">
            IT Is Fun Studio
          </h1>
          <p className="titillium-semibold text-justify textShadow-desc">
            Kami menyediakan jasa pembuatan website yang sesuai dengan kebutuhan
            Anda, dengan tampilan yang responsif memastikan pengalaman pengguna
            yang optimal di semua perangkat.
            <span className="hidden sm:block">Dengan desain modern dan
            fungsionalitas yang tinggi, kami membantu Anda membangun kehadiran
            online yang kuat dan menarik.</span>
          </p>
        </div>
        <div>
          <Button>Layanan</Button>
        </div>
      </div>

      {/* Right */}
      <div className="mt-10 px-4">
        <figure className="max-w-sm md:max-w-lg">
          <img src="/images/hero.gif" alt="Hero.gif" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
