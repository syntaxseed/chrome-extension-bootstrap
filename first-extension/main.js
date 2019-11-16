/**
 * Main behaviour of extension. Executes on click of extension button.
 */

// Replace all images with pics of cats.
var allImages = document.getElementsByTagName('img');
//console.log(allImages);

for(var i = 0; i < allImages.length; i++){
    allImages[i].setAttribute('src', 'https://placekitten.com/'+allImages[i].width+'/'+allImages[i].height);
}

//document.getElementsByTagName('h1')[0].innerHTML = 'Sherri Was Here.';



// Create a new stylesheet for the page:
/*
var cssRules = '\
    body {font-size:3em;} \
    body {transition: transform 3s ease-in; transform: rotate(5deg);} \
';

// Create a CSS block and put our new rules into it:
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = cssRules;
document.getElementsByTagName('head')[0].appendChild(style);
*/
