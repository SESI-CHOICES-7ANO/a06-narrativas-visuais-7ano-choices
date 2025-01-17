export default {
    name: "ImgSideCard",
    props:{
      src: String,
      alt: String,
      card_class: String,
    },
    template: //html
     `
    <div class="img-side-card">
      <img
        class="img-rounded img--purple-shadow"
        :src="src"
        :alt="alt"
        loading="lazy"
      />
  
      <div  :class="[card_class]" class="card card--purple-shadow mt-24-mobile" >
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    </div>
    `,
  };