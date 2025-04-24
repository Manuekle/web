-- CreateTable
CREATE TABLE "Comando" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "params" JSONB NOT NULL DEFAULT '{}',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "result" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Comando_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comando_deviceId_idx" ON "Comando"("deviceId");

-- CreateIndex
CREATE INDEX "Comando_status_idx" ON "Comando"("status");

-- AddForeignKey
ALTER TABLE "Comando" ADD CONSTRAINT "Comando_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Dispositivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
