// Só funciona 1 componente por página
// Usa ícones do google

// Alterar a classe para cada cópia desse componente e criar uma nova classe no sass herdando
export default {
    name: "CarouselLabel",
    data() {
      return {
        carousel: {
          class: "carousel-label", // classe a ser usada no HTML
          key: 0,
          elemento: null,
          qtdSlides: 0,
          ordem: 1,
          ordemAnterior: 99,
        },
        instances: null, // Declare instances as a reactive variable
        items: [
          {
            id: 1,
            img: "./src/img/carousel-01.webp",
            alt: "Dicção",
  
            
            html://html 
              `
              <p>
              DICÇÃO
              </p>
              `,
          },
          {
            id: 2,
            img: "./src/img/carousel-02.webp",
            alt: "Expressão Corporal",
  
            
            html://html 
              `
              <p>
              EXPRESSÃO CORPORAL
              </p>
              `,
          },
          {
            id: 3,
            img: "./src/img/carousel-03.webp",
            alt: "Capacidade de Improviso",
  
            
            html://html 
              `
              <p>
              CAPACIDADE DE IMPROVISO
  
              </p>
              `,
          },
          {
            id: 4,
            img: "./src/img/carousel-04.webp",
            alt: "Entender o público que está ouvindo a história",
  
            
            html://html 
              `
              <p>
              ENTENDER O PÚBLICO QUE ESTÁ OUVINDO A HISTÓRIA
  
              </p>
              `,
          },          
        ],
      };
    },
    methods: {
      // Próximo Slide
      next() {
        this.carousel.elemento.querySelector(".previous").style.display = "flex";
        this.instances[this.carousel.key].next(); // Access the first carousel instance
      },
      // Slide anterior
      previous() {
        this.instances[this.carousel.key].prev();
      },
    },
    mounted() {
      // Seleciona o carousel com base na classe
      this.carousel.elemento = document.querySelector("." + this.carousel.class);
  
      // Inicializa o carousel
      let elems = document.querySelectorAll(".carousel." + this.carousel.class);
      this.instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        shift: 20,
        numVisible: 1,
        onCycleTo: (slide) => {
          // Callback de quando se passa o slide
  
          // QTD de slides
          this.carousel.qtdSlides =
            slide.parentNode.querySelectorAll(".carousel-item").length;
  
          // Lógica para saber o slide atual
          let search = slide.parentNode;
          let slideIndex = [...search.children].indexOf(slide);
          this.carousel.ordem = slideIndex;
          this.carousel.ordemAnterior = this.ordem - 1;
  
          // Se for o primeiro slide, não mostrar o botão anterior
          if (this.carousel.ordem == 1) {
            this.carousel.elemento.querySelector(".previous").style.display =
              "none";
            this.carousel.elemento.querySelector(".next").style.display = "flex";
            
            //se for último slide, não mostrar botão próximo
          } else if (this.carousel.qtdSlides == this.carousel.ordem) {
            this.carousel.elemento.querySelector(".previous").style.display =
              "flex";
            this.carousel.elemento.querySelector(".next").style.display = "none";
  
            // se estiver entre o primeiro e o último, mostrar os botões próximo e anterior
          } else {
            this.carousel.elemento.querySelector(".previous").style.display =
              "flex";
            this.carousel.elemento.querySelector(".next").style.display = "flex";
          }
        },
      });
  
      // não mostrar o botão anterior de início
      this.carousel.elemento.querySelector(".previous").style.display = "none";
    },
    
    template: //html  
    `
      <!-- Carousel -->
      <div class="carousel carousel-slider center" :class="[carousel.class]">
      <!-- Arrows -->
        <div class="carousel-fixed-item center">
          <a @click="previous" class="previous flex--align-center card to-left">
            <span class="material-symbols-rounded">
              chevron_left
            </span>
          </a>
          <a @click="next" class="next flex--align-center card to-right">
            <span class="material-symbols-rounded">
              chevron_right
            </span>
          </a>
        </div>
  
        <!-- slides -->
        <!-- item -->
        <div v-for="item in items" :key="item.id" class="carousel-item center-align">
          <img :src="item.img" :alt="item.alt" loading="lazy">
          <div class="gradient"></div>
          <div class="box-attention text center-align" v-html="item.html"></div>
        </div>
        <!-- item -->
        
      </div>
      <!-- Fim Carousel -->
    `,
  };
  