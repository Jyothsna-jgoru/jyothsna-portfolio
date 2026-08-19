/* ============================================================
   Single source of truth for every piece of portfolio content.
   Components read from here so copy can be edited in one place.
   ============================================================ */

/* Experience logos */
import zomatoLogo from "../assets/zomato.png";
import healthplixLogo from "../assets/healthplix.png";
import aicteLogo from "../assets/aicte.png";

/* Education logos */
import ubLogo from "../assets/ub.png";
import vbitLogo from "../assets/vbit.png";

/* Certificates */
import cloudCert from "../assets/cloud.png";
import networkCert from "../assets/networkCert.png";
import pythonCert from "../assets/pythonCert.png";
import awsCert from "../assets/awsCert.png";
import ciscoCert from "../assets/CiscoCert.png";
import oracleCert from "../assets/oracleCert.png";

/* Project imagery */
import aiSreCopilotImg from "../assets/aiSreCopilotImg.png";
import hallucinationDetectionImg from "../assets/hallucinationDetectionImg.png";
import signLanguageImg from "../assets/signLanguageImg.png";
import helmetplateDetectionImg from "../assets/helmetplateDetectionImg.png";
import lyricChordImg from "../assets/lyricChord.png";
import droneRLImg from "../assets/droneRL.png";
import taskflowImg from "../assets/taskflow.png";
import mediaPipelineImg from "../assets/mediaPipeline.png";
import kvStoreImg from "../assets/kvStore.png";
import sqlPlatformImg from "../assets/sqlPlatform.png";
import citibikeImg from "../assets/citibike.png";

import profileImg from "../assets/Profile.png";

import type { CoverVariant } from "../components/ProjectCover";

export const profile = {
  name: "Jyothsna Devi Goru",
  firstName: "Jyothsna Devi",
  lastName: "Goru",
  role: "Software Engineer",
  tagline: "Software Engineer · Distributed Systems · Applied AI",
  location: "United States",
  base: "United States",
  email: "Jyothsnagoru28@gmail.com",
  phone: "+1 716 4006611",
  phoneHref: "tel:+17164006611",
  photo: profileImg,
  intro:
    "Software Engineer dedicated to engineering scalable systems and intelligent products, from high-performance distributed platforms and data pipelines to production-ready AI/ML, generative AI, and agentic applications.",
  roles: [
    "Building Scalable Systems",
    "Designing Real-Time Applications",
    "Working on Cloud and Distributed Systems",
    "Applying AI to Practical Problems",
  ],
};

/** Headline disciplines shown on the hero card */
export const focusAreas = [
  "Distributed Systems",
  "Cloud Native",
  "Applied AI",
  "Real-Time Data",
];

/** The stack shown as a logo strip on the hero card */
export const coreStack = [
  { name: "Python", icon: "python/python-original" },
  { name: "Java", icon: "java/java-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark" },
  { name: "Kubernetes", icon: "kubernetes/kubernetes-original" },
  { name: "Docker", icon: "docker/docker-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "PyTorch", icon: "pytorch/pytorch-original" },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jyothsna-g-b280l602u",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    invert: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/Jyothsna-jgoru",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Jyothsna_G/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    invert: true,
  },
];

export const stats = [
  {
    value: "3+",
    label: "Years experience",
    description:
      "Shipped real-world systems across food-tech, health-tech, and applied AI, which I built and deployed under real production demands.",
  },
  {
    value: "6+",
    label: "Major projects",
    description:
      "Each project tackles a unique problem and was built to combine engineering depth with real-world impact.",
  },
  {
    value: "2",
    label: "Cloud platforms",
    description:
      "Hands-on experience building and deploying production systems on both AWS and Microsoft Azure cloud platforms.",
  },
];

export const about = {
  paragraphs: [
    "I am a Software Engineer who builds backend systems that stay fast, correct, and observable once real traffic arrives. My work has spanned financial services, high-traffic consumer platforms, health-focused operational software, and applied machine learning — environments where latency budgets are tight, data consistency is not negotiable, and an outage is measured in minutes that matter.",
    "What interests me is the part of engineering that becomes invisible when it is done well: clean service boundaries, data models that still make sense a year later, caching that genuinely removes load instead of moving it, and instrumentation that turns a production incident into a short investigation rather than a long one. I would rather ship something maintainable than something merely clever.",
    "Alongside that foundation I have built real depth in applied AI — large language models, retrieval-augmented generation, agentic workflows, transformer architectures, computer vision, and MLOps — and I take those ideas past the notebook into working pipelines. The intersection is where I do my best work: bringing production engineering discipline to AI systems so they are reliable, measurable, and actually useful to the people using them.",
  ],
  focus: [
    {
      title: "Backend & Distributed Systems",
      body: "High-throughput microservices, event-driven communication, polyglot persistence, and caching strategies designed to hold up under production traffic.",
    },
    {
      title: "Cloud & Reliability",
      body: "Cloud-native infrastructure on AWS and Azure with CI/CD gates, automated rollback, structured logging, and end-to-end observability.",
    },
    {
      title: "Applied AI",
      body: "LLM fine-tuning, retrieval-augmented generation, agentic workflows, and computer vision taken from experiment to working pipeline.",
    },
  ],
};

/* ============================================================
   SKILLS — grouped so 70 technologies stay scannable.
   `icon` refers to a devicon path; entries without one are
   rendered with a hand-built SVG from components/TechIcons.tsx
   ============================================================ */

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    blurb: "Core languages I build and debug production code in.",
    skills: [
      { name: "Python", icon: "python/python-original" },
      { name: "Java", icon: "java/java-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "C#", icon: "csharp/csharp-original" },
      { name: "C++", icon: "cplusplus/cplusplus-original" },
      { name: "C", icon: "c/c-original" },
      { name: "SQL" },
    ],
  },
  {
    title: "Backend & APIs",
    blurb: "Service layers, real-time transports, and access control.",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "FastAPI", icon: "fastapi/fastapi-original" },
      { name: "Spring Boot", icon: "spring/spring-original" },
      { name: ".NET", icon: "dotnetcore/dotnetcore-original" },
      { name: "ASP.NET Core", icon: "dot-net/dot-net-original" },
      { name: "Blazor", icon: "blazor/blazor-original" },
      { name: "SignalR" },
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "Server-Sent Events (SSE)" },
      { name: "RBAC" },
      { name: "Microsoft Graph API" },
    ],
  },
  {
    title: "Data & Storage",
    blurb: "Relational, document, and streaming data tuned for read performance.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Redis", icon: "redis/redis-original" },
      { name: "DynamoDB", icon: "dynamodb/dynamodb-original" },
      { name: "Azure Cosmos DB" },
      { name: "Snowflake", icon: "snowflake/snowflake-original" },
      { name: "Apache Kafka" },
      { name: "Apache Spark", icon: "apachespark/apachespark-original" },
      { name: "Hadoop", icon: "hadoop/hadoop-original" },
      { name: "SQL Optimization" },
      { name: "SQL Query-Plan Review" },
      { name: "Indexing" },
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Infrastructure, containers, and delivery pipelines.",
    skills: [
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark" },
      { name: "Microsoft Azure", icon: "azure/azure-original" },
      { name: "Kubernetes", icon: "kubernetes/kubernetes-original" },
      { name: "Docker", icon: "docker/docker-original" },
      { name: "Terraform", icon: "terraform/terraform-original" },
      { name: "Jenkins", icon: "jenkins/jenkins-original" },
      { name: "GitHub Actions", icon: "githubactions/githubactions-original" },
      { name: "Git", icon: "git/git-original" },
      { name: "HPA Autoscaling" },
      { name: "CI/CD Gates" },
      { name: "Automated Rollback" },
      { name: "Release Runbooks" },
    ],
  },
  {
    title: "AI & Machine Learning",
    blurb: "Model training, fine-tuning, and evaluation.",
    skills: [
      { name: "PyTorch", icon: "pytorch/pytorch-original" },
      { name: "scikit-learn", icon: "scikitlearn/scikitlearn-original" },
      { name: "pandas", icon: "pandas/pandas-original" },
      { name: "LLM Fine-Tuning (LoRA)" },
      { name: "NF4 4-bit Quantization" },
      { name: "Mistral-7B" },
      { name: "DistilBERT" },
      { name: "XGBoost" },
      { name: "Random Forest" },
      { name: "SVM" },
      { name: "SMOTE" },
      { name: "Stratified k-Fold Cross-Validation" },
      { name: "Metrics (Accuracy, ROC-AUC, F1)" },
    ],
  },
  {
    title: "Architecture",
    blurb: "How the pieces are arranged so they scale.",
    skills: [
      { name: "Microservices" },
      { name: "Distributed Systems" },
      { name: "Event-Driven Architecture" },
      { name: "Asynchronous Processing" },
      { name: "Caching Strategies" },
      { name: "Polyglot Persistence" },
    ],
  },
  {
    title: "Reliability & Operations",
    blurb: "Keeping systems healthy once they are live.",
    skills: [
      { name: "Observability" },
      { name: "Structured Logging" },
      { name: "Monitoring & Alerting" },
      { name: "Incident Response & On-Call" },
      { name: "Root Cause Analysis (RCA)" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces for the systems behind them.",
    skills: [
      { name: "React.js", icon: "react/react-original" },
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS3", icon: "css3/css3-original" },
    ],
  },
  {
    title: "Quality & Process",
    blurb: "Testing discipline and the way I work with a team.",
    skills: [
      { name: "Unit Testing" },
      { name: "Integration Testing" },
      { name: "JUnit" },
      { name: "SDLC" },
      { name: "Agile Collaboration" },
      { name: "JIRA", icon: "jira/jira-original" },
    ],
  },
];

export const skillCount = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0
);

/* ============================================================
   EXPERIENCE
   ============================================================ */

export interface Experience {
  company: string;
  /** Optional — a monogram tile is rendered when no logo file exists yet */
  logo?: string;
  monogram?: string;
  title: string;
  period: string;
  length: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Capital One",
    monogram: "C1",
    title: "Software Engineer",
    period: "Jan 2026 – Present",
    length: "Current role",
    location: "United States",
    current: true,
    description:
      "Building and maintaining production backend services in a large-scale financial services environment, working across API design, data flows, automated testing, and the release and monitoring practices that keep changes safe to ship.",
    tags: [
      "Backend Services",
      "API Design",
      "Cloud Infrastructure",
      "Automated Testing",
      "CI/CD",
    ],
  },
  {
    company: "Zomato",
    logo: zomatoLogo,
    title: "Software Engineer",
    period: "Aug 2022 – Jul 2024",
    length: "2 years",
    location: "Hyderabad, India",
    description:
      "Engineered high-throughput backend microservices sustaining large-scale production traffic using distributed architecture and event-driven communication. Designed polyglot persistence with intelligent caching layers, optimized read performance, and implemented real-time streaming workflows to ensure low latency and operational resilience.",
    tags: [
      "Microservices",
      "Event-Driven",
      "Polyglot Persistence",
      "Caching",
      "Real-Time Streaming",
    ],
  },
  {
    company: "HealthPlix",
    logo: healthplixLogo,
    title: "Software Engineer",
    period: "Jan 2022 – Jun 2022",
    length: "6 months",
    location: "Remote, India",
    description:
      "Built backend systems for a health-focused operational platform requiring strict data consistency and real-time responsiveness. Designed asynchronous processing pipelines and resilient APIs to support high-availability workflows under peak system load.",
    tags: [
      "Backend Systems",
      "Async Pipelines",
      "Resilient APIs",
      "High Availability",
    ],
  },
  {
    company: "AICTE",
    logo: aicteLogo,
    title: "AI / ML Engineer",
    period: "Mar 2022 – May 2022",
    length: "3 months",
    location: "India",
    description:
      "Developed predictive machine learning pipelines using stratified validation and imbalance handling techniques. Optimized model performance through evaluation-driven tuning and applied advanced learning techniques to improve generalization and minority-class detection.",
    tags: [
      "ML Pipelines",
      "Stratified Validation",
      "Imbalance Handling",
      "Model Tuning",
    ],
  },
];

/* ============================================================
   PROJECTS
   ============================================================ */

export const projectCategories = [
  "All",
  "AI & ML",
  "Systems & Backend",
  "Cloud & Data",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  /** Generated card artwork — see components/ProjectCover.tsx */
  cover: CoverVariant;
  /**
   * The real diagram/screenshot, shown only inside the detail dialog.
   * Optional — the dialog falls back to the generated cover art.
   */
  image?: string;
  summary: string;
  description: string;
  skills: string[];
  highlights?: { value: string; label: string }[];
}

/** Every written-up project. Nothing here is deleted when it is not featured. */
const allProjects: Project[] = [
  {
    title: "AI SRE Copilot",
    category: "AI & ML",
    cover: "agent",
    image: aiSreCopilotImg,
    summary:
      "Agentic incident-diagnosis copilot for microservices that retrieves real evidence before writing a root-cause report.",
    description:
      "Built an AI SRE Copilot to diagnose microservice production incidents using LLMs, RAG, and agentic AI. Used FastAPI as the backend and created 1K+ synthetic logs, Kafka events, deployment records, and runbooks for 50+ simulated incidents such as service timeouts, Kafka consumer lag, deployment regressions, and API failures. Implemented a ChromaDB-based RAG pipeline for evidence retrieval before response generation. Built a planner-executor workflow using LangGraph, OpenAI Agents SDK, and MCP to route tasks like log search, Kafka lookup, deployment checks, and runbook retrieval. Generated structured RCA reports with issue summary, affected service, probable root cause, evidence, suggested fix, rollback recommendation, human-review status, and execution logs.",
    skills: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI Agents SDK",
      "MCP",
      "ChromaDB",
      "RAG",
      "Kafka",
      "LLMs",
      "Agentic AI",
    ],
    highlights: [
      { value: "50+", label: "Simulated incidents" },
      { value: "1K+", label: "Synthetic logs" },
    ],
  },
  {
    title: "LLM Hallucination Detection & Reliability System",
    category: "AI & ML",
    cover: "verify",
    image: hallucinationDetectionImg,
    summary:
      "A second validation layer over GPT-3.5 that catches unsupported answers before they reach the user.",
    description:
      "Built a chatbot reliability system to reduce hallucinated and unsupported answers generated by GPT-3.5. Used constrained prompt engineering so the model answered only from the provided context and handled missing information clearly. Added a RoBERTa classifier as a second validation layer to check whether each generated response was factually supported. Evaluated the system on 1,000 labeled samples and achieved 86.3% hallucination-detection accuracy. The final pipeline reduced unsupported outputs by 40% and improved response reliability by 30% compared with the GPT-3.5 baseline.",
    skills: [
      "Python",
      "GPT-3.5",
      "RoBERTa",
      "Prompt Engineering",
      "NLP",
      "LLM Evaluation",
      "Hallucination Detection",
      "Response Validation",
      "Reliability",
    ],
    highlights: [
      { value: "86.3%", label: "Detection accuracy" },
      { value: "-40%", label: "Unsupported outputs" },
    ],
  },
  {
    title: "GenAI Lyric-to-Chord Generation System",
    category: "AI & ML",
    cover: "agent",
    image: lyricChordImg,
    summary:
      "End-to-end generative pipeline that turns song lyrics into musically coherent chord progressions.",
    description:
      "Built an end-to-end generative AI pipeline that converts song lyrics into musically coherent chord progressions. The system used a fine-tuned DistilBERT model for genre classification, predicting the musical style of input lyrics to condition downstream generation. A Mistral 7B Instruct model was fine-tuned using LoRA/PEFT to generate chord sequences aligned with the predicted genre and lyrical content. The pipeline also included a Streamlit-based interface supporting real-time prediction, chord visualization, MIDI export, and automated evaluation metrics. This project combined natural language understanding with symbolic music generation, bridging the gap between text-based AI and creative music composition workflows.",
    skills: [
      "DistilBERT",
      "Mistral 7B",
      "LoRA/PEFT",
      "Streamlit",
      "NLP",
      "MIDI",
      "Fine-Tuning",
      "Genre Classification",
    ],
  },
  {
    title: "Multi-Agent RL for Drone Delivery",
    category: "AI & ML",
    cover: "agent",
    image: droneRLImg,
    summary:
      "Custom multi-agent environment benchmarking tabular and deep RL methods for cooperative delivery.",
    description:
      "Developed a custom multi-agent drone delivery environment from scratch to study coordination, safe navigation, and shared reward optimization across multiple autonomous agents. The project evaluated a range of tabular reinforcement learning methods including Q-Learning, SARSA, and Double Q-Learning alongside deep reinforcement learning approaches such as DQN and QMIX for cooperative multi-agent coordination. Agents were also benchmarked on PettingZoo's simple_spread_v3 environment, where Dueling Double DQN demonstrated the strongest training stability and convergence behavior. The project provided a practical comparative study of single-agent versus multi-agent decision-making under shared objectives and collision constraints. Insights from the experiments informed strategies for scalable cooperative policy learning in logistics and delivery applications.",
    skills: [
      "Q-Learning",
      "SARSA",
      "DQN",
      "QMIX",
      "Dueling Double DQN",
      "PettingZoo",
      "Python",
      "Multi-Agent RL",
    ],
  },
  {
    title: "Real-Time Sign Language Detection System",
    category: "AI & ML",
    cover: "vision",
    image: signLanguageImg,
    summary:
      "Webcam gesture recognition with hand localization and CNN classification under 120 ms latency.",
    description:
      "Built a real-time sign language detection and gesture recognition system using Python, OpenCV, MediaPipe, image processing, object localization, and CNN-based classification. The system captured webcam or video input, extracted frames, detected the hand region, and localized gestures using bounding boxes, ROI extraction, and MediaPipe hand landmark keypoints. Annotated and validated 1,500+ video frames with frame-level labels, hand-region bounding boxes, keypoint features, and consistency checks to improve training data quality. Trained a CNN model on preprocessed hand crops using resizing, normalization, and augmentation. The final pipeline achieved an 87.4% F1-score with less than 120ms inference latency for real-time gesture recognition.",
    skills: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "CNN",
      "Computer Vision",
      "Gesture Recognition",
      "Image Processing",
      "Object Localization",
      "Real-Time Inference",
    ],
    highlights: [
      { value: "87.4%", label: "F1-score" },
      { value: "<120ms", label: "Inference latency" },
    ],
  },
  {
    title: "AI-Based Helmet & License Plate Detection",
    category: "AI & ML",
    cover: "vision",
    image: helmetplateDetectionImg,
    summary:
      "YOLOv7-tiny traffic safety system that flags helmet violations and reads plate numbers with OCR.",
    description:
      "Built a YOLOv7-tiny based traffic safety detection system to detect helmet violations for two-wheeler riders and license plates for both two-wheelers and four-wheelers. Collected sample traffic videos, extracted frames using OpenCV, and annotated 2,000+ traffic frames across rider, helmet, no-helmet, motorcycle, car, and license plate classes. Trained the model using PyTorch and YOLOv7-tiny, then evaluated it using mAP@0.5, precision, recall, and FPS. Integrated EasyOCR to read license plate numbers from cropped plate regions after YOLO localized the plate. Logged final violation details such as timestamp, vehicle type, helmet status, plate number, confidence score, and evidence frame for review.",
    skills: [
      "Python",
      "YOLOv7-tiny",
      "OpenCV",
      "PyTorch",
      "EasyOCR",
      "Computer Vision",
      "Object Detection",
      "OCR",
      "Image Annotation",
      "Traffic Analytics",
    ],
    highlights: [{ value: "2,000+", label: "Annotated frames" }],
  },
  {
    title: "Real-Time Collaborative Text Editor (CRDT-Based)",
    category: "Systems & Backend",
    cover: "collab",
    summary:
      "Local-first collaborative editor where concurrent edits from many clients converge without locking, built on an op-based sequence CRDT.",
    description:
      "Built a real-time collaborative text editor in C# and .NET, pairing a Blazor WebAssembly client with an ASP.NET Core and SignalR backend so edits apply locally first and synchronise in the background. Implemented an op-based sequence CRDT to resolve concurrent insert and delete operations with idempotent replay, and validated convergence with 20 concurrent clients under offline reconnect and duplicate operations. Persisted an operations log in PostgreSQL on Amazon RDS, and added S3 snapshots with compaction every 10,000 operations to keep replay cost bounded as documents age. Scaled the real-time layer horizontally through a Redis backplane, with Amazon Cognito for authentication and CloudWatch for operational visibility.",
    skills: [
      "C#",
      ".NET",
      "Blazor WASM",
      "ASP.NET Core",
      "SignalR",
      "CRDT",
      "PostgreSQL",
      "Amazon RDS",
      "Amazon S3",
      "Redis",
      "AWS Cognito",
      "CloudWatch",
    ],
    highlights: [
      { value: "20", label: "Concurrent clients" },
      { value: "10K ops", label: "Snapshot & compaction" },
    ],
  },
  {
    title: "TaskFlow Pro — Distributed Productivity Engine",
    category: "Systems & Backend",
    cover: "concurrency",
    image: taskflowImg,
    summary:
      "High-concurrency platform with RBAC and a Redis cache-aside layer, load-tested at 5,000 concurrent users.",
    description:
      "Built a distributed productivity platform designed to handle high-concurrency workloads using React, TypeScript, Node.js, MongoDB, and Redis. The system implemented role-based access control (RBAC) for fine-grained authorization and a cache-aside strategy using Redis to offload hot read paths from the primary database layer. Extensive load testing with Locust at over 5,000 concurrent users validated the system's scalability, showing approximately 30% improvement in P99 API latency under sustained traffic. The architecture followed microservice patterns with clear service boundaries, structured error handling, and retry-safe endpoints. This project demonstrated practical experience in building production-grade backend systems optimized for throughput, consistency, and operational reliability.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "RBAC",
      "Locust",
      "Load Testing",
      "Cache-Aside",
    ],
    highlights: [
      { value: "5,000+", label: "Concurrent users" },
      { value: "~30%", label: "Better P99 latency" },
    ],
  },
  {
    title: "Log-Structured Distributed Key-Value Store",
    category: "Systems & Backend",
    cover: "storage",
    image: kvStoreImg,
    summary:
      "Storage engine built from scratch to explore durability, crash recovery, and leader-follower replication.",
    description:
      "Built a distributed key-value store in Python to explore core concepts of durability, crash recovery, and data replication in distributed storage systems. The storage engine used an append-only write-ahead log for persistent writes and maintained an in-memory hash index for fast point reads, with crash recovery handled by replaying the log from disk on startup. Basic leader-follower replication was implemented to study consistency behavior during normal operation and validated through controlled failover scenarios. Stress testing confirmed the system could sustain over 10,000 operations per second on a single node while maintaining data integrity across restarts. This project served as a deep exploration of storage internals, replication protocols, and the trade-offs between durability, availability, and write throughput in distributed data systems.",
    skills: [
      "Python",
      "Append-Only Log",
      "Crash Recovery",
      "Replication",
      "Leader-Follower",
      "Distributed Systems",
      "Stress Testing",
    ],
    highlights: [{ value: "10K+", label: "Ops / sec, single node" }],
  },
  {
    title: "Cloud-Native Automated Media Pipeline",
    category: "Cloud & Data",
    cover: "pipeline",
    image: mediaPipelineImg,
    summary:
      "Event-driven AWS pipeline that decouples upload ingestion from processing, with tracing across retries.",
    description:
      "Designed and implemented an event-driven media processing pipeline on AWS using S3, Lambda, API Gateway, Docker, and CloudWatch to handle file uploads and transformations at scale. The system decoupled upload ingestion from processing, allowing user-facing requests to remain lightweight while backend media transformations scaled automatically with demand through serverless compute. Structured logging was integrated across all Lambda functions with correlation IDs to enable end-to-end tracing across retries, failures, and asynchronous workflows. CloudWatch dashboards and custom alarms were configured to provide real-time visibility into pipeline health, error rates, and processing latency. This project strengthened practical skills in serverless architecture, event-driven design, and production-grade observability for cloud-native systems.",
    skills: [
      "AWS S3",
      "Lambda",
      "API Gateway",
      "Docker",
      "CloudWatch",
      "Event-Driven",
      "Serverless",
      "Observability",
    ],
  },
  {
    title: "Distributed Workload Benchmarking with Spark & Hadoop",
    category: "Cloud & Data",
    cover: "compute",
    summary:
      "Three very different workloads implemented on Spark and Hadoop and measured against a multiprocessing baseline — a 20x speedup at 100K+ inputs.",
    description:
      "Built and benchmarked large-scale data processing pipelines across three deliberately different workloads — edit distance computation, MLP inference, and agent-based simulation — using Apache Spark and Hadoop. Each workload was implemented and then measured against a Python multiprocessing baseline on datasets of 100,000+ inputs, driven by CLI tooling so the comparisons could be re-run consistently. The distributed implementations reached roughly a 20x speedup over the multiprocessing baseline, and running the same three workload shapes side by side showed how partitioning and coordination costs land differently depending on the work being distributed.",
    skills: [
      "Python",
      "Apache Spark",
      "Hadoop",
      "Distributed Computing",
      "CLI Tools",
      "Benchmarking",
      "Edit Distance",
      "MLP Inference",
      "Agent-Based Simulation",
    ],
    highlights: [
      { value: "20x", label: "Over multiprocessing" },
      { value: "100K+", label: "Input records" },
    ],
  },
  {
    title: "Citi Bike Demand Forecasting Pipeline",
    category: "Cloud & Data",
    cover: "forecast",
    image: citibikeImg,
    summary:
      "Automated MLOps pipeline forecasting trip demand, from ingestion through feature store to dashboards.",
    description:
      "Built an end-to-end machine learning pipeline for forecasting Citi Bike trip demand using 2024 Jersey City trip data. The system automated raw data ingestion, cleaning, top-station selection, and 28 day lag-based feature engineering for time-series modeling. Integrated Hopsworks for feature storage, model registration, and batch inference workflows. Added GitHub Actions for automated pipeline execution and Streamlit dashboards for prediction visualization and model monitoring. This project combined data engineering, MLOps, and forecasting to deliver a production-style mobility analytics system.",
    skills: [
      "Python",
      "Pandas",
      "LightGBM",
      "Hopsworks",
      "Streamlit",
      "GitHub Actions",
      "SQL",
      "Feature Engineering",
      "Time Series",
      "Model Registry",
    ],
  },
  {
    title: "Containerized Relational Data Platform",
    category: "Cloud & Data",
    cover: "storage",
    image: sqlPlatformImg,
    summary:
      "Reproducible PostgreSQL analytics environment tuned through indexing and query-plan analysis.",
    description:
      "Developed a fully containerized relational data platform focused on structured storage, schema design, and high-performance analytical querying using PostgreSQL and Docker. The project involved designing normalized relational schemas, building complex SQL queries for multi-dimensional analytics, and optimizing query execution through indexing strategies and query-plan analysis. Docker Compose was used to orchestrate the database environment, enabling reproducible local development and testing workflows without external infrastructure dependencies. The platform processed and queried large datasets efficiently, demonstrating practical improvements in read performance through targeted indexing and schema refinement. This project reinforced core competencies in relational data modeling, SQL optimization, and container-based deployment patterns for data-intensive applications.",
    skills: [
      "PostgreSQL",
      "SQL Analytics",
      "Docker",
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Docker Compose",
    ],
  },
];

/**
 * The projects shown on the site, in display order.
 *
 * To reorder, move a line. To swap a project in or out, change a
 * title — anything left out stays written up in `allProjects` and
 * is simply not rendered. Keep this list around seven entries: a
 * short, strong set reads better than a long one.
 */
const FEATURED_ORDER = [
  "AI SRE Copilot",
  "Real-Time Collaborative Text Editor (CRDT-Based)",
  "TaskFlow Pro — Distributed Productivity Engine",
  "Log-Structured Distributed Key-Value Store",
  "Distributed Workload Benchmarking with Spark & Hadoop",
  "Citi Bike Demand Forecasting Pipeline",
  "LLM Hallucination Detection & Reliability System",
  "AI-Based Helmet & License Plate Detection",
];

export const projects: Project[] = FEATURED_ORDER.map((title) =>
  allProjects.find((project) => project.title === title)
).filter((project): project is Project => Boolean(project));

/* ============================================================
   EDUCATION
   ============================================================ */

export interface Education {
  institution: string;
  logo: string;
  field: string;
  period: string;
  location: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    institution: "University at Buffalo",
    logo: ubLogo,
    field: "Master's in Engineering Science (Artificial Intelligence)",
    period: "Aug 2024 – Dec 2025",
    location: "Buffalo, NY",
    coursework: [
      "Design and Analysis of Algorithms",
      "Data Models and Query Languages",
      "Data Intensive Computing",
      "Applied Machine Learning",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Pattern Recognition",
    ],
  },
  {
    institution: "Vignana Bharathi Institute of Technology",
    logo: vbitLogo,
    field: "Bachelor of Technology in Computer Science and Engineering",
    period: "2019 – 2023",
    location: "Hyderabad, India",
    coursework: [
      "Object Oriented Programming through Java",
      "Data Structures",
      "Computer Organization",
      "Computer Networks",
      "Compiler Design",
      "Software Engineering",
      "Data Analytics",
      "Disaster Management",
      "Machine Learning",
      "Data Mining",
      "Cloud Computing",
      "Human Computer Interaction",
    ],
  },
];

/* ============================================================
   CERTIFICATIONS
   ============================================================ */

export const certifications = [
  { title: "Cloud Computing Certification", img: cloudCert },
  { title: "Computer Networking Certification", img: networkCert },
  { title: "Python Programming Certification", img: pythonCert },
  { title: "AWS Cloud Certification", img: awsCert },
  { title: "Cisco Networking Certification", img: ciscoCert },
  { title: "Oracle Database Certification", img: oracleCert },
];

/* ============================================================
   NAVIGATION
   ============================================================ */

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
