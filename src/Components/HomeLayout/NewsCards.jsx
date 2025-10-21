import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    id
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4 border-b">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="font-bold text-lg hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} className="w-full h-56 object-cover" alt={title}/>
      </figure>
      

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>
        <Link to={`/news-details/${id}`} className="btn btn-link text-primary px-0">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 border-t pt-3">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-medium ml-1">
            {rating.number}.0
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

