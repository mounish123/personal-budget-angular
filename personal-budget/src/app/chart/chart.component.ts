// // import { Component } from '@angular/core';

// import { Component, OnInit, ElementRef } from '@angular/core';
// import * as d3 from 'd3';
// import axios from 'axios';

// interface BarData {
//   name: string;
//   value: number;
// }

// @Component({
//   selector: 'pb-chart',
//   templateUrl: './chart.component.html',
//   styleUrl: './chart.component.scss'
// })
// export class ChartComponent implements OnInit {
//   constructor(private el: ElementRef) {}

//   ngOnInit() {
//     this.getBarChartData();
//   }

//   private createBarChart(data: any[]) {
//     const margin = { top: 20, right: 20, bottom: 60, left: 70 },
//           width = 400 - margin.left - margin.right,
//           height = 200 - margin.top - margin.bottom;

//     // Clear previous chart
//     d3.select(this.el.nativeElement).select('#bar-chart').select('svg').remove();

//     const svg = d3.select('#bar-chart').append('svg')
//         .attr('width', width + margin.left + margin.right)
//         .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//         .attr('transform', `translate(${margin.left},${margin.top})`);

//     const x = d3.scaleBand()
//         .domain(data.map(d => d.name))
//         .range([0, width])
//         .padding(0.2);

//     const y = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d.value)!])
//         .nice()
//         .range([height, 0]);

//     svg.append('g')
//       .attr('class', 'x-axis')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x));

//     svg.append('g')
//       .attr('class', 'y-axis')
//       .call(d3.axisLeft(y).ticks(5));

//     svg.selectAll('.bar')
//         .data(data)
//       .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d.name)!)
//         .attr('y', d => y(d.value))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(d.value))
//         .attr('fill', '#4e79a7');
//   }

//   private getBarChartData() {
//     axios.get<BarData[]>('http://localhost:3000/bar-chart-data')  // Specify the type here
//       .then(res => {
//         this.createBarChart(res.data);  // Now TypeScript knows the type of res.data
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }

// }


import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataService, BarData } from '../data.service'; // Import DataService

@Component({
  selector: 'pb-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(private el: ElementRef, private dataService: DataService) {}

  ngOnInit() {
    this.getBarChartData();
  }

  private createBarChart(data: BarData[]) {
    const margin = { top: 20, right: 20, bottom: 60, left: 70 },
          width = 400 - margin.left - margin.right,
          height = 200 - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(this.el.nativeElement).select('#bar-chart').select('svg').remove();

    const svg = d3.select('#bar-chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)!])
        .nice()
        .range([height, 0]);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).ticks(5));

    svg.selectAll('.bar')
        .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.name)! as number)
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .attr('fill', '#4e79a7');
  }

  private getBarChartData() {
    this.dataService.fetchBarChartData().subscribe(data => {
      if (data.length > 0) {
        this.dataService.setBarChartData(data);
        console.log('Using fetched data for chart:', data);
        this.createBarChart(data);
      } else {
        console.log('No new data fetched; using existing data.');
        const storedData = this.dataService.getBarChartData();
        this.createBarChart(storedData);
      }
    });
  }
}
