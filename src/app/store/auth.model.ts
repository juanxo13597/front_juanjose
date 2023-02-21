export type authModel = {
  login: boolean;
  user?: {
    id: number;
    name: string;
    surname: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  };
};
