import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css'],
})
export class StatFiltersComponent {
  search: FormGroup;

  constructor(fb: FormBuilder) {
    this.search = fb.group({
      title: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
