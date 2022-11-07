/**
 * @author Subhash Jadhav
 * @description This Page is a home page of the application, consist of top headlines in india
 * @params {array} array of news objects
 */

import type { NextPage } from "next";
import Layout from "../src/components/layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { newsType } from "../src/types";
import { useEffect, useState } from "react";
import Spinner from "../src/components/spinner";
import Button from "../src/components/button";
import NewsCards from "../src/components/news-cards";

const Home: NextPage<{ news: newsType }> = ({ news }) => {
  const [loadMoreCount, setLoadMoreCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsData, setNewsData] = useState<newsType>(news.slice(0, 9));

  useEffect(() => {
    setLoading(true);
    setNewsData(news.slice(0, loadMoreCount * 9));
    setLoading(false);
  }, [loadMoreCount]);

  return (
    <Layout>
      <div className="flex justify-center mt-4 mx-[5%] px-4 md:px-12">
        <h1 className="uppercase text-2xl font-bold font-serif">
          India&apos;s Top Headlines
        </h1>
      </div>

      <NewsCards news={newsData} />

      <div className="flex justify-center">
        {loading ? (
          <Spinner />
        ) : (
          Math.ceil(news.length / 9) > loadMoreCount && (
            <Button
              onclick={() => setLoadMoreCount((count) => count + 1)}
              classes="text-center py-2 px-4 bg-blue-700 text-white my-5 rounded-full"
              label=" Load More"
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
  );

  return {
    props: {
      news: res.data.articles,
    },
  };
};
