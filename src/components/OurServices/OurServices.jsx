import { FaMobileAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <section className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Our Services </h1>
      </div>
      {/* Icons Section */}
      <div
        className="grid cursor-pointer 
      grid-cols-2 md:grid-cols-4 \
      gap-12 mt-12 ">
        <div className="flex hover:text-slate-600  justify-center items-center gap-3">
          <FaMobileAlt className="text-2xl" />
          <p className="text-xl font-semibold ">Online Booking</p>
        </div>
        <div className="flex justify-center items-center hover:text-slate-600 gap-3">
          <IoFastFoodOutline className="text-2xl" />
          <p className="text-xl  font-semibold">Fast Food</p>
        </div>
        <div className="flex justify-center items-center hover:text-slate-600 gap-3">
          <MdOutlineFoodBank className="text-2xl" />
          <p className="text-xl font-semibold ">Healthy Food</p>
        </div>
        <div className="flex justify-center items-center hover:text-slate-600 gap-3">
          <CiDeliveryTruck className="text-2xl" />
          <p className="text-xl font-semibold ">Delivery</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
