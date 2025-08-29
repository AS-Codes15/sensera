import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}


// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis;

// export const db =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ["query", "error", "warn"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }
