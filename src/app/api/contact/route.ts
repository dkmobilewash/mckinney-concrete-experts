export async function POST(request: Request) {
  const body = await request.json();
  console.log("[Contact Form Submission]", body);
  return Response.json({ success: true });
}
