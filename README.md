
# 🧠 Amifit: AI-Powered Smart Fitness Assistant

![Amifit Banner](./Amifit%20Banner.png)

> A Hybrid AI-based System for Exercise Recognition, Posture Evaluation, and Real-Time Feedback

---

## 📌 Project Overview

**Amifit** is an intelligent fitness assistant built using Artificial Intelligence and advanced computer vision. It recognizes exercises, evaluates posture, counts repetitions, and delivers corrective feedback — all in real time through your webcam. This hybrid approach merges vision-based models with ML-based logic to create a smart, accessible fitness tracking solution.

🧪 **Tech Domains:** AI, Human Pose Estimation, ML, Fitness Tech  
🛠️ **Stack:** React + Tailwind + Vite (Frontend) | Express.js + Python + MediaPipe (Backend)

🔗 **Frontend Live**: [amifitntcc.netlify.app](https://amifitntcc.netlify.app)

---

## 🎯 Key Features

- 📸 Real-Time Exercise Recognition (Squats, Pushups, Lunges)
- 🏃 Posture Detection via BlazePose & OpenPose
- 🔁 Accurate Repetition Counter using Angle Thresholds
- 💬 Instant Feedback via Text, Audio, and Visual Overlays
- 📊 Performance Analysis Dashboard
- 🌐 Cloud Sync for user history and personalization

---

## 🧠 System Architecture

```

📷 Camera Input / 🎯 IMU Sensors
│
▼
🧍 Pose Estimation (BlazePose / OpenPose)
│
▼
🧹 Data Preprocessing & Normalization
│
▼
🧠 AI Engine (CNN, LSTM, DTW)
│
▼
🎯 Posture & Rep Evaluation
│
├── 📈 Dashboard Metrics
└── 🗣️ Real-Time Feedback

```

✅ **AI Models**:  
- BlazePose (33 keypoints) for real-time joint tracking  
- CNNs and LSTMs for activity classification  
- DTW for motion matching

📚 **Reference Techniques**:  
- Dynamic Joint Angle Calculation  
- Stage Detection with FSM Logic  
- Motion Vector Analysis  
- Confidence Filtering on Keypoints

---

## 💡 Use Cases

| Area              | Target Users        | Benefit                                |
|------------------|---------------------|----------------------------------------|
| 💪 Fitness        | Home Users, Athletes | Form correction & rep counting         |
| 🧘‍♂️ Rehabilitation | Physiotherapists     | Safe remote posture monitoring         |
| 🏅 Sports Coaching | Coaches & Players   | Advanced motion and fatigue analysis   |
| 👴 Elderly Care    | Seniors, Caregivers | Slow movement tracking & fall alerts   |
| 🧑‍⚕️ Tele-health     | Remote Doctors       | Real-time supervised physiotherapy     |

---

## 🔗 Repository

📁 GitHub: [BhanuPrakashPandey0843/Amifit](https://github.com/BhanuPrakashPandey0843/Amifit.git)

```

├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── main.jsx
├── backend/
│   ├── index.js
│   └── ml/
│       └── postureEvaluator.py

```

---

## ⚙️ Technologies Used

### 👩‍🎨 Frontend
- React (Vite)
- Tailwind CSS
- Netlify (Deployment)

### 🔧 Backend
- Express.js (Node.js)
- Python (MediaPipe, BlazePose)
- Machine Learning Models (CNN, LSTM, k-NN)

### 🧰 Tools & APIs
- MediaPipe Pose / OpenPose
- Dynamic Time Warping (DTW)
- Real-time canvas rendering
- Cloud integration for persistence

---

## 📖 Documentation

📄 Full Project Report: [Amifit Documentation.pdf](./Amifit%20Documentation.pdf)  
📊 Plagiarism Check (Turnitin): [Plag report Amifit.pdf](./Plag%20report%20Amifit.pdf)  
📽️ Presentation: [Amifit.pptx](./Amifit.pptx)

---



## 🛡️ License

This project is created for academic purposes under Amity University NTCC Submission.  
All content is original and complies with ethical AI development practices.

---

## 👨‍💻 Author

**Bhanu Prakash Pandey**  
B.Tech (CSE), Amity University  
📧 Email: [bhanupandey0843@gmail.com]  
🌐 GitHub: [github.com/BhanuPrakashPandey0843](https://github.com/BhanuPrakashPandey0843)


---

> “Train smarter, not harder — with AI at your side.” 💪🤖

