import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
