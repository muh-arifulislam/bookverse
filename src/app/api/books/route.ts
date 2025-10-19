import prisma from "@prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");

    const books = await prisma.book.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.book.count();

    return NextResponse.json({
      data: books,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log(body);

    if (!body.title || !body.author) {
      return NextResponse.json(
        { error: "Title and author are required" },
        { status: 400 }
      );
    }

    // Here you would typically add code to save to your database
    // For example with Prisma:
    const book = await prisma.book.create({ data: body });

    return NextResponse.json(
      { message: "Book created successfully", data: book },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create book" },
      { status: 500 }
    );
  }
}
