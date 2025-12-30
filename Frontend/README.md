# 🌐 Get In Touch – Contact Website

A modern and responsive **Get In Touch** website that allows users to easily connect with us by submitting their **name, mobile number, and email address**.  
All submitted data is stored securely and updated **live in Google Sheets**.

---

## 🚀 Live Demo

🔗 **Deployed Website:**  
👉 https://skylish.vercel.app/
---

## 🚀 Features

- 📱 Fully responsive (mobile & desktop)
- 🎨 Clean and modern UI using Tailwind CSS
- 🖼️ Full-screen background with dark overlay
- 🧾 Simple contact form (Name, Mobile, Email)
- ☁️ Google Sheets integration (no backend server needed)
- ⚡ Built with React + Vite
- 🔒 Secure & spam-free data collection

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Backend:** Google Apps Script
- **Database:** Google Sheets
- **Deployment:** Vercel

---

## 📝 How It Works

1. User enters:
   - Full Name
   - Mobile Number
   - Email Address
2. On submission:
   - Data is sent via POST request
   - Google Apps Script receives the data
   - Data is appended to a connected Google Sheet with timestamp
3. User gets a success confirmation message

---

## 📂 Project Structure

Frontend/
├── src/
│ ├── assets/
│ │ └── bg.jpg
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
├── package.json
├── vite.config.js
└── index.html



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd Frontend

npm install

npm run dev

```



☁️ Google Sheets Setup

Create a Google Sheet with columns:

Name | Mobile | Email | Timestamp


Create a Google Apps Script Web App

Deploy settings:

Execute as: Me

Who has access: Anyone

Use the generated /exec URL in the frontend
