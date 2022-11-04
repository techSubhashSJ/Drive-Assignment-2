import { NextPage } from "next";
import React, { useState } from "react";
import AlertMessage from "../src/components/alert-message";
import Button from "../src/components/button";
import Card from "../src/components/card";
import Layout from "../src/components/layout";
import SearchForm from "../src/components/search";
import Spinner from "../src/components/spinner";

const SearchPage: NextPage = () => {
  const [searchPhrase, setSearchPhrase] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<[]>([]);
  const [loadMoreCount, setLoadMoreCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout>
      <div className="flex flex-col mt-10 mx-[5%]">
        {(error || warning) && (
          <div className=" mt-5 mx-[10%]">
            <AlertMessage error={error} warning={warning} />
          </div>
        )}

        <SearchForm
          setSearchPhrase={setSearchPhrase}
          setResult={setResult}
          searchPhrase={searchPhrase}
          setLoading={setLoading}
          setWarning={setWarning}
          setError={setError}
        />

        {loading ? (
          <Spinner />
        ) : (
          <Card news={result.slice(0, 6 * loadMoreCount)} />
        )}
        <div className="flex justify-center">
          {Math.ceil(result.length / 6) > loadMoreCount && (
            <Button
              onclick={() => setLoadMoreCount((count) => count + 1)}
              classes="text-center py-2 px-4 bg-blue-700 text-white my-5 rounded-full"
              label=" Load More"
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
