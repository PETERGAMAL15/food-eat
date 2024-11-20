import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";
const FoodData = [
  {
    Image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const TopList = () => {
  return (
    <section className="container py-14">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p className="text-lg font-mono text-gray-700 ">Our top list</p>
      </div>
      {/* card sec */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 
          rounded-3xl hover:scale-110 transition duration-500">
            <img
              src={item.Image}
              alt="food"
              className="w-60 sm:w-40 lg:w-[240px]  mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2 text-center">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">{item.desc}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopList;
