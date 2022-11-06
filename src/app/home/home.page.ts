import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { ApiService } from '../service/api.service';
import { ModalDetailsComponent } from './modal-details/modal-details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  isModalOpen = false;

  userData: any;

  constructor(
    private api: ApiService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getInformation();
  }

  getInformation() {
    this.api.get(`api/?results=${20}`, '').subscribe((response) => {
      console.log('Resposta consulta ', response);

      this.userData = response.results;
      console.log(this.userData);

      // this.notifier.notify('success', 'Login efetuado com exito!');
    }, error => {

      // this.notifier.notify('error', 'Erro ao conectar com o servidor');
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.userData.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async openModal(dataParser: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetailsComponent,
      componentProps: {dataParser}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;4
      console.log('Modal Fechado');
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

