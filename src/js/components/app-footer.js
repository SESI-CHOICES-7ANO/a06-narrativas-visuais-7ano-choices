export default {
  name: "AppFooter",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  template: //html
   `
    <footer class="card card--purple-shadow">
      <div class="container card-content">
        <div>
          <img src="src/img/core/logo-choices.webp" alt="Logo Choices" />
        </div>
        <div>
          <p class="center-align">© Sesi {{ year }}. Todos os direitos reservados.</p>
        </div>
        <div>
          <img src="src/img/core/logo-ead_sesi.webp" alt="Logo Sesi Ead" />
        </div>
      </div>
    </footer>
  `,
};
