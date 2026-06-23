import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  candidateName: string = '';
  joiningDate: string = '';

  generatePDF() {

    const pdf = new jsPDF();

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('DEBUGIZ TECHNOLOGIES', 55, 20);

    pdf.setFontSize(16);
    pdf.text('JOINING CONFIRMATION LETTER', 40, 35);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);

    pdf.text(`Date: ${this.joiningDate}`, 20, 50);

    pdf.text('To,', 20, 65);
    pdf.text(`Mr./Ms. ${this.candidateName}`, 20, 75);

    pdf.text(`Dear ${this.candidateName},`, 20, 95);

    const content = [
      'We are pleased to confirm your joining with Debugiz Technologies.',
      '',
      `This letter serves as an official confirmation of your employment with our organization. As per our records, your Date of Joining is ${this.joiningDate}.`,
      '',
      'We are confident that your skills, knowledge and dedication will contribute significantly to the success of our company.',
      '',
      'We look forward to working with you and wish you a rewarding and successful career with us.',
      '',
      'Please retain this letter for your records. Should you require any assistance, please feel free to contact the HR Department.',
      '',
      'We welcome you to the Debugiz Technologies family and wish you all the best.'
    ];

    let y = 110;

    content.forEach(line => {
      pdf.text(line, 20, y);
      y += 10;
    });

    pdf.text('Sincerely,', 20, y + 15);
    pdf.text('HR Manager', 20, y + 30);
    pdf.text('Debugiz Technologies', 20, y + 40);

    pdf.save(`Joining_Confirmation_Letter_${this.candidateName}.pdf`);
  }
}