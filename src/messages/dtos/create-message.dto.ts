import { IsString } from "class-validator";

export class CreateMessageDto{
    @IsString()//content stringmi kontrol eder ve dönüş sağlar
    content:string;
}