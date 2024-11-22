package main

import (
	"log"
	"net/http"

	"employee-management/config"
	"employee-management/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Connecte à MongoDB
	config.ConnectDB()

	// Initialiser Gin
	router := gin.Default()

	// Middleware CORS
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
			return
		}
		c.Next()
	})

	// Définir les routes
	routes.EmployeeRoutes(router)

	// Lancer le serveur
	log.Println("Serveur lancé sur http://localhost:8080")
	router.Run(":8080")
}
