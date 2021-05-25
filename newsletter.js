// pad the body the height of the nav bar 
let navbar = document.querySelector('#navigation');

let compStyles = window.getComputedStyle(navbar);

let height = compStyles.getPropertyValue('height');

let body = document.querySelector('body');

body.style.setProperty('padding-top', height);

// Jquery for Burger Menu 

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });


//   Desktop side menu 
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Mobile nav toggle
     */
    const toogleNav = function() {
      let navButton = select('.nav-toggle')
      navButton.classList.toggle('nav-toggle-active')
    //   navButton.querySelector('i').classList.toggle('bx-x')
    //   navButton.querySelector('i').classList.toggle('bx-menu')
  
      select('.nav-menu').classList.toggle('nav-menu-active')
    }
    on('click', '.nav-toggle', function(e) {
      toogleNav();
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.nav-menu .drop-down > a', function(e) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('drop-down-active')
      this.parentElement.classList.toggle('active')
    }, true)
  

  
  })()