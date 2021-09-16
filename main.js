// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#root',
    data: {
      saluto: 'Hello Vue!',

      image: {
          url:'https://2.bp.blogspot.com/-F4jszpW691M/WC91ORuwsoI/AAAAAAAAB-c/rtFnTYmQRLAdv4ThqRYj8qLoWmtEcg6egCLcB/s1600/Animated-GIF-Banana.gif',
          alt: 'banana che balla'
      }
    }
  })