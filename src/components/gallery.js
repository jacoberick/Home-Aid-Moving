import React from "react";
import galleryOne from "../assets/imgs/gallery/1.jpg";
import galleryTwo from "../assets/imgs/gallery/2.jpg";
import galleryThree from "../assets/imgs/gallery/3.jpg";
import galleryFour from "../assets/imgs/gallery/4.jpg";
import galleryFive from "../assets/imgs/gallery/5.jpg";
import gallerySix from "../assets/imgs/gallery/6.jpg";
import gallerySeven from "../assets/imgs/gallery/7.jpg";
import galleryEight from "../assets/imgs/gallery/8.jpg";
import galleryNine from "../assets/imgs/gallery/9.jpg";
import galleryTen from "../assets/imgs/gallery/10.jpg";
import galleryEleven from "../assets/imgs/gallery/11.jpg";
import galleryTwelve from "../assets/imgs/gallery/12.jpg";
import psetOne from "../assets/imgs/gallery/pset-1.jpg";
import psetTwo from "../assets/imgs/gallery/pset-2.jpg";
import psetThree from "../assets/imgs/gallery/pset-3.jpg";

const gallery = ({ modal, setModal, setRef }) => {
  const allPhotos = [
    {
      id: 1,
      photoPack: [
        { id: 1, src: psetOne },
        { id: 2, src: psetTwo },
        { id: 3, src: psetThree },
      ],
    },
    {
      id: 2,
      photoPack: [
        { id: 1, src: galleryOne },
        { id: 2, src: galleryTwo },
        { id: 3, src: galleryThree },
      ],
    },
    {
      id: 3,
      photoPack: [
        { id: 4, src: galleryFour },
        { id: 5, src: galleryFive },
        { id: 6, src: gallerySix },
      ],
    },
    {
      id: 4,
      photoPack: [
        { id: 7, src: gallerySeven },
        { id: 8, src: galleryEight },
        { id: 9, src: galleryNine },
      ],
    },
    {
      id: 5,
      photoPack: [
        { id: 10, src: galleryTen },
        { id: 11, src: galleryEleven },
        { id: 12, src: galleryTwelve },
      ],
    },
  ];

  return (
    <div id="galleryContainer" className="gallery-container" ref={setRef}>
      <h1 className="gallery-title">Gallery</h1>
      <div className="photos-container">
        {allPhotos.map((row, id) => (
          <div key={id} className="photo-row">
            {row.photoPack.map((photo, id) => (
              <div
                key={id}
                className="photo-crop"
                onClick={() =>
                  setModal({ ...modal, src: photo.src, active: 1 })
                }
              >
                <img className="photo" src={photo.src} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default gallery;
