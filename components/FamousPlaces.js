import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import images
import MumbaiImage from "../public/images/mumbai.jpg";
import PuneImage from "../public/images/pune.jpg";
import UttarPradeshImage from "../public/images/uttarpradesh.jpg";
import DelhiImage from "../public/images/delhi.jpg";

const places = [
  {
    name: "Mumbai",
    image: MumbaiImage,
    url: "/location/mumbai-1275339",
  },
  {
    name: "Pune",
    image: PuneImage,
    url: "/location/pune-1259229",
  },
  {
    name: "Uttar Pradesh",
    image: UttarPradeshImage,
    url: "/location/uttar-pradesh-1253626",
  },
  {
    name: "Delhi",
    image: DelhiImage,
    url: "/location/delhi-1273294",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
