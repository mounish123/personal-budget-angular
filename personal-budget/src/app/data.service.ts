import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface BarData {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private barChartData: BarData[] = [];

  constructor(private http: HttpClient) { }

  fetchBarChartData(): Observable<BarData[]> {
    if (this.barChartData.length > 0) {
      return of(this.barChartData);
    }
    return this.http.get<BarData[]>('http://localhost:3000/bar-chart-data').pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]); // Return an empty array on error
      })
    );
  }

  getBarChartData(): BarData[] {
    return this.barChartData;
  }

  setBarChartData(data: BarData[]): void {
    this.barChartData = data;
    console.log('Bar chart data set:', this.barChartData);
  }
}

