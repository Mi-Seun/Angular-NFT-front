import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { EthTypeOfClass } from 'src/app/interface/eth.interface';
import { EthserviceService } from 'src/app/services/eth.service/ethservice.service';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent {
  eth ?: EthTypeOfClass[];
  @ViewChild("chart") chart !: ElementRef;

  data: any = [];

  constructor(private http: HttpClient , private EthValuesService : EthserviceService) {
  }

  ngOnInit() {
  this.getEthValues();
  }

  // getting the Eth Values using the service
  getEthValues(){
    this.EthValuesService.getEthValues().subscribe(
      (data :EthTypeOfClass[])=>{
        this.data = data;
        console.log(data);
        console.log(this.data);


        for(let i = 0; i<data.length ; i++){
          this.data[i].date_eth = this.formatDate(this.data[i].date_eth);
        }
        this.drawChart();
      }
    );
  }

  // Function used to format the retrieved date into dd-mm-yyyy
  formatDate(date: Date):string{

    let newDate: Date  = new Date(date);
    let year :number = newDate.getFullYear();
    let month:number = newDate.getMonth() +1;
    let day :number = newDate.getDate();

    return` ${day}-${month}-${year}`;
  }

  // Displaying the chart
  drawChart() {
    const ctx = this.chart.nativeElement.getContext('2d');

    // Extract the date_eth and value_eth properties from the data array
    const labels = this.data.map((item :any) => item.date_eth.trim()); // Trim to remove leading spaces
    const values = this.data.map((item: any) => item.value_eth);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'ETH Value',
            data: values,
            borderColor: 'blue',
            fill: false
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 24
              }
            }
          }
        }
      }
    });
  }
}
