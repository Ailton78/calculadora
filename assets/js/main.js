(function () {
  function criarCalculadora() {
    return {
      display: document.querySelector(".display"),
      btnClear: document.querySelector(".btn-clear"),

      inicia() {
        this.cliqueBotoes();
        this.precionaEnter;
      },
      precionaEnter() {
        this.display.addEventListener("keyup", (e) => {
          if (e.keycode === 13) {
            this.realizaConta();
          }
        });
      },
      realizaConta() {
        let conta = this.display.value;
        try {
          conta = eval(conta);
          if (!conta) {
            alert("conta Invalida");
            return;
          }
          this.display.value = String(conta);
        } catch (error) {
          alert("conta Invalida");
          return;
        }
      },
      clearDisplay() {
        this.display.value = "";
      },
      apagaUm() {
        this.display.value = this.display.value.slice(0, -1);
      },

      cliqueBotoes() {
        document.addEventListener("click", (e) => {
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }
          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }
          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        });
      },
      btnParaDisplay(valor) {
        this.display.value += valor;
      },
    };
  }
  const calculadora = criarCalculadora();
  calculadora.inicia();
})();
