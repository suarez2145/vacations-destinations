import * as bootstrap from 'bootstrap';
const myModal = new bootstrap.Modal(document.getElementById('editModal'));
export let oldDivObj = {};


export const openModal = (ev) => {
    let oldCardPhoto;
    let oldCardName;
    let oldCardLocation;
    let oldCardDescription;
    // calling the show function imported from bootstrap JS to open my modal 
    myModal.show();

    // retrieving the current card ( I reused the delete-me class to find the new card )
    let testTarget = ev.target.closest(".delete-me");

    // var element = document.getElementById("myid");
    oldCardPhoto = testTarget.childNodes[0];
    oldCardName = testTarget.childNodes[1].childNodes[0];
    oldCardLocation = testTarget.childNodes[1].childNodes[1];
    oldCardDescription = testTarget.childNodes[1].childNodes[2];


    // using assigned variables above to create property in the oldDivObj object and assigning its value 
    oldDivObj.oldCardPhoto = oldCardPhoto;
    oldDivObj.oldCardName = oldCardName;
    oldDivObj.oldCardLocation = oldCardLocation;
    oldDivObj.oldCardDescription = oldCardDescription;

}