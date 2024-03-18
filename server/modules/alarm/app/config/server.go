package config

import (
	"os"
)

const WebServerPort = "WEB_SERVER_PORT"

type Server struct {
	webServerPort string
}

func NewServerConfig() Server {
	return Server{
		webServerPort: os.Getenv(WebServerPort),
	}
}

func (s Server) WebServerPort() string {
	return s.webServerPort
}
