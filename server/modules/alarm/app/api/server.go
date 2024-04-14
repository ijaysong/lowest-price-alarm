package api

import (
	"app/api/product"
	"app/config"
	appCore "app/core"
)

func Run(c config.Config) {
	r := appCore.GinInit()
	appCore.InitializeMariaDb(c.Database)

	product.Main(r)

	appCore.GinRun(r, c.Server)
}
