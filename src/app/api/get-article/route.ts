import type { NextRequest, NextResponse } from "next/server";
import { API } from "@/http/http";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();

    const response = await API.getArticlesServer(body.filter);

    const res = new Response(JSON.stringify({
      data: response.data,
      success: true,
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });

    return res;
  } catch (err: any) {
    return new Response(JSON.stringify({
      data: 'not working',
      success: false,
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
