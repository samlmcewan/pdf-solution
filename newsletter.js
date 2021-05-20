// pad the body the height of the nav bar 
let navbar = document.querySelector('#navigation');



let compStyles = window.getComputedStyle(navbar);

let height = compStyles.getPropertyValue('height');

let body = document.querySelector('body');

body.style.setProperty('padding-top', height);



// left align the article number with the article title 

// let docTitle = document.querySelector('.container');
// let titleCompStyles = window.getComputedStyle(docTitle);
// let titleMargin = titleCompStyles.getPropertyValue('padding-left');

// console.log(titleMargin);

// let articleNum = document.querySelector('#artNum');

// console.log(articleNum);

// articleNum.style.setProperty('padding-left', titleMargin);
