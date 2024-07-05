import React from 'react';

interface ImageSectionProps {
  imgSrc: string;
  imgAlt: string;
  descriptions: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ imgSrc, imgAlt, descriptions }) => {
  return (
    <div className="flex items-center w-full mb-8 p-4 border rounded-lg shadow-lg bg-white">
      <img src={imgSrc} alt={imgAlt} className="w-1/3 h-48 object-cover rounded-lg mr-4" />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-2">{descriptions[0]}</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {descriptions.slice(1).map((desc, index) => (
            <li key={index} className="ml-4">{desc}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ImageSection;
