import HeroImg from "../../assets/1.png";
const Hero = () => {
  return (
    <section>
      <div
        className="container grid grid-cols-1 
      md:grid-cols-2 gap-8 min-h-[650px] ">
        {/* text section */}
        <TextSec />
        {/* img section */}
        <HeroImage />
      </div>
    </section>
  );
};
function TextSec() {
  return (
    <div
      className="flex flex-col justify-center
        gap-8 text-center md:text-left pt-24 pb-10 md:p-0 ">
      <h1 className="text-4xl lg:text-6xl font-semibold">
        Delicious Food is waiting for you
      </h1>
      <p className="font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat qui
        sint distinctio pariatur autem veritatis fugiat recusandae asperiores
        alias.
      </p>
      <div
        className="flex gap-4 items-baseline
          md:justify-start justify-center">
        <BTN color={"primary-btn"}> Food Menu </BTN>
        <BTN color={"secondary-btn"}> Book Table </BTN>
      </div>
    </div>
  );
}
function BTN({ children, color }) {
  return (
    <button className={`${color} hover:scale-105 duration-300 `}>
      {children}
    </button>
  );
}
function HeroImage() {
  return (
    <div className="flex flex-col justify-center">
      <img
        src={HeroImg}
        alt=""
        className=" animate-spin-slow img-shadow w-[400px] mx-auto "
      />
    </div>
  );
}

export default Hero;
