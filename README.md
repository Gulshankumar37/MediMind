# 🏥 MediMind AI – AI-Powered Medical Report Explainer

MediMind AI is a full-stack web application that uses Artificial Intelligence to analyze medical reports and explain complex medical terminology in simple English.

Users can upload their medical reports in PDF format and receive AI-generated summaries, explanations of test results, and general lifestyle recommendations.

The platform also allows users to securely manage their uploaded medical reports through a personalized dashboard.

> **Disclaimer:** MediMind AI is an informational tool, not a substitute for professional medical advice, diagnosis, or treatment.

---

## ✨ Features

- 🔐 **User Authentication** – Secure user registration and login using JWT and HTTP-only cookies.
- 📄 **PDF Upload** – Upload medical reports in PDF format.
- 🤖 **AI-Powered Analysis** – Uses Google Gemini AI to analyze medical reports.
- 📊 **Medical Report Explanation** – Explains medical test results in simple English.
- 💡 **Health Recommendations** – Provides general lifestyle and wellness recommendations.
- 📁 **Report Dashboard** – View all previously uploaded medical reports.
- 🔍 **Report Details** – View extracted PDF text and AI-generated analysis.
- 🗑️ **Delete Reports** – Delete previously uploaded reports.
- 🎨 **Modern UI** – Responsive and animated user interface built with React and Tailwind CSS.
- 🔒 **Protected Routes** – Restricts access to authenticated users.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios
- React Markdown

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Multer
- PDF Parser

### AI Integration
- Google Gemini API
- `@google/genai`
- Gemini Flash Model

---

## 📂 Project Structure

```text
MediMind/
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── gemini.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── reportController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Report.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── reportRoutes.js
│   │
│   ├── services/
│   │   └── aiServices.js
│   │
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── UploadReport.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── ReportDetails.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Gulshankumar37/MediMind.git

cd MediMind
```

### 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend directory.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run dev
```

Or, if you do not have a development script:

```bash
node server.js
```

Backend runs at:

```text
http://localhost:3000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend

npm install
```

Configure the API base URL in `src/services/api.js`:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});

export default api;
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| PORT | Backend server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT authentication |
| GEMINI_API_KEY | Google Gemini API key |

Get your Gemini API key from:

https://aistudio.google.com/app/apikey

**Important:** Never commit your `.env` file or expose your API keys on GitHub.

---

## 🔗 API Endpoints

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/logout` | Logout user |
| GET | `/api/auth/current` | Get current authenticated user |

### Medical Report APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/report/upload` | Upload and analyze a PDF |
| GET | `/api/report/all` | Get all user reports |
| GET | `/api/report/:id` | Get a specific report |
| DELETE | `/api/report/:id` | Delete a report |

*All report endpoints require authentication.*

---

## 🤖 How It Works

1. User registers or logs into MediMind AI.
2. User uploads a medical report in PDF format.
3. Backend receives the PDF using Multer.
4. PDF text is extracted using a PDF parsing library.
5. Extracted text is sent to Google Gemini AI.
6. Gemini analyzes the report and generates:
   - Medical Report Summary
   - Test Results
   - Recommendations
   - Disclaimer
7. The extracted text and AI-generated summary are stored in MongoDB.
8. The user can view, manage, and delete reports from the dashboard.

---

## 🚀 Deployment

The application can be deployed using:

- **Backend:** Render
- **Frontend:** Vercel
- **Database:** MongoDB Atlas

### Backend Deployment
1. Push the backend code to GitHub.
2. Create a new Web Service on Render.
3. Configure the build and start commands.
4. Add environment variables in Render.
5. Deploy the backend.

### Frontend Deployment
1. Import the GitHub repository into Vercel.
2. Set the frontend root directory.
3. Configure the production API URL.
4. Deploy the frontend.
5. Configure backend CORS to allow the deployed frontend origin.

Make sure cookie settings support cross-origin production requests (`secure: true` and `sameSite: "none"` when using cross-site cookies).

---

## 🔮 Future Enhancements

- 📈 Medical report analytics and visual charts.
- 📑 Download AI-generated analysis as PDF.
- 🩺 AI-based symptom checker.
- 📅 Medical history tracking.
- 📊 Compare previous medical reports.
- 🌐 Multi-language medical report explanations.
- 💬 AI-powered medical assistant chatbot.

---

## 👨‍💻 Author

**Gulshan Kumar**

GitHub: https://github.com/Gulshankumar37

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

---

**Built with ❤️ using MERN Stack and Google Gemini AI.**
