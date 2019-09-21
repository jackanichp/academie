import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoire',
  templateUrl: './memoire.component.html',
  styleUrls: ['./memoire.component.css']
})
export class MemoireComponent implements OnInit {

  collapsed: Array<boolean> = [];
  
  constructor() { }

  ngOnInit() {
  }

  Collapsed(id: number): boolean {
    if(this.collapsed[id] !== undefined) {
      return this.collapsed[id];
    }
    return this.collapsed[id] = false;
  }

  clickCollapsed(id: number) {
    if(this.collapsed[id] === undefined) {
      this.collapsed[id] = true;
    } else {
      this.collapsed[id] = !this.collapsed[id];
    }
  }

}
