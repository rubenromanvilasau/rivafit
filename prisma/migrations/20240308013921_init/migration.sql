-- CreateTable
CREATE TABLE "plans" (
    "plan_id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "plans_features" (
    "feature_id" SERIAL NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "plans_features_pkey" PRIMARY KEY ("feature_id")
);

-- CreateTable
CREATE TABLE "clients" (
    "client_id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("client_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- AddForeignKey
ALTER TABLE "plans_features" ADD CONSTRAINT "plans_features_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
