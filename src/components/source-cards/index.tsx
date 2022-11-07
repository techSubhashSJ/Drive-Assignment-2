import React from "react";
import { source } from "../../types/top-sources";
import Cards from "./cards";

const SourceCards = (props: { source: source }) => {
  return (
    <div className="my-8 mx-[5%] px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {props.source?.length === 0 ? (
          <h1 className="text-2xl">No Result Found</h1>
        ) : (
          <Cards source={props.source} />
        )}
      </div>
    </div>
  );
};

export default SourceCards;
