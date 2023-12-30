interface IRatingItem {
  type: 'Vendor' | 'Rider' | 'Menu Item';
  evaluatedItemId: string;
}

export interface IRatingParams {
  ratingItem: IRatingItem;
  orderId: string;
  rating: number;
  review: string;
}