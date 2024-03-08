import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const first = await prisma.plan.upsert({
    where: { planId: 1 },
    update: {},
    create: {
      planId: 1,
      name: 'Básico',
      price: 35000,
        features: {
            create: [
            { name: 'Acceso a clases grupales' },
            { name: 'Acceso a área de cardio' },
            ],
        },
    },
  });

  const secondPlan = await prisma.plan.upsert({
    where: { planId: 2 },
    update: {},
    create: {
      planId: 2,
      name: 'Intermedio',
      price: 60000,
        features: {
            create: [
              { name: 'Acceso a clases grupales' },
              { name: 'Acceso a área de cardio' },
              { name: 'Acceso a área de pesas' },
              { name: 'Acceso a sauna' },
            ],
        },
    },
  });

  const thirdPlan = await prisma.plan.upsert({
    where: { planId: 3 },
    update: {},
    create: {
      planId: 3,
      name: 'Entrenador',
      price: 75000,
        features: {
            create: [
              { name: 'Trae cuantos clientes quieras' },
              { name: 'Acceso a área de cardio' },
              { name: 'Acceso a área de pesas' },
              { name: 'Acceso a sauna' },
            ],
        },
    },
  });

  console.log('[SEED] plans created:', [first, secondPlan, thirdPlan]);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })