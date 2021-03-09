import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[appD3BarGraph]',
})
export class D3BarGraphDirective implements OnInit {
  private data = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
  ];

  private svg: any;
  private width = 650;
  private height = 300;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    //console.log(this.data.map((d) => d.Framework));
    this.svg = d3
      .select(this.el.nativeElement)
      .append('svg')
      .attr('width', this.width + 100)
      .attr('height', this.height + 100)
      .append('g')
      .attr('transform', 'translate('+60+',' +60+ ')');

    // Create the X-axis
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(this.data.map((d) => d.Framework))
      .padding(0.5);

    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + 300 + ')')
      .call(d3.axisBottom(x));



    // Create the Y-axis 
    const y = d3
    .scaleLinear()
    .range([this.height, 0])
    .domain([0, 200000]);
    
    this.svg
    .append('g')
    .call(d3.axisLeft(y));



    // Create and fill bars
    this.svg
      .selectAll()
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d: { Framework: string }) => x(d.Framework))
      .attr('y', (d: { Stars: d3.NumberValue }) => y(d.Stars))
      .attr('width',70)
      //max height is 300
      .attr(
        'height',
        (d: { Stars: d3.NumberValue }) => this.height - y(d.Stars)
      )
      .attr('fill', '#d04a35');
  }
}
