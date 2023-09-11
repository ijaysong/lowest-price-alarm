package product

import "time"

type ProductAttachment struct {
	ID            uint      `gorm:"not null; autoIncrement;primaryKey"`
	Url           string    `validate:"required"`
	IsActive      *bool     `gorm:"not null;default:false"`
	CreatorID     uint      `validate:"required"`
	DateCreated   time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
	LastUpdaterID uint      `validate:"required"`
	LastUpdated   time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}

func (ProductAttachment) TableName() string {
	return "product_attachment"
}
