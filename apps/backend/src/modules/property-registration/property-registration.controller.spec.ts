import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRegistrationController } from './property-registration.controller';

describe('PropertyRegistrationController', () => {
  let controller: PropertyRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyRegistrationController],
    }).compile();

    controller = module.get<PropertyRegistrationController>(PropertyRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
