import React, { Component } from "react";
import NewsItems from "../Component/NewsItems";
import Spinner from "../Component/Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
  };
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40d8b1cf55ce43e18b1deee1068a2182&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handelPrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handelNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" >
          NewsMonkey -Top Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
        <din className="container  d-flex justify-content-between">
          <div
            disabled={this.state.page <= 1}
            typeof="button"
            className="btn btn-dark "
            onClick={this.handelPrevClick}
          >
            &larr; previous
          </div>
          <div className="btn btn-dark" onClick={this.handelNextClick}>
            Next &rarr;{" "}
          </div>
        </din>
      </div>
    );
  }
}

export default News;
