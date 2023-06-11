import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto, UpdateCarDto } from './dto/index.dto'


@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Aveo'
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Fiesta Titanium'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ]

    getAllCarsService() {
        return this.cars
    }

    getCarByIdService(id: string) {
        const car = this.cars.find( x => x.id == id);
        if(!car)
            throw new NotFoundException(`El carro con id: ${id} no ha sido encontrado..`);
        return car
    }

    createCar(params: CreateCarDto){
        params.id = uuid();
        this.cars.push(params)
        console.log(this.cars);
        return this.cars
    }

    updateCar(id: string,params: UpdateCarDto){
        this.getCarByIdService(id)
        let i = this.cars.findIndex(x => x.id === id)
        this.cars[i] = { id, ...params }
        return this.cars
    }

    deleteCar (id: string){
        this.getCarByIdService(id)
        this.cars = this.cars.filter( car => car.id !== id);
        return this.cars;
    }
}
