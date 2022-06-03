import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-go-top",
  template: `
    <button mat-raised-button *ngIf="showButton" (click)="goTop()">Go Top</button>
  `,
  styles: ['button {position: fixed; bottom: 20px; right: 10px; visibility:visible; background-color:#3f51b5; color:white;}']
})

export class GoTopComponent {
  private hidesScroll = 200;
  private showScroll = 500;
  showButton = false;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    if (!this.showButton && (
      (window.pageYOffset
        || this.document.documentElement.scrollTop
        || this.document.body.scrollTop)
      > this.showScroll)) {
      this.showButton = true;
    }

    if (this.showButton && (
      (window.pageYOffset
        || this.document.documentElement.scrollTop
        || this.document.body.scrollTop)
      < this.hidesScroll)) {
      this.showButton = false;
    }
  }

  goTop(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

}
