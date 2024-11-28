import "./ComingSoon.css";
export default function ComingSoon() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100">
      {/* Title Section */}
      <div className="w-full text-center py-12">
        <h1 className="text-4xl text-[#1E90FF] text-center font-semibold">
          Coming Soon Products
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Stay tuned for exciting new arrivals
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full h-[500px] bg-gray-200 overflow-hidden">
        {/* Slider Images */}
        <div className="flex w-full animate-slide space-x-4">
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-full">
            <img
              src="https://i.ibb.co.com/LhSn7dD/sl1.jpg"
              alt="Product 1"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Slide 2 */}
          <div className="flex-shrink-0 w-full">
            <img
              src="https://i.ibb.co.com/WHSWdwq/sl2.jpg"
              alt="Product 2"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Slide 3 */}
          <div className="flex-shrink-0 w-full">
            <img
              src="https://i.ibb.co.com/ZMNMPf8/sl3.jpg"
              alt="Product 3"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
