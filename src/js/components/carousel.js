export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/slide1.webp",
          alt: "Mercúrio",

          //html
          html: `
            <p class="body1 purple-text"><b>Espaço ficcional</b></p>
            <br />
            <p>
            O metaverso é uma espécie de simulação da realidade em espaço virtual criado pelas tecnologias digitais.
            </p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/slide2.jpg",
          alt: "Vênus",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Imersão </b></p>
            <br />
            <p>
            Esses mundos virtuais podem ser fantasiosos (como em jogos), ou réplicas do cotidiano. Com o diferencial de serem completamente DIGITAIS.
            </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/slide3.jpg",
          alt: "Terra",

          //html
          html: `
         
            <p class="body1 purple-text"><b>
            Coisa de ficção científica
            </b></p>
            <br />
            <p>
            ​

Muitas obras da ficção adotaram o uso de metaversos e realidades virtuais para promover histórias em que esses espaços são altamente realistas e em que as mentes das pessoas ingressam totalmente nesses universos por  meio de dispositivos digitais que permitiriam esse processo.
            </p>
            
            `,
        },
        {
          id: 4,
          img: "src/img/slide4.jpg",
          alt: "Choices",

          //html
          html: `
         
            <p class="body1 purple-text"><b>
            E o que existe, mesmo?
            </b></p>
            <br />
            <p>
            Hoje ainda não chegamos a um nível de transferência em que o digital se mescla ao físico de modo tão orgânico, que poderíamos habitar mentalmente esses espaços como nos filmes, animes e séries, mas metaversos existem na internet atual.
            </p>
            
            `,
        },
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    };
  },
  methods: {
    /**
     * Advances the carousel to the next slide.
     * Displays the "previous" button to allow navigation back to the previous slide.
     */

    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    /**
     * Goes back to the previous slide.
     * Hides the "previous" button if on the first slide.
     */
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  /**
   * When the component is mounted, it initializes the carousel, gets the first slide,
   * and sets the display of the "previous" button to none.
   * The onCycleTo callback is set to update the current slide and the previous slide index.
   * If the current slide is the first one, the "previous" button is hidden.
   * @return {void} This function does not return a value.
   */
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      /**
       * Callback function triggered when the carousel cycles to a new slide.
       * Determines the current and previous slide indices and updates the display of the "previous" button.
       * If the current slide is the first one, the "previous" button is hidden.
       * @param {HTMLElement} slide - The current slide element.
       */

      onCycleTo: (slide) => {
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  template: //html
  `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m6">
          <img :src="item.img" :alt="item.alt" class="img-rounded carousel-img">
          </div>
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
