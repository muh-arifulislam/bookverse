import prisma from "@prisma/prisma";

export async function getAllBooks(limit = 12, page = 1) {
  const books = await prisma.book.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.book.count();

  return {
    data: books,
    page,
    totalPages: Math.ceil(total / limit),
  };
}
