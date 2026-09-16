package config

import (
	"fmt"
	"log"

	"student-management-system/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB is the global database connection used across the app
var DB *gorm.DB

// ConnectDatabase opens the MySQL connection and auto-migrates tables
func ConnectDatabase() {
	// Change user, password, and db name to match your local MySQL setup
	dsn := "root:root@tcp(127.0.0.1:3306)/student_db_go?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	// Auto-create/update the students table based on the Student struct
	err = db.AutoMigrate(&models.Student{})
	if err != nil {
		log.Fatal("Failed to migrate database: ", err)
	}

	DB = db
	fmt.Println("✅ Database connected and migrated successfully")
}
