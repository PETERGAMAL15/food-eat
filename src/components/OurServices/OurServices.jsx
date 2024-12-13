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
      <Icons />
    </section>
  );
};

function Icons() {
  return (
    <div
      className="grid cursor-pointer 
grid-cols-2 md:grid-cols-4 \
gap-12 mt-12 ">
      <Icon Icon={FaMobileAlt} title="Online Booking" />
      <Icon Icon={IoFastFoodOutline} title="Fast Food" />
      <Icon Icon={MdOutlineFoodBank} title="Online Booking" />
      <Icon Icon={CiDeliveryTruck} title="Online Booking" />
    </div>
  );
}
function Icon({ Icon, title }) {
  return (
    <div className="flex hover:text-slate-600  justify-center items-center gap-3">
      <Icon className="text-2xl" />
      <p className="text-xl font-semibold ">{title}</p>
    </div>
  );
}

export default OurServices;
