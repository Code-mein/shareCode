import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capture } from './typeorm/Entities/Capture';
import { Code } from './typeorm/Entities/Code';
import { Comment } from './typeorm/Entities/Comment';
import { Sheet } from './typeorm/Entities/Sheet';
import { SheetModule } from './sheet/sheet.module';
import { CodeModule } from './code/code.module';
import { CaptureModule } from './capture/capture.module';
import { CommentModule } from './comment/comment.module';

@Module({ 
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'password', 
      database: 'sharecode', 
      entities: [
        Capture,Code, Comment, Sheet
      ],
      synchronize: true, 
    }
  ), SheetModule, CodeModule, CaptureModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
