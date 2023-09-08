import { decodeBlurHash } from 'fast-blurhash';

export const getImage = async (someImageNode,userInputLocation,userInputdestination) => {
    let newObjHttp;
    let newImgBlurHash;
    let endpoint = `https://unsplash-prox.onrender.com/api/v1/unsplash-request/${userInputLocation}/${userInputdestination}`;
    // let endpoint = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_ACCESS_K}&query=${userInputdestination}-${userInputLocation}`;
    const response = await fetch(endpoint);
    const responseObj = await response.json();

    let respObjRes = responseObj.data.results;
    let randIndex = respObjRes[Math.floor(Math.random() * respObjRes.length)];
    newImgBlurHash = randIndex.blur_hash; 
    newObjHttp = randIndex.urls.small;
    // retirieving the hasblur from the promise response 
    // newImgBlurHash = randIndex.blur_hash;
    // console.log(newImgBlurHash);
    // const decdBlurHash = decodeBlurHash(newImgBlurHash, 250, 250);
    // console.log(decdBlurHash);

    // // create canvas and append to document body
    // const canvas = document.createElement('canvas');
    // const ctx = canvas.getContext('2d');
    // const imageData = ctx.createImageData(250, 250);
    // imageData.data.set(decdBlurHash);
    // ctx.putImageData(imageData, 0, 0);
    // document.body.append(canvas);

    someImageNode.src = newObjHttp;
}