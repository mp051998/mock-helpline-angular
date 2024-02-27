import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  menuCards = [{
    id: 'email',
    title: 'Email',
    description: 'Request support via email',
    icon: 'email'
  }, {
    id: 'phone',
    title: 'Phone',
    description: 'Request a call back',
    icon: 'phone'
  }, {
    id: 'chat',
    title: 'Chat',
    description: 'Chat with a support agent',
    icon: 'chat'
  }, {
    id: 'faq',
    title: 'FAQ',
    description: 'Find answers to common questions',
    icon: 'help'
  }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenuCardClick(menuType: string) {
    console.log('Card clicked', menuType);
    if (menuType === 'phone') {
      this.router.navigate(['/user/menu/phone']);
    }
  }
}
