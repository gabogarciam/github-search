require("regenerator-runtime/runtime");

class apiGitHub {

    async fetchUserData(user) {

        const userData = await fetch(`https://api.github.com/users/${user}`)
            .then((res) => {
                return res.status !== 200 ? res.status : res.json();
            })
            .catch((err) => {
                console.log('Looks like a error when we try to retrive the user data, error code: ', err);
            });
        
        return {
            userData
        }
    }

    async fetchUserRepos(user) {

        const userRepos = await fetch(`https://api.github.com/users/${user}/repos`)
            .then((res) => {
                return res.status !== 200 ? res.status : res.json();
            })
            .catch((err) => {
                console.log('Looks like a error when we try to retrive the user repositories, error code: ', err);
            })
        
        return {
            userRepos
        }
    }
}

module.exports = apiGitHub;