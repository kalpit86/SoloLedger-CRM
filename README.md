# SoloLedger CRM  
*A simple, minimalistic yet powerful CRM for freelancers, agencies, and small startups.*

---

## 🧭 Overview  
**SoloLedger CRM** helps freelancers and small teams manage clients, projects, and invoices in a lightweight yet robust way.  
It’s faster to set up than enterprise CRMs and more structured than a spreadsheet — designed for speed, clarity, and focus.
SoloLedger emphasizes clean code, modular design, and modern best practices.

---

## 🛠️ Tech Stack  

### Backend  
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose ODM**  
- **JWT Authentication**  
- **bcrypt** for password encryption  
- **dotenv** for environment variables  

### Frontend  
- **React.js (Vite)**  
- **Tailwind CSS** for styling  
- **Axios** for API calls  
- (🧩 *Planned: TypeScript migration for better scalability and type safety*)  

### Dev Tools  
- **Nodemon** for local development  
- **ESLint / Prettier** for consistent code style   
- **GitHub Actions** (planned CI setup)

---

## ✨ Features  
- Secure authentication (JWT + bcrypt)  
- CRUD operations for clients, projects, invoices, and leads  
- Dashboard with project metrics and upcoming payments  
- Responsive and minimal UI (Tailwind + React)  
- Modular Express + Mongoose backend structure  
- Scalable codebase ready for TypeScript refactor  
- Role-based access control *(planned)*  
- Export data and analytics *(planned)*  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js (v16+)  
- MongoDB (local or Atlas cluster)  
- npm or yarn  

---

### Installation  

```bash
# Clone the repo
git clone https://github.com/kalpit86/SoloLedger-CRM.git
cd SoloLedger-CRM

# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
