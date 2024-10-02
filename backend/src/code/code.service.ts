import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Code } from 'src/typeorm/Entities/Code';
import { Repository, UpdateResult } from 'typeorm';
import { updateCodeDTO } from './DTO/updateCodeDTO.dto';

@Injectable()
export class CodeService {
  constructor(
    @InjectRepository(Code) private codeRepository: Repository<Code>,
  ) {}

  async createCode(): Promise<Code> {
    const creatingCode = this.codeRepository.create({ code: '' });
    return await this.codeRepository.save(creatingCode);
  }

  async updateCode(
    id: number,
    updatedCode: updateCodeDTO,
  ): Promise<UpdateResult> {
    console.log(id, updatedCode);
    return await this.codeRepository.update({ id }, { ...updatedCode });
  } 
}
