import React from "react";
import { Student } from "../types/student";

interface Props {
    student: Student;
    onClose: () => void;
}

const StudentDetail: React.FC<Props> = ({ student, onClose }) => {
    return (
        <div className="card">
            <h3 style={{ marginTop: 0 }}>Student Detail — #{student.id}</h3>
            <div className="detail-grid">
                <div className="detail-item"><label>First Name</label><span>{student.first_name}</span></div>
                <div className="detail-item"><label>Last Name</label><span>{student.last_name}</span></div>
                <div className="detail-item"><label>Email</label><span>{student.email}</span></div>
                <div className="detail-item"><label>Age</label><span>{student.age}</span></div>
                <div className="detail-item"><label>Course</label><span>{student.course || "—"}</span></div>
                <div className="detail-item"><label>Phone</label><span>{student.phone || "—"}</span></div>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={onClose}>Close</button>
        </div>
    );
};

export default StudentDetail;