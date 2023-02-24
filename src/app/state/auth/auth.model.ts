/** model auth */
export type authModel = {
  login: boolean;
  access_token?: string;
  user?: {
    id: number;
    name: string;
    surname: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  };
};
