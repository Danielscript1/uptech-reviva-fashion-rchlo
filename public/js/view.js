export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update(model, isSecondaryList) {
        const template = this.template(model, isSecondaryList);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
