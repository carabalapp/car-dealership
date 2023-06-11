import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CAR_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';



@Injectable()
export class SeedService {
  constructor( private carsServices: CarsService, private brandsServices: BrandsService){}


  populateDB(){
    this.carsServices.feelCarsWithSeedData(CAR_SEED)
    this.brandsServices.feelBrandsWithSeedData(BRAND_SEED)
    return 'seed executed correctly'
  }
}
