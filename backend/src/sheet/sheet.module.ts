import { Module } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sheet } from 'src/typeorm/Entities/Sheet';
import { CodeService } from 'src/code/code.service';
import { Code } from 'src/typeorm/Entities/Code';

@Module({
  imports: [TypeOrmModule.forFeature([Sheet, Code])],
  providers: [SheetService, CodeService],
  controllers: [SheetController],
})
export class SheetModule {}
