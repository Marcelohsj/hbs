import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  active1:boolean = true;
  active2:boolean = false;
  active3:boolean = false;
  active4:boolean = false;
  active5:boolean = false;
  active6:boolean = false;
  active7:boolean = false;
  active8:boolean = false;

  selector(parametro:string){

    switch(parametro){
      case'home':
        this.active1 = true;
        this.active2 = this.active3 = this.active4= this.active5 = this.active6 = false ;
        break;
        
      case'interpolazione':
        this.active2 = true;
        this.active1 = this.active3 = this.active4= this.active5 = this.active6 = false ;
        break;

      case'interpolazione-incrementale' :
        this.active3 = true;
        this.active2 = this.active1 = this.active4= this.active5 = this.active6 = false ;
        break;

      case'filetti':
        this.active4 = true;
        this.active2 = this.active3 = this.active1= this.active5 = this.active6 = false ;
        break;

      case'asole':
        this.active5 = true;
        this.active2 = this.active3 = this.active4= this.active1 = this.active6 = false ;
        break;
      
      case'lista-utensile':
        this.active6 = true;
        this.active2 = this.active3 = this.active4= this.active5 = this.active1 = false ;
        break;
    }
  }
}
