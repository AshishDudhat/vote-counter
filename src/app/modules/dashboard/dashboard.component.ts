import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  voteImages: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getImagesData();
  }

  getImagesData() {
    this.dashboardService.getImages().subscribe((res: any) => {
      this.voteImages = res.filter((val,i)=> {
        val['vote'] = 0;
        return i < 10;
      });
      this.manageImageDescOrder();
    })
  }

  addVote(data) {
    let idx= this.voteImages.findIndex(el => el.id == data.id);
    this.voteImages[idx].vote++;
    this.manageImageDescOrder();
  }

  manageImageDescOrder() {
    this.voteImages.sort((a, b) => {
      return b.vote - a.vote;
    });
  }

  reset() {
    this.getImagesData();
  }

}
