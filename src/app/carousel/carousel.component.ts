import { Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FormsModule, RouterModule, routes, BrowserAnimationsModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



  items = [

    //academia
    {  
      id: 1,
      title: 'Academia',
      imageSrc: '../../assets/servico_academia.png',
      contentTitle: 'Academia',
      contentSections: [
        { sectionTitle: 'Previsão de Demanda', sectionText: 'Use Aprendizado de Máquina para prever a demanda por aulas e atividades, otimizando a alocação de instrutores e evitando superlotação.'},
        { sectionTitle: 'Segmentação de Alunos', sectionText: 'Crie perfis de alunos com base em interesses e histórico, identificando aqueles propensos a se tornarem membros de longo prazo e oferecendo benefícios personalizados.'},
        { sectionTitle: 'Análise de Feedback', sectionText: 'Analise feedbacks e posts em redes sociais para identificar melhorias nos serviços e aprimorar a experiência e reputação da academia.'},
        { sectionTitle: 'Otimização de Preços', sectionText: 'Aplique precificação dinâmica para ajustar os preços de planos de assinatura conforme o perfil do aluno e outros fatores, maximizando receita e retenção.'},
        { sectionTitle: 'Detecção de Risco de Lesões', sectionText: 'Use visão computacional para analisar vídeos de treinos e identificar posturas inadequadas, permitindo intervenções preventivas.'}
      ],
      sideImageSrc: '../../assets/divacademia.png'

    },

    //advocacia
    {  
      id:2,
      title: 'Advocacia',
      imageSrc: '../../assets/servico_advocacia.png',
      contentTitle: 'Advocacia',
      contentSections: [
        { sectionTitle: 'Análise de Jurisprudência', sectionText: 'Utilize processamento de linguagem natural para analisar um grande volume de documentos jurídicos e identificar precedentes relevantes para cada caso, otimizando o trabalho dos advogados.'},
        { sectionTitle: 'Previsão de resultados de casos', sectionText: 'Utilize modelos preditivos para estimar a probabilidade de sucesso em diferentes tipos de casos, auxiiando na tomada de decisões estratégicas.'},
        { sectionTitle: 'Gestão de Documentos', sectionText: 'Com automação de processos e análise de texto, podemos ajudar o escritório a gerenciar grandes volumes de documentos legais de forma mais eficiente e precisa.'}
      ],
      sideImageSrc: '../../assets/imagemdivadvocacia.png'

    },

    //boutique
    {  
      id:3,
      title: 'Boutique',
      imageSrc: '../../assets/servico_boutique.png',
      contentTitle: 'Boutique',
      contentSections: [
        { sectionTitle: 'Análise de tendências de moda', sectionText: 'Utilize Aprendizado de Máquina para analisar as últimas tendências de moda, ajudando na compra de produtos relevantes e na criação de coleções atraentes.'},
        { sectionTitle: 'Segmentação de clientes por estilo', sectionText: 'Crie perfis de clientes com base em seus históricos de compras e preferências, permitindo que você possa personalizar ofertas e campanhas de marketing.'},
        { sectionTitle: 'Recomendação de looks', sectionText: 'Utilize algoritmos para sugerir looks completos para os clientes, aumentando a conversão de vendas.'}
      ],
      sideImageSrc: '../../assets/divboutique.png'

    },

    //clínica
    {  
      id:4,
      title: 'Clínica',
      imageSrc: '../../assets/servico_clinica.png',
      contentTitle: 'Clínica',
      contentSections: [
        { sectionTitle: 'Análise de imagens médicas', sectionText: 'Utilize visão computacional para analisar imagens de raio-X, tomografias e outros exames médicos com maior precisão e rapidez, auxiliando no diagnóstico de doenças.'},
        { sectionTitle: 'Personalização de planos de tratamento', sectionText: 'Utilize modelos preditivos para personalizar planos de tratamento para cada paciente, com base em seu histórico médico e outros fatores relevantes.'},
        { sectionTitle: 'Identificação de pacientes de alto risco', sectionText: 'Identifique pacientes com maior risco de desenvolver complicações, permitindo a intervenção preditiva e o melhoramento do prognóstico.'}
      ],
      sideImageSrc: '../../assets/divclinica.png'

    },

    //joalheria
    {  
      id:5,
      title: 'Joalheria',
      imageSrc: '../../assets/servico_joalheria.png',
      contentTitle: 'Joalheria',
      contentSections: [
        { sectionTitle: 'Análise de comportamento do cliente', sectionText: 'Utilize reconhecimento facial e análise do comportamento para identificar os clientes mais propensos a comprar e oferecer atendimento personalizado.'},
        { sectionTitle: 'Deteção de falsificações', sectionText: 'Utilize visão computacional para autenticar joias e evitar a venda de produtos falsificados.'},
        { sectionTitle: 'Recomendação de joias', sectionText: 'Sugira joias personalizadas para cada cliente com base em seu estilo, histórico de compras e ocasião.'},
        { sectionTitle: 'Análise de mercado', sectionText: 'Analisando dados de mercado e tendências de compra, podemos identifiar os segmentos de mercado mais lucrativos e o mix de produtos da joalheria para atender às demandas do cliente.'}
      ],
      sideImageSrc: '../../assets/divjoalheria.png'

    },

    //lava-jato
    {  
      id:6,
      title: 'Lava-jato',
      imageSrc: '../../assets/servico_lavajato.png',
      contentTitle: 'Lava-jato',
      contentSections: [
        { sectionTitle: 'Otimização de agendamento', sectionText: 'Com análise de dados sobre padrões de agendamento, tempos de serviço, tempo que os clientes estão dispostos a esperar, etc... Podemos otimizar o agendamento de clientes para maximizar a eficiência do lava-jato e reduzir o tempo de espera.'},
        { sectionTitle: 'Análise de fidelização de clientes', sectionText: 'Identifique os clientes mais frequentes e ofereça programas de fidelidade personalizados para aumentar a retenção.'}
      ],
      sideImageSrc: '../../assets/divlavajato.png'

    },

    //mercado
    {  
      id:7,
      title: 'Mercado',
      imageSrc: '../../assets/servico_mercado.png',
      contentTitle: 'Mercado',
      contentSections: [
        { sectionTitle: 'Previsões de vendas e preço dinâmico', sectionText: 'Utilizando dados históricos e fatores externos, podemos prever a demanda por diferentes produtos, otimizar o estoque e estabelecer um modelo de preço dinâmico visando a maximização do lucro.'},
        { sectionTitle: 'Análise do cesto de compras', sectionText: 'Identifique padrões de compra e segmente seus clientes para personalizar ofertas e promoções.'}
      ],
      sideImageSrc: '../../assets/divmercado.png'

    },

    //restaurante
    {  
      id:8,
      title: 'Restaurante',
      imageSrc: '../../assets/servico_restaurante.png',
      contentTitle: 'Restaurante',
      contentSections: [
        { sectionTitle: 'Previsão de demanda', sectionText: 'Use Aprendizado de Máquina para prever a demanda de pratos e otimizar estoques.'},
        { sectionTitle: 'Estoque inteligente', sectionText: 'Ajuste pedidos automaticamente com base na demanda e histórico de vendas.'},
        { sectionTitle: 'Segmentação de clientes', sectionText: 'Crie perfis de clientes para personalizar ofertas e menus.'},
        { sectionTitle: 'Identificação de clientes VIP', sectionText: 'Reconheça clientes lucrativos e ofereça programas de fidelidade.'},
        { sectionTitle: 'Análise de sentimentos', sectionText: 'Analise feedbacks para identificar melhorias na experiência do clientes.'},
        { sectionTitle: 'Preço Dinâmico', sectionText: 'Ajuste preços conforme o horário e dia para maximizar a lucratividade.'},
        { sectionTitle: 'Marketing Personalizado', sectionText: 'Envie ofertas personalizadas para aumentar a conversão e fidelização.'},
        { sectionTitle: 'Sistema de Recomendação de pratos', sectionText: 'Recomende pratos com base no histórico de pedidos dos clientes.'}
      ],
      sideImageSrc: '../../assets/divrestaurante.png'

    },

    //sorveteria
    {  
      id:9,
      title: 'Sorveteria',
      imageSrc: '../../assets/servico_sorveteria.png',
      contentTitle: 'Sorveteria',
      contentSections: [
        { sectionTitle: 'Análise de sazonalidade', sectionText: 'Preveja a demanda por produtos em diferentes épocas do ano ou do mês, otimizando a produção e evitando desperdícios.'},
        { sectionTitle: 'Análise de feedback dos clientes', sectionText: 'Analisando as avaliações e comentários dos clientes, a sorveteria pode identificar áreas de melhoria em seus produtos e implementar melhorias para aumentar a satisfação do cliente.'}
      ],
      sideImageSrc: '../../assets/divsorveteria.png'

    }

  ];

  selectedItem: any = this.items[0]; //Item selecionado inicialmente


  selectItem(item: any) {
    this.selectedItem = item;
  }  


}
