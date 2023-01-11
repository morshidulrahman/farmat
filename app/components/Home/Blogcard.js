import React from "react";

function Blogcard({ author, category, date, title, description, image }) {
  return (
    <div className="p-7 last:border-1 last:border-gray-100">
      <img
        src={image}
        loading="lazy"
        width="450px"
        height="300px"
        className="rounded-md"
      />
      <p className="text-gray-600 mt-3 mb-3">
        By <span className="text-blue-600">{author}</span> in{" "}
        <span className="font-bold">
          {category} on {date}
        </span>
      </p>
      <h1 className="font-bold text-2xl mb-5">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Blogcard;
