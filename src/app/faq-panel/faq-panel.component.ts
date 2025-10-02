import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';


type FaqItem = {q: string, a?: string};

@Component({
  selector: 'app-faq-panel',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './faq-panel.component.html',
  styleUrl: './faq-panel.component.css'
})
export class FaqPanelComponent {

  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  items: FaqItem[]=[
    {q: 'O que é aprendizado de máquina e como pode beneficiar minha empresa?',
      a: 'O aprendizado de máquina é uma subárea da inteligência artificial que envolve o uso de algoritmos e modelos estatísticos para que sistemas de computadores possam realizar tarefas sem serem explicitamente programados para isso. Ele pode beneficiar sua empresa em várias áreas, como previsão de demanda, otimização de processos, personalização de marketing, detecção de fraudes e muito mais, aumentando a eficiência e a competitividade.'
     },
    {q: 'Como seria o processo de desenvolvimento de um modelo de aprendizado de máquina em minha empresa?', 
      a: 'O processo envolve várias etapas, como: reuniões iniciais, coleta e análise de dados, desenvolvimento dos modelos previsivos, reuniões de acompanhamento e entrega final. Para mais detalhes, consulta a seção "Nossa operação".'
    },
    {q: 'Minha empresa precisa ter uma equipe de TI especializada para usar os modelos de aprendizado de máquina?',
      a: 'Não necessariamente. Nossa equipe oferece suporte completo desde o desenvolvimento até a implementação dos modelos. Oferecemos treinamentos e suporte técnico para garantir que sua equipe consiga operar os modelos de forma eficiente, mesmo sem conhecimentos avançados em TI.'
    },
    {q: 'Quanto tempo leva para desenvolver e implementar um modelo de aprendizado de máquina?',
      a: 'O tempo necessário varia conforme a complexidade do projeto e a quantidade de dados disponíveis. Em geral, o desenvolvimento pode levar de algumas semanas a alguns meses. Durante a reunião inicial, forneceremos uma estimativa mais precisa com base nas suas necessidades específicas.'
    },
    {q: 'É necessário ter uma grande quantidade de dados para utilizar aprendizado de máquina?',
      a: 'Ter uma quantidade significativa de dados pode melhorar a eficácia dos modelos, mas não é estritamente necessário. Dependendo do problema, podemos trabalhar com dados menores e ainda assim obter resultados valiosos. Em alguns casos, técnicas de aumento de dados ou utilização de dados sintéticos podem ser aplicadas.'
    },
    {q: 'Como vocês garantem a segurança e a privacidade dos dados da minha empresa?',
      a: 'Levamos a segurança e a privacidade dos dados muito a sério. Seguimos as melhores práticas de segurança da informação. Além disso, assinamos acordos de confidencialidade para proteger seus dados e garantir que eles sejam utilizados apenas para os fins acordados.'
    },
    {q: 'Vocês oferecem suporte e manutenção após a entrega do modelo?',
      a: 'Sim, oferecemos suporte contínuo e serviços de manutenção para garantir que o modelo continue operando eficientemente e que quaisquer problemas sejam rapidamente resolvidos. Nosso objetivo é garantir que sua empresa obtenha o máximo benefício do modelo de aprendizado de máquina.'
    },
    {q: 'Minha empresa pode fazer alterações no modelo após a entrega?',
      a: 'Sim, entendemos que as necessidades empresariais podem mudar com o tempo. Oferecemos serviços de ajuste e re-treinamento do modelo para garantir que ele continue atendendo às suas necessidades específicas. Estamos sempre disponíveis para discutir quaisquer alterações necessárias'
    },
    {q: 'Como posso começar a trabalhar com a sua empresa?',
      a: 'Você pode entrar em contato conosco através do email dedalusbi@gmail.com. Agendaremos uma reunião inicial para discutir suas necessidades e como podemos ajudá-lo a alcançar seus objetivos através de soluções de aprendizado de máquina.'
    }
  ];

  expanded = new Set<number>();

  toggle(i:number) {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }

  doClose() {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.doClose();
  }

}
