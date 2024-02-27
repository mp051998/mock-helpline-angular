import { Component } from '@angular/core';

// Interfaces
interface FaqItem {
  question: string;
  answer: string;
}
interface FaqGroup {
  title: string;
  items: Array<FaqItem>;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs: Array<FaqGroup> = [{
    title: "General FAQs",
    items: [{
      question: "How do I contact support?",
      answer: "You can contact support via email, phone or live chat. Please visit the contact page for more information."
    }, {
      question: "What are your operating hours?",
      answer: "Our operating hours are Monday to Friday, 9am to 5pm."
    }, {
      question: "How long does it take to receive a response?",
      answer: "We aim to respond to all inquiries within 24 hours."
    }, {
      question: "Do you offer self-service options?",
      answer: "Not yet, but it's definitely in the pipeline."
    }]
  }, {
    title: "Login/Account FAQs",
    items: [{
      question: "How do I create an account?",
      answer: "You can create an account by visiting the registration page and following the instructions."
    }, {
      question: "I forgot my password. How do I reset it?",
      answer: "You can reset your password by clicking the 'Forgot password?' link on the login page."
    }, {
      question: "How do I update my account information?",
      answer: "You can update your account information by logging in and visiting the account settings page."
    }]
  }];

  panelOpenState = false;
}
