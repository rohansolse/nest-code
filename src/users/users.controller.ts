import { Controller, Get, Param, HttpCode, Post, Body } from '@nestjs/common';

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

    @Post('list')
    @HttpCode(200)
    user(@Body() user: string): string {
        console.log(user);
        return `This action returns a user`;
    }

    @Get('list/:id')
    @HttpCode(200)
    userList(@Param('id') id: string): string {
        return `This action returns a #${id} user`;
    }
}