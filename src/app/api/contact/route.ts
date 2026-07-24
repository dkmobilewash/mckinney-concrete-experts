export async function POST(request: Request) {
  const body = await request.json();

    // Forward to Zapier webhook for lead tracking
    try {
          await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                            ...body,
                            website: 'McKinney Concrete Experts',
                            submittedAt: new Date().toISOString(),
                  }),
          });
    } catch (zapierError) {
          console.error('[Zapier Webhook Error]', zapierError);
    }
  console.log("[Contact Form Submission]", body);
  return Response.json({ success: true });
}
