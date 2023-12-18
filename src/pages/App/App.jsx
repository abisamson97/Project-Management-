import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import TaskPage from "../TaskPage/TaskPage";
import ProjectListPage from "../ProjectListPage/ProjectListPage";
import ProjectCreatePage from "../ProjectCreatePage/ProjectCreatePage";
import ProjectShowPage from "../ProjectShowPage/ProjectShowPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/projects/:id" element={<ProjectShowPage />} />
            <Route path="/projects/create" element={<ProjectCreatePage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
