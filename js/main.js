// vars to bring from the html dom to the js file
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');



let currentActive = 1;

// Event Listeners - for the next button
next.addEventListener('click', () => {
    currentActive++; // currentActive = currentActive + 1; 

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

// Event Listeners - for the prev button
prev.addEventListener('click', () => {
    currentActive--; // currentActive = currentActive + 1; 

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
    
})

// function to update the progress bar
function update() {
    // loop through the circles
    circles.forEach((circle, idx) => {
        // if the index of the circle is less than the current active, add the active class
        if(idx < currentActive) {
            circle.classList.add('active');
        // else remove the active class
        } else {
            circle.classList.remove('active');
        }
    })

    // get all the active circles
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'; // 100% is the width of the progress bar

    // if the current active is 1, disable the prev button
    if(currentActive === 1) {
        prev.disabled = true;
    // else if the current active is the same as the length of the circles, disable the next button
    } else if(currentActive === circles.length) {
        next.disabled = true;
    // else enable both buttons
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}