export const projects = [
  {
    title: "Meeting Intelligence",
    image: meetingIntelligenceImage,
    shortDescription:
      "Turning long conversations into structured knowledge, clear decisions, and actionable follow-ups.",
    description:
      "An end-to-end AI meeting intelligence system that processes YouTube videos and uploaded audio or video, transcribes conversations, generates structured summaries, extracts action items and key decisions, and provides a RAG-based conversational assistant over the meeting content.",
    stack: [
      "Python",
      "Whisper",
      "Sarvam AI",
      "LLMs",
      "LangChain",
      "RAG",
      "ChromaDB",
      "FastAPI",
    ],
    features: [
      "YouTube and audio/video input",
      "English transcription with Whisper",
      "Hindi/Hinglish transcription with Sarvam AI",
      "AI summarization",
      "Action item extraction",
      "Key decision extraction",
      "RAG-based question answering",
      "PDF/TXT export",
    ],
    github: "https://github.com/vinayaka-112006/AI_Assistant/tree/main",
  },

  {
    title: "AI Resume Analyser",
    image: resumeAnalyzerImage,
    shortDescription:
      "Helping candidates see where their experience aligns, where it can grow, and how to prepare for the next opportunity.",
    description:
      "A full-stack AI platform that analyzes resumes against job descriptions and generates a match score, skill-gap analysis, personalized interview questions, and learning roadmaps based on identified skill gaps.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Gemini API",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Resume PDF upload and processing",
      "Job description analysis",
      "AI-generated match score",
      "Skill-gap analysis",
      "Technical and behavioral interview questions",
      "Personalized learning roadmap",
      "JWT authentication",
      "Security middleware",
    ],
    live: "https://ai-resume-analyser-three-hazel.vercel.app/",
    github: "https://github.com/vinayaka-112006/AI-Resume-Analyser",
  },

  {
    title: "Multi-Agent Research System",
    image: multiAgentImage,
    shortDescription:
      "Turning a research question into a considered process that gathers evidence and shapes it into a clear report.",
    description:
      "An AI-powered deep research system that uses multiple specialized agents to search the web, extract relevant information, generate structured reports, and review the final output. The multi-agent pipeline divides the research workflow into specialized stages instead of relying on a single AI prompt.",
    stack: ["LangChain", "LLMs", "Tavily Search", "FastAPI", "React"],
    features: [
      "Multi-agent research pipeline",
      "Web search with Tavily",
      "Information extraction",
      "Automated report generation",
      "AI-based report review",
      "Structured research workflow",
    ],
    github: "https://github.com/vinayaka-112006/Multi_agent",
  },

  {
    title: "Student Mental Health Predictor",
    image: mentalHealthImage,
    shortDescription:
      "Using academic, social, lifestyle, and digital behavior patterns to produce a machine-learning mental health prediction.",
    description:
      "A machine learning application that predicts a Mental Health Score from academic, social, lifestyle, and digital-platform behavioral factors using student survey data, with a FastAPI backend and React frontend.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "FastAPI",
      "React",
      "Vite",
      "REST API",
    ],
    features: [
      "Student survey data analysis",
      "Data preprocessing",
      "Feature engineering",
      "Machine learning prediction",
      "FastAPI REST API",
      "React + Vite frontend",
      "Vercel deployment",
      "Render backend deployment",
    ],
    live: "https://mental-health-predictor-nu.vercel.app/",
    github: "https://github.com/vinayaka-112006/Mental-Health-Predictor",
  },

  {
    title: "PhysioPath",
    image: physioPathImage,
    shortDescription:
      "Making rehabilitation more accessible through guided care plans and patient support that stays available offline.",
    description:
      "An offline-first physiotherapy platform that connects doctors and patients through guided rehabilitation plans, QR-based plan sharing, voice-assisted rep counting, and a mobile-first exercise experience that remains accessible without an internet connection.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "PWA",
      "IndexedDB",
      "Framer Motion",
    ],
    features: [
      "Doctor exercise plan builder",
      "QR-based plan sharing",
      "Offline-first patient experience",
      "PWA and IndexedDB support",
      "Voice-assisted rep counting",
      "Manual rep counting",
      "Guided workout mode",
      "Patient progress tracking",
      "Doctor analytics",
      "Multilingual exercise content",
    ],
    live: "https://physiopath-sandy.vercel.app/",
    github: "https://github.com/vinayaka-112006/physiopath",
  },
];

import meetingIntelligenceImage from "../assets/projects/Ai_assistant.png";
import resumeAnalyzerImage from "../assets/projects/Ai_resume_analyzer.png";
import multiAgentImage from "../assets/projects/multi_agent.png";
import mentalHealthImage from "../assets/projects/mental_health_predictor.png";
import physioPathImage from "../assets/projects/physiopath.png";
