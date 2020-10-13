'use strict'

class someSharingMethods {
    // const logMessage = msg => console.log(msg);
    logMessage(msg) { console.log(msg) };

    createDiv() {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("Hola!¿Qué tal?");
        newDiv.appendChild(newContent);
        document.getElementsByClassName('main-container')[0].appendChild(newDiv);
    }
}

module.exports = someSharingMethods;