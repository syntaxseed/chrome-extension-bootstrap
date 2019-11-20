/**
 * Main behaviour of extension. Executes on click of extension button.
 */


// EXAMPLE 1: Replace all images with pictures of cats:

var allImages = document.getElementsByTagName('img');
for (var i = 0; i < allImages.length; i++) {
    allImages[i].setAttribute('src', 'https://placekitten.com/'+allImages[i].width+'/'+allImages[i].height);
    // Instead of above, use the following to remove images on mouse-over.
    /*
    allImages[i].addEventListener('mouseover', function () {
        this.setAttribute('style', 'visibility: hidden');
    });
    */
}


// EXAMPLE 2: Call a global function from the common.js file:

//changeBackground('green');



// EXAMPLE 3: Change all headers to a message:

//document.getElementsByTagName('h1')[0].innerHTML = 'SyntaxSeed Was Here';



// EXAMPLE4: Create a new stylesheet for the page:

/*
var cssRules = '\
    body {transition: transform 3s ease-in; transform: rotate(5deg);} \
';

// Create a CSS block and put our new rules into it:
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = cssRules;
document.getElementsByTagName('head')[0].appendChild(style);
*/
