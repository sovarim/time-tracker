import { Prisma } from '@prisma/client';
import { prismaClient } from '../db';

export class UserService {
  createUser(user: Prisma.UserCreateInput) {
    return prismaClient.user.create({ data: user });
  }

  getUsers() {
    return prismaClient.user.findMany();
  }

  getUserById(id: number) {
    return prismaClient.user.findUnique({ where: { id } });
  }
}

export const userService = new UserService();
