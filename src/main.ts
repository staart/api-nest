import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { CrudConfigService } from "@nestjsx/crud";
import helmet from "helmet";
import responseTime from "response-time";
import { appConstants } from "./app.constants";
import { appLocale } from "./app.locale";

CrudConfigService.load({
  query: {
    limit: appConstants.crudQuery.limit,
    maxLimit: appConstants.crudQuery.maxLimit
  }
});

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(appConstants.routePrefix);

  const options = new DocumentBuilder()
    .setTitle(appLocale.title)
    .setDescription(appLocale.description)
    .setVersion(appConstants.apiVersion)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(appConstants.swaggerEndpoint, app, document);

  app.use(helmet({ hsts: { maxAge: 31536000, preload: true } }));
  app.use(responseTime());

  await app.listen(appConstants.port);
}
bootstrap();
