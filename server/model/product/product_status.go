package product

type ProductStatus struct {
	ID   uint   `gorm:"not null; autoIncrement;primaryKey"`
	Code string `validate:"required"`
	Name string `validate:"required"`
}

func (ProductStatus) TableName() string {
	return "product_status"
}
