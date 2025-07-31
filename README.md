# Freelance Project Manager Dashboard

A modern and interactive dashboard for freelancers to manage and visualize their client projects efficiently. This application allows users to track projects by client, status, amount, and date — all from a user-friendly interface with support for dark and light themes.

---

## ✨ Features

- ✅ **Add New Projects**  
  Easily add projects with:
  - Client Name  
  - Project Name  
  - Amount  
  - Date  
  - Status (Completed or Pending)

- 🔐 **User Authentication (Firebase)**  
  - Sign up and login functionality using Firebase Authentication  
  - Each user's project data is securely stored in their own session

- 📈 **Line Chart Overview**  
  - Visualize completed projects over time for performance tracking

- 🥧 **Pie Chart Breakdown**  
  - Displays the ratio of completed vs. pending projects

- 🕒 **Recent Projects Section**  
  - View your latest project entries at a glance

- 📊 **Reports Section**  
  - Total number of projects  
  - Number of completed and pending projects  
  - Client-wise amount distribution (using bar chart)  
  - Percentage contribution by each client (using doughnut/pie chart)

- 🌗 **Dark & Light Mode Support**  
  - Toggle between themes for personalized viewing

---


---

## 💾 Data Storage

- By default, **all project data is stored in LocalStorage**, ensuring persistence across sessions.
- A **"Clear Data"** option in the settings allows resetting all local stats and storage.
- If Firebase integration is fully connected, user-based data can be stored and fetched securely from Firestore (optional for future enhancement).

---

## 🔧 Technologies Used

- **React.js** – Frontend framework  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **React Router** – Routing between pages  
- **React Context API** – State management  
- **Lucide Icons** – Clean and scalable icons  
- **Chart.js** or **Recharts** – For visualizing charts (line, pie, bar, doughnut)  
- **React Hot Toast** – For elegant notification popups  
- **Firebase** – Authentication and (optionally) cloud storage for user data

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/your-username/freelance-project-dashboard.git
cd freelance-project-dashboard
npm install
npm run dev


🙋‍♂️ Author
Built by Muhammad Waleed – Frontend React Js Web Developer
📧 waleedeveloper100@gmail.com
🌐 https://personal-react-js-portfolio-website.vercel.app/


