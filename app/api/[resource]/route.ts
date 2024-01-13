import { NextRequest } from "next/server";

export function GET(req: NextRequest, { params }: { params: Record<string, string> }): Response {
  let response = new Response(JSON.stringify({
    from: req.url,
    hello: 'world' + Math.random(),
    ...params
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}