import { prisma } from '@/lib/prisma';


export const getAllPlans = () => {
    return prisma.plan.findMany({
        include: {
            features: true
        }
    });
}