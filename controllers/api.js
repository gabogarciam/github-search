require("regenerator-runtime/runtime");

class apiGitHub {
  constructor(user) {
    this.user = user;
  }

  async fetchUserData() {
    const userData = await fetch(`https://api.github.com/users/${this.user}`)
      .then((res) => (res.status !== 200 ? res.status : res.json()))
      .catch((err) => {
        console.log('Looks like a error when we try to retrive the user data, error code: ', err);
      });

    return { userData };
  }

  async fetchUserRepos() {
    const userRepos = await fetch(`https://api.github.com/users/${this.user}/repos`)
      .then((res) => (res.status !== 200 ? res.status : res.json()))
      .catch((err) => {
        console.log('Looks like a error when we try to retrive the user repositories, error code: ', err);
      });

    return { userRepos };
  }
}

module.exports = apiGitHub;
