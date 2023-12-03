import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { Fab } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 6.5 },
  };

  
  const items = data.slice(0, 12).map((item) => <HomeSectionCard product={item} />);

  const renderNextButton = ({isDisabled}) => {
    return activeIndex !== items.length-6 && <Fab
    variant="contained"
    className="z-50"
    size="small"
    color="tranparent"
    sx={{
      position: "absolute",
      top: "8rem",
      right: "-2.5rem",
      transform: "translateX(50%) rotate(90deg)",
      bgcolor: "white",
    }}
    aria-label="next"
  >
    <KeyboardArrowLeftIcon
      sx={{ transform: "rotate(90deg)", color: "black" }}
    />
  </Fab>
  }
  const renderPrevButton = ({isDisabled}) => {
    return activeIndex !== 0 && <Fab
    variant="contained"
    className="z-50"
    size="small"
    color="tranparent"
    sx={{
      position: "absolute",
      top: "8rem",
      left: "-2.5rem",
      transform: "translateX(-50%) rotate(-90deg)",
      bgcolor: "white",
    }}
    aria-label="next"
  >
    <KeyboardArrowLeftIcon
      sx={{ transform: "rotate(90deg)", color: "black" }}
    />
  </Fab>
  }

  const syncActiveIndex = ({item}) => setActiveIndex(item);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative items-center pt-6 px-10 border">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
