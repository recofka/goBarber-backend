import { getRepository, Repository } from 'typeorm';
import IAppointmentsRepositoriy from '@modules/appointments/repositories/IAppointmentRepository';
import IcreateAppointmentDTO from '@modules/appointments/dto/ICreateAppointmentDTO';
import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepositoriy {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });
    return findAppointment || undefined;
  }

  public async create({
    provider_id,
    date,
  }: IcreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
