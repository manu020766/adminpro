import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  //TODO-esto queda pendiente ya que no implemente la subida de imagenes
  transform(img: string, tipo:string= 'usuario'): string {
    return "" 
  }

}
