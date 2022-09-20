import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {
  tokenAcces = '73f5f87261b14a851411b70714a7d309';
  urlRequestComics = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=58b19998ab17e3727814a8aecbaa4328';
  contentBuild = '';

  constructor() { }

  getAllComics() {
    return fetch(`${this.urlRequestComics}&hash=${this.tokenAcces}`)
      .then(response => response.json())
      .then(response => {
        let contador = 0;
        for (let index = 0; contador < 10; index++) {
          const element = response.data.results[index];
          if (element.images.length) {
            contador++;
            this.contentBuild += `
            <div class="card" style="width: 18rem;">
              <img src="${element.images[0].path}.${element.images[0].extension}" class="card-img-top" alt="${element.title}">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
              </div>
            </div>
            `;
          }
        }
        return this.contentBuild
      })
  }
}