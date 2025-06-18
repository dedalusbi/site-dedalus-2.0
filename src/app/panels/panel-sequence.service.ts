import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelSequenceService {

  private showFirstPanelSubject = new BehaviorSubject<boolean>(false);
  showFirstPanel$ = this.showFirstPanelSubject.asObservable();

  private showSecondPanelSubject = new BehaviorSubject<boolean>(false);
  showSecondPanel$ = this.showSecondPanelSubject.asObservable();

  openFirstPanel() {
    this.showFirstPanelSubject.next(true);
    this.showSecondPanelSubject.next(false);
  }

  openSecondPanel() {
    this.showFirstPanelSubject.next(false);
    this.showSecondPanelSubject.next(true);
  }

  closeAllPanels() {
    this.showFirstPanelSubject.next(false);
    this.showSecondPanelSubject.next(false);
  }

  
}
