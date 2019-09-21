import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {

  collapsed: Array<boolean> = [];
  
  constructor(private sanitizer:DomSanitizer) {    }

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

  downloadSafe(file: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(file);
    }

}
