export class CreatePatientDto {
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email?: string;
  address?: string;
}
