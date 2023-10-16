import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {IonicStorageModule} from '@ionic/storage-angular';
import {Drivers} from '@ionic/storage';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {
//   providers : [{
//     provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
//     importProvidersFrom(IonicModule.forRoot({})),

//     importProvidersFrom(IonicStorageModule.forRoot({
//       name: 'testdb',
//       driverOrder: [Drivers.IndexedDB]
//     })
//     ),

//     providesRouter('routes'),
  
//   ]
// })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
function providesRouter(routes: any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

