import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const listado = await prisma.informacion.findMany({
      include: { Cliente: true },
      orderBy: [
        { fechaCreacion: "asc" },
        { Cliente: { apellidos: "asc" } },
      ],
    });
    return new Response(JSON.stringify(listado), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500 }
    );
  }
}
