import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  // name='firoz khan'
  // image="../../assets/img/parts/4.jpg"
   public data = [
    {name:'Sheet',image:'../../assets/img/parts/sheet.jpg'},
    {name:'wheel',image:'../../assets/img/parts/wheel.jpg'},
    {name:'handle',image:'../../assets/img/parts/handle.jpg'},
    {name:'frame',image:'../../assets/img/parts/frame.jpg'},
    {name:'frontwheel',image:'../../assets/img/parts/frontwheel.jpg'},
    {name:'Other',image:'../../assets/img/parts/4.jpg'},
    {name:'Other',image:'../../assets/img/parts/1.jpg'},
    {name:'Other',image:'../../assets/img/parts/8.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
