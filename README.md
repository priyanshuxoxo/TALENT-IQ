# TalentIQ – One-to-One Interview Practice Platform

TalentIQ is a MERN stack–based one-to-one interview platform that enables users to practice technical interviews through real-time video calls and a collaborative coding environment. The platform integrates Clerk for authentication, Stream for video calling, and Piston API for live code execution. All services are synchronized using webhooks to ensure seamless session management.

---

## 🚀 Features

- 🔐 Secure authentication using **Clerk**
- 🎥 Real-time 1:1 video interviews using **Stream**
- 👥 Maximum 2 participants per session (Host + Candidate)
- 🧑‍💻 Integrated **Code Editor** with live execution via **Piston API**
- 📅 Host can create interview sessions
- 🔁 Webhook-based synchronization between **Clerk, Stream, and MongoDB**
- 🗄️ Centralized data storage using **MongoDB**
- 💻 Solo coding practice mode (without joining a session)
- ⚡ Real-time session updates

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Clerk Authentication  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Webhooks  

### Third-Party Services
- **Clerk** – Authentication  
- **Stream** – Video Calling  
- **Piston API** – Code Execution  

---

## 🧠 How It Works

1. Users sign up/login using **Clerk**
2. Host creates an interview session
3. Stream generates a secure video room
4. Webhooks sync user + session data with MongoDB
5. Candidate joins the session (max 2 users)
6. Both users access a live code editor
7. Code is executed using **Piston API**
8. Session ends and data is stored

---

## 📂 Project Structure

TalentIQ/
│
├── client/ # React frontend
├── server/ # Node + Express backend
├── models/ # MongoDB schemas
├── routes/ # API routes
├── webhooks/ # Clerk & Stream webhook handlers
└── utils/ # Helper functions


---

## 🔑 Environment Variables

MONGO_URI=
CLERK_SECRET_KEY=
STREAM_API_KEY=
STREAM_SECRET=
PISTON_API_URL=


## ▶️ Run Locally

### Backend
```bash
cd server
npm install
npm start
### frontend
cd client
npm install
npm run dev
```
