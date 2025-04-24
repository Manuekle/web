/*
  Warnings:

  - You are about to drop the `AttendanceRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanySettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Holiday` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Leave` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Visitor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VisitorRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoRegistro" AS ENUM ('ENTRADA', 'SALIDA', 'PERMISO', 'COMISION');

-- CreateEnum
CREATE TYPE "MetodoRegistro" AS ENUM ('HUELLA', 'CEDULA', 'MANUAL');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('admin', 'hr');

-- DropForeignKey
ALTER TABLE "AttendanceRecord" DROP CONSTRAINT "AttendanceRecord_companyId_fkey";

-- DropForeignKey
ALTER TABLE "AttendanceRecord" DROP CONSTRAINT "AttendanceRecord_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "AttendanceRecord" DROP CONSTRAINT "AttendanceRecord_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "CompanySettings" DROP CONSTRAINT "CompanySettings_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeSchedule" DROP CONSTRAINT "EmployeeSchedule_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeSchedule" DROP CONSTRAINT "EmployeeSchedule_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Holiday" DROP CONSTRAINT "Holiday_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Leave" DROP CONSTRAINT "Leave_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Visitor" DROP CONSTRAINT "Visitor_companyId_fkey";

-- DropForeignKey
ALTER TABLE "VisitorRecord" DROP CONSTRAINT "VisitorRecord_visitorId_fkey";

-- DropTable
DROP TABLE "AttendanceRecord";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "CompanySettings";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Device";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "EmployeeSchedule";

-- DropTable
DROP TABLE "Holiday";

-- DropTable
DROP TABLE "Leave";

-- DropTable
DROP TABLE "Schedule";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Visitor";

-- DropTable
DROP TABLE "VisitorRecord";

-- DropEnum
DROP TYPE "LeaveStatus";

-- DropEnum
DROP TYPE "LeaveType";

-- DropEnum
DROP TYPE "RecordStatus";

-- DropEnum
DROP TYPE "RecordType";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "huellaDactilar" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimaActualizacion" TIMESTAMP(3),

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visitante" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "empresa" TEXT,
    "motivo" TEXT,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroAsistencia" (
    "id" SERIAL NOT NULL,
    "empleadoId" INTEGER NOT NULL,
    "tipoRegistro" "TipoRegistro" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metodoRegistro" "MetodoRegistro" NOT NULL,
    "observacion" TEXT,
    "deviceId" TEXT,

    CONSTRAINT "RegistroAsistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroVisitante" (
    "id" SERIAL NOT NULL,
    "visitanteId" INTEGER NOT NULL,
    "entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salida" TIMESTAMP(3),
    "motivo" TEXT NOT NULL,
    "personaVisitada" TEXT,

    CONSTRAINT "RegistroVisitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'offline',
    "ultimaSincronizacion" TIMESTAMP(3),
    "firmware" TEXT,
    "configuracion" JSONB,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_huellaDactilar_key" ON "Empleado"("huellaDactilar");

-- CreateIndex
CREATE UNIQUE INDEX "Visitante_cedula_key" ON "Visitante"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_token_key" ON "Dispositivo"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "RegistroAsistencia" ADD CONSTRAINT "RegistroAsistencia_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroVisitante" ADD CONSTRAINT "RegistroVisitante_visitanteId_fkey" FOREIGN KEY ("visitanteId") REFERENCES "Visitante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
