import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './app/news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.development.local' }),
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
