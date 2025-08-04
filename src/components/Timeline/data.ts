import { TimelineData } from './types';

export const timelineData: TimelineData = {
  blocks: [
    {
      id: 'eventos-preteritos',
      title: 'EVENTOS PRETÉRITOS',
      events: [
        {
          date: '02/08/2024',
          description: 'Ocorrência no Bar Zanbai\nEstabelecimento estava com grande público em razão de um evento com magistrados federais. Durante a noite, um grupo realizou atos de vandalismo e intimidação no local, resultando em danos materiais e repercussão pública.\nDepoimento da juíza Maria Antônia Girodo à imprensa local relatou os fatos vivenciados. (Tese do Impedimento da Juíza)'
        },
        {
          date: '17/09/2024',
          description: 'Cerimônia do Círculo das Ervas Eternas\nEvento realizado em praça pública com distribuição gratuita de chá cerimonial para a população. Houve reação negativa por parte de outro grupo religioso, resultando na convocação de manifestações públicas pela sua liderança.'
        }
      ]
    },
    {
      id: 'fatidico-acontecimento',
      title: 'FATÍDICO ACONTECIMENTO',
      events: [
        {
          date: '19/10/2024',
          description: 'Concentração pública nas imediações dos templos. Ao final do evento, ocorreram incidentes envolvendo artefatos explosivos e incêndio estrutural em um edifício religioso. Posteriormente, foi constatada a presença de pessoas em seu interior.'
        },
        {
          date: '20/10/2024',
          description: 'Declaração do Ministro da Justiça classificando o caso como grave infração à ordem pública, com instauração de investigação federal.',
          pdfPage: 10
        }
      ]
    },
    {
      id: 'operacao-fake-natty-1',
      title: '1ª FASE – OPERAÇÃO FAKE NATTY (31/10/2024)',
      events: [
        {
          date: '31/10/2024',
          description: 'Cumprimento de mandado expedido pela 1ª Vara Federal de Vale das Nuvens/VN contra indivíduo investigado, apontado como responsável logístico pelos atos do dia 19/10.'
        }
      ]
    },
    {
      id: 'delacao-premiada',
      title: 'DELAÇÃO PREMIADA (02/11/2024)',
      events: [
        {
          date: '02/11/2024',
          description: '(Acordo págs. 39-52)\nO investigado confessou envolvimento, detalhou planejamento e relatou ter conhecido os coautores em instituição comunitária. Apontou orientação de liderança religiosa como motivadora do ato, com desvio de recursos para financiamento das ações.'
        },
        {
          date: '05/11/2024',
          description: 'Homologação',
          pdfPage: 53
        },
        {
          date: '06/11/2024',
          description: 'Representação da Polícia Federal para:\n- Prisão preventiva dos demais envolvidos\n- Busca e apreensão em locais ligados à organização\n- Quebra de sigilos (fiscal, bancário, telefônico, telemático)\n- Bloqueio de bens\n\nTodos os pedidos foram deferidos no mesmo dia.',
          pdfPage: 13
        }
      ]
    },
    {
      id: 'operacao-fake-natty-2',
      title: '2ª FASE – OPERAÇÃO FAKE NATTY (08/11/2024)',
      events: [
        {
          date: '08/11/2024',
          description: 'Início da segunda fase da operação.'
        },
        {
          date: '09/11/2024',
          description: 'Depoimento de Lúcia Navarro',
          pdfPage: 33
        },
        {
          date: '10/11/2024',
          description: 'Depoimento de Kauani Mattar\nPrisões adicionais realizadas.',
          pdfPage: 36
        },
        {
          date: '15/11/2024',
          description: 'Declaração pública do Presidente da República, mencionando a classificação oficial de grupo investigado como organização de risco à segurança e apontando o envolvimento de liderança específica.'
        }
      ]
    },
    {
      id: 'denuncia-1',
      title: 'DENÚNCIA (17/11/2024)',
      events: [
        {
          date: '17/11/2024',
          description: 'Seis indivíduos foram denunciados pela Procuradoria da República em Nova Veredas por associação, prática múltipla de crimes contra a vida e contra a paz pública, com base na Lei nº 13.260/2016, Código Penal (art. 121, §2º, inc. III) e Lei nº 9.605/1998.\n\nA denúncia foi recebida pela 1ª Vara Federal do Tribunal do Júri.'
        }
      ]
    },
    {
      id: 'investigacao-juan-vidigal',
      title: 'INVESTIGAÇÃO JUAN VIDIGAL',
      events: [
        {
          date: '20/11/2024',
          description: 'Início de inquérito policial específico',
          pdfPage: 12
        },
        {
          date: '25/11/2024',
          description: 'Quebra de sigilo bancário',
          pdfPage: 66
        },
        {
          date: '01/12/2024',
          description: 'Notícia veiculada na mídia sobre possível envolvimento com grupo investigado'
        },
        {
          date: '09/12/2024',
          description: 'Registro de Boletim de Ocorrência',
          pdfPage: 75
        },
        {
          date: '10/12/2024',
          description: 'Pedido de prisão preventiva cumprido'
        }
      ]
    },
    {
      id: 'denuncia-2',
      title: 'DENÚNCIA (10/02/2025)',
      events: [
        {
          date: '10/02/2025',
          description: 'Segunda denúncia apresentada.'
        }
      ]
    },
    {
      id: 'audiencia',
      title: 'AUDIÊNCIA DE INSTRUÇÃO E JULGAMENTO (24/06/2025)',
      events: [
        {
          date: '24/06/2025',
          description: 'Referência: audiência_de_instrução_e_julgamento.mp4 – Google Drive\nCom degravação textual disponível',
          externalUrl: 'https://drive.google.com/file/d/1C_aj-xq1XsKoCvU_7nzIgfCs4oIX9Oyi/view'
        }
      ]
    },
    {
      id: 'sentenca',
      title: 'SENTENÇA (03/07/2025)',
      events: [
        {
          date: '03/07/2025',
          description: 'Sentença proferida',
          pdfPage: 107
        }
      ]
    },
    {
      id: 'embargos',
      title: 'EMBARGOS (18/07/2025)',
      events: [
        {
          date: '18/07/2025',
          description: 'Incluir documento completo'
        }
      ]
    }
  ]
};