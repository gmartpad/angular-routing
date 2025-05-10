import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";

const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())]
}

export {
  appConfig
}