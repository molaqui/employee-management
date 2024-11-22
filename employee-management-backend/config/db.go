package config

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoDB client global
var DB *mongo.Client

// ConnectDB configure et connecte MongoDB Atlas
func ConnectDB() {
	// Votre URI MongoDB Atlas
	uri := "mongodb+srv://oproject419:7RYsQmOTaCnlB5KJ@test-project.sug3u.mongodb.net/?retryWrites=true&w=majority&appName=test-project"

	// Crée une instance du client MongoDB
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatalf("Erreur lors de la création du client MongoDB : %v", err)
	}

	// Contexte avec un timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Connexion au serveur MongoDB
	err = client.Connect(ctx)
	if err != nil {
		log.Fatalf("Erreur lors de la connexion à MongoDB : %v", err)
	}

	// Ping pour vérifier que la connexion est établie
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Erreur lors du ping de MongoDB : %v", err)
	}

	// Initialiser la variable globale
	DB = client
	log.Println("Connecté à MongoDB Atlas!")
}

// GetCollection renvoie une collection spécifique de la base de données
func GetCollection(collectionName string) *mongo.Collection {
	if DB == nil {
		log.Fatal("La connexion MongoDB n'a pas été initialisée. Assurez-vous d'appeler ConnectDB.")
	}
	return DB.Database("employeeDB").Collection(collectionName)
}
