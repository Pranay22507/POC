import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
// import * as venn from 'venn.js';
import * as d3 from 'd3';

@Directive({
  selector: '[appVennDiagram]'
})
export class VennDiagramDirective implements OnInit{
  chart:any;
  sets = [
    { sets: ["A"], size: 20 },
    { sets: ["B"], size: 8 },
    { sets: ["C"], size: 5 },
    { sets: ["D"], size: 10 },
    { sets: ["A", "B"], size: 7 },
    { sets: ["A", "C"], size: 2 },
    { sets: ["A", "D"], size: 2 },
    { sets: ["B", "C"], size: 2 },
    { sets: ["B", "D"], size: 2 }
  ];
  constructor( private el: ElementRef ,private renderer:Renderer2 ) {}
  ngOnInit(): void {
 
  console.log("d3 ", d3);
  // console.log("venn ", venn);

  //  this.chart = venn.VennDiagram();
  d3.select( this.el.nativeElement)
    .datum(this.sets)
    .call(this.chart);

  console.log(this.sets);
  }

}


