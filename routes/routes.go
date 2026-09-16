package routes

import (
	"student-management-system/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	api := router.Group("/api")
	{
		students := api.Group("/students")
		{
			students.GET("", controllers.GetStudents)
			students.GET("/:id", controllers.GetStudent)
			students.POST("", controllers.CreateStudent)
			students.PUT("/:id", controllers.UpdateStudent)
			students.DELETE("/:id", controllers.DeleteStudent)
		}
	}
}
