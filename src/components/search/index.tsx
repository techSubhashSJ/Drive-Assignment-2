import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../button";

const SearchForm = (props: {
  setSearchPhrase: Dispatch<SetStateAction<string | null>>;
  setWarning: Dispatch<SetStateAction<string | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setResult: Dispatch<SetStateAction<[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  searchPhrase: string | null;
}) => {
  const handleChange = async () => {
    props.setLoading(true);
    props.setWarning(null);
    props.setResult([]);

    if (props.searchPhrase === null || props.searchPhrase === "") {
      props.setWarning("Search parameter is empty");
      props.setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${props.searchPhrase}&language=en&pageSize=20&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      if (res?.data?.articles?.length === 0) {
        props.setWarning("No Result Found");
      } else {
        props.setResult(res.data.articles);
      }
    } catch (error) {
      props.setError("Interval server problem");
    }

    props.setLoading(false);
  };
  return (
    <>
      <div className="flex justify-between mt-10 flex-col md:flex-row mx-[10%]">
        <div className="md:w-2/3 mt-2">
          <input
            type="text"
            placeholder="Type Keywords Or Phrases To Search "
            onChange={(e) => props.setSearchPhrase(e.target.value)}
            className="w-full border-black border-2 rounded h-full  p-2"
          />
        </div>

        <div>
          <Button
            classes="bg-blue-700 text-white px-14 py-2 w-full mt-2 rounded-full baseline hover:bg-blue-400"
            label="Search"
            onclick={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
