const firstSlide = document.querySelector('#slide-1');
const secondSlide = document.querySelector('#slide-2');
const thirdSlide = document.querySelector('#slide-3');
const leftIcon = document.querySelector('.reviews-left-icon');
const rightIcon = document.querySelector('.reviews-right-icon');
const body = document.querySelector('body');
const topLinks = document.getElementsByClassName('header-top-item');

// CAROUSEL FUNCTIONALITY
body.addEventListener('click', slideRight);
body.addEventListener('click', slideLeft);


// ACTIVE LINK FUNCTIONALITY
for (let i=0; i<topLinks.length; i++) {
    topLinks[i].addEventListener('click', function(e) {
        let currentLink = document.querySelector('.active');
        currentLink.classList.toggle('active');
        let clickedLink = e.target.parentNode;
        clickedLink.classList.toggle('active');
    })
}



function slideRight(e) {
    if (e.target.classList.contains('reviews-right-icon')) {
        // IF 3RD SLIDE AND 2ND SLIDE ARE BOTH HIDDEN, THEN SHOW 2ND SLIDE
        if(thirdSlide.classList.contains('custom-hide') &&  secondSlide.classList.contains('custom-hide')) {
            firstSlide.classList.toggle('custom-hide');
            secondSlide.classList.toggle('custom-hide');

            // CLEAR FIRST SLIDE CLASSES
            if(firstSlide.classList.contains('custom-left') || firstSlide.classList.contains('custom-right')) {
                firstSlide.classList.remove('custom-left');
                firstSlide.classList.remove('custom-right');
            }

            // CLEAR SECOND SLIDE CLASSES
            if(secondSlide.classList.contains('custom-left') || secondSlide.classList.contains('custom-right')) {
                secondSlide.classList.remove('custom-left');
                secondSlide.classList.remove('custom-right');
            }

            // ADD SLIDE RIGHT CLASS TO SECOND SLIDE
            secondSlide.classList.add('custom-right');

            // RESHOW SLIDE RIGHT BUTTON
            leftIcon.classList.remove('custom-hide-two');
            
        } else if (firstSlide.classList.contains('custom-hide') &&  thirdSlide.classList.contains('custom-hide')) {
            // IF 1ST SLIDE AND 3RD SLIDE ARE HIDDEN, THEN SHOW 3RD SLIDE
            secondSlide.classList.toggle('custom-hide');
            thirdSlide.classList.toggle('custom-hide');

            // CLEAR SECOND SLIDE CLASSES
            if(secondSlide.classList.contains('custom-left') || secondSlide.classList.contains('custom-right')) {
                secondSlide.classList.remove('custom-left');
                secondSlide.classList.remove('custom-right');
            }

            // CLEAR THIRD SLIDE CLASSES
            if(thirdSlide.classList.contains('custom-left') || thirdSlide.classList.contains('custom-right')) {
                thirdSlide.classList.remove('custom-left');
                thirdSlide.classList.remove('custom-right');
            }

            // ADD SLIDE RIGHT CLASS TO THIRD SLIDE
            thirdSlide.classList.add('custom-right');

            // HIDE SLIDE RIGHT BUTTON
            rightIcon.classList.toggle('custom-hide-two');
            
        }
    }   
}


function slideLeft(e) {
    if (e.target.classList.contains('reviews-left-icon')) {
        // IF 1ST SLIDE AND 2ND SLIDE ARE BOTH HIDDEN, THEN SHOW 2ND SLIDE
        if(firstSlide.classList.contains('custom-hide') &&  secondSlide.classList.contains('custom-hide')) {
            thirdSlide.classList.toggle('custom-hide');
            secondSlide.classList.toggle('custom-hide');

            // CLEAR THIRD SLIDE CLASSES
            if(thirdSlide.classList.contains('custom-left') || thirdSlide.classList.contains('custom-right')) {
                thirdSlide.classList.remove('custom-left');
                thirdSlide.classList.remove('custom-right');
            }

            // CLEAR SECOND SLIDE CLASSES
            if(secondSlide.classList.contains('custom-left') || secondSlide.classList.contains('custom-right')) {
                secondSlide.classList.remove('custom-left');
                secondSlide.classList.remove('custom-right');
            }

            // ADD SLIDE RIGHT CLASS TO SECOND SLIDE
            secondSlide.classList.add('custom-left');

            // RESHOW SLIDE RIGHT BUTTON
            rightIcon.classList.remove('custom-hide-two');
            
        } else if (firstSlide.classList.contains('custom-hide') &&  thirdSlide.classList.contains('custom-hide')) {
            // IF 1ST SLIDE AND 3RD SLIDE ARE HIDDEN, THEN SHOW 1ST SLIDE
            secondSlide.classList.toggle('custom-hide');
            firstSlide.classList.toggle('custom-hide');


            // CLEAR SECOND SLIDE CLASSES
            if(secondSlide.classList.contains('custom-left') || secondSlide.classList.contains('custom-right')) {
                secondSlide.classList.remove('custom-left');
                secondSlide.classList.remove('custom-right');
            }

            // CLEAR FIRST SLIDE CLASSES
            if(firstSlide.classList.contains('custom-left') || firstSlide.classList.contains('custom-right')) {
                firstSlide.classList.remove('custom-left');
                firstSlide.classList.remove('custom-right');
            }

            // ADD SLIDE RIGHT CLASS TO FIRST SLIDE
            firstSlide.classList.add('custom-left');

            // HIDE SLIDE LEFT BUTTON
            leftIcon.classList.toggle('custom-hide-two');
        }
    }   
}
