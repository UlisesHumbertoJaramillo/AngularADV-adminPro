import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{
  public intervalSubs: Subscription | undefined;
  constructor() {
    //creacion manual de un Observable

    //es necesario subcribirse al Observable para que el observable pueda trabajar

    // se usa $ en la variable si es una referencia que quiero almacenar

    //el observer (variable de la funcion flecha), es un subscriber, por medio
    //de este mismo, es el que nos vamos a tener todas las acciones del Observable

    
    
    //subscripción
/*     this.returnObservable().pipe(
      //con el retry sigue intentando una y otra vez luego de un error
      //reinicia el observable indefinidamente cuando no tiene ningún argumento
      //retry(2)<-- intenta 2 veces
      retry()
    ).subscribe({
      next: value => console.log('Subs:', value), 
      error: err => console.warn('Error', err),
      complete: () => console.info('Obs terminado') 
    }) */
    this.intervalSubs = this.returnInterval().subscribe((valor)=>{
      console.log(valor);
    })
  }
  //al salir del componente ejecuta el código dentro
  //en este caso se dessubscribe del observable}
  //es importante que esté implementado la desusbcripción ya que sinó seguirá actuando y consumiendo recursos
  ngOnDestroy(){
    this.intervalSubs?.unsubscribe();
  }

  //funcion con un método de Angular que retorna un observable
  //Map me sirve para trasformar el observable
  //filter es un operador para filtrar valores
  //es importante la posición de los operadores del pipe
  returnInterval():Observable<number>{
    const interval$ = interval(1000).pipe(take(4),map((valor)=>{return valor+1}),filter((valor) => ((valor % 2)===0)? true :false));
    return interval$;
  }


  //funcion que retorna el observable creado por el usuario
  returnObservable():Observable<number>{
    let i=0;


    const obs$ = new Observable<number>(observer => {
      
      const interval = setInterval(()=>{

        i++;
        //envio de datos a subscriptores
        observer.next(i);
        if(i===4) {
          clearInterval(interval);//despeja los valores del interval
          observer.complete();//termina el observable
        }

        if(i===2){
          //envio de errores, además termina con el observable

          observer.error('i llegó al valor 2');
        }
      
      },1000);//este metodo ejecuta la función flecha cada cierto intervalo

    });

    return obs$;
  }
}
