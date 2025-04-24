import { PrismaClient } from "@prisma/client"

// Evitar múltiples instancias de Prisma Client en desarrollo
// https://www.prisma.io/docs/guides/performance-and-optimization/connection-management

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export { prisma }
