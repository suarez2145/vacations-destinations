export const getImage = async (someImageNode,userInputLocation,userInputdestination) => {
    let newObjHttp;
    let endpoint = `https://unsplash-prox.onrender.com/api/v1/unsplash-request/${userInputLocation}/${userInputdestination}`;
    // let endpoint = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_ACCESS_K}&query=${userInputdestination}-${userInputLocation}`;
    const response = await fetch(endpoint);
    const responseObj = await response.json();
    let respObjRes = responseObj.data.results;
    let randIndex = respObjRes[Math.floor(Math.random() * respObjRes.length)]; 
    newObjHttp = randIndex.urls.small;
    someImageNode.src = newObjHttp;
}