package services

import (
	"errors"

	"student-management-system/models"
	"student-management-system/repositories"
)

func GetAllStudents() ([]models.Student, error) {
	return repositories.GetAllStudents()
}

func GetStudentByID(id uint) (models.Student, error) {
	return repositories.GetStudentByID(id)
}

func CreateStudent(student models.Student) (models.Student, error) {
	if student.Age <= 0 {
		return models.Student{}, errors.New("age must be greater than 0")
	}
	return repositories.CreateStudent(student)
}

func UpdateStudent(id uint, updated models.Student) (models.Student, error) {
	existing, err := repositories.GetStudentByID(id)
	if err != nil {
		return models.Student{}, errors.New("student not found")
	}

	// Only overwrite fields that were provided
	existing.FirstName = updated.FirstName
	existing.LastName = updated.LastName
	existing.Email = updated.Email
	existing.Age = updated.Age
	existing.Course = updated.Course
	existing.Phone = updated.Phone

	return repositories.UpdateStudent(existing)
}

func DeleteStudent(id uint) error {
	_, err := repositories.GetStudentByID(id)
	if err != nil {
		return errors.New("student not found")
	}
	return repositories.DeleteStudent(id)
}

func SearchStudents(query string) ([]models.Student, error) {
	return repositories.SearchStudents(query)
}
