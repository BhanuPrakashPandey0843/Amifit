#  Amifit – AI-Powered Fitness & Posture Recognition System

![Amifit Banner](./Amifit%20Banner.png)

> "Train smarter, not harder — with AI by your side."  
> **Amifit** is a hybrid AI fitness assistant that recognizes exercises, analyzes posture, counts reps, and gives live feedback — all from your webcam.

---

## 🌐 Live Frontend Demo

🚀 Try it now: [https://amifitntcc.netlify.app](https://amifitntcc.netlify.app)

---

## 📌 Project Summary

**Amifit** is an AI-driven posture and exercise recognition system developed as a major B.Tech project. It uses:
- **Pose Estimation** (BlazePose/OpenPose)
- **Dynamic Angle Calculations**
- **Repetition Detection**
- **Real-Time Feedback Overlay**

### 👨‍💻 Built With:
- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express + Python (for ML models)
- **AI Models**: BlazePose, k-NN, DTW, CNN, LSTM

---

## 🎯 Key Features

- 🔍 Real-Time Posture Detection
- 🔁 Repetition Counter (Squats, Push-ups, etc.)
- 📈 Joint Angle Analysis
- 🧠 Pose Correction Feedback
- 📊 Fitness Dashboard (Frontend)
- 🌍 Works with webcams – no wearables required

---

## ⚙️ How to Clone & Run Locally

### 🔁 Clone the Repo

```bash
git clone https://github.com/BhanuPrakashPandey0843/Amifit.git
cd Amifit
````

---

### 🧩 Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173`

---

### 🖥️ Backend Setup (`/backend`)

```bash
cd backend
npm install
node index.js
```

Runs on: `http://localhost:5000`

---

## 📁 Backend Folder Structure

```
/backend
├── counter/                # Session and rep tracking data
├── node_modules/           # Node dependencies
├── index.js                # Express backend entry point
├── package.json            # Backend project config
├── package-lock.json       # Dependency lock
```

> 🔗 Python integration is used for AI models via `child_process` to run BlazePose + classification scripts.

---

## 🧠 AI Methodology

* 📌 **BlazePose**: 33 body keypoints (x, y, z) from webcam
* 📐 **Angle Calculations**: Between joints for posture check
* 🔁 **Repetition Logic**: Based on state changes in angles
* 🧠 **k-NN & DTW**: Pattern matching for correct motion
* ⚡ **Real-time Feedback**: Alerts like "Straighten back", "Complete squat"

---

## 💡 Real-World Applications

| Domain      | Use Case                           |
| ----------- | ---------------------------------- |
| 💪 Fitness  | At-home workouts, online classes   |
| 🏃 Rehab    | Physiotherapy recovery guidance    |
| 🎮 Gamified | Smart mirrors, VR fitness          |
| 🧘 Yoga     | Posture and alignment corrections  |
| 👵 Elderly  | Fall detection, balance assistance |

---

## 📂 Project Files

* 📄 [Amifit Documentation.pdf](./Amifit%20Documentation.pdf) – Full project write-up
* 📊 [Plag Report Amifit.pdf](./Plag%20report%20Amifit.pdf) – Turnitin originality report
* 🎥 [Amifit.pptx](./Amifit.pptx) – Presentation slides



---

## 👨‍💻 Author

**Bhanu Prakash Pandey**
🎓 B.Tech CSE (2021-25)
🔗 GitHub: [BhanuPrakashPandey0843](https://github.com/BhanuPrakashPandey0843)

---

## 🛡 License

This project is part of an academic submission. Intended for research, learning, and demonstration purposes only.

---

## 📬 Contact

If you wish to collaborate, improve, or demo this system in your organization, feel free to reach out via [GitHub issues](https://github.com/BhanuPrakashPandey0843/Amifit/issues).

---
