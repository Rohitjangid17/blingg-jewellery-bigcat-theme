import { Component } from '@angular/core';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent {
  allCategory: { id: number, categoryName: string }[] = [];

  ngOnInit(): void {
    this.allCategory = [
      {
        id: 1,
        categoryName: "rings"
      },
      {
        id: 2,
        categoryName: "bracelets"
      },
      {
        id: 3,
        categoryName: "earrings"
      },
      {
        id: 4,
        categoryName: "necklaces"
      },
    ]
  }
}
