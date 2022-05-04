import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
    private readonly blogs: any[] = [];

    findData(): any[] {
        return this.blogs;
    }

    create(blog: any): any {
        this.blogs.push(blog);
        return this.blogs;
    }
}
