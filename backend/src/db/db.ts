import { PrismaClient } from "../generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL!;

// Create a Neon connection
const sql = neon(connectionString);

// Create the Prisma Neon adapter
const adapter = new PrismaNeon(sql as any);

// Instantiate Prisma Client with the adapter
export const prisma = new PrismaClient({ adapter });
