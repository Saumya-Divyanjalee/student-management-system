import React from "react";
import { Student } from "../types/student";

interface Props {
  students: Student[];
  onView: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, onView, onEdit, onDelete }) => {
  if (students.length === 0) {
    return <div className="empty-state">No students found. Try adding one.</div>;
  }

  return (
      <table className="student-table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {students.map((s) => (
            <tr key={s.id}>
              <td>#{s.id}</td>
              <td>{s.first_name} {s.last_name}</td>
              <td>{s.email}</td>
              <td>{s.course ? <span className="badge">{s.course}</span> : "—"}</td>
              <td className="actions-cell">
                <button className="btn btn-ghost btn-sm" onClick={() => onView(s)}>View</button>
                <button className="btn btn-ghost btn-sm" onClick={() => onEdit(s)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => s.id && onDelete(s.id)}>Delete</button>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default StudentList;