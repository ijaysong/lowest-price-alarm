import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  openedAddDialog = false;

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor() {
  }

  /**
   * ===========================================================================
   * Lifecycle Hooks https://angular.io/guide/lifecycle-hooks
   * ===========================================================================
   */
  ngOnInit() {
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onClickAddItem() {
    this.openedAddDialog = true;
  }

  onClickDeleteItem() {
    // TODO
  }

  onClosedAddDialog() {
    this.openedAddDialog = false;
  }
}
