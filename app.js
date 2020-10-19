import './public/stylesheets/style.scss';

const sharingMethods = require('./public/javascripts/message');
const apiGitHub = require('./controllers/api');
const UserInterface = require('./controllers/ui');

const msg = new sharingMethods();
const retriveUserData = new apiGitHub();
const ui = new UserInterface();

msg.logMessage('Welcome to GitHub Search! - This project is made in node with Love');

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
    const textSearch = userForm.querySelector('#textSearch').value;

    if (textSearch != '') {
        retriveUserData.fetchUserData(textSearch)
            .then((data) => {
                if (data.userData === 404) {
                    ui.clearError();
                    ui.clearUserData();
                    ui.showError(`We couldn’t find any user matching with '${textSearch}'`)
                    return;
                } else if (data.userData === 403) {
                    ui.clearError();
                    ui.showError('Rate Limit of consults exceded');
                    return;
                };
                ui.clearError();
                ui.showProfile(data.userData);
                retriveUserData.fetchUserRepos(textSearch)
                    .then((data) => {
                        ui.showRepositories(data.userRepos);
                    });
            });
    } else {
        ui.clearError();
        ui.clearUserData();
        ui.showError('Field Search is empty')
    }
    event.preventDefault();

});