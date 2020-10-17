class UserInterface {

    constructor() {
        this.profile = document.getElementById('profile');
        this.profile.classList.add('card-head');
        this.repositories = document.getElementById('repositories');
    }

    showError(message) {
        const div = document.createElement('div');
        div.className = 'error-message';
        const texterror = document.createElement('p');
        texterror.appendChild(document.createTextNode(message));
        div.appendChild(texterror);
        const container = document.querySelector('.container');
        const profile = document.querySelector('#profile');
        container.insertBefore(div, profile);
    }

    clearError() {
        const alert = document.querySelector('.error-message');
        if (alert) { alert.remove(); }
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="container-avatar">
                <img src=${user.avatar_url} class="avatar">
            </div>
            <div class="profile-info">
                <p class="nickname">@${user.login}</p>
                <h2 class="fullname">${user.name}</h2>
                <p class="bio">${user.bio}</p>
            </div>
        `;
    }

    showRepositories(dataRepo) {
        let template = '';
        dataRepo.forEach(element => {
           template += `
                <li class="repositori">
                    <div class="repocell">
                        <h3>
                            <a href="${element.html_url}" target="_blank">${element.name}</a>
                        </h3>
                    </div>
                    <div class="count-counters">
                        <div><i class="fas fa-star"></i> ${element.stargazers_count}</div>
                        <div><i class="fas fa-code-branch"></i> ${element.forks_count}</div>
                    </div>
                </li>
                
            `; 
        });
        this.repositories.innerHTML = `
            <div class="title-repo">
                <h1>Repositories</h1>
            </div>
            <ul>
        ` + template + 
        `   </ul>`;
    }
}

module.exports = UserInterface;