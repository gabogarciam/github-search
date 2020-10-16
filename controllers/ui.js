class UserInterface {

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
}

module.exports = UserInterface;