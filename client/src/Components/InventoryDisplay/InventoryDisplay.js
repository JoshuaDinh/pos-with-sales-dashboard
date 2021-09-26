import React from "react";
import "./inventoryDisplay.css";
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import fiveStar from "../../imgs/5star.png";
import twoDiamond from "../../imgs/2diamond.png";
import threeDiamond from "../../imgs/3diamond.png";
import fourDiamond from "../../imgs/4diamond.png";
import fiveDiamond from "../../imgs/5diamond.png";
import sevenDiamond from "../../imgs/7diamond.png";

const InventoryDisplay = () => {
  return (
    <div className="inventory-display">
      <form className="inventory-search-form">
        <input type="text" placeholder="Search Invetory" />
      </form>
      <div className="inventory-item-container">
        <ImgMediaCard
          plan="Starter"
          cost="$22"
          speed="30%"
          revenue="$33 - $42"
          img="https://cdn1.iconfinder.com/data/icons/youtuber/256/thumbs-up-like-gesture-512.png"
        />
        <ImgMediaCard
          plan="Growth"
          cost="$44"
          speed="30%"
          revenue="$68 - $83"
          img="https://cdn4.iconfinder.com/data/icons/miscellaneous-6-1/128/beginner_starter_beginning_start-512.png"
        />
        <ImgMediaCard
          plan="3 Star"
          cost="$110"
          speed="30%"
          revenue="$165 - $210"
          img="https://cdn.iconscout.com/icon/free/png-256/three-star-2193069-1886101.png"
        />
        <ImgMediaCard
          plan="4 Star"
          cost="$220"
          speed="30%"
          revenue="$330 - $420"
          img="https://static.thenounproject.com/png/1580830-200.png"
        />
        <ImgMediaCard
          plan="5 Star"
          cost="$440"
          speed="30%"
          revenue="$680 - $800"
          img={fiveStar}
        />
        <ImgMediaCard
          plan="Diamond"
          cost="$14"
          speed="1,100"
          revenue="$1.5k - $2.1k"
          img="https://cdn1.iconfinder.com/data/icons/womans-accessories-1/100/sign-512.png"
        />
        <ImgMediaCard
          plan="2 Diamond"
          cost="$2,200"
          speed="Free"
          revenue="$3k - $4k"
          img={twoDiamond}
        />
        <ImgMediaCard
          plan="3 Diamond"
          cost="$4,400"
          speed="Free"
          revenue="$7k - $8k"
          img={threeDiamond}
        />
        <ImgMediaCard
          plan="4 Diamond"
          cost="$11,000"
          speed="Free"
          revenue="$16k - $19k"
          img={fourDiamond}
        />
        <ImgMediaCard
          plan="5 Diamond"
          cost="$22,000"
          speed="Free"
          revenue="$32k - $40k"
          img={fiveDiamond}
        />
        <ImgMediaCard
          plan="7 Diamond"
          cost="$50,000"
          speed="Free"
          revenue="$68k-$78k"
          img={sevenDiamond}
        />
      </div>
    </div>
  );
};

export default InventoryDisplay;
