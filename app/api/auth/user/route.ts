import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export async function POST(req: Request) {
    const data = await req.json();

    const resposnse = await db.insert(users).values(data).returning();
    
    return Response.json(resposnse);
}