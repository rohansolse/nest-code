import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    userInfo(): string {
        return 'This action returns all users';
    }

    @Get('history')
    userHistory(): string {
        return 'This action returns all Old users';
    }
}
