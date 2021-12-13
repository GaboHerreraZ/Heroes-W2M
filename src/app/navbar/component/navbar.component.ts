import { 
  Component, 
  OnInit 
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Flag } from './shared/flag.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flags = [
    { 
      id: 1,
      title: 'Es',
      name: 'es',
      url: '../../assets/flags/spanish.gif'
    },
    { 
      id: 2,
      title: 'En',
      name: 'en',
      url: '../../assets/flags/usa.gif'
    }
  ]

  flag: Flag;

  constructor(private translate: TranslateService) {
    this.flag = this.flags[0];
    this.translate.setDefaultLang(this.flag.name);
    this.translate.use(this.flag.name);
  }

  ngOnInit(): void {
  }

  select(flag: Flag): void {
    this.flag = flag;
    this.translate.use(this.flag.name);
  }

}