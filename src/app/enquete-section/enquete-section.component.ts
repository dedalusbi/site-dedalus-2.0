import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PanelSequenceService} from '../panels/panel-sequence.service';

@Component({
  selector: 'app-enquete-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './enquete-section.component.html',
  styleUrl: './enquete-section.component.css'
})
export class EnqueteSectionComponent {

  selectedVote: string = '';
  voteResults: { [key:string] : number } = {};
  showResults: boolean = false;
  backendUrl='https://3000-idx-site-dedalus-20-1745439688468.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev';

  showConfirmationPanel:boolean = false;

  constructor (private http: HttpClient, public panelSequenceService: PanelSequenceService) {

  }

  submitVote(voteValue:string): void {

    this.selectedVote = voteValue;

    if (!this.selectedVote) {
      alert('Por favor, selecione uma opção antes de pressionar.');
      return;
    }

    const url=this.backendUrl+'/api/vote';

    const requestBody = {vote: this.selectedVote};

    this.http.post(url, requestBody).subscribe(
      (response) => {
        console.log('Voto enviado com sucesso!', response);
        this.getVoteResults();

        //Lógica para exibir o painel de confirmação

        this.showConfirmationPanel = true;

      },
      (error) => {
        console.error('Erro ao enviar voto:', error);
        alert('Ocorreu um erro ao registrar seu voto. Tente novamente mais tarde.'); // Feedback de erro
      }
    );

    

  }

  closeConfirmationPanel() {
    this.showConfirmationPanel = false;
  }



  getVoteResults():void {
    const url = this.backendUrl+'/api/votes';
  
    this.showResults=false;
    this.voteResults={};

    setTimeout(()=> {
      this.http.get(url).subscribe(
        (response: any) => {
          this.voteResults = response;
          this.showResults = true;
          console.log('Resultados dos votos: ', this.voteResults);
        },
        (error) => {
          console.error('Erro ao obter resultados dos votos:', error);
        }
  
      );
    }, 50);

    
  }


  getVotePercentage(option: string): number {
    if (!this.voteResults || !this.voteResults[option] || !this.getTotalVotes()) {
      return 0;
    }

    let totalVotes = this.getTotalVotes();
    console.log('Total votes: ', totalVotes);

    return (this.voteResults[option] / totalVotes) * 100;
  }


  getTotalVotes(): number {
    if (!this.voteResults) {
      return 0;
    }
    
    return Object.values(this.voteResults).reduce(
      (total,current) => total+current,0
    );

  }
  
}
