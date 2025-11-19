import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [response, setResponse] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  async function sendToBackend() {
    setResponse("Loading...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "test-upload",
          source: "frontend-ui",
          topic: topic || "no topic",
        }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "700px" }}>
      <h1>ProphecyForge AI 🔮</h1>
      <p>Test connection between frontend → API Gateway → Lambda → S3</p>

      <input
        type="text"
        placeholder="Enter topic..."
        style={{ padding: "10px", width: "100%", fontSize: "16px" }}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={sendToBackend}
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          background: "#4f46e5",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send to Backend
      </button>

      <pre
        style={{
          background: "#f3f4f6",
          padding: "20px",
          marginTop: "25px",
          borderRadius: "6px",
          whiteSpace: "pre-wrap",
        }}
      >
        {response && response}
      </pre>
    </div>
  );
}

export default App;
