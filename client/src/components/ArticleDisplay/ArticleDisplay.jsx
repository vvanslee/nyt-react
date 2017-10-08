import React from "react";
import "./ArticleDisplay.css";

const processDate = (article) => {
  let date = new Date(article.pub_date || article.date);
  return date.toString();
}

const ArticleDisplay = (props) =>
  <div>
    {props.articles.map(article =>
      <div className="searched-article">
        <a href={article.web_url||article.url}>
          <p>{article.headline.main||article.headline}</p>
        </a>
        <p>{processDate(article)}</p>
        <button id={article._id} onClick={props.handleFunction}>
          {props.operation} Article
        </button>
      </div>
    )}    
  </div>;

export default ArticleDisplay;