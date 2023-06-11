import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    id: string; 

    @IsString()
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model: string;

}