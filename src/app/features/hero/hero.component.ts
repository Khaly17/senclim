import { Component } from '@angular/core';
import { OurServiceComponent } from '../our-service/our-service.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [OurServiceComponent, AboutComponent, ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
