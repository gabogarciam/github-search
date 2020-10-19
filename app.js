require('./public/stylesheets/style.scss');

const SharingMethods = require('./public/javascripts/message');
const ApiGitHub = require('./controllers/api');
const UserInterface = require('./controllers/ui');

const textLogMessage = 'Welcome to GitHub Search! - This project is made in node with Love!!!';
const msg = new SharingMethods(textLogMessage);
msg.logMessage();

const ui = new UserInterface();

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
  const textSearch = userForm.querySelector('#textSearch').value;
  const retriveUserData = new ApiGitHub(textSearch);

  if (textSearch !== '') {
    retriveUserData.fetchUserData()
      .then((data) => {
        if (data.userData === 404) {
          ui.clearError();
          ui.clearUserData();
          ui.showError(`We couldn’t find any user matching with '${textSearch}'`);
          return;
        }

        if (data.userData === 403) {
          ui.clearError();
          ui.showError('Rate Limit of consults exceded');
          return;
        }

        ui.clearError();
        ui.showProfile(data.userData);
        retriveUserData.fetchUserRepos()
          .then((dataRepos) => {
            ui.showRepositories(dataRepos.userRepos);
          });
      });
  } else {
    ui.clearError();
    ui.clearUserData();
    ui.showError('Field Search is empty');
  }
  event.preventDefault();
});
