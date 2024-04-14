package main

import (
	"app/api"
	"app/config"
)

func main() {
	c := config.NewConfig()
	api.Run(c)
}
