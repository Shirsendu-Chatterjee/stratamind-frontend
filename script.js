const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Each user gets their own temporary "namespace"
let sessionId = Date.now().toString();

// Add a message to the chat box
function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add(sender);
    msg.textContent = `${sender}: ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send query to backend
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    userInput.value = "";

    try {
        const response = await fetch("https://stratamind-backend.onrender.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: text, session_id: sessionId })
        });

        const data = await response.json();
        addMessage("AI", data.answer);
    } catch (err) {
        console.error(err);
        addMessage("AI", "⚠️ Error: Could not reach backend.");
    }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Each user gets their own temporary "namespace"
let sessionId = Date.now().toString();

// Add a message to the chat box
function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add(sender);
    msg.textContent = `${sender}: ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send query to backend
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    userInput.value = "";

    try {
        const response = await fetch("https://your-backend-url.onrender.com/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: text, session_id: sessionId })
        });

        const data = await response.json();
        addMessage("AI", data.answer);
    } catch (err) {
        console.error(err);
        addMessage("AI", "⚠️ Error: Could not reach backend.");
    }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Each user gets their own temporary "namespace"
let sessionId = Date.now().toString();

// Add a message to the chat box
function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add(sender);
    msg.textContent = `${sender}: ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send query to backend
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    userInput.value = "";

    try {
        const response = await fetch("https://your-backend-url.onrender.com/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: text, session_id: sessionId })
        });

        const data = await response.json();
        addMessage("AI", data.answer);
    } catch (err) {
        console.error(err);
        addMessage("AI", "⚠️ Error: Could not reach backend.");
    }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Each user gets their own temporary "namespace"
let sessionId = Date.now().toString();

// Add a message to the chat box
function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add(sender);
    msg.textContent = `${sender}: ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send query to backend
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    userInput.value = "";

    try {
        const response = await fetch("https://your-backend-url.onrender.com/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: text, session_id: sessionId })
        });

        const data = await response.json();
        addMessage("AI", data.answer);
    } catch (err) {
        console.error(err);
        addMessage("AI", "⚠️ Error: Could not reach backend.");
    }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
