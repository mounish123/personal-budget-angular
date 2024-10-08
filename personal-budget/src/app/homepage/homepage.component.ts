import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
 import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  public dataSource =
    {
        datasets: [
            {
                data: [''],
                backgroundColor: [
                    '#ffcdf6',
                    '#ff6384',
                    '#36a2eb',
                ],
            }
        ],
        labels: ['']
    };

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any){

  }

  ngOnInit(): void{
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for(var i = 0 ; i < res.myBudget.length; i++ ){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;

    }
    this.createChart();
    });
  }
    createChart() {
      // console.log("new",this.dataSource);
       if (isPlatformBrowser(this.platformId)) {
        // const ctx = "myChart";
        const ctx = <HTMLCanvasElement>document.getElementById("myChart");
        var my = new Chart(ctx, {
            type: 'pie',
            data: this.dataSource
        });}
      // var ctx = document.getElementById("myChart").getContext("2d");
      // <HTMLCanvasElement>

  }

}


