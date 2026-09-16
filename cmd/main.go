package main

import (
	"student-management-system/config"
	"student-management-system/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// 1. Connect to MySQL and auto-migrate tables
	config.ConnectDatabase()

	// 2. Create the Gin router
	router := gin.Default()

	// 3. Allow the React frontend (localhost:3000) to call this API
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

	// 4. Register all /api/students routes
	routes.SetupRoutes(router)

	// 5. Start the server
	router.Run(":8080")
}
