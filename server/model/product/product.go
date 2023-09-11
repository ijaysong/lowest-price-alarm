package product

import "time"

type Product struct {
	ID                  uint      `gorm:"not null; autoIncrement;primaryKey"`
	CompanyID           uint      `validate:"required"`
	ProductAttachmentID uint      `validate:"required"`
	BrandName           string    `validate:"required"`
	Name                string    `validate:"required"`
	Url                 string    `validate:"required"`
	OriginalPrice       uint      `validate:"required"`
	CurrentPrice        uint      `validate:"required"`
	ProductStatusID     uint      `validate:"required"`
	IsActive            *bool     `gorm:"not null;default:false"`
	IsDeleted           *bool     `gorm:"not null;default:false"`
	CreatorID           uint      `validate:"required"`
	DateCreated         time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
	LastUpdaterID       uint      `validate:"required"`
	LastUpdated         time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}

func (Product) TableName() string {
	return "product"
}
