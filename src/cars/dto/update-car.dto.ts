import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string; 

    @IsString()
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model: string;

}