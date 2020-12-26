import { Component } from "@angular/core";

//Decorator - passa para o trainspiller(compilador js) que está classe é um componente
@Component({
    selector:'meu-primeiro-component',
    template:`
        <p> Meu Primeiro Component com Angular </p>
    `
})

export class MeuPrimeiroComponent{ }


