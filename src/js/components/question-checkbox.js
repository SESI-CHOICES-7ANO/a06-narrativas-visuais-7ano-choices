// Alterar as variáveis de data() e o numero da questao no HTML de acordo com a questão
export default {
  data() {
    return {
      gabaritoQuestoes: { qck1: ["a", "c", "d", "e"] }, // ALTERE AQUI
      formData: {
        qck1: [], // ALTERE AQUI
      },
    };
  },

  methods: {
    verificaQuestao(questao) {
      let qtdGabarito = this.gabaritoQuestoes[questao].length;
      let qtdSelecionadas = this.formData[questao].length;

      // Verifica se as opções selecionadas são iguais do gabarito

      const acertou =
        qtdSelecionadas === qtdGabarito &&
        this.formData[questao].every((resposta) =>
          this.gabaritoQuestoes[questao].includes(resposta)
        );

      console.log("acertou", acertou);

      let correto = `
        <div class="mb-40 question-result question-result__correto">
       
        <p class="body1 flex--align-center">
          <b>Isso aí! Esses são alguns aspectos que podemos afirmar sobre transmídia.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="mb-40 question-result question-result__incorreto">
        
          <p class="body1 flex--align-center">
             
            <b>Algumas das opções selecionadas estão incorretas.</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `;
      if (acertou) {
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

  
  template: //html
  `
<!-- Question 1 -->
<div class="question question--checkbox question--dark" id="qck1">
<form action="get"  @submit.prevent="verificaQuestao('qck1')">
  <p class="body1 mt-2">
    <b>
    Sobre o metaverso, podemos dizer que: </b
    >​
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="a" v-model="formData.qck1"  />
      <span>
      É um mundo virtual alternativo criado nas redes
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="b" v-model="formData.qck1"  />
      <span>
      ​

      
Já permite que nossas mentes acessem a rede sem auxílio de nenhum dispositivo
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="c" v-model="formData.qck1"  />
      <span>
      ​

      Engloba coisas como realidade aumentada e plataformas de socialização na internet      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="d" v-model="formData.qck1"  />
      <span>
      Existe em jogos de fantasia online      </span>
    </label>
  </p>
  <p>
  <label>
    <input name="qck1[]" type="checkbox" value="e" v-model="formData.qck1"  />
    <span>
    Permite que narrativas virtuais sejam geradas
          </span>
  </label>
</p>
  
  <div class="feedback"></div>
  <input class="mt-24 purple-text btn-large filled waves-effect waves-light bubbly-button" type="submit" value="Responder 👀" />
</form>
</div>
`,
};
