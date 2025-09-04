const backendURL = "https://rag-backend.onrender.com"; // change this after deploying

async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("uploadStatus");

  if (!fileInput.files.length) {
    status.innerText = "⚠️ Please select a file first.";
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  status.innerText = "⏳ Uploading...";

  try {
    const res = await fetch(`${backendURL}/upload`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    status.innerText = "✅ " + data.message;
  } catch (err) {
    status.innerText = "❌ Upload failed.";
    console.error(err);
  }
}

async function askQuestion() {
  const questionInput = document.getElementById("questionInput");
  const answerField = document.getElementById("answer");

  if (!questionInput.value) {
    answerField.innerText = "⚠️ Please enter a question.";
    return;
  }

  const formData = new FormData();
  formData.append("question", questionInput.value);

  answerField.innerText = "⏳ Thinking...";

  try {
    const res = await fetch(`${backendURL}/ask`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    if (data.answer) {
      answerField.innerText = "💡 " + data.answer;
    } else {
      answerField.innerText = "❌ Error: " + JSON.stringify(data);
    }
  } catch (err) {
    answerField.innerText = "❌ Request failed.";
    console.error(err);
  }
}
