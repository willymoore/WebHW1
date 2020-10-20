import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {
  numTravelers = 0;
  totalCost = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTravelerCost(): void {
    this.totalCost = this.numTravelers * 150;
  }

}
