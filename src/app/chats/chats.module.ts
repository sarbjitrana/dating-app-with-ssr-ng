import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats.component';
//import FormsModule here
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    ChatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatsModule { }
