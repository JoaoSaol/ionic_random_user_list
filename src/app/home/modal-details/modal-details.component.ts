import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {

  @Input() dataParser;

  cell: string;
  age: string;
  email: string;
  gender: string;
  location: string;
  city: string;
  country: string;
  allName: string;
  nat: string;
  phone: string;
  picture: string;
  registered: string;


  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // {{data.name.first}} {{data.name.last}}

    this.cell = `${this.dataParser.cell}`;
    this.age = `${this.dataParser.dob.age}`;
    this.email = `${this.dataParser.email}`;
    this.gender = `${this.dataParser.gender}`;
    this.city = `${this.dataParser.location.city}`;
    this.country = `${this.dataParser.location.country}`;
    this.allName = `${this.dataParser.name.first} ${this.dataParser.name.last}`;
    this.nat = `${this.dataParser.nat}`;
    this.phone = `${this.dataParser.phone}`;
    this.picture = `${this.dataParser.picture.large}`;
    this.registered = `${this.dataParser.registered.age}`;

    console.log(this.allName);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
