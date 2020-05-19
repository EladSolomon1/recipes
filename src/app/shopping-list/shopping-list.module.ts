import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent, 
    ],
    imports:[FormsModule,RouterModule.forChild([{path:'',component:ShoppingListComponent},
    ]),SharedModule]
    

})
export class ShoppingListModule{}