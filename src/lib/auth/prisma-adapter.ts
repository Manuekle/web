import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

export function CustomPrismaAdapter(prisma: PrismaClient, options = {}): Adapter {
  const standardAdapter = PrismaAdapter(prisma);
  
  return {
    ...standardAdapter,
    // Sobrescribimos la función createUser para incluir el companyId
    createUser: async (data) => {
      const { companyId, ...userData } = data as any;
      
      if (!companyId) {
        throw new Error("Company ID is required to create a user");
      }
      
      return prisma.user.create({
        data: {
          ...userData,
          company: {
            connect: {
              id: companyId,
            },
          },
        },
      });
    },
    
    // Sobrescribimos la función getUser para incluir la empresa
    getUser: async (id) => {
      const user = await prisma.user.findUnique({
        where: { id },
        include: { company: true },
      });
      return user;
    },
    
    // Sobrescribimos getUserByEmail para filtrar por companyId cuando sea necesario
    getUserByEmail: async (email, companyId) => {
      if (companyId) {
        return prisma.user.findFirst({
          where: {
            email,
            companyId,
          },
          include: { company: true },
        });
      }
      
      return prisma.user.findFirst({
        where: { email },
        include: { company: true },
      });
    },
  };
}