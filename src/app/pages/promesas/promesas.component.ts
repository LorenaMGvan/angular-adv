import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
    // throw new Error('Method not implemented.');
  }

  // const promesa = new Promise((resolve, reject) => {
  //   if ( true ) {
  //     resolve('Hola mundo');
  //   } else {
  //     reject('Bad!!');
  //   }
  //   resolve('hola mundo');
  // });

  // promesa.then( (mensaje: any) => { 
  //   console.log( mensaje);
  // })
  // .catch( (e) => { 
  //   console.log('El error');
  // });

  // console.log('fin del init');

  getUsuarios() {

    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data) )
    });
    
  }



}
