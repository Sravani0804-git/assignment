import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  max = 300000;
  min = 100000;
  thumbLabel = false;
  value = 0;
  valueIncome =0;
  tickInterval = 1;
  getSliderTickInterval(): number | "auto" {
     return 0;
  }
  getSliderExpenseInterval(): number | "auto" {
    return 0;
 }
  onInputChange(event) {
    document.getElementById('showValue').textContent = "₹"+event.value;
   }
   onExpenseChange(event) {
    document.getElementById('showExpense').textContent = "₹"+event.value;
   }
}
