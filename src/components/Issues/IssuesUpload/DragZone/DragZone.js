import React, { useState } from "react";
import FileIcon from "../../../../images/file.png";

const DragZone = ({ images, setImages }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesToUpload = Array.prototype.slice.call(e.dataTransfer.files);
      setImages([...images, ...filesToUpload]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const filesToUpload = Array.prototype.slice.call(e.target.files);
      setImages([...images, ...filesToUpload]);
    }
  };
  return (
    <form
      id="form-file-upload"
      className="relative text-center bg-green3"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="file"
        id="input-file-upload"
        className="hidden"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={`${
          dragActive ? "drag-active" : ""
        } flex h-full w-full items-center justify-center`}
      >
        <div className="mt-[62px] flex flex-col items-center px-[60px] pb-[40px]">
          <img src={FileIcon} alt="drag" className="mb-[12px]" />
          <span className="text-black font-poppins font-meidum text-[14px] md:text-[18px] leading-[20px] md:leading-[27px]">
            <span className="font-semibold">Drag</span> and{" "}
            <span className="font-semibold">Drop</span> your csv here to start
            uploading or <span className="font-semibold">Click</span> the box to
            browse the file here.
          </span>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          className="absolute w-full h-full rounded-sm top-0 left-0 right-0 bottom-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default DragZone;
