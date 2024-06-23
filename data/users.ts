import prisma from "@/lib/db";

export async function getUserById(id: string) {
    try {
        return await prisma.user.findUnique({ where: { id } });
    } catch (error) {
        return error;
    }
}

export async function getUserByEmail(email: string) {
    try {
        return await prisma.user.findUnique({ where: { email } });
    } catch (error) {
        return error;
    }
}