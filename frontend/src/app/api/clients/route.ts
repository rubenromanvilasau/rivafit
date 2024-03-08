import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';

type ResponseData = {
    message: string
};

export async function GET(request: Request) {
    const plans = await prisma.client.findMany({});
    return NextResponse.json({ message: 'Hello from clients!', data: plans });
}