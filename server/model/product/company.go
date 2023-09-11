package product

type Company struct {
	ID       uint
	Name     string `validate:"required"`
	IsActive bool   `validate:"required"`
}

func (Company) tableName() string {
	return "company"
}
