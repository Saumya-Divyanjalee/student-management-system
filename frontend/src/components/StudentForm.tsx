import React, { useState, useEffect } from "react";
import { Student } from "../types/student";

interface Props {
    initialData?: Student | null;
    onSubmit: (student: Student) => void;
    onCancel: () => void;
}

const emptyStudent: Student = {
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    course: "",
    phone: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const StudentForm: React.FC<Props> = ({ initialData, onSubmit, onCancel }) => {
    const [form, setForm] = useState<Student>(initialData || emptyStudent);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        setForm(initialData || emptyStudent);
        setErrors({});
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "age" ? (value === "" ? 0 : Number(value)) : value,
        }));
    };

    const validate = (): boolean => {
        const next: Record<string, string> = {};
        if (!form.first_name.trim()) next.first_name = "First name is required";
        if (!form.last_name.trim()) next.last_name = "Last name is required";
        if (!emailRegex.test(form.email)) next.email = "Enter a valid email address";
        if (!form.age || form.age <= 0) next.age = "Age must be greater than 0";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <h3 style={{ marginTop: 0 }}>{initialData ? "Edit Student" : "Add Student"}</h3>

            <div className="form-grid">
                <div className="form-field">
                    <label>First Name</label>
                    <input className="form-input" name="first_name" value={form.first_name} onChange={handleChange} />
                    {errors.first_name && <span className="field-error">{errors.first_name}</span>}
                </div>

                <div className="form-field">
                    <label>Last Name</label>
                    <input className="form-input" name="last_name" value={form.last_name} onChange={handleChange} />
                    {errors.last_name && <span className="field-error">{errors.last_name}</span>}
                </div>

                <div className="form-field">
                    <label>Email</label>
                    <input className="form-input" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-field">
                    <label>Age</label>
                    <input className="form-input" name="age" type="number" value={form.age || ""} onChange={handleChange} />
                    {errors.age && <span className="field-error">{errors.age}</span>}
                </div>

                <div className="form-field">
                    <label>Course</label>
                    <input className="form-input" name="course" value={form.course} onChange={handleChange} />
                </div>

                <div className="form-field">
                    <label>Phone</label>
                    <input className="form-input" name="phone" value={form.phone} onChange={handleChange} />
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {initialData ? "Update Student" : "Add Student"}
                </button>
                <button type="button" className="btn btn-ghost" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default StudentForm;