import React from 'react';

interface ImageSectionProps {
  url: string;
  alt: string;
  descriptions: string[];
}

const ImageSection: React.FC<ImageSectionProps> = ({
  url,
  alt,
  descriptions,
}) => {
  return (
    <div className="flex items-center w-full mb-8 p-4 border rounded-lg shadow-lg bg-white">
      <img
        src={url}
        alt={alt}
        className="w-1/2 h-auto object-contain rounded-lg mr-6"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2">
          {descriptions[0].split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line.split('\t').map((subline, subindex) => (
                <React.Fragment key={subindex}>
                  {subindex > 0 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
                  {subline}
                </React.Fragment>
              ))}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <ol className="list-decimal list-inside text-lg text-gray-700">
          {descriptions.slice(1).map((desc, index) => (
            <li key={index} className="ml-4">
              {desc.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line.split('\t').map((subline, subindex) => (
                    <React.Fragment key={subindex}>
                      {subindex > 0 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
                      {subline}
                    </React.Fragment>
                  ))}
                  <br />
                </React.Fragment>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ImageSection;
