/** app model */
export type appModel = {
  status: boolean;
  user: user;
};

/** user */
export type user = {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: Date;
  updated_at: Date;
};
