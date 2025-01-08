import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://i.ibb.co.com/nnSNj0h/1.png" },
    { src: "https://i.ibb.co.com/D5Kx1Tw/2.png" },
    { src: "https://i.ibb.co.com/F4cwqS9/4.png" },
    { src: "https://i.ibb.co.com/nrCfKGM/5.png" },
    { src: "https://i.ibb.co.com/5rhWjQx/6.png" },
    { src: "https://i.ibb.co.com/Dt2CtJK/7.png" },
    { src: "https://i.ibb.co.com/tbHy3y8/8.png" },
    { src: "https://i.ibb.co.com/wwDkmhj/9.png" },
    { src: "https://i.ibb.co.com/0VrXNK4/10.png" },
    { src: "https://i.ibb.co.com/Qv4Jzdf/12.png" },
    { src: "https://i.ibb.co.com/51cpd3c/13.png" },
    { src: "https://i.ibb.co.com/Swst316/14.png" },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-center mb-16">Food Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 items-end">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((image) => ({ src: image.src }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
