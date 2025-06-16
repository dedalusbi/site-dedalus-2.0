import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquete-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './enquete-section.component.html',
  styleUrl: './enquete-section.component.css'
})
export class EnqueteSectionComponent {

  selectedVote: string = '';

  constructor (private http: HttpClient) {

  }

  submitVote(): void {
    if (!this.selectedVote) {
      alert('Por favor, selecione uma opção antes de pressionar.');
      return;
    }

    const backendUrl='https://3000-idx-site-dedalus-20-1745439688468.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/api/vote';

    const requestBody = {vote: this.selectedVote};

    this.http.post(backendUrl, requestBody).subscribe(
      (response) => {
        console.log('Voto enviado com sucesso!', response);
        alert('Seu voto foi registrado! Obrigado!'); // Feedback para o usuário
        // Opcional: atualizar a UI com o novo contador recebido na resposta (response)
      },
      (error) => {
        console.error('Erro ao enviar voto:', error);
        alert('Ocorreu um erro ao registrar seu voto. Tente novamente mais tarde.'); // Feedback de erro
      }
    );

  }

}
