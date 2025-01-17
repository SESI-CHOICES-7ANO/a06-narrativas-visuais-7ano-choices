export default {
  data() {
    return {
      orgaos: [
        "Boca",
        "Faringe",
        "Esôfago",
        "Estômago",
        "Intestino delgado",
        "Intestino grosso",
      ],
      respostaCorreta: [
        {
          orgao: "Boca",
          resposta: { carboidrato: 1, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Faringe",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Esôfago",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Estômago",
          resposta: { carboidrato: 0, proteina: 1, lipidio: 0 },
        },
        {
          orgao: "Intestino delgado",
          resposta: { carboidrato: 1, proteina: 1, lipidio: 1 },
        },
        {
          orgao: "Intestino grosso",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
      ],
    };
  },
  methods: {
    marcar(event) {
      if (event.target.innerHTML == "✅") {
        event.target.innerHTML = "";
      } else {
        event.target.innerHTML = "✅";
      }
    },
    pulseReview(number) {
      
      let element = document.querySelector('.content-reveal.'+number).querySelector('.scale-transition');
      
      element.classList.toggle("scale-in");
    },
  },

 
  template:  //html
  `
  <div class="question-matriz">
              <table class="mt-40">
                <thead>
                  <tr>
                    <th class="center-align">Orgão</th>
                    <th class="center-align">Carboidrato</th>
                    <th class="center-align">Proteína</th>
                    <th class="center-align">Lipídio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orgao, index) in orgaos" :key="index">
                    <td class="name center-align">{{ orgao }}</td>
                    <td @click="marcar($event)" class="clicavel"></td>
                    <td @click="marcar($event)" class="clicavel"></td>
                    <td @click="marcar($event)" class="clicavel"></td>
                  </tr>
                </tbody>
              </table>


              <div class="content-reveal cr-01">
                <div class="flex--justify-center mt-24">
                  <a
                    @click="pulseReview('cr-01')"
                    style="background-color: #deff59; color: #3d4d58"
                    href="#/"
                    class="purple-text btn-large filled waves-effect waves-light bubbly-button"
                    >Revelar
                    <span class="ml-4" style="font-size: 24px"> 👀 </span>
                  </a>
                </div>
  
                <div class="mb-40 scale-transition scale-out">
                  <table class="mt-40">
                    <thead>
                      <tr>
                        <th class="center-align">Orgão</th>
                        <th class="center-align">Carboidrato</th>
                        <th class="center-align">Proteína</th>
                        <th class="center-align">Lipídio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in respostaCorreta" :key="index">
                        <td class="name center-align">{{ item.orgao }}</td>
                        <td>{{ item.resposta.carboidrato == 1 ? "✅" : "" }}</td>
                        <td>{{ item.resposta.proteina == 1 ? "✅" : "" }}</td>
                        <td>{{ item.resposta.lipidio == 1 ? "✅" : "" }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

`,
};
