import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto.js';
import { UpdatePatientDto } from './dto/update-patient.dto.js';
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

  @Patch(':id')
  async updatePatient(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientsService.updatePatient(id, updatePatientDto);
  }

  @Delete(':id')
  async deletePatient(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.deletePatient(id);
  }
}
