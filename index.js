// Function to count words in a sentence
function countWords(sentence) {
    return sentence.trim().split(/\s+/).filter(function (word) { return word.length > 0; }).length;
}
// Function to count characters in a sentence
function countCharacters(sentence) {
    return sentence.length;
}
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    var inputElement = document.getElementById('sentence-input');
    var sentence = inputElement.value;
    // Count words and characters
    var wordCount = countWords(sentence);
    var characterCount = countCharacters(sentence);
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "\n        words count  <strong>".concat(wordCount, "</strong><br>\n        characters count <strong>").concat(characterCount, "</strong>");
}
// Add event listener to the form
var form = document.getElementById('sentence-form');
form.addEventListener('submit', handleFormSubmission);
