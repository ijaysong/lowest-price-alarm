package product

import "time"

type ProductPriceHistory struct {
	ID          uint      `gorm:"not null; autoIncrement;primaryKey"`
	ProductID   uint      `validate:"required"`
	Price       uint      // TODO
	CreatorID   uint      `validate:"required"`
	DateCreated time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}

func (ProductPriceHistory) TableName() string {
	return "product_price_history"
}
