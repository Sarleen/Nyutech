import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'enquiries.json');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newEnquiry = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    // Create folder if not exists
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    const existing = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    existing.push(newEnquiry);

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
