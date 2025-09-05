import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [textData, setTextData] = useState("");
  const [sessionId] = useState(Date.now().toString()); // unique ID per user

  const backendUrl = "https://<your-username>-<space-name>.hf.space";

  const ingestText = async () => {
    if (!textData.trim()) return;
    try {
      await fetch(`${backendUrl}/ingest/${sessionId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textData }),
      });
      setMessages([{ sender: "System", text: "✅ Text uploaded successfully" }]);
      setTextData("");
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "You", text: input }]);
    const query = input;
    setInput("");

    try {
      const res = await fetch(`${backendUrl}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, session_id: sessionId }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "AI", text: data.answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "AI", text: "⚠️ Error contacting backend" }]);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">RAG Chatbot Demo</h1>

      {/* Upload Knowledge Base */}
      <textarea
        value={textData}
        onChange={(e) => setTextData(e.target.value)}
        placeholder="Paste text here..."
        className="w-full max-w-lg p-2 border rounded mb-2"
        rows={4}
      />
      <button
        onClick={ingestText}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Upload Knowledge
      </button>

      {/* Chat */}
      <div className="w-full max-w-lg border rounded bg-white shadow p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-2" style={{ height: "300px" }}>
          {messages.map((m, i) => (
            <div key={i} className={`my-1 ${m.sender === "You" ? "text-blue-600" : m.sender === "AI" ? "text-green-600" : "text-gray-500"}`}>
              <strong>{m.sender}: </strong>{m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask a question..."
            className="flex-1 border rounded p-2"
          />
          <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
