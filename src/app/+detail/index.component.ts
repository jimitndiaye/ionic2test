import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AlertController, NavController, Nav } from 'ionic-angular';


@Component({
  selector: 'ionic-page',

  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Ionic Page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <h1>Hello from Ionic Page</h1>
    <button (click)="showModal()">Show Alert</button>
  </ion-content>
  `
})
export class IonicPage {
  constructor(private alertController: AlertController) {

  }

  ngOnInit() {
    console.log('hello `IonicPage` component');
  }

  showModal() {
    const alert = this.alertController.create({
      buttons: ['Ok'],
      message: "Here's an alert",
      title: 'My alert'
    });
    alert.present();
  }
}

@Component({
  selector: 'index',

  template: `
  Hello from index page!<br/>
    <ion-nav [root]="ionicPage"></ion-nav>
  `
})
export class Index implements OnInit {
  ionicPage = IonicPage;
  @ViewChild(Nav) nav: NavController;
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component');
  }
}
