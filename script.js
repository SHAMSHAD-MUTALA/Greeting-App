function displayGreeting() {
    const name = document.getElementById('nameInput').value;
    const message = `Hello, ${name}!`;
    document.getElementById('greetingMessage').innerText = message;
}
