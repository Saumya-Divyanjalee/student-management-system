package repositories

import (
	"student-management-system/config"
	"student-management-system/models"
)

// GetAllStudents fetches every student row
func GetAllStudents() ([]models.Student, error) {
	var students []models.Student
	err := config.DB.Find(&students).Error
	return students, err
}

// GetStudentByID fetches a single student by primary key
func GetStudentByID(id uint) (models.Student, error) {
	var student models.Student
	err := config.DB.First(&student, id).Error
	return student, err
}

// CreateStudent inserts a new student row
func CreateStudent(student models.Student) (models.Student, error) {
	err := config.DB.Create(&student).Error
	return student, err
}

// UpdateStudent saves changes to an existing student
func UpdateStudent(student models.Student) (models.Student, error) {
	err := config.DB.Save(&student).Error
	return student, err
}

// DeleteStudent removes a student by ID
func DeleteStudent(id uint) error {
	return config.DB.Delete(&models.Student{}, id).Error
}

// SearchStudents finds students whose name matches the query (used by ?search=)
func SearchStudents(query string) ([]models.Student, error) {
	var students []models.Student
	likeQuery := "%" + query + "%"
	err := config.DB.Where("first_name LIKE ? OR last_name LIKE ? OR email LIKE ?", likeQuery, likeQuery, likeQuery).Find(&students).Error
	return students, err
}
