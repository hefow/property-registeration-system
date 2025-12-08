import { Module } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';

@Module({
  providers: [PropertyTypeService]
})
export class PropertyTypeModule {}
