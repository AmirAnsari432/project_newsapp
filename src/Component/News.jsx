import React, { useEffect, useState } from "react";
import NewsItems from "../Component/NewsItems";
import Spinner from "../Component/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=40d8b1cf55ce43e18b1deee1068a2182&page=${this.state.page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    setArticls(parsedData.articles);
    setLoading(false);
    settotalResult(parsedData.totalResult);

    // document.title = `${capitalizeFirstLetter(
    //       props.category
    //     )} - TopNews`;
  };
  useEffect(() => {
    updateNews();
    /* eslint-disable */
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=40d8b1cf55ce43e18b1deee1068a2182&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticls(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResult);
  };

  return (
    <>
      <h1
        className="text-center "
        style={{ margin: "25px", marginTop: "80px" }}
      >
        NewsMonkey {capitalizeFirstLetter(props.category)} -Top Headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles !== totalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItems
                    title={element.title}
                    discription={element.description}
                    imageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
