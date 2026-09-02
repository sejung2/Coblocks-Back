import { Module, ValidationPipe } from '@nestjs/common';
import { ClassroomModule } from './classroom/classroom.module';
import { ChatModule } from './chat/chat.module';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './database/supabase.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      // 현재 환경(dev, prod 등)에 맞는 .env 파일을 읽도록 설정
      envFilePath: '.env.development',
      isGlobal: true, // 앱 전체에서 ConfigService를 사용할 수 있도록 설정
    }),
    EventEmitterModule.forRoot(), // 이벤트 발행/구독 기능 활성화
    ClassroomModule,
    ChatModule,
    ActivityModule,
    AuthModule,
    SupabaseModule,
  ],
  providers: [
    // HTTP, WebSocket 전역 ValidationPipe
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
