import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    ProgressBarModule,
    ButtonModule,
    TagModule,
    InputTextModule   // ✅ ADD THIS
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  halts = [
    {
      date: '16-06-2025 15:39',
      vehicle: '749SRJ140H',
      location: 'Gurgaon Workshop',
      days: 272,
      reason: 'Driver Issue'
    },
    {
      date: '24-05-2025 14:09',
      vehicle: '3557RJ470A',
      location: 'Gurgaon Workshop',
      days: 264,
      reason: 'Driver Issue'
    }
  ];
 getTotalDays(): number {
    return this.halts.reduce((total, halt) => total + halt.day, 0);
  }
}
