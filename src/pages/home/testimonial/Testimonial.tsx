import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useGetCustomerReviewQuery } from "@/redux/api/api";

export default function TestimonialSlider() {
  const {
    data: response,
    isLoading,
    isError,
  } = useGetCustomerReviewQuery(undefined);

  const testimonials = response?.data || [];

  console.log("Fetched testimonials data:", testimonials);

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">Loading testimonials...</div>
    );
  }

  if (isError || !Array.isArray(testimonials)) {
    return (
      <div className="text-center text-red-500">
        Failed to load testimonials or invalid data format.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        What Our Customers Say
      </h2>
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
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">
                {testimonial.location || "Customer"}
              </p>
              <p className="mt-4 text-gray-800 text-lg">{testimonial.review}</p>
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
