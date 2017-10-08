import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import API from "../../utils/API.js"
import ArticleDisplay from "../../components/ArticleDisplay"
import QueryForm from "../../components/QueryForm"

class Search extends Component {
  state = {
    articles: [],
    query: "",
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getNewArticles(this.state.query, this.state.startDate, this.state.endDate)
      .then(res => {
        this.setState({ articles: res.data.response.docs })
      })
      .catch(err => console.log(err));
  };

  savearticle = articleObject =>{
    API.saveArticle(articleObject)
    .then(res => {
      //TODO: update to show that the article has been saved?
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  //When typing input into forms, update the state based on whatever key event happened
  handleInputChange = event => {
    if(event.target.name === "search-query"){
      this.setState({ query : event.target.value });
    }
    else if(event.target.name === "search-start"){
      this.setState({ startDate : event.target.value });
    }
    else if(event.target.name === "search-end"){
      this.setState({ endDate : event.target.value });
    }
  };

  handleArticleSave = event => {
    let url = event.target.parentNode.firstElementChild.href;
    let headline = event.target.parentNode.firstElementChild.firstElementChild.textContent;
    let date = event.target.parentNode.childNodes[1].textContent;
    this.savearticle({
      url: url,
      headline: headline,
      date: date
    });

  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadarticles();
  };

  render() {
      return (
          <div>
            <Link to={"/saved"}>See saved articles</Link>
            <div>
              <QueryForm 
                search={this.state.query}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
              <ArticleDisplay articles={this.state.articles} handleFunction={this.handleArticleSave} operation="Save" />
            </div>
          </div>
          
      )
  }
}

export default Search;