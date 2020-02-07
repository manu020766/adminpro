import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router:Router,
              private title: Title,
              private meta: Meta ) { }

  titulo: string
  ngOnInit() {
    this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),                       // La data definida en la ruta del routing viene aquí
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),  // concretamente en el evento que tiene: firstChild === null
      map((info:ActivationEnd) => info.snapshot.data)                        // estraigo la info de la data en este caso: Objeto data
    )
    .subscribe(dataEnLaUrlRouter => {
      this.titulo = dataEnLaUrlRouter.titulo // Obtengo el titulo del objeto data
      this.title.setTitle(this.titulo)       // Establezco el titulo de la metadata de la página

      const metaTag:MetaDefinition = {
        nombre: 'description',
        content: 'Muetra información: ' + this.titulo
      }

      this.meta.updateTag(metaTag)  // Añado a la pagina el meta decription
    })
  }
} 
