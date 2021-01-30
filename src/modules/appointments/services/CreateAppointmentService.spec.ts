import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import 'reflect-metadata';

describe('CreateAppointment', async () => {
  it('should be able to create new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1212121212',
    });

    expect(appointment).toHaveProperty('id');
    // expect(appointment.provider_id).toBe('1212121212');
  });

  // it('should not be able to create two appointment at same time', () => {
  // });
});
