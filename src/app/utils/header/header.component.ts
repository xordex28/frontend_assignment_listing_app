import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;
  @Input() backButton = false;
  @Input() modal = false;
  @Input() modalClose = true;

  constructor() { }

  ngOnInit() {}

}
