import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IArticlesObject } from './interface/news.interface';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}

  async getArticles() {
    const apiURL = process.env.NEWS_API_URL;
    const apiKey = process.env.API_KEY;
    const url = `${apiURL}/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&apiKey=${apiKey}`;
    const response = firstValueFrom(
      await this.httpService.get<IArticlesObject[]>(url),
    );

    return (await response).data;
  }
}
