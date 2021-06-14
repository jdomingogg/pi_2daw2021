import { Component, OnInit, ViewChild } from '@angular/core';
import { BackDataService } from '../services/back-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logear') closebutton:any;
  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {
  }
  public onSave() {
    this.closebutton.nativeElement.click();
  }
}
