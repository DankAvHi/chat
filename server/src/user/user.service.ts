import { Prisma, user } from "@prisma/client";
import { prisma } from "../db/prisma";

export const createUser = async (input: Prisma.userCreateInput) =>
    await prisma.user.create({ data: input });

export const findUser = async (
    where: Prisma.userWhereInput,
    select?: Prisma.userSelect,
) => (await prisma.user.findFirst({ where, select })) as user | null;

export const findUserList = async (
    where?: Prisma.userWhereInput,
    select?: Prisma.userSelect,
) => (await prisma.user.findMany({ where, select })) as user[];

export const findUniqueUser = async (
    where: Prisma.userWhereUniqueInput,
    select?: Prisma.userSelect,
) => (await prisma.user.findUnique({ where, select })) as user | null;
