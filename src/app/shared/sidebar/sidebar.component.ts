import { Component, OnInit } from '@angular/core'
import { SidebarService } from 'src/app/services/shared/sidebar.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  constructor(private sidebar: SidebarService) { }

  ngOnInit() {
  }

}
