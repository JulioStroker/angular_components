import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterViewInit, AfterViewChecked,  OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges , OnInit, DoCheck, AfterContentChecked,
 AfterViewInit, AfterViewChecked,  OnDestroy{

  @Input() valorInicial: number = 10;


  constructor() { 
    console.log('%c CONSTRUTOR', 'background-color:#2596be;')
  }

  ngOnChanges(){
    console.log('%c ngOnChanges', 'background-color:#eeeee4;')
  }

  ngOnInit(): void {
    console.log('%c ngOnInit', 'background-color:#e28743;')
  }

  ngDoCheck(){
    console.log('%c ngDoCheck', 'background-color:#76b5c5;')
  }

  ngAfterContentChecked(){
    console.log('%c ngAfterContentChecked', 'background-color:#0a6ba2;')
  }

  ngAfterViewInit(){
    console.log('%c ngAfterViewInit', 'background-color:#063970;')
  }
  
  ngAfterViewChecked(){
    console.log('%c ngAfterViewChecked', 'background-color:#873e23;')
  }

  ngOnDestroy(){
    console.log('%c ngOnDestroy', 'background-color:green;')
  }

}
