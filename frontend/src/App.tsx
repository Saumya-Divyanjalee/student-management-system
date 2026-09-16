import React, { useEffect, useState } from "react";
import "./App.css";
import { Student } from "./types/student";
import { getStudents, createStudent, updateStudent, deleteStudent } from "./services/api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [viewingStudent, setViewingStudent] = useState<Student | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadStudents = async (query?: string) => {
    setLoading(true);
    try {
      const res = await getStudents(query);
      setStudents(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load students. Is the backend running on port 8080?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAddClick = () => {
    setEditingStudent(null);
    setShowForm(true);
    setViewingStudent(null);
  };

  const handleEditClick = (student: Student) => {
    setEditingStudent(student);
    setShowForm(true);
    setViewingStudent(null);
  };

  const handleFormSubmit = async (student: Student) => {
    try {
      if (editingStudent && editingStudent.id) {
        await updateStudent(editingStudent.id, student);
      } else {
        await createStudent(student);
      }
      setShowForm(false);
      setEditingStudent(null);
      setError("");
      loadStudents();
    } catch (err: any) {
      const backendMsg = err?.response?.data?.error;
      setError(backendMsg || "Failed to save student.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await deleteStudent(id);
      loadStudents();
    } catch (err) {
      setError("Failed to delete student.");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadStudents(search);
  };

  return (
      <div className="app-shell">
        <div className="app-header">
          <div>
            <h1>Student Management System</h1>
            <p>{students.length} student{students.length !== 1 ? "s" : ""} registered</p>
          </div>
          <button className="btn btn-primary" onClick={handleAddClick}>+ Add Student</button>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSearch} className="toolbar">
          <input
              className="search-input"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-ghost">Search</button>
          <button
              type="button"
              className="btn btn-ghost"
              onClick={() => { setSearch(""); loadStudents(); }}
          >
            Reset
          </button>
        </form>

        {showForm && (
            <StudentForm
                initialData={editingStudent}
                onSubmit={handleFormSubmit}
                onCancel={() => setShowForm(false)}
            />
        )}

        {viewingStudent && (
            <StudentDetail student={viewingStudent} onClose={() => setViewingStudent(null)} />
        )}

        {loading ? (
            <div className="empty-state">Loading...</div>
        ) : (
            <StudentList
                students={students}
                onView={setViewingStudent}
                onEdit={handleEditClick}
                onDelete={handleDelete}
            />
        )}
      </div>
  );
};

export default App;