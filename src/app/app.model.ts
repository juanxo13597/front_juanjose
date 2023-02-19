/** app model */
export type appModel = {
  status: boolean;
  user: user;
};

/** user */
export type user = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};
