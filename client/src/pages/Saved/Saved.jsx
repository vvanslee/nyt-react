import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Saved.css";
import API from "../../utils/API.js"
import ArticleDisplay from "../../components/ArticleDisplay"

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getSavedArticles()
      .then(res => {
        console.log(res)
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
  };

  deletearticle = (id) => {
    API.deleteArticle(id)
    .then(res => {
        this.loadarticles()
    })
    .catch(err => console.log(err));
  }

  handleArticleDelete = event => {
    let id = event.target.id
    this.deletearticle(id);
  }

  render() {
      return (
          <div>
            <Link to={"/"}>Search for articles</Link>
            <ArticleDisplay articles={this.state.articles} handleFunction={this.handleArticleDelete} operation="Delete" />
          </div>
      )
  }
}

export default Saved;