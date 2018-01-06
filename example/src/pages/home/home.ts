import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BluetoothLE } from '@ionic-native/bluetooth-le';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public bluetoothle: BluetoothLE) {

    bluetoothle.initialize().then(ble => {
      console.log('ble', ble.status) // logs 'enabled'
    });

  }


}
