import * as React from "react";
import "./imgMediaCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ImgMediaCard = () => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image="https://content.rolex.com/dam/2021/upright-bba-with-shadow/m124300-0001.png?imwidth=420"
      />
      <div className="card-content">
        <h3 gutterBottom component="div">
          Oyster Perpetual 41
        </h3>
        <h5 gutterBottom component="div">
          Oyster, 41 mm Oystersteel
        </h5>
      </div>
      <div className="card-actions">
        <button>Learn More</button>
        <button>Add To Cart</button>
      </div>
    </Card>
  );
};

export default ImgMediaCard;
