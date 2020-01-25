import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { CrudConfigService } from "@nestjsx/crud";
import helmet from "helmet";
import responseTime from "response-time";

CrudConfigService.load({
  query: {
    limit: 25,
    maxLimit: 100
  }
});

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("v2");

  const options = new DocumentBuilder()
    .setTitle("Staart API")
    .setDescription(
      "Staart API is a backend starter for SaaS startups. Using the following APIs, you can create user accounts, teams, set up recurring billing, and more."
    )
    .setVersion("2.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  app.use(helmet({ hsts: { maxAge: 31536000, preload: true } }));
  app.use(responseTime());

  await app.listen(3000);
}
bootstrap();
