package models

// Student represents a row in the "students" table
type Student struct {
	ID        uint   `json:"id" gorm:"primaryKey"`
	FirstName string `json:"first_name" binding:"required"`
	LastName  string `json:"last_name" binding:"required"`
	Email     string `json:"email" gorm:"unique" binding:"required,email"`
	Age       int    `json:"age" binding:"required"`
	Course    string `json:"course"`
	Phone     string `json:"phone"`
}
