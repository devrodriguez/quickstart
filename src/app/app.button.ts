import { Component } from '@angular/core';

@Component({
  selector: 'boton',
  template: `<button style="padding: 10px; background-color: #eee; color: white;border: none;">Click {{text}}</button>`
})

export class AppBoton {
  text = 'Now';
}
