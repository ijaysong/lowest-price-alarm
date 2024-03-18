package config

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"os"
)

const (
	DbUsername = "DB_USERNAME"
	DbPassword = "DB_PASSWORD"
	DbHost     = "DB_HOST"
	DbSchema   = "DB_SCHEMA"
)

type Database struct {
	username string
	password string
	Host     string
	Schema   string
}

func NewDatabaseConfig() Database {
	return Database{
		username: os.Getenv(DbUsername),
		password: os.Getenv(DbPassword),
		Host:     os.Getenv(DbHost),
		Schema:   os.Getenv(DbSchema),
	}
}

func (d Database) DataSource() string {
	return fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=true&loc=Local", d.username, d.password, d.Host, d.Schema)
}
