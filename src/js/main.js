import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

let destinations = {};
let newHeader = "My Wishlist";
let newCardContCounter = 1;
let newCardBodyCounter = 1;
let cardTitleCounter = 1;
let cardSubtitleCounter = 1;
let cardTextCounter = 1;

let newDivName;
let cardTitleId;
let cardSubtitleId;
let cardTextId;

let oldCardPhoto;
let oldCardName;
let oldCardLocation;
let oldCardDescription;

const myModal = new bootstrap.Modal(document.getElementById('editModal'));

const addLocation = (ev) => {
    ev.preventDefault();
    document.getElementById("destination-header").innerHTML = newHeader;
    let currntDesLgth = Object.keys(destinations).length + 1;
    let testObj = {};

    

    testObj.name = document.getElementById('destination-name').value;
    testObj.location = document.getElementById('location').value;
    testObj.photo = document.getElementById('photo').value;
    testObj.description = document.getElementById('description').value;

    

    // destinationsArr.push(destination); 
    let parent = document.getElementById("destination-cont");


    // create container for cards only once when the destinations array has only 1 entry
    let cardsWrapper = document.createElement("div");
    if(currntDesLgth <= 1) {
        cardsWrapper.className = "container cards-wrapper row justify-content-center g-0";
        cardsWrapper.id = "cards-wrapper";
        parent.appendChild(cardsWrapper);
    };


    // creating card conainer
    let newDivParent = document.getElementById("cards-wrapper");        // had to retrieve the cards-wrapper div so newCardParent Knew what to append to ( took forever to realize this )
    let newCardCont = document.createElement("div");        
    
    newCardCont.className = "delete-me card single-card-cont col-6 col-sm mt-4 p-0";                        
    newCardCont.id = "newCard" + newCardContCounter++;                    
    newCardCont.style = "width: 18rem"
    newDivParent.appendChild(newCardCont);

    let newObjPropName = newCardCont.id;

    // creating fucntion to pass my test object into another object 
    let addProp = (obj, propName, testObj) => {
        obj[propName] = testObj;
    }

    // calling my new nested object creating function on the global destinations object
    addProp(destinations, newObjPropName, testObj);


    let newCardParent = document.getElementById(newCardCont.id);

    // creating img that goes on top of card
    let newImg = document.createElement("img");

    if(destinations[newObjPropName].photo == "") {
        newImg.src = "mike_bird.jpg"
    } else {
        newImg.src = destinations[newObjPropName].photo;
    }
    newImg.className = "card-img-top";
    newImg.alt = "...";
    newCardParent.appendChild(newImg);

    // creating card-body container
    let newCard = document.createElement("div");
    newCard.className = "card-body g-0";
    newCard.id = "card-body" + newCardBodyCounter++;
    newCardCont.appendChild(newCard);

    // creating card-content
    let cardBodyParent = document.getElementById(newCard.id);
    let newCardBody = document.createElement("h5");
    newCardBody.className = "card-title";
    newCardBody.id = "card-title" + cardTitleCounter++;
    newCardBody.innerHTML = destinations[newObjPropName].name;
    cardBodyParent.appendChild(newCardBody);

    cardTitleId = newCardBody.id;

    // creating new card-body subtitle
    let newCardSubTitle = document.createElement("h6")
    newCardSubTitle.className = "card-subtitle mb-2 text-muted";
    newCardSubTitle.id = "card-subtitle" + cardSubtitleCounter++;
    newCardSubTitle.innerHTML = destinations[newObjPropName].location;
    cardBodyParent.appendChild(newCardSubTitle);

    cardSubtitleId = newCardSubTitle.id;
    


    // creating new card-text
    let newCardText = document.createElement("p");
    newCardText.className = "card-text";
    newCardText.id = "card-text" + cardTextCounter++;
    newCardText.innerHTML = destinations[newObjPropName].description;
    cardBodyParent.appendChild(newCardText);

    cardTextId = newCardText.id;

    // creating the edit and delete buttons in the card
    let newCardButtonEdit = document.createElement("a");
    let newCardButtonRemove = document.createElement("a");
    newCardButtonEdit.addEventListener("click", openModal);
    newCardButtonEdit.className = "btn btn-warning";
    newCardButtonRemove.addEventListener("click", removeCard);
    newCardButtonRemove.className = "btn btn-danger ms-5";
    newCardButtonRemove.innerHTML = "Remove"
    newCardButtonEdit.innerHTML = "Edit";
    cardBodyParent.appendChild(newCardButtonEdit,newCardButtonRemove);
    cardBodyParent.appendChild(newCardButtonRemove);


    document.getElementById("destination-form").reset();
    // returning the name of the current div that our card is inside of as newDivName 
    newDivName = newObjPropName;

    console.log(destinations);
    return [newDivName, cardTitleId, cardSubtitleId, cardTextId];

};




const removeCard = (ev) => {
    /// searching from the button click element up to the closest div that matches with a class name of "delete me"
    let testDelete = ev.target.closest(".delete-me");
    // using the remove method to delete the node we assigned to testDelete
    testDelete.remove();
    
}

const openModal = (ev) => {
    // calling the show function imported from bootstrap JS to open my modal 
    myModal.show();

    // retrieving the current card ( I reused the delete-me class to find the new card )
    let testTarget = ev.target.closest(".delete-me");
    
    // var element = document.getElementById("myid");
    oldCardPhoto = testTarget.childNodes[0];
    oldCardName = testTarget.childNodes[1].childNodes[0];
    oldCardLocation = testTarget.childNodes[1].childNodes[1];
    oldCardDescription = testTarget.childNodes[1].childNodes[2];

    return [oldCardPhoto,oldCardName,oldCardLocation,oldCardDescription];

}

const editCard = (ev) => {
    let newName = document.getElementById("modal-destination").value;
    let newLocation = document.getElementById("modal-location").value;
    let newPhoto = document.getElementById("modal-photo").value;
    let newDescription = document.getElementById("modal-description").value;

    // make sure new input fields are not empty before we update them
    if(newPhoto != "") {
        oldCardPhoto.src = newPhoto;
    }

    if(newName != "") {
        oldCardName.innerHTML = newName;
    }

    if(newLocation != "") {
        oldCardLocation.innerHTML = newLocation;
    }

    if(newDescription != "") {
        oldCardDescription.innerHTML = newDescription;
    }


    document.getElementById("update-form").reset();
    // prevent submit button function from "bubbling" and calling other submit eventListeners
    ev.preventDefault();
}





document.addEventListener('DOMContentLoaded',()=> {
    event.preventDefault();
    // adding submit eventlistener on the form itself instead of clickevent to allow default html url validation 
    document.getElementById('destination-form').addEventListener('submit', addLocation);
    document.getElementById('update-form').addEventListener('submit', editCard);
});
