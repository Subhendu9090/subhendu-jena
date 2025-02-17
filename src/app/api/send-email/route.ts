import { NextResponse } from "next/server";
import { SendEmail } from "@/helper/SendEmail";

export async function POST(req: Request) {
  try {
    const { subject, message, from, name } = await req.json();

    if (!subject || !message || !from || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await SendEmail(subject, message, from,name);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
