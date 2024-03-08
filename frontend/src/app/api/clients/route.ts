import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';

type ResponseData = {
    message: string
};

export async function GET(request: Request) {
    const clients = await prisma.client.findMany({});
    return NextResponse.json({ message: 'Hello from clients!', data: clients });
}