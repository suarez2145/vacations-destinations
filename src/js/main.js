import '../scss/styles.scss'

let destinations = [];
let newHeader = "My Wishlist";
let newDivCounter = 1;
let newCardContCounter = 1;
let newCardBodyCounter = 1;
let CurrentNode;




const addLocation = (ev) => {
    ev.preventDefault();
    document.getElementById("destination-header").innerHTML = newHeader;
    
    // defining our destination object with user inputs we want to save
    let destination = {
        name: document.getElementById('destination-name').value,
        location: document.getElementById('location').value,
        photo: document.getElementById('photo').value,
        description: document.getElementById('description').value
    }


    destinations.push(destination); 
    let parent = document.getElementById("destination-cont");


    // create container for cards only once when the destinations array has only 1 entry
    let cardsWrapper = document.createElement("div");

    if(destinations.length <= 1) {
        cardsWrapper.className = "container cards-wrapper row justify-content-center g-0";
        cardsWrapper.id = "cards-wrapper";
        parent.appendChild(cardsWrapper);
    };


    // creating card conainer
    let newDivParent = document.getElementById("cards-wrapper");        // had to retrieve the cards-wrapper div so newCardParent Knew what to append to ( took forever to realize this )
    let newCardCont = document.createElement("div");        
    
    newCardCont.className = "delete-me card single-card-cont col-6 col-sm mt-4 p-0";                        
    newCardCont.id = "newCard" + newCardContCounter++; 
    console.log((newCardCont));                        
    newCardCont.style = "width: 18rem"
    newDivParent.appendChild(newCardCont);

    let newCardParent = document.getElementById(newCardCont.id);

    // creating img that goes on top of card
    var newImg = document.createElement("img");
    
    if(destination.photo == "") {
        newImg.src = "mike_bird.jpg"
    } else {
        newImg.src = destination.photo;
    }
    newImg.className = "card-img-top";
    newImg.alt = "...";
    newCardParent.appendChild(newImg);

    // creating card-body container
    var newCard = document.createElement("div");
    newCard.className = "card-body g-0";
    newCard.id = "card-body" + newCardBodyCounter++;
    newCardCont.appendChild(newCard);

    // creating card-content
    let cardBodyParent = document.getElementById(newCard.id);
    var newCardBody = document.createElement("h5");
    newCardBody.className = "card-title";
    newCardBody.id = "card-title";
    newCardBody.innerHTML = destination.name;
    cardBodyParent.appendChild(newCardBody);

    // creating new card-body subtitle
    var newCardSubTitle = document.createElement("h6")
    newCardSubTitle.className = "card-subtitle mb-2 text-muted";
    newCardSubTitle.id = "card-subtitle";
    newCardSubTitle.innerHTML = destination.location;
    cardBodyParent.appendChild(newCardSubTitle);


    // creating new card-text
    var newCardText = document.createElement("p");
    newCardText.className = "card-text";
    newCardText.innerHTML = destination.description;
    cardBodyParent.appendChild(newCardText);

    // creating the edit and delete buttons in the card
    var newCardButtonEdit = document.createElement("a");
    var newCardButtonRemove = document.createElement("a");
    newCardButtonEdit.className = "btn btn-warning";
    newCardButtonRemove.addEventListener("click", removeCard);
    newCardButtonRemove.className = "btn btn-danger ms-5";
    newCardButtonRemove.innerHTML = "Remove"
    newCardButtonEdit.innerHTML = "Edit";
    cardBodyParent.appendChild(newCardButtonEdit,newCardButtonRemove);
    cardBodyParent.appendChild(newCardButtonRemove);



    console.log(destinations);
    document.getElementById("destination-form").reset();

};

const removeCard = (ev) => {
    /// searching from the button click element up to the closest div that matches with a class name of "delete me"
    let testDelete = ev.target.closest(".delete-me");
    // using the remove method to delete the node we assigned to testDelete
    testDelete.remove();
    
}

const editCard = () => {

}



document.addEventListener('DOMContentLoaded',()=> {
    event.preventDefault();
    // adding submit eventlistener on the form itself instead of clickevent to allow default html url validation 
    document.getElementById('destination-form').addEventListener('submit', addLocation);
});
