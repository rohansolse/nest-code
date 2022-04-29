import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {

    @Get()
    rolesList(): object {
        return {
            "roles": [
                {
                    "id": 1,
                    "name": "admin"
                },
                {
                    "id": 2,
                    "name": "user"
                }
            ]
        }
    }
}
