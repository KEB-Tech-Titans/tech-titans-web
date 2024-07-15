import { useRef, useState } from 'react';
import { GoShare } from 'react-icons/go';
import { IoFolderOpenOutline } from 'react-icons/io5';

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropRef.current) {
      dropRef.current.classList.add('bg-gray-200');
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropRef.current) {
      dropRef.current.classList.remove('bg-gray-200');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropRef.current) {
      dropRef.current.classList.remove('bg-gray-200');
    }

    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="w-1/2 flex flex-col gap-3 items-center justify-center border-r border-gray-300">
      <div className="">
        {file ? (
          <div className="border">
            <img
              src={URL.createObjectURL(file)}
              alt="upload"
              className="w-64 h-64 rounded-lg object-fill"
            />
          </div>
        ) : (
          <div
            ref={dropRef}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-black border-dashed rounded-lg w-64 h-64 flex justify-center items-center cursor-pointer mb-4"
          >
            <GoShare className="text-3xl" />
          </div>
        )}
        <div className="flex items-center gap-2 w-64">
          <input
            type="text"
            value={file ? file.name : '첨부파일'}
            readOnly
            placeholder="이미지를 올려주세요"
            className="inline-block h-10 rounded-sm px-3 items-center bg-gray-200 select-none outline-none"
          />
          <label
            htmlFor="file"
            className="border py-3 px-4 bg-white cursor-pointer rounded-lg h-10"
          >
            <IoFolderOpenOutline className="text-xl" />
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileSelect}
            className="w-0 h-0 p-0 overflow-hidden border-0"
          />
        </div>

        {file ? (
          <button className="mt-4 w-64 bg-blue-500 text-white py-2 px-4 rounded">
            분석 시작
          </button>
        ) : (
          <button
            className="mt-4 w-64 bg-red-500 text-white py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            사진을 업로드해주세요
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
