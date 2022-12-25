(function () {
  function Calculadora() {
    this.display = document.querySelector(".display");

    this.Iniciar = () => {
      this.capturaCliques();
      this.capturaEnter();
    };
    this.capturaEnter = () => {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
    this.addNumDisplay = (el) => {
      this.display.value += el.innerText;
      this.display.focus();
    };

    this.capturaCliques = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) this.addNumDisplay(el);
        if (el.classList.contains("btn-clear")) this.clear();
        if (el.classList.contains("btn-del")) this.del();
        if (el.classList.contains("btn-eq")) this.realizaConta();
      });

      this.clear = () => {
        this.display.value = "";
        this.display.focus();
      };
      this.del = () => (this.display.value = this.display.value.slice(0, -1));
    };
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);

        if (!conta) {
          alert("C  onta Invalida");
          return;
        }
        this.display.value = String(conta);
      } catch (error) {
        alert("conta Invalida");
        return;
      }
    };
  }

  const calculadora = new Calculadora();
  calculadora.Iniciar();
  /* return {
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
  calculadora.inicia();*/
})();
