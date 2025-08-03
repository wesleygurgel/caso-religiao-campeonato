# Componente Cenário Social

Este componente foi desenvolvido para apresentar as religiões minoritárias do estado fictício de Novas Veredas de forma interativa e acessível.

## Estrutura de Componentes

O componente Cenário Social é composto por três partes principais:

1. **CenarioSocial.tsx** - Componente principal que gerencia o estado e a lógica de interação
2. **ReligionCard.tsx** - Card interativo para cada religião
3. **ReligionModal.tsx** - Modal/painel lateral com informações detalhadas

## Características Principais

### Interatividade
- Cards animados com Framer Motion
- Transições suaves entre estados
- Feedback visual ao passar o mouse e clicar

### Acessibilidade
- Suporte completo para navegação por teclado
- ARIA roles e labels para leitores de tela
- Focus trap no modal para melhor experiência com teclado
- Indicadores visuais de foco

### Responsividade
- Design mobile-first
- Layout adaptável para diferentes tamanhos de tela
- Ajustes de espaçamento e padding para dispositivos móveis

## Dados das Religiões

### Fraternidade da Pureza Divina
- Seguida por cerca de 35% da população
- Dogma central: abstenção de substâncias que alterem a consciência
- Figuras importantes: Juan Vidigal e Mestre Pablo Gaviria
- Ala radical: "Ordem dos Castos"

### Círculo das Ervas Eternas
- Seguidores: 4% da população
- Dogma central: purificação das aflições humanas com chás medicinais e rituais
- Figura importante: Dona Toninha (matriarca e curandeira)

## Como Usar

```jsx
import CenarioSocial from '../components/CenarioSocial';

function MinhaPage() {
  return (
    <div>
      <h1>Minha Página</h1>
      <CenarioSocial />
    </div>
  );
}
```

## Sugestões de UX para Engajamento Emocional

1. **Narrativa Imersiva**: O componente apresenta as religiões como parte de uma narrativa maior, permitindo que o usuário se sinta parte do contexto jurídico.

2. **Design Visual Distintivo**: Cada religião tem sua própria identidade visual através de cores, criando uma conexão emocional imediata.

3. **Interatividade Significativa**: As animações e transições não são apenas decorativas, mas reforçam a ideia de exploração e descoberta.

4. **Conteúdo Estruturado**: As informações são apresentadas de forma organizada e progressiva, permitindo que o usuário absorva o contexto gradualmente.

5. **Acessibilidade como Prioridade**: O design acessível garante que todos os usuários possam ter uma experiência completa, independentemente de suas limitações.