import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

type ResponseData = {
    message: string
};

export async function GET(request: Request) {
    // const plans = await prisma.plan.findMany({
        // include: {
            // features: true
        // }
    // });
    const plans: any = [];
    console.log('plans', plans)
    return NextResponse.json({ message: 'Hello from plans!', data: plans });
}