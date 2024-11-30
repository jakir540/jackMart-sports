import { NavLink } from "react-router-dom";

const categories = ["badminton", "football", "racket", "cricket"];

function Categories() {
  return (
    <div className="categories py-5 bg-gray-100">
      <h2 className="text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 font-extrabold tracking-wide mb-4">
        Categories
      </h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <NavLink
            key={category}
            to={`/product/products?category=${category}`}
            className="category-card capitalize p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center text-xl font-medium text-gray-700 hover:text-[#1E90FF] hover:bg-gray-50"
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
