import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  TuitionFeeAmount: number;
  PaymentTerms: number;

  InterestRate: number;
  TotalInterestPayable: number;
  TotalAmountPayable: number;
  MonthlyPayment: number;
  
  Error: bool;
  NoError: bool;
  ErrorMessage: String;
  
  InstallmentPlanCalculator() {
    this.Error = false;
    this.NoError = false;
    if (
      this.PaymentTerms == 12 ||
      this.PaymentTerms == 18 ||
      this.PaymentTerms == 24
    ) {
      this.NoError = true;
      this.InterestRate = 0.0075;
      this.TotalInterestPayable =
        this.TuitionFeeAmount * this.InterestRate * this.PaymentTerms;
      this.TotalAmountPayable =
        +this.TuitionFeeAmount + +this.TotalInterestPayable;
      this.MonthlyPayment = this.TotalAmountPayable / this.PaymentTerms;
    } else {
      this.Error = true;
    }
  }
}