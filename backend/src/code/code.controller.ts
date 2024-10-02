import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CodeService } from './code.service';
import { updateCodeDTO } from './DTO/updateCodeDTO.dto';

@ApiTags('Code')
@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Put(':id')
  updateCode(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updateCodeDTO,
  ): MethodDecorator {
    console.log(id, body);
    if (!id || !body) {
      return HttpCode(HttpStatus.BAD_REQUEST);
    }
    this.codeService.updateCode(id, body);
    return HttpCode(HttpStatus.CREATED);
  }
}
