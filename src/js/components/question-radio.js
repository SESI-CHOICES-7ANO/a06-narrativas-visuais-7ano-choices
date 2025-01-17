export default {
  data(){
    return{
      id:"q1" // ALTERE AQUI
    }
  },
  methods: {
    verificaQuestao(event, questao) {


      const gabaritoQuestoes = { q1: "a" };
      let selecionado = event.target.value;
      let correto = `
        <div class="question-result question-result__correto">
        <img src="src/img/gif-06.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Acertou</b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
            <b>Ops! Tente novamente</b>
          </p>
        </div>
      `;

      if (selecionado === gabaritoQuestoes[questao]) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    },
  },


  template:   //html
`
  <!-- Question 1 -->
  <div class="question question--radio" :id="[id]">
    <p class="body1 mt-2">
      <b>Para iniciar todo o processo, você colocar o alimento na:</b
      >​
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="a" />
        <span> <b>a) </b>Cabeça</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="b" />
        <span> <b>b) </b>Boca</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="c" />
        <span> <b>c) </b>Barriga</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="d" />
        <span> <b>d) </b>Geladeira</span>
      </label>
    </p>
    <div class="feedback"></div>
  </div>

  `,
};
