import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService
  ) {}

  ngOnInit() {
    this.colocarCheck();
  }

  colorChange(tema: string, link: any) {
    this.selectCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  selectCheck(link: any) {
    const selectores: any = this._document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = this._document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (const ref of selectores) {
      console.log('funcion colcar check');
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
