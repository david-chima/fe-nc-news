import axios from "axios";

export const baseUrl = "https://be-nc-news-chima2g.herokuapp.com/api";

export const getUser = username => {
  return axios.get(`${baseUrl}/users/${username}`).then(response => {
    const { user } = response.data;
    return user;
  });
};

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then(response => {
    const { topics } = response.data;
    return topics;
  });
};

export const vote = (id, voteIncrease, isArticle) => {
  return axios.patch(
    `${baseUrl}/${isArticle ? "articles" : "comments"}/${id}`,
    {
      inc_votes: voteIncrease
    }
  );
};

export const getArticles = searchTerm => {
  return axios
    .get(`${baseUrl}/articles${searchTerm ? searchTerm : ""}`)
    .then(response => {
      const { articles } = response.data;
      return articles;
    });
};

export const getArticle = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`).then(response => {
    const { article } = response.data;
    return article;
  });
};

export const getCommentsByArticleID = article_id => {
  return axios
    .get(`${baseUrl}/articles/${article_id}/comments`)
    .then(response => {
      const { comments } = response.data;
      return comments;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseUrl}/comments/${comment_id}`);
};

export const postComment = (article_id, comment) => {
  return axios
    .post(`${baseUrl}/articles/${article_id}/comments`, comment)
    .then(response => {
      const { comment } = response.data;
      return comment;
    });
};
