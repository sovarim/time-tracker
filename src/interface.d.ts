import { User, Prisma  } from '@prisma/client';


export interface IDbApi {
  createUser: (user: Prisma.UserCreateInput) => Promise<User>;
  getAllUsers: () => Promise<User[]>;
}

declare global {
  interface Window {
    db: IDbApi;
  }
}