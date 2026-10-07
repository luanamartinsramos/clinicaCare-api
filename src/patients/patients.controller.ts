import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service.js';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getPatients() {
    return {
      message: 'Lista de pacientes',
      patients: this.patientsService.getPatients(),
    };
  }
}
