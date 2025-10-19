import prisma from "@prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const books = await request.json();

    if (!Array.isArray(books) || books.length === 0) {
      return NextResponse.json(
        { error: "Request body must be an array of books" },
        { status: 400 }
      );
    }

    // Validate each book has required fields
    const isValid = books.every((book) => book.title && book.author);
    if (!isValid) {
      return NextResponse.json(
        { error: "All books must have title and author" },
        { status: 400 }
      );
    }

    // Bulk create books with Prisma
    const result = await prisma.book.createMany({
      data: books,
    });

    return NextResponse.json(
      { message: "Books created successfully", count: result.count },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create books" },
      { status: 500 }
    );
  }
}
