let fontSize = 20;
let isHighContrast = false;

function increaseFontSize() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
    if (fontSize > 10) {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
}

function toggleGrayscale() {
    document.body.classList.toggle('grayscale-mode');
}

function toggleHighContrast() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast', isHighContrast);

    const images = document.querySelectorAll('.instructor');
    images.forEach(img => {
        const originalSrc = img.getAttribute('src');
        const contrastSrc = img.getAttribute('data-contrast-src');
        if (isHighContrast) {
            img.setAttribute('data-original-src', originalSrc);
            img.setAttribute('src', contrastSrc);
        } else {
            const originalSrc = img.getAttribute('data-original-src');
            img.setAttribute('src', originalSrc);
        }
    });
    const buttons = document.querySelectorAll('#accessibility-controls button');
    buttons.forEach(button => {
        button.style.backgroundColor = isHighContrast ? '#fff' : '';
        button.style.color = isHighContrast ? '#000' : '';
    });
}

function toggleYellowContrast() {
    document.body.classList.toggle('Yellow-contrast-mode');
}

let utterance;
let readingSpeed = 1;
let currentIndex = 0;
let isReading = false;

function updateSpeed(value) {
    readingSpeed = parseFloat(value);
    if (utterance) {
        utterance.rate = readingSpeed;
    }
}

function startReading() {
    if (isReading) return;
    isReading = true;

    const pageText = document.body.innerText;
    const words = pageText.split(/\s+/);
    utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'pl-PL';
    utterance.rate = readingSpeed;

    utterance.onboundary = function(event) {
        if (event.name === 'word' && currentIndex < words.length) {
            displayHighlightedWord(words[currentIndex]);
            currentIndex++;
        }
    };

    utterance.text = pageText;
    speechSynthesis.speak(utterance);

    utterance.onend = function() {
        clearHighlightedWord();
        currentIndex = 0;
        isReading = false;
    };
}

function stopReading() {
    speechSynthesis.cancel();
    clearHighlightedWord();
    currentIndex = 0;
    isReading = false;
}

function displayHighlightedWord(word) {
    const highlightedWordElement = document.getElementById('highlighted-word');
    highlightedWordElement.textContent = word;
}

function clearHighlightedWord() {
    const highlightedWordElement = document.getElementById('highlighted-word');
    highlightedWordElement.textContent = '';
}


