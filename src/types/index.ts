// Definiciones de tipos para usar mientras se regenera el cliente de Prisma

export interface Department {
  id: string;
  name: string;
  description?: string | null;
  companyId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  phone?: string | null;
  position?: string | null;
  departmentId?: string | null;
  department?: Department | null;
  fingerprintId?: string | null;
  hireDate: Date;
  terminationDate?: Date | null;
  isActive: boolean;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}
