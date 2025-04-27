import { Injectable } from '@nestjs/common';

@Injectable() //decorador,funcion que corre antes de la creacion de la clase, metaprogramación
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
