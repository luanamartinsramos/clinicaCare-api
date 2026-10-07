import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePatientDto } from './dto/create-patient.dto.js';
import { UpdatePatientDto } from './dto/update-patient.dto.js';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPatients() {
    return this.prisma.patient.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async createPatient(createPatientDto: CreatePatientDto) {
    try {
      return await this.prisma.patient.create({
        data: {
          name: createPatientDto.name,
          cpf: createPatientDto.cpf,
          birthDate: new Date(createPatientDto.birthDate),
          phone: createPatientDto.phone,
          email: createPatientDto.email,
          address: createPatientDto.address,
        },
      });
    } catch (error) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Este CPF já está cadastrado.');
      }

      throw error;
    }
  }

  async updatePatient(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.prisma.patient.findUnique({
      where: {
        id,
      },
    });

    if (!patient) {
      throw new NotFoundException('Paciente não encontrado.');
    }

    try {
      return await this.prisma.patient.update({
        where: {
          id,
        },
        data: {
          ...(updatePatientDto.name !== undefined && {
            name: updatePatientDto.name,
          }),

          ...(updatePatientDto.cpf !== undefined && {
            cpf: updatePatientDto.cpf,
          }),

          ...(updatePatientDto.birthDate !== undefined && {
            birthDate: new Date(updatePatientDto.birthDate),
          }),

          ...(updatePatientDto.phone !== undefined && {
            phone: updatePatientDto.phone,
          }),

          ...(updatePatientDto.email !== undefined && {
            email: updatePatientDto.email,
          }),

          ...(updatePatientDto.address !== undefined && {
            address: updatePatientDto.address,
          }),
        },
      });
    } catch (error) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Este CPF já está cadastrado.');
      }

      throw error;
    }
  }

  async deletePatient(id: number) {
    const patient = await this.prisma.patient.findUnique({
      where: {
        id,
      },
    });

    if (!patient) {
      throw new NotFoundException('Paciente não encontrado.');
    }

    await this.prisma.patient.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Paciente excluído com sucesso.',
    };
  }
}
