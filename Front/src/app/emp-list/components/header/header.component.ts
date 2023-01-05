import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() query= '';
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: KeyboardEvent): void {
    this.search.emit((event.target as HTMLInputElement).value)
  }
}
