export interface ProductInfoReqData {
  url: string;
  attachmentUrl: string;
  brandName: string;
  name: string;
}

export interface ProductInfoAction {
  prev?: boolean;
  submit?: boolean;
}
