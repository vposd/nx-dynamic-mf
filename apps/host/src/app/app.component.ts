import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { setRemoteDefinitions } from '@nrwl/angular/mf';

@Component({
  selector: 'plugin-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private readonly router: Router) {}

  async ngOnInit() {
    const pluginMeta = await fetch('/assets/module-federation.manifest.json');
    const definitions = await pluginMeta.json();
    setRemoteDefinitions(definitions);

    console.log(definitions);

    this.router.config.push({
      path: 'shop',
      loadChildren: () =>
        loadRemoteModule('shop', './Module').then((m) => m.RemoteEntryModule),
    });

    this.router.config.push({
      path: 'plugin',
      loadChildren: () =>
        loadRemoteModule('plugin', './Module').then((m) => m.RemoteEntryModule),
    });
  }
}
