import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      email: 'jayashankar987@gmail.com',
      createdAt: new Date(),
      id: 1,
    },
    {
      email: 'jayashankarboya@gmail.com',
      createdAt: new Date(),
      id: 2,
    },
    {
      email: 'pushparekha90@gmail.com',
      createdAt: new Date(),
      id: 3,
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
