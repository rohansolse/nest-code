import { Controller, Get, Param, HttpCode, Post, Body } from '@nestjs/common';
import { BlogsService } from '../blogs/blogs.service';

@Controller('users')
export class UsersController {

    constructor(private readonly blogsService: BlogsService) { }

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

    @Get('blog-list')
    bloglist(): any {
        return this.blogsService.findData();
    }

    @Post('blog-add')
    blogAdd(@Body() record: any): any {
        console.log(record, 'record');
        return this.blogsService.create(record);
    }
}