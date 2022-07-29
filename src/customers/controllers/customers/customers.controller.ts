import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService:
        CustomersService) { }

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number, @Req() request: Request, @Res() response: Response) {
        console.log(typeof id);
        const customer = this.customerService.findCustomerById(id);
        if (customer) {
            response.send(customer)
        } else {
            response.status(400).send({ msg: 'Customer not found' })
        }
    }

    @Get('search/:id')
    findCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customerService.findCustomerById(id);
        if (customer) {
            return customer
        } else {
            throw new HttpException('customer not found', HttpStatus.BAD_REQUEST)
        }
    }
}




