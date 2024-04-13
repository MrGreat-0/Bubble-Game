var timer = 60;
var score = 0;
var hitrn = 0;


function restartGame() {
    // Reset the game timer
    timer = 60;
    document.querySelector("#count").textContent = timer;

    // Reset the score
    score = 0;
    document.querySelector("#scoreval").textContent = score;

    // Reset the hit number
    getNewHit();

    // Create new bubbles
    makeBubble();

    // Start the game timer
    runTimer();
}


function startGame() {

    // Reset the hit number
    getNewHit();

    // Create new bubbles
    makeBubble();

    // Start the game timer
    runTimer();
}

// Call the startGame function when the "Start" button is clicked
document.getElementById("start-button").addEventListener("click", startGame);


function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}


///////////////////////////////////////////////////

// this is bubble making function for desktop only  

// function makeBubble() {
//     var clutter = "";

//     for (var i = 0; i <= 132; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }

//     document.querySelector("#p-bottom").innerHTML = clutter;
// }

//////////////////////////////////////////////////


// this is bubble making function for responsive

function makeBubble() {
    var numBubbles;

    if (window.innerWidth <= 640) {
        numBubbles = 70;
    } else if (window.innerWidth <= 768) {
        numBubbles = 116;
    } else {
        numBubbles = 132;
    }

    var clutter = "";

    for (var i = 0; i <= numBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;

    }

    document.querySelector("#p-bottom").innerHTML = clutter;
}


function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#count").textContent = timer;
        } else {
            clearInterval(timeInt);
            document.querySelector("#p-bottom").innerHTML = `<h1>Game Over</h1>`;

            // Add the restart button to the DOM
            var restartButton = document.createElement("button");
            restartButton.id = "restart-button";
            restartButton.textContent = "Restart";
            document.querySelector("#p-bottom").appendChild(restartButton);

            // Another method of adding restart button.....(Add the restart button to the DOM)
            // document.querySelector("#p-bottom").innerHTML = `<h1>Game Over</h1><button id="restart-button">Restart</button>`;

            // Add an event listener for clicking on the restart button
            document.querySelector("#restart-button").addEventListener("click", restartGame);
        }
    }, 1000)
}


document.querySelector("#p-bottom")
    .addEventListener("click", function (dets) {
        var clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitrn) {
            incScore();
            makeBubble();
            getNewHit();
        } else {
            if (score > 0) {
                score -= 5;
            }
            document.querySelector("#scoreval").textContent = score;
        }
    })


// this function help appearing bubble without resize the width...method (01)...
// [note : when you don't use start button you need this method but you this event listener for real-time responsive like when you play game]
window.addEventListener("resize", makeBubble);

//////////////////////////////////////////////////////////////

// this function help appearing bubble without resize the width but we fix problem with above method (01)

// ...method (02)...
// function showBubble() {
//   const bubble = document.getElementById('bubble');
//   bubble.style.display = 'block';
// }

// window.addEventListener('load', showBubble);
// window.addEventListener('resize', showBubble);

// showBubble();

////////////////////////////////////////////////////////////


// makeBubble();
// getNewHit();
// runTimer();


