/*
	COMP 1073 Assignment 1
	Student Id: 200564426
	Student Name: Marcos Oliveira Mota
	Created on: 2024-10-06
*/

// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Declare the variable that will hold the final story string
var textToSpeak = '';  

// Declare the variables that will hold the selections for each button
var button1Picked = '';
var button2Picked = '';
var button3Picked = '';
var button4Picked = '';
var button5Picked = '';

// Declare the arrays with each word
var array1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var array2 = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var array3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var array4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var array5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Function to generate a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to update the text output
function updateStoryOutput() {
    textToSpeak = `${button1Picked} ${button2Picked} ${button3Picked} ${button4Picked} ${button5Picked}`;
    document.getElementById('storyOutput').textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */

// Button to pick a random subject from array1
document.getElementById('button1').addEventListener('click', function() {
    button1Picked = getRandomElement(array1);
    updateStoryOutput();
	speakNow(button1Picked);
});

// Button to pick a random verb from array2
document.getElementById('button2').addEventListener('click', function() {
    button2Picked = getRandomElement(array2);
    updateStoryOutput();
	speakNow(button2Picked);
});

// Button to pick a random adjective from array3
document.getElementById('button3').addEventListener('click', function() {
    button3Picked = getRandomElement(array3);
    updateStoryOutput();
	speakNow(button3Picked);
});

// Button to pick a random noun from array4
document.getElementById('button4').addEventListener('click', function() {
    button4Picked = getRandomElement(array4);
    updateStoryOutput();
	speakNow(button4Picked);
});

// Button to pick a random place from array5
document.getElementById('button5').addEventListener('click', function() {
    button5Picked = getRandomElement(array5);
    updateStoryOutput();
	speakNow(button5Picked);
});

// Button to speak the story, or show a message if there's no story generated or word picked
document.getElementById('playback').addEventListener('click', function() {
    if (textToSpeak) {
        speakNow(textToSpeak);
    } else {
        alert("Please generate a story first!");
    }
});

// Button to generate a full random story
document.getElementById('surprise').addEventListener('click', function() {
    button1Picked = getRandomElement(array1);
    button2Picked = getRandomElement(array2);
    button3Picked = getRandomElement(array3);
    button4Picked = getRandomElement(array4);
    button5Picked = getRandomElement(array5);
    updateStoryOutput();
	if (textToSpeak) {
        speakNow(textToSpeak);
    }
});

// Button to reset the story
document.getElementById('reset').addEventListener('click', function() {
    button1Picked = '';
    button2Picked = '';
    button3Picked = '';
    button4Picked = '';
    button5Picked = '';
    textToSpeak = '';
    document.getElementById('storyOutput').textContent = 'Your story will appear here!';
});