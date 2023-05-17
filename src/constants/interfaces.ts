export interface RecipeProps {
  img: FileList;
  title: string;
  serving: string;
  level: string;
  ingredients: string[];
  summary: string;
  content: string[];
  time: string;
}

export interface DiscountProps {
  img: FileList;
  price: string;
  place: string;
  discountPrice: string;
  title: string;
}

export interface ShareProps {
  img: FileList;
  title: string;
  content: string;
}

export interface addressProps {
  sido: string;
  sigugun: string;
  dong: string;
}

export interface inputProps {
  placeholder?: string;
  value?: string;
  color?: string;
  active?: boolean;
}

export interface requestConfigDataProps {
  url: string;
  method: string;
  headers?: object;
  data?: object | null;
}

export interface levelViewProps {
  isView: boolean;
}

export interface PostListProps {
  category: string;
}

export interface levelActiveProps {
  isActive: boolean;
}

export interface commentDataProps {
  id: number;
  writer: string;
  time: string;
  content: string;
}

export interface CommentEditProps {
  content: string;
}