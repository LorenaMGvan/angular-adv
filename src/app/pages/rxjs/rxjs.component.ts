import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, Subscription, take } from 'rxjs';

// el take dice cuantas emisiones del observable necesitan y automaticamente complea el Observable
// el map sirve para transformar la informacion que recibe el observable y mutarla  como  yo la ocupe
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor(){    
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   error => console.warn('error', error),
    //   () => console.info('Observer terminado')
    // );

    // obs$.subscribe(
    //   valor => console.log('Subs', valor),
    //   error => console.warn('error', error),
    //   () => console.info('Observer terminado')
    // );
   this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

  } // termina el constructor
  ngOnDestroy(): void {  // se ejecuta cuando cambio de componente
    // termina el observable
    this.intervalSubs.unsubscribe(); 
  }

  retornaIntervalo() {
    // ese intervalo es un observable , retorna o emite numeros
    return interval(500)
              .pipe(
                take(10),
                map( valor => {
                  // return 'Hola mundo' + valor
                  return valor + 1
                }), // el map recibe el argumento que el observable padre emita
                filter( (valor: any)  => ( valor % 2 === 0) ? true : false )
              )
  }


  retornaObservable(): Observable<number>{
    let i=-1;
    // el observer es quien emoite los valores, cuando se termina, o da un error
    return new Observable <number>( observer => {
      const elIntervalo = setInterval( ()=> {
        i++;
        observer.next(i);
        //console.log('tick');
  
        if ( i === 4 ) {
          clearInterval( elIntervalo );
          observer.complete();
        }
  
        if ( i === 2 ) { 
          observer.error('i llego al valor de 2');
        }
  
      }, 1000)
    });
    //
  }
  
  

}
