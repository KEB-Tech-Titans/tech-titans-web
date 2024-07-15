import { useState } from 'react';
import FileUploader from '../../components/FileUpload/FileUploader';
import ResultCard from '../../components/FileUpload/ResultCard';
import { defectInfoType } from '../../types/grade';

const FileUploadPage = () => {
  const [defectInfo, setDefectInfo] = useState<defectInfoType>({
    oil: 0,
    scratch: 0,
    stain: 0,
  });
  return (
    <div className="flex h-full">
      <FileUploader />

      <ResultCard defectInfo={defectInfo} />
    </div>
  );
};

export default FileUploadPage;
