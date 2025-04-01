export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FormData = {
  rating: number;
  review: string;
}
