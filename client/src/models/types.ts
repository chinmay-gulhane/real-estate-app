export type UserState = {
  currentUser: User | null;
  error: string | null;
  loading: boolean;
};

export type User = {
  _id: string;
  username: string;
  email: string;
  avatar: string;
};

export type RootState = {
  user: UserState;
};
