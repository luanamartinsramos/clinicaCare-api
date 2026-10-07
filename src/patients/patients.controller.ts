import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto.js';
import { PatientsService } from './patients.service.js';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async getPatients() {
    return {
      message: 'Lista de pacientes',
      patients: await this.patientsService.getPatients(),
    };
  }

  @Post()
  async createPatient(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.createPatient(createPatientDto);
  }
}
