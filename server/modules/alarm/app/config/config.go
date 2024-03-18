package config

import (
	"github.com/joho/godotenv"
	"log"
)

type Config struct {
	Server   Server
	Database Database
}

func NewConfig() Config {
	err := loadEnvConfig()
	if err != nil {
		panic(err.Error())
	}
	return Config{
		Server:   NewServerConfig(),
		Database: NewDatabaseConfig(),
	}
}

func loadEnvConfig() error {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return err
}
