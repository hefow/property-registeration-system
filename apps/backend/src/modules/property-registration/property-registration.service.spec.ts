import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRegistrationService } from './property-registration.service';

describe('PropertyRegistrationService', () => {
  let service: PropertyRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyRegistrationService],
    }).compile();

    service = module.get<PropertyRegistrationService>(PropertyRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
