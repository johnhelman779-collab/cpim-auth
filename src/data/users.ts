export interface User {
  id: string;
  username: string;
  password: string;
  displayName: string;
  role: "admin";
}

export const users: User[] = [
  {
    id: "user-admin",
    username: "admin",
    password: "admin",
    displayName: "CPIM Admin",
    role: "admin",
  },
];
