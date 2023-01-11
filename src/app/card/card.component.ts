import { Component, } from '@angular/core';


  
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
    
  }
  hidden :boolean = false;
    
   
 
 isHidden(){
  this.hidden = !this.hidden;
  
}
}
