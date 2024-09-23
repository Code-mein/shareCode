import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Capture")
@Controller('capture')
export class CaptureController {}
