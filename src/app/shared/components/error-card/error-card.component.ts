import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

export interface IError {
  header: string;
  message: string;
}

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
})
export class ErrorCardComponent {

  @Input() error: IError;

  constructor(
    private location: Location
  ) { }

  goBack() {
    this.location.back()
  }

}
