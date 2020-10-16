require("regenerator-runtime/runtime");

class apiGitHub {

    async fetchUser(user) {

        const userData = await fetch(`https://api.github.com/users/${user}`)
            .then((res) => {
                if (res.status === 400) return res.statusText
                
                return res.json();
            })
            .catch((err) => { return err; });

        const userRepos = await fetch(`https://api.github.com/users/${user}/repos`)
            .then((res) => {
                if (res.status === 400) return res.statusText

                return res.json();
            })
            .catch((err) => { console.log('Looks like a error when we try to retrive the user repositories, error code: ', err); })
        
        return {
            userData,
            userRepos
        }
    }
}

module.exports = apiGitHub;