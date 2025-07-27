import React from 'react';
import { ArrowIcon } from '../../icons/ArrowIcon';

const Cards = ({ image, title, description, actionArrow, height, width }) => {
  return (
    <div
      className="flex flex-col items-start p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
      style={{
        width: width ?? '200px',
        height: height ?? 'auto',
        maxWidth: '100%',
      }}
    >
      {/* Image container */}
      <div className="w-full overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: height ?? '220px',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </div>

      {/* Text + arrow */}
      <div className="w-full flex justify-between items-center mt-2">
        <div className="flex flex-col">
          <h2 className="text-base font-medium text-gray-800">{title}</h2>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
        {actionArrow && (
          <span className="cursor-pointer pl-2">
            <ArrowIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default Cards;
