import { Module } from '@nestjs/common';
import { CaptureService } from './capture.service';
import { CaptureController } from './capture.controller';

@Module({
  providers: [CaptureService],
  controllers: [CaptureController]
})
export class CaptureModule {}
