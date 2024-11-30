// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    role: "Professional Runner",
    message:
      "This product has completely changed the way I train. The performance boost is unmatched, and I've broken my personal record!",
    image: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Fitness Enthusiast",
    message:
      "I’ve never felt better during my workouts. The quality and design of this product are top-notch!",
    image: "https://via.placeholder.com/100",
    rating: 4,
  },
  {
    name: "Chris Johnson",
    role: "Amateur Cyclist",
    message:
      "I’m amazed by how much this product has improved my endurance. Highly recommend it for athletes at any level.",
    image: "https://via.placeholder.com/100",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        What Our Customers Say
      </h2>

      {/* Slider Container */}
      <div className="relative bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500 p-10 rounded-3xl shadow-xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 3500, // Auto swipe every 3.5 seconds
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-800 text-lg">
                {testimonial.message}
              </p>
              <div className="mt-4 text-yellow-400">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
