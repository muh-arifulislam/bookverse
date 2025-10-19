import prisma from "@prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.book.findMany();

  return NextResponse.json({
    message: "Books data successfully fetched!.",
    status: "success",
    timestamp: new Date().toISOString(),
    data,
  });
}
