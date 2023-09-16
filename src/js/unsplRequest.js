import { decodeBlurHash } from 'fast-blurhash';

export const getImage = async (someImageNode,someCanvas,userInputLocation,userInputdestination) => {
    let newObjHttp;
    let newImgBlurHash;
    let loadTag = document.getElementById("loaderDiv");

    let removeLoaderFunc = () => {
        loadTag.remove();
    }

    let endpoint = `https://unsplash-prox.onrender.com/api/v1/unsplash-request/${userInputLocation}/${userInputdestination}`;
    // let endpoint = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_ACCESS_K}&query=${userInputdestination}-${userInputLocation}`;
    const response = await fetch(endpoint);

    const responseObj = await response.json();


    let respObjRes = responseObj.data.results;

    let randIndex = respObjRes[Math.floor(Math.random() * respObjRes.length)];
    newImgBlurHash = randIndex.blur_hash; 
    newObjHttp = randIndex.urls.thumb;
    // retirieving the hasblur from the promise response 
    newImgBlurHash = randIndex.blur_hash;

    const decdBlurHash = decodeBlurHash(newImgBlurHash, 300, 300);


    // // create canvas and append to document body
    const ctx = someCanvas.getContext('2d');
    const imageData = ctx.createImageData(300, 300);
    imageData.data.set(decdBlurHash);
    ctx.putImageData(imageData, 0, 0);
    
    someImageNode.src = newObjHttp;

    const rmvLoader = removeLoaderFunc();
}
