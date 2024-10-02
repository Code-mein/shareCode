import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SheetService } from './sheet.service';

@ApiTags('Sheet')
@Controller('sheet')
export class SheetController {
  constructor(private sheetService: SheetService) {}
  @Get(':url')
  async getSheet(@Param('url') url: string) {
    try {
      const urlExist = await this.sheetService.findRepositoryByURL(url);
      if (urlExist) {
        return urlExist;
      } else {
        const createdSheet = await this.sheetService.createSheet({ url });
        console.log(createdSheet);
        return createdSheet;
      }
    } catch (error) {
      return new HttpException(error, HttpStatus.CONFLICT);
    }
  }
}
