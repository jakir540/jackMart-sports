import React from "react";

export default function Articles() {
  const articles = [
    {
      title: "Choosing the Best Football Gear",
      description:
        "Discover the top picks for football gear this season. Whether you're a beginner or a pro, we've got you covered.",
      image: "https://via.placeholder.com/400x250",
      link: "/articles/choosing-football-gear",
    },
    {
      title: "Top 5 Training Tips for Runners",
      description:
        "Boost your performance with these simple yet effective training tips for runners of all levels.",
      image: "https://via.placeholder.com/400x250",
      link: "/articles/training-tips-for-runners",
    },
    {
      title: "The Ultimate Guide to Cricket Bat Selection",
      description:
        "Not sure what cricket bat to choose? Our expert guide breaks down everything you need to know.",
      image: "https://via.placeholder.com/400x250",
      link: "/articles/guide-to-cricket-bat-selection",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Sports Blog</h1>
        <p className="text-xl text-gray-600 mt-4">
          Tips, guides, and how-to articles to help you get the most out of your
          sports gear.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={article.image}
                alt={article.title}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href={article.link}
                  className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
