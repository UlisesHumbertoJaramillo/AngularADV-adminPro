import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string | undefined;//para usar este atributo en el html usamos {{titulo}}
  public tituloSubs$: Subscription | undefined;

  constructor(private router: Router) {//tratar de que los contructores estén lo más limpios posibles

    this.tituloSubs$ = this.getDataRoutes().subscribe(({ titulo }) => {//recibe data desde el pipe y extrae el titulo, es lo mismo que poner data.titulo
      this.titulo = titulo;
      document.title = 'Admin Pro -' + titulo;//modifica el titulo de la pestaña
    });

  }
  ngOnDestroy(): void {//al destruirse el componento, por ejemplo en un logout, se dessubscribe del Observable, en este caso de los eventos de Router
    this.tituloSubs$?.unsubscribe();
  }

  getDataRoutes() {
    //filter en modo estricto
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

}
