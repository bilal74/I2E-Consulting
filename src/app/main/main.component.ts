import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  message: string = ''; 

  chatHeight: string = '0';
  messages: { text: string; from: string }[] = [];

  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) {}
  toggleChat() {
    this.chatHeight = this.chatHeight === '0' ? '80%' : '0';
  }

  closeChat() {
    this.chatHeight = '0';
  }

  // toggleVoice() {
  //   // Implement voice recording functionality here
  // }

  sendMessage() {
    if (this.message.trim() !== '') {
      
      this.messages.push({ text: this.message, from: 'user' });

      
      this.http.post(this.apiUrl, { message: this.message }).subscribe((response: any) => {
       
        console.log('API Response:', response);
        this.messages.push({ text: response?.message, from: 'bot' }); 
      }, (error) => {
        console.error('Error sending message to API:', error);
      });

      this.message = ''; 
    }
  }
}
