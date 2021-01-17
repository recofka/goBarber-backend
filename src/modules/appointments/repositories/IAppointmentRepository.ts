import Appointment from '../infra/typeorm/entities/Appointment';
import IcreateAppointmentDTO from '../dto/ICreateAppointmentDTO';

export default interface IAppointmentsRepositoriy {
  create(data: IcreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
