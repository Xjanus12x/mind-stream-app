import React from "react";

function PostCard(props) {
  const { title, postImg, date, description, categories } = props;
  // Convert date to a JavaScript Date object
  const postDate = new Date(date);
  // Format the date to display in the desired format
  const formattedDate = postDate.toLocaleDateString("en-US", {
    weekday: "long", // Full name of the day of the week
    day: "numeric", // Day of the month
    month: "short", // Abbreviated month name
    year: "numeric", // Full year
  });

  return (
    <article className="space-y-6 w-full">
      <img className="w-full object-cover" src={postImg} alt="Blog post" />
      <div className="space-y-6">
        <p className="font-semibold text-purple-800 text-sm">{formattedDate}</p>
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span>
            <img src="src/assets/icons/visit-icon.png" alt="Arrow icon" />
          </span>
        </div>
        <p className="text-gray-600 leading-6 max-w-[40ch]">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {categories.map((item, index) => (
            <button
              className={`${item.text_color} ${item.bg_color} py-[2px] px-[10px] rounded-full font-medium`}
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
