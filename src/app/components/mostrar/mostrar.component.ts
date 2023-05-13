import { Component, NgModule, OnInit } from '@angular/core';
import { LugaresService, Lugar } from '../../shared/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})

export class MostrarComponent implements OnInit {
  datoss = '';
  lugares:Lugar[] ;
  index:number=-1;
  datos!: Lugar;
  mensaje!: string;

  constructor(public servicio: LugaresService, private router: ActivatedRoute){
    this.lugares=this.servicio.getLugar();
  }

  ver(){
    this.router.params.subscribe(params => {
      this.datos = params['buscar'];
    })

  }



  ngOnInit(): void {
    this.router.params.subscribe(params => {
    this.datoss = params['buscar'];
    console.log("Estoy en el metodo ver"+this.datos);
    this.index = this.lugares.findIndex(p => p.title === this.datoss);
    console.log(this.index);
    if(this.index !== -1){
      this.datos = this.lugares[this.index];
      console.log(this.datos)
    }else{
      this.mensaje="El lugar no exite!";
      //console.log(this.mensaje);
      setTimeout(() => {
        this.mensaje="";
      }, 2000);
    }
  })
  }
}
