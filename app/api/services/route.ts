import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching services" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await dbConnect();
    const service = await Service.create(data);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating service" },
      { status: 500 }
    );
  }
}