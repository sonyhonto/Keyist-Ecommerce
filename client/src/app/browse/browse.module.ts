import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { HousingServiceComponent } from '../header/housing-service/housing-service.component'; 
import { RouterModule } from '@angular/router';
import { BrowseRoutes } from './browse.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(BrowseRoutes)
  ],
  declarations: [BrowseComponent, HousingServiceComponent]
})
export class BrowseModule {
}
