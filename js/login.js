class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener("submit", (evento) => {
            this.handleSubmit(evento);
        });
    }
    handleSubmit(evento) {
        evento.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if (camposValidos && senhasValidas) {
            this.formulario.submit();
            this.mudandoPagina();
        }
    }
    mudandoPagina() {
        window.location = "index.html";
    }

    senhasSaoValidas() {
        let validar = true; //essa flag me permite verificar se vai ser valido ou não
        const senha = this.formulario.querySelector(".senha");
        const senhaRepetida = this.formulario.querySelector(".senha-rep");
        if (senha.value !== senhaRepetida.value) {
            validar = false;
            this.criaErro(
                senha,
                "Os campos senhas e repetir senha devem ser iguais!"
            );
            this.criaErro(
                senhaRepetida,
                "Os campos senhas e repetir senha devem ser iguais!"
            );
        }

        if (senha.value.length < 4 || senha.value.length > 10) {
            validar = false;
            this.criaErro(
                senha,
                "A sua senha deve ter entre 4 a 10 caracteres"
            );
        }
        return validar;
    }
    camposSaoValidos() {
        let validar = true;
        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }
        for (let campo of this.formulario.querySelectorAll(".input")) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                //lembrando que uma string vazia me retorna FALSE
                this.criaErro(
                    campo,
                    `O campo ${label} não pode estar em branco!`
                );
                validar = false;
            }
            if (campo.classList.contains("personagem")) {
                if (!this.validaPersonagem(campo)) validar = false;
            }
        }
        return validar;
    }

    validaPersonagem(campo) {
        const usuario = campo.value;
        let validar = true;
        if (usuario.length < 3 || usuario.length > 10) {
            this.criaErro(
                campo,
                "O nome do seu personegem deve ter entre 3 a 10 caracteres"
            );
            validar = false;
        }
        return validar;
    }
    criaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new ValidaFormulario();
