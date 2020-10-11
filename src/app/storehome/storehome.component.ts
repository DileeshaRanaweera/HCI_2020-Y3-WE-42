import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-storehome',
  templateUrl: './storehome.component.html',
  styleUrls: ['./storehome.component.css']
})
export class StorehomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sweetadd(){
    Swal.fire({
      icon: 'success',
      title: 'Successfully added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
