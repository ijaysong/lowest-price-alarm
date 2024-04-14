package datasource

import (
	"app/config"
	"github.com/gin-gonic/gin"
	"golang.org/x/sync/errgroup"
	"log"
)

var g errgroup.Group

func GinInit() *gin.Engine {
	r := gin.Default()
	r.Use(gin.Logger())
	return r
}

func GinRun(r *gin.Engine, c config.Server) {
	g.Go(func() error {
		return r.Run(":" + c.WebServerPort())
	})

	if err := g.Wait(); err != nil {
		log.Fatal(err)
	}
}
