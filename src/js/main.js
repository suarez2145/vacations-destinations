import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import {removeCard} from "./removeCard";
import {openModal} from "./openModal";
import {editCard} from "./editCard";
import {getImage} from "./unsplRequest";

var require = {
    baseUrl: "js/"
};


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


export const addLocation = (ev) => {
    ev.preventDefault();


    let userDestination = document.getElementById('destination-name').value;
    let userLocation = document.getElementById('location').value;

    document.getElementById("destination-header").innerHTML = newHeader;
    let currntDesLgth = Object.keys(destinations).length + 1;
    let testObj = {};
    
    testObj.name = document.getElementById('destination-name').value;
    testObj.location = document.getElementById('location').value;     
    testObj.description = document.getElementById('description').value;

    let parent = document.getElementById("destination-cont");

    // create container for cards only once when the destinations array has only 1 entry
    let cardsWrapper = document.createElement("div");
    if(currntDesLgth <= 1) {
        cardsWrapper.className = "container cards-wrapper row justify-content-center g-0";
        cardsWrapper.id = "cards-wrapper";
        parent.appendChild(cardsWrapper);
    };


    // creating card conainer
    let newDivParent = document.getElementById("cards-wrapper");  // had to retrieve the cards-wrapper div so newCardParent Knew what to append to ( took forever to realize this )
    let newCardCont = document.createElement("div");        
    
    newCardCont.className = "delete-me card single-card-cont col-6 col-sm mt-4 p-0 rounded-0";                        
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

    //********** function that makes my api call the unsplash with user inputs ****************
    getImage(newImg,userLocation,userDestination);


    newImg.className = "card-img-top rounded-0";
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
    newCardButtonEdit.className = "btn btn-success rounded-0";
    newCardButtonRemove.addEventListener("click", removeCard);
    newCardButtonRemove.className = "btn btn-danger rounded-0";
    newCardButtonRemove.innerHTML = "Remove"
    newCardButtonEdit.innerHTML = "Edit";
    // adding to the main card instead of card inner body
    newCardParent.appendChild(newCardButtonEdit,newCardButtonRemove);
    newCardParent.appendChild(newCardButtonRemove);

    // old code for inner body buttons
    // cardBodyParent.appendChild(newCardButtonEdit,newCardButtonRemove);
    // cardBodyParent.appendChild(newCardButtonRemove);


    document.getElementById("destination-form").reset();
    // returning the name of the current div that our card is inside of as newDivName 
    newDivName = newObjPropName;

};


document.addEventListener('DOMContentLoaded',()=> {
    event.preventDefault();
    // adding submit eventlistener on the form itself instead of clickevent to allow default html url validation 
    document.getElementById('destination-form').addEventListener('submit', addLocation);
    document.getElementById('update-form').addEventListener('submit', editCard);
});