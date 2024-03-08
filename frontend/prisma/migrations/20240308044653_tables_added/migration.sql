/*
  Warnings:

  - Added the required column `plan_id` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_trainer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "plan_id" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "trainers" (
    "trainer_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "tiktok_url" TEXT,
    "instagram_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trainers_pkey" PRIMARY KEY ("trainer_id")
);

-- CreateTable
CREATE TABLE "trainers_clients" (
    "trainerId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "trainers_clients_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "gyms" (
    "gym_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "comuna" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("gym_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" DECIMAL(65,30),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainers_clients" ADD CONSTRAINT "trainers_clients_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("client_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainers_clients" ADD CONSTRAINT "trainers_clients_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "trainers"("trainer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
