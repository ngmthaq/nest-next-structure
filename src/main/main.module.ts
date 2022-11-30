import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppModule } from '@/www/app/app.module';

@Module({
  imports: [AppModule],
})
export class MainModule implements NestModule {
  /**
   * Configure middlewares
   *
   * @param consumer
   */
  configure(consumer: MiddlewareConsumer): void {
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
