import React from 'react';
import ImageSection from '../../components/Main/ImageSection';
import { IMAGE_SECTION_DATA } from '../../constants/main';
import NavigateButtons from '../../components/Main/NavigateButtons';

const MainPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col mt-4 space-y-8">
        {IMAGE_SECTION_DATA.map((data) => (
          <ImageSection
            url={data.url}
            alt={data.alt}
            descriptions={data.descriptions}
          />
        ))}
      </div>
      <NavigateButtons />
    </div>
  );
};

export default MainPage;
