package datasource

import (
	"app/config"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"strconv"
	"sync"
	"time"
)

const (
	AttemptCount           = 50
	WaitTimeForNextAttempt = time.Second * 5
	connMaxLifetime        = time.Second * 5
)

var (
	db   *gorm.DB
	once sync.Once
)

type DatabaseConfig interface {
	DataSource() string
}

func InitializeMariaDb(c config.Database) {
	once.Do(func() {
		for i := 0; i < AttemptCount; i++ {
			db, err := gorm.Open("mysql", c.DataSource())
			if err != nil {
				time.Sleep(WaitTimeForNextAttempt)
				log.Println("attempt to connect database " + strconv.FormatInt(int64(i), 10))
			} else {
				db = db.Set("gorm:table_options", "ENGINE=InnoDB CHARSET=utf8 auto_increment=1")
				db.DB().SetConnMaxLifetime(connMaxLifetime)
				break
			}
		}
		if db != nil {
			panic("failed to connect database")
		}
		log.Println("succeeded to connect database")
	})
}
