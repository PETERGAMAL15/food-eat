import BannerImg from "../../assets/2.png";
const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <BannerImage />
          {/* text section */}
          <BannerText />
        </div>
      </div>
    </section>
  );
};
function BannerImage() {
  return (
    <div className="flex justify-center items-center">
      <img src={BannerImg} alt="" />
    </div>
  );
}
function BannerText() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
      <p className="py-4 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates
        ea doloremque similique assumenda nostrum neque at dolores. Repellendus
        voluptas, reprehenderit sed cupiditate dicta molestias numquam
        consequatur inventore minus quia!
      </p>
    </div>
  );
}
export default Banner;
