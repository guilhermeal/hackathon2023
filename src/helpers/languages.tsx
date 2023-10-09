interface TextProps {
  [lang: string]: {
    flag?: string;
    flagDescription?: string;
    titlePage: string;
    subTitlePage: string;
    downloadButton: string;
    downloadButtonDescription: string;
    header: {
      home: string;
      about: string;
      download: string;
      team: string;
      contact: string;
    },
    about: {
      title: string;
      title2?: string;
      title3?: string;
      title4?: string;
      description: string;
      description2?: string;
      description3?: string;
      description4?: string;
    }
    contact: {
      nameLabel:string,
      emailLabel:string,
      messageLabel:string,
      sendButtonLabel:string,
    }
  };
}

export const texts: TextProps = {
  en: {
    flag: '🇬🇧',
    flagDescription: 'Choose to english',
    titlePage: 'Welcome to the Psyche Project Game ',
    subTitlePage: 'The idea of this game is to introduce participants to what the Psyche project will be like',
    downloadButton: 'Click to download',
    downloadButtonDescription: 'Click button download the PDF game',
    header: {
      home: 'Home',
      about: 'About',
      download: 'Download',
      team: 'Team',
      contact: 'Contact',
    },
    about: {
      title: "Project summary",
      description: "We created a fun space trail game so that children aged 5 to 14 can learn about the mission and the asteroid Psyche in a fun and interactive way. With the board game, children develop their cognitive skills, they work on their emotions when waiting for their turn to play, and their mathematics when they roll the dice and need to count the spaces that will move. This type of activity is very important as it allows teamwork through fun and learning, making children more united around a common goal.",
      title2: "How to Play",
      description2: "You will need to print two pages in A4 size, one for the board game and the other for the numbered dice and the rocket models that will be the pins representing the players. Number of Players: 02 to 04 players, each one rolls the dice and the number that stays up will be the number of spaces that the player will move their piece forward. If the numbering causes the player to stop on the green squares, he will have a bonus moving three spaces forward, if the player's skin stops on the gray squares, it will be necessary to move the piece three spaces back and so on. Whoever reaches the asteroid first wins the game.",
      title3: "Project motivation",
      description3: "The project has a great impact on society in terms of awakening to planetary defense and how important science is for the development of scientific dissemination in the world. While the children are having fun, they learn more about the asteroid and the psyche mission because, in some homes, there is information taken from the official NASA website from its discovery to the present.",
      title4: "Project Development",
      description4: "The team created the game using the CANVA application so that it could be printed, cut and assembled easily so that children could do it together with their parents and/or teachers. We also thought about environmental issues so that we don't use too many resources such as paper and printing too many pages, leaving the game on just one page and another with the items needed for gameplay.",
    },
    contact: {
      nameLabel: 'Name',
      emailLabel: 'Mail address',
      messageLabel: 'Message',
      sendButtonLabel: 'Send message',
    }
  },
  br: {
    flag: '🇧🇷',
    flagDescription: 'Mudar para português',
    titlePage: 'Bem vindo ao Jogo Projeto Psyche',
    subTitlePage: 'A ideia deste jogo é apresentar aos participantes como vai ser o projeto Psyche',
    downloadButton: 'Clique para baixar',
    downloadButtonDescription: 'Clique para fazer o download do jogo em PDF',
    header: {
      home: 'Início',
      about: 'Sobre',
      download: 'Download',
      team: 'Equipe',
      contact: 'Contato',
    },
    about: {
      title: "Resumo do projeto",
      description: "Elaboramos um jogo divertido no formato de trilha espacial para que as crianças de 5 a 14 anos possam aprender sobre a missão e o asteroide Psyche de forma lúdica e interativa. Com o jogo de tabuleiro, as crianças desenvolvem a parte cognitiva, trabalha as emoções no momento de esperar sua vez de jogar, e a matemática no momento em que joga o dado e precisa contar as casas que irão se movimentar. Esse tipo de atividade é muito importante por permitir o trabalho em equipe por meio de diversão e aprendizado tornando as crianças mais unidas em torno de um objetivo comum.",
      title2: "Como jogar",
      description2: "Até quatro jogadores lançam os dados e o número em que os dados permanecem será o número de espaços que o jogador atual irá mover. Algumas casas possuem informações sobre o Asteroide Psique e sua Missão de Exploração. Nos quadrados verdes, o jogador move o seu foguete três espaços para a frente e nos quadrados cinzentos, o jogador move o seu foguete três espaços para trás. O jogador que chegar primeiro ao Asteróide Psique vence.",
    },
    contact: {
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      messageLabel: 'Mensagem',
      sendButtonLabel: 'Enviar mensagem',
    }
  },
};
