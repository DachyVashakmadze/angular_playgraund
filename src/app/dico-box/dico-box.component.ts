import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dico-box',
  templateUrl: './dico-box.component.html',
  styleUrls: ['./dico-box.component.css']
})
export class DicoBoxComponent implements OnInit {
  object:HTMLElement|null=null;
  currentTimeInSeconds=0;
  second=0;
  re=0;
  gr=0;
  bl=0;
  
  constructor() { }

  ngOnInit(): void {
    this.object=document.getElementById("d-box");
    this.calculatecolor();
  }
  onButtonClick(){  
  }
  calculatecolor(){
    setTimeout(() => {
    this.currentTimeInSeconds=Math.floor(Date.now()/1000);
    this.second=this.currentTimeInSeconds%100;
    this.re=(255+21*this.second)%100;
    this.gr=(255+50*this.second)%100+80;
    this.bl=(255+13*this.second)%100+150;
    if(this.object){
      let comment=document.getElementById("text");
      if(comment){
        comment.innerHTML=" "+this.second+" red="+this.re+" green="+this.gr+" blue="+this.bl;
      }
      
      this.object.style.backgroundColor= `rgb( ${this.re}, ${this.gr}, ${this.bl})`; 
    } 
      this.calculatecolor();
    }, 1000);
  }
  
  
}
