import React from "react";
import { topHeadlinesType } from "../../types";
import CardContent from "./card_content/index";

const Card = (props: {topHeadlines: topHeadlinesType}) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <CardContent topHeadlines={props.topHeadlines}/>
      </div>
    </div>
  );
};

export default Card;
