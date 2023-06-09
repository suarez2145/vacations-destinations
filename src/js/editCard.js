import {oldDivObj} from "./openModal";

export const editCard = (ev) => {
    ev.preventDefault();

    let newName = document.getElementById("modal-destination").value;
    let newLocation = document.getElementById("modal-location").value;
    let newPhoto = document.getElementById("modal-photo").value;
    let newDescription = document.getElementById("modal-description").value;

    // make sure new input fields are not empty before we update them
    if(newPhoto != "") {
        oldDivObj.oldCardPhoto.src = newPhoto;
    }

    if(newName != "") {
        oldDivObj.oldCardName.innerHTML = newName;
    }

    if(newLocation != "") {
        oldDivObj.oldCardLocation.innerHTML = newLocation;
    }

    if(newDescription != "") {
        oldDivObj.oldCardDescription.innerHTML = newDescription;
    }


    document.getElementById("update-form").reset();
    // prevent submit button function from "bubbling" and calling other submit eventListeners

}