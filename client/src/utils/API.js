import axios from "axios";

const authKey = process.env.authKey;

var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNewArticles: function(query, begin, end) {
    let queryURL = baseURL + `?api-key=${authKey}`;
    if(query){
      queryURL += `&q=${query.trim()}`
    }
    if(begin){
      queryURL += `&begin_date=${begin.replace(/-/g, "")}`
    }
    if(end){
      queryURL += `&end_date=${end.replace(/-/g, "")}`
    }
    return axios.get(queryURL);
  },

  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },

  deleteArticle: function(articleId) {
    return axios.delete("/api/saved/" + articleId);
  }
};