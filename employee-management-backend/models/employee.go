package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Employee représente un employé dans l'entreprise.
type Employee struct {
	ID          primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	FirstName   string             `json:"first_name" bson:"first_name"`
	LastName    string             `json:"last_name" bson:"last_name"`
	Email       string             `json:"email" bson:"email"`
	PhoneNumber string             `json:"phone_number" bson:"phone_number"`
	Position    string             `json:"position" bson:"position"`
	Department  string             `json:"department" bson:"department"`
	DateOfHire  string             `json:"date_of_hire" bson:"date_of_hire"`
}
