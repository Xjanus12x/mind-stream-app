import React from "react";

function PostCard(props) {
  const { title } = props;
  const test = [
    {
      category_title: "test1",
      text_color: "text-white",
      bg_color: "bg-blue-500",
    },
    {
      category_title: "test2",
      text_color: "text-white",
      bg_color: "bg-green-500",
    },
  ];
  return (
    <article className="space-y-6">
      <img src="src/assets/icons/blog-post-1.png" alt="Blog post" />
      <div className="space-y-6">
        <p>Sunday , 1 Jan 2023</p>
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{props.title}</h3>
          <img src="src/assets/icons/visit-icon.png" alt="Arrow icon" />
        </div>
        <p>{props.description}</p>
        <div className="space-x-2">
          {test.map((item, index) => (
            <button
              className={`${item.text_color} ${item.bg_color}`}
              key={index}
            >
              {item.category_title}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default PostCard;
