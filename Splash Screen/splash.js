const output = document.getElementById('output');
const command = document.getElementById('command');

const textToType = "run seniorportforlio.exe";
const commandOutput = [
    "Initializing seniorportforlio.exe...",
    "Loading assets...",
    "Compiling data...",
    "Establishing connection...",
    "Finalizing setup...",
    "seniorportforlio.exe successfully open"
];

let index = 0;

function typeText() {
    if (index < textToType.length) {
        command.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        simulateCommandOutput();
    }
}

function simulateCommandOutput() {
    let i = 0;
    function addLine() {
        if (i < commandOutput.length) {
            output.textContent += commandOutput[i] + "\n";
            i++;
            setTimeout(addLine, 1000); // Adjust delay between lines here
        } else {
            setTimeout(() => {
                window.location.href = "Home/Home.html"; // Replace with your desired URL
            }, 1000);
        }
    }
    addLine();
}

// Start the typing effect
typeText();