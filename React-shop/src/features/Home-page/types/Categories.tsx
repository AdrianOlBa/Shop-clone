export interface Category {
  _id: number;
  name: string;
  description: string;
  parentId: number | null;
}

