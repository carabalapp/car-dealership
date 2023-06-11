import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index.dto'

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }
    @Get('/')
    getAllCars() {
        return this.carsService.getAllCarsService()
    }

    @Get('/:id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.getCarByIdService(id)
    }

    @Post('/')
    createCar(@Body() params: CreateCarDto ) {
        return this.carsService.createCar(params)
    }

    @Patch('/:id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, @Body() params: UpdateCarDto) {
        // return { id, params }
        return this.carsService.updateCar(id, params)
    }

    @Delete('/:id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCar(id)
    }
}
