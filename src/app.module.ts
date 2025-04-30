import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule

@Module({
  imports: [
    ConfigModule.forRoot(), // Agrega esta línea para cargar las variables de entorno
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}