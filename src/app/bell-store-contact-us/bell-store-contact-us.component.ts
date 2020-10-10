import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bell-store-contact-us',
  templateUrl: './bell-store-contact-us.component.html',
  styleUrls: ['./bell-store-contact-us.component.css']
})
export class BellStoreContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sweetSend(){
    Swal.fire({
      
      icon: 'success',
      title: 'Your message has been sent!',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
