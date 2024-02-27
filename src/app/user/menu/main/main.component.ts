import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  menuItems: Array<MenuItem> = [{
    id: 'email',
    title: 'Email',
    description: 'Request support via email',
    icon: 'email',
    route: '/user/menu/email'
  }, {
    id: 'phone',
    title: 'Phone',
    description: 'Request a call back',
    icon: 'phone',
    route: '/user/menu/phone'
  }, {
    id: 'chat',
    title: 'Chat',
    description: 'Chat with a support agent',
    icon: 'chat',
    route: '/user/menu/chat'
  }, {
    id: 'faq',
    title: 'FAQ',
    description: 'Find answers to common questions',
    icon: 'help',
    route: '/user/menu/faq'
  }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenuCardClick(menuItem: MenuItem) {
    console.log('Card clicked', menuItem);
    this.router.navigate([menuItem.route]);
  }
}
