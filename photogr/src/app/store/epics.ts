import { Injectable } from '@angular/core';

import { PhotoAPIEpics } from '../components/photo/epics';

@Injectable()
export class RootEpics {
  constructor(private animalEpics: PhotoAPIEpics) {}

  public createEpics() {
    return [
      this.animalEpics.createEpic()
    ];
  }
}
