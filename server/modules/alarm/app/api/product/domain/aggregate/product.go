package aggregate

import "app/api/product/domain/entity"

type Products []*Product

type Product struct {
	entity.Product

	ProductAttachment     entity.ProductAttachment      `gorm:"foreignKey:ProductAttachmentID"`
	ProductStatus         entity.ProductStatus          `gorm:"foreignKey:ProductStatusID"`
	ProductPriceHistories []*entity.ProductPriceHistory `gorm:"foreignKey:ID"`
	Company               entity.Company                `gorm:"foreignKey:CompanyID"`
}
