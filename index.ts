// Function to count words in a sentence
function countWords(sentence: string): number {
    return sentence.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Function to count characters in a sentence
function countCharacters(sentence: string): number {
    return sentence.length;
}

// Function to handle form submission
function handleFormSubmission(event: Event): void {
    event.preventDefault(); // Prevent default form submission

    const inputElement = document.getElementById('sentence-input') as HTMLTextAreaElement;
    const sentence = inputElement.value;

    // Count words and characters
    const wordCount = countWords(sentence);
    const characterCount = countCharacters(sentence);

    // Display the result
    const resultElement = document.getElementById('result') as HTMLDivElement;
    resultElement.innerHTML = `
        words count  <strong>${wordCount}</strong><br>
        characters count <strong>${characterCount}</strong>`;
}

// Add event listener to the form
const form = document.getElementById('sentence-form') as HTMLFormElement;
form.addEventListener('submit', handleFormSubmission);
