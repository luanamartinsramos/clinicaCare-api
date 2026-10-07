import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePatientDto } from './dto/create-patient.dto.js';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPatients() {
    return this.prisma.patient.findMany();
  }

  async createPatient(createPatientDto: CreatePatientDto) {
    return this.prisma.patient.create({
      data: {
        name: createPatientDto.name,
        cpf: createPatientDto.cpf,
        birthDate: new Date(createPatientDto.birthDate),
        phone: createPatientDto.phone,
        email: createPatientDto.email,
        address: createPatientDto.address,
      },
    });
  }
}
