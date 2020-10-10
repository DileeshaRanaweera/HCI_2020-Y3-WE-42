import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bell-store-register',
  templateUrl: './bell-store-register.component.html',
  styleUrls: ['./bell-store-register.component.css']
})
export class BellStoreRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sweetReg(){
    Swal.fire({
      
      icon: 'success',
      title: 'Successfully Registered !',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
