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
        retriveUserData.fetchUser(textSearch)
            .then((data) => {
                if (data.userData.message === "Not Found") {
                    ui.clearError();
                    ui.showError(`We couldn’t find any user matching with '${textSearch}'`)
                    return;
                };
                ui.clearError();
                console.log('Yeee it works!!!');
            });
    } else {
        ui.clearError();
        ui.showError('Field Search is empty')
    }
    event.preventDefault();

});