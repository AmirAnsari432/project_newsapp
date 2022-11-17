import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, discription, imageUrl, NewsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SAE5EGY3EAK3POYEJPS34MVCVI.JPG&w=1440"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title  "> {title} </h5>

            <p className="card-text">{discription}</p>
            <p className="card-text">
              By {author ? author : "Unknown "}on-
              {new Date(date).toLocaleDateString()}
            </p>
            <a
              href={NewsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
