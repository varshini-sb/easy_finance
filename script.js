var speechSynthesis = window.speechSynthesis;

function speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0; // Set the speed to 1.5 times the default speed
    utterance.pitch = 1.2; // Set the pitch to 1.2 times the default pitch
    utterance.volume = 0.7; // Set the volume to 0.5 times the default volume
    speechSynthesis.speak(utterance);
}

// To use this function, call it with the desired text.
// For example, the following code will convert the entered text into speech format.

document.getElementById('speakTextButton').addEventListener('click', function () {
    var text = document.getElementById('id1').value;
    speak(text);
    var text = document.getElementById('id2').value;
    speak(text);
    var text = document.getElementById('id3').value;
    speak(text);
    var text = document.getElementById('id4').value;
    speak(text);
    var text = document.getElementById('id5').value;
    speak(text);
    var text = document.getElementById('id6').value;
    speak(text);
    var text = document.getElementById('id7').value;
    speak(text);
    var text = document.getElementById('id8').value;
    speak(text);
    

    


});