# 🧠 Narrative Control Analyzer
 → Narrative Control Analyzer reveals how emotional language and narrative framing shape reader perception when different media report the same event.

Narrative Control Analyzer is a tool that helps users understand how the same event is framed differently across media sources.

By comparing two articles about the same topic, the system analyzes emotional bias, narrative framing, and the beliefs a reader might form if exposed to only one source.

---

## 🚀 Features

- Emotional bias detection per article
- Narrative framing comparison
- Reader perception analysis
- Visual emotional intensity indicators (bars & percentages)

---

## 🧠 How It Works

1. User pastes two articles about the same event
2. Google Gemini analyzes emotional tone and framing
3. The system returns:
   - Dominant emotions
   - Emotional intensity
   - Narrative framing differences
   - Reader impact insights

---

## 🛠️ Tech Stack

- **Google Gemini** (via Google AI Studio API)
- **Node.js + Express** (backend)
- **HTML, CSS, JavaScript** (frontend)
- **Firebase Hosting** (deployment)

---

## ⚠️ Disclaimer

This tool does **not** verify facts or determine correctness.  
It analyzes **language, emotional tone, and narrative framing only**.

---

## ▶️ Running Locally

### Backend
```bash
cd backend
npm install
node index.js

## 🌐 Live Demo

Frontend hosted on Firebase:
https://narrative-control-analyz-db26c.web.app/


The backend uses Google Gemini via Google AI Studio and runs locally during demos for API key security.