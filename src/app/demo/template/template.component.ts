import { Component } from '@angular/core';
import { ConfigService } from './configuration.service';
import { data } from '../../../assets/dates';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers: [ConfigService],
})
export class TemplateComponent {
  columns = [
    { key: 'name', title: 'Name', width: '15%', orderEnabled: true, searchEnabled: true },
    { key: 'age', title: 'Age', width: '15%', orderEnabled: true, searchEnabled: false },
    { key: 'company', title: 'Company', width: '15%', orderEnabled: true },
    { key: 'name', title: 'Name', width: '15%', orderEnabled: false },
    { key: 'phone', title: 'Phone', width: '15%', orderEnabled: false },
    { key: 'addres.street', title: 'Address', width: '15%', orderEnabled: true },
    { key: '', title: 'Action', width: '5%', orderEnabled: false, searchEnabled: false },
  ];
  data = [];
  configuration;
  toggleRowIndex;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  eventEmitted($event) {
    console.log('$event', $event);
  }

  onRowClickEvent($event, index: number): void {
    $event.preventDefault();
    this.toggleRowIndex = { index: index };
  }
}
