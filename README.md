# VINAYAKA M — Personal Developer Portfolio
Live Url ="https://portfolio-iota-swart-53.vercel.app/"

> A physical developer-book inspired portfolio showcasing my work in AI Engineering, Full-Stack Development, Machine Learning, and Generative AI.

## Overview

This portfolio is designed as a **digital developer workspace and interactive physical book** rather than a traditional portfolio website.

The experience begins with a developer workspace and transitions into a book-style interface containing sections for:

- About
- Skills
- Work / Projects
- Experience
- Contact

The design focuses on creating a personal, editorial experience while keeping the interface clean, responsive, and easy to navigate.

---

## Features

- 🖥️ Interactive developer workspace landing page
- 📖 Physical book-inspired portfolio navigation
- 👨‍💻 About section with professional background
- 🧠 Skills organized by technical category
- 🚀 Project showcase with detailed descriptions and technology stacks
- 💼 Professional experience section
- 📩 Contact form powered by Formspree
- 🔗 GitHub, LinkedIn, Codeforces and email links
- 📱 Responsive design for desktop and mobile
- 🎞️ Smooth page and section transitions
- 🖼️ Project, skills and contact imagery
- ⚡ Fast Vite-powered frontend
- ☁️ Vercel deployment

---

## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Framer Motion

### Deployment

- Vercel

### Contact

- Formspree

---

## Portfolio Sections

### 01 — About

Introduces my background as an:

**AI Engineer · Full-Stack Developer · Machine Learning Engineer**

The section covers my academic background, technical interests, and areas of focus including:

- AI Engineering
- Machine Learning
- Generative AI
- LLM Applications
- RAG Systems
- Agentic AI
- Full-Stack Development

### 02 — Skills

Technical skills are organized into categories:

- Languages
- Frontend
- Backend
- Databases
- AI / ML
- Tools & Deployment
- Core Computer Science

### 03 — Work

The portfolio currently showcases projects across AI, machine learning, LLM applications, and full-stack development.

#### Meeting Intelligence

An end-to-end AI meeting intelligence system that processes YouTube videos and uploaded audio/video, transcribes conversations, generates structured summaries, extracts action items and key decisions, and provides a RAG-based conversational assistant over meeting content.

**Technologies:**  
Python, Whisper, Sarvam AI, LLMs, LangChain, RAG, ChromaDB, FastAPI

#### AI Resume Analyser

A full-stack AI platform that analyzes resumes against job descriptions and generates match scores, skill-gap analysis, interview questions, and personalized learning roadmaps.

**Technologies:**  
React, Node.js, Express.js, MongoDB, Mongoose, Gemini API, Tailwind CSS, JWT

#### Multi-Agent Research System

An AI-powered deep research application that uses multiple specialized agents to search the web, extract relevant information, generate structured reports, and review the final output.

**Technologies:**  
LangChain, LLMs, Tavily Search, FastAPI, React

#### Student Mental Health Predictor

A machine learning application that predicts a Mental Health Score from academic, social, lifestyle, and digital-platform behavioral factors using student survey data.

**Technologies:**  
Python, Pandas, NumPy, Scikit-learn, FastAPI, React, Vite

#### PhysioPath

An offline-first physiotherapy platform connecting doctors and patients through guided rehabilitation plans, QR-based sharing, voice-assisted rep counting, and a mobile-first exercise experience.

**Technologies:**  
React, Vite, Node.js, Express.js, MongoDB, Mongoose, JWT, PWA, IndexedDB

---

## 04 — Experience

### Bharat Electronics Limited — NWCS Intern

**Bengaluru, Karnataka**

Worked on an IEC 60870-5-104 integration project involving secure multi-protocol industrial communication.

Key areas of work included:

- IEC-104 telemetry collection
- APDU parsing and validation
- Telemetry normalization
- Socket-based communication
- TCP-to-UDP protocol gateway
- OT/IT network communication
- I/S/U-format APDUs
- Sequence numbers and acknowledgements
- Secure communication principles

---

## 05 — Contact

The contact section provides a direct way to connect for:

- AI Engineering opportunities
- Full-Stack Development
- Collaborations
- Projects
- Professional opportunities

The portfolio includes a contact form powered by **Formspree**, along with direct links to professional profiles.

---

## Project Structure

```text
frontend/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    │
    ├── components/
    │
    ├── data/
    │   ├── projects.js
    │   ├── skills.js
    │   └── experience.js
    │
    └── assets/
        ├── workspace_scene.jpg
        ├── chair_foreground.png
        │
        ├── projects/
        │   ├── Ai_assistant.png
        │   ├── Ai_resume_analyzer.png
        │   ├── multi_agent.png
        │   ├── mental_health_predictor.png
        │   └── physiopath.png
        │
        └── skills/
