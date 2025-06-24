import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        setError("Error al obtener tareas");
      }
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", newTask);
      setNewTask({ title: "", description: "" });
      fetchTasks();
    } catch {
      setError("Error al crear tarea");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch {
      setError("Error al eliminar tarea");
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await API.put(`/tasks/${id}`, { status: newStatus });
      fetchTasks();
    } catch {
      setError("Error al actualizar tarea");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const statusOptions = ["pendiente", "en progreso", "completada"];

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>Mis Tareas</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <br />
        <textarea
          placeholder="Descripción"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <br />
        <button type="submit">Agregar Tarea</button>
      </form>

      <hr />

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <select
            value={task.status}
            onChange={(e) => handleUpdateStatus(task._id, e.target.value)}
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleDeleteTask(task._id)}
            style={{ marginLeft: "10px" }}
          >
            Eliminar
          </button>
        </div>
      ))}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Tasks;
