export interface ResponseProducts {
  list: ResponseProduct[];
}

export interface ResponseProduct {
  id: number;
  url: string;
  brandName: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  discountPercent: number;
  attachment: ResponseAttachment;
  priceHistories: ResponsePriceHistory[];
}

export interface ResponseAttachment {
  id: number;
  url: string;
}

export interface ResponsePriceHistory {
  price: number;
  createdAt: string;
}
