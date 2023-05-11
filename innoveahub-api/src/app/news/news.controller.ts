import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('articles')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async index() {
    return await this.newsService.getArticles();
  }
}
