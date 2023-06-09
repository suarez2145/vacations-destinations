
export const removeCard = (ev) => {
    /// searching from the button click element up to the closest div that matches with a class name of "delete me"
    let testDelete = ev.target.closest(".delete-me");
    // using the remove method to delete the node we assigned to testDelete
    testDelete.remove();
    
}