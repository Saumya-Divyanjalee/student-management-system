import axios from "axios";
import { Student } from "../types/student";

const API_BASE = "http://localhost:8080/api/students";

export const getStudents = (search?: string) =>
  axios.get<Student[]>(API_BASE, { params: search ? { search } : {} });

export const getStudent = (id: number) =>
  axios.get<Student>(`${API_BASE}/${id}`);

export const createStudent = (student: Student) =>
  axios.post<Student>(API_BASE, student);

export const updateStudent = (id: number, student: Student) =>
  axios.put<Student>(`${API_BASE}/${id}`, student);

export const deleteStudent = (id: number) =>
  axios.delete(`${API_BASE}/${id}`);
