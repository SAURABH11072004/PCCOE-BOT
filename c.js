function sendMessage() {
    const input = document.getElementById('chat-input').value;
    const chatBox = document.getElementById('chat-box');

    if(input.trim() === "") return;

    // Append user message to chat box
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = "You: " + input;
    chatBox.appendChild(userMessage);

    // Placeholder for Botpress API response (integrate API later)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = "Bot: This is a placeholder for the Botpress API response.";
        chatBox.appendChild(botMessage);
    }, 1000);

    // Clear input field and scroll chat box
    document.getElementById('chat-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}
