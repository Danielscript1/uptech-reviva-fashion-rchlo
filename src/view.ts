export abstract class View<T> {

  protected elemento: HTMLElement;
 

  constructor(seletor: string) {
      const elemento = document.querySelector(seletor);
      if (elemento) {
          this.elemento = elemento as HTMLElement;
      } else {
          throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
      }
      
  }

  update(model:T,isSecondaryList?:boolean):void{
    const template = this.template(model,isSecondaryList);
    console.log(template)
    this.elemento.innerHTML = template; 
  }

  abstract template(model:T,isSecondaryList?:boolean):string;
}