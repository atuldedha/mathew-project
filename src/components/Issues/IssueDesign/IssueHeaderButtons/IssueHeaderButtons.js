import React from "react";
import PointerGreen from "../../../../images/pointerGreen.png";
import PointerWhite from "../../../../images/pointerWhite.png";
import LetterTGreen from "../../../../images/letterTGreen.png";
import LetterTWhite from "../../../../images/letterTWhite.png";
import GalleryGreen from "../../../../images/galleryGreen.png";
import GalleryWhite from "../../../../images/galleryWhite.png";
import DotsGreen from "../../../../images/dotsGreen.png";
import DotsWhite from "../../../../images/dotsWhite.png";

// Header button component for designs tab
const IssueHeaderButtons = ({ buttonSelected, setButtonSelected }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* change the background of the selected small butons button */}
      <div
        className={`${
          buttonSelected === 1
            ? "bg-green1"
            : "bg-white1 border-[2px] border-green1"
        } flex items-center w-[36px] h-[36px] justify-center p-[10px] hover:cursor-pointer`}
        onClick={() => setButtonSelected(1)}
      >
        <img
          src={buttonSelected === 1 ? PointerWhite : PointerGreen}
          alt="pointer"
          className="w-[14px] h-[14px] object-contain"
        />
      </div>

      <div
        className={`${
          buttonSelected === 2
            ? "bg-green1"
            : "bg-white1 border-[2px] border-green1"
        } flex items-center w-[36px] h-[36px] justify-center p-[10px] hover:cursor-pointer`}
        onClick={() => setButtonSelected(2)}
      >
        <img
          src={buttonSelected === 2 ? LetterTWhite : LetterTGreen}
          alt="pointer"
          className="w-[14px] h-[14px] object-contain"
        />
      </div>

      <div
        className={`${
          buttonSelected === 3
            ? "bg-green1"
            : "bg-white1 border-[2px] border-green1"
        } flex items-center w-[36px] h-[36px] justify-center p-[10px] hover:cursor-pointer`}
        onClick={() => setButtonSelected(3)}
      >
        <img
          src={buttonSelected === 3 ? GalleryWhite : GalleryGreen}
          alt="pointer"
          className="w-[14px] h-[14px] object-contain"
        />
      </div>

      <div
        className={`${
          buttonSelected === 4
            ? "bg-green1"
            : "bg-white1 border-[2px] border-green1"
        } flex items-center w-[36px] h-[36px] justify-center p-[10px] hover:cursor-pointer`}
        onClick={() => setButtonSelected(4)}
      >
        <img
          src={buttonSelected === 4 ? DotsWhite : DotsGreen}
          alt="pointer"
          className="w-[14px] h-[14px] object-contain"
        />
      </div>
      {/* large button */}
      <button className="py-[10px] px-[22px] bg-blue1 text-white1 font-poppins font-bold text-[18px] leading-[30px] rounded-[4px]">
        Save & Exit
      </button>
    </div>
  );
};

export default IssueHeaderButtons;
