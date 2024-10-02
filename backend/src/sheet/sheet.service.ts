import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sheet } from 'src/typeorm/Entities/Sheet';
import { Repository } from 'typeorm';
import { createSheetDTO } from './DTO/createSheetDTO.dto';
import { CodeService } from 'src/code/code.service';

@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(Sheet) private sheetReporisotry: Repository<Sheet>,
    private codeService: CodeService,
  ) {}

  async findRepositoryByURL(url: string): Promise<Sheet> {
    return await this.sheetReporisotry.findOne({
      where: { url },
      relations: ['code'],
    });
  }

  async createSheet(createSheet: createSheetDTO): Promise<any> {
    try {
      const code = await this.codeService.createCode();
      const creatingSheet = this.sheetReporisotry.create({
        ...createSheet,
        code,
      });
      return await this.sheetReporisotry.save(creatingSheet);
    } catch (e) {
      console.log(e);
    }
  }
}
