import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const informacion = await prisma.informacion.create({
      data,
    });
    return new Response(JSON.stringify(informacion), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500 }
    );
  }
}
