import React from "react";

const Our = () => {
  const sections = [
    {
      title: "Our Mission",
      content: "Our mission is to revolutionize global logistics by providing innovative and sustainable shipping solutions that meet the evolving needs of our customers and the environment. We strive to lead the industry with cutting-edge technology and a commitment to excellence.",
    },
    {
      title: "Our Values",
      content: "We believe in integrity, innovation, and sustainability. Our values guide everything we do, from how we treat our employees and partners to how we engage with the community. We are dedicated to creating a positive impact through our operations.",
    },
    {
      title: "Our Vision",
      content: "Our vision is to be recognized as the global benchmark for logistics excellence, setting the standard for quality, efficiency, and sustainability. We aim to inspire change within the industry and contribute to a more connected and responsible world.",
    },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative p-8 bg-white border-2 border-blue-600 rounded-none shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{section.title}</h3>
              <div className="w-20 h-1 bg-blue-600 mb-4 rounded-full" />
              <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Our;