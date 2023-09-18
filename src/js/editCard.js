import {oldDivObj} from "./openModal";
import {getImage} from "./unsplRequest";

export const editCard = (ev) => {
    ev.preventDefault();

    let newName = document.getElementById("modal-destination").value;
    let newLocation = document.getElementById("modal-location").value;
    let newDescription = document.getElementById("modal-description").value;
    const canvas = document.createElement("canvas");


    if(newLocation != "" && newName !="") {

        getImage(oldDivObj.oldCardPhoto,canvas,newLocation,newName);
        oldDivObj.oldCardName.innerHTML = newName;
        oldDivObj.oldCardLocation.innerHTML = newLocation;
    }

    if(newDescription != "") {
        oldDivObj.oldCardDescription.innerHTML = newDescription;
    }
    document.getElementById("update-form").reset();
    // prevent submit button function from "bubbling" and calling other submit eventListeners
}