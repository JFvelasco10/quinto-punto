import { Component, OnInit } from '@angular/core';
import { ConsumirApiService } from './consumir-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly consumirApiService: ConsumirApiService) {}

  ngOnInit(): void {
    this.consumirApiService.getAllComics().then((res) => {
      const element = document.getElementById('content-list');
      if (element) {
        element.innerHTML = res;
      }
    });
  }
}
