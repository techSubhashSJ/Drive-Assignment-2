import React from "react";
import { source } from "../../types/top-sources";
import SourceCardContent from "./source-card-content";

const SourceCard = (props: { source: source }) => {
  return (
    <div className="my-8 mx-[5%] px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {props.source?.length === 0 ? (
          <h1 className="text-2xl">No Result Found</h1>
        ) : (
          <SourceCardContent source={props.source} />
        )}
      </div>
    </div>
  );
};

export default SourceCard;
