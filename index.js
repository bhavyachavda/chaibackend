require("dotenv").config();

const express = require("express");
const app = express();
const port = 2210;

const gitHub = {
  login: "bhavyachavda",
  id: 83119816,
  node_id: "MDQ6VXNlcjgzMTE5ODE2",
  avatar_url: "https://avatars.githubusercontent.com/u/83119816?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/bhavyachavda",
  html_url: "https://github.com/bhavyachavda",
  followers_url: "https://api.github.com/users/bhavyachavda/followers",
  following_url:
    "https://api.github.com/users/bhavyachavda/following{/other_user}",
  gists_url: "https://api.github.com/users/bhavyachavda/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/bhavyachavda/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/bhavyachavda/subscriptions",
  organizations_url: "https://api.github.com/users/bhavyachavda/orgs",
  repos_url: "https://api.github.com/users/bhavyachavda/repos",
  events_url: "https://api.github.com/users/bhavyachavda/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/bhavyachavda/received_events",
  type: "User",
  site_admin: false,
  name: "Bhavya Chavda",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 33,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-04-24T11:11:47Z",
  updated_at: "2024-01-02T02:48:54Z",
};

app.get("/", (req, res) => {
  res.send("Hello world bhavya");
});

app.get("/twitter", (req, res) => {
  res.send("bhavyadotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code<h2>");
});

app.get("/github", (req, res) => {
  res.json(gitHub);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening omn port ${port}`);
});
