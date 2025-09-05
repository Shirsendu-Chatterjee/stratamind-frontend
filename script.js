const backendUrl = "https://huggingface.co/spaces/S-Chatterjee2005/stratamind";
const sessionId = Date.now().toString();

async function uploadText() {
  const text = document.getElementById("knowledge").value;
  if (!text.trim()) return;

  await fetch(`${backendUrl}/ingest/${sessionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  document.getElementById("chat-box").innerHTML += `<div><em>Knowledge uploaded ✅</em></div>`;
  document.getElementById("knowledge").value = "";
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const query = input.value.trim();
  if (!query) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div><b>You:</b> ${query}</div>`;
  input.value = "";

  const res = await fetch(`${backendUrl}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, session_id: sessionId })
  });

  const data = await res.json();
  chatBox.innerHTML += `<div><b>AI:</b> ${data.answer}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
