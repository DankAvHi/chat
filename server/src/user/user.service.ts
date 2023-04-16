import { prisma } from "../db/prisma";

export const createUser = async (login: string, password: string) =>
    await prisma.user.create({ data: { login, password } });

export const getUser = async (id: string) => await prisma.user.findUnique({ where: { id } });

export const getUserList = async () => await prisma.user.findMany();

export const removeUser = async (id: string) => await prisma.user.delete({ where: { id } });
