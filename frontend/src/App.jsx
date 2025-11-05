import react from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./assets/styles/global.css";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";
import InvoicesPage from "./pages/InvoicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/invoices" element={<InvoicesPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/clients" element={<ClientsPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
