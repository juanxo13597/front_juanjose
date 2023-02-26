import { Component } from '@angular/core';

/** interfaz tec */
interface Tec {
  /** dep */
  dependencies: Dependencies[];

  /** devDep */
  devDependencies: Dependencies[];
}

/** interfaz dependencies */
type Dependencies = { name: string; version: string };

/** tabla de inicio */
@Component({
  selector: 'app-table-home-page',
  templateUrl: './table-home-page.component.html',
  styleUrls: ['./table-home-page.component.scss'],
})
export class TableHomePageComponent {
  /** columnas de la tabla */
  tecFront: Tec = {
    dependencies: [
      { name: '@angular-eslint/template-parser', version: '15.2.1' },
      { name: '@angular/animations', version: '15.1.5' },
      { name: '@angular/common', version: '15.1.5' },
      { name: '@angular/compiler', version: '15.1.5' },
      { name: '@angular/core', version: '^15.1.5' },
      { name: '@angular/forms', version: '15.1.5' },
      { name: '@angular/platform-browser', version: '15.1.5' },
      { name: '@angular/platform-browser-dynamic', version: '15.1.5' },
      { name: '@angular/router', version: '15.1.5' },
      { name: '@ngrx/store', version: '^15.3.0' },
      { name: '@ngrx/store-devtools', version: '^15.3.0' },
      { name: '@ngx-translate/core', version: '^14.0.0' },
      { name: '@ngx-translate/http-loader', version: '^7.0.0' },
      { name: '@popperjs/core', version: '^2.11.6' },
      { name: 'bootstrap', version: '^5.2.3' },
      { name: 'express', version: '4.18.2' },
      { name: 'jquery', version: '^3.6.3' },
      { name: 'rxjs', version: '7.5.0' },
      { name: 'tslib', version: '2.3.0' },
      { name: 'zone.js', version: '0.11.4' },
    ],
    devDependencies: [
      { name: '@angular-devkit/build-angular', version: '15.1.6' },
      { name: '@angular-eslint/eslint-plugin', version: '15.1.0' },
      { name: '@angular-eslint/eslint-plugin-template', version: '15.1.0' },
      { name: '@angular/cli', version: '15.1.6' },
      { name: '@angular/compiler-cli', version: '15.1.5' },
      { name: '@types/jasmine', version: '4.0.0' },
      { name: '@types/jest', version: '^29.4.0' },
      { name: '@typescript-eslint/eslint-plugin', version: '5.47.1' },
      { name: '@typescript-eslint/parser', version: '5.47.1' },
      { name: 'eslint', version: '8.30.0' },
      { name: 'eslint-config-prettier', version: '8.5.0' },
      { name: 'eslint-plugin-angular', version: '4.1.0' },
      { name: 'eslint-plugin-jasmine', version: '4.1.3' },
      { name: 'eslint-plugin-prettier', version: '4.2.1' },
      { name: 'jasmine-core', version: '4.3.0' },
      { name: 'karma', version: '6.4.0' },
      { name: 'karma-chrome-launcher', version: '3.1.0' },
      { name: 'karma-coverage', version: '2.2.0' },
      { name: 'karma-jasmine', version: '5.1.0' },
      { name: 'karma-jasmine-html-reporter', version: '2.0.0' },
      { name: 'prettier', version: '2.8.1' },
      { name: 'prettier-eslint', version: '15.0.1' },
      { name: 'typescript', version: '4.9.5' },
    ],
  };

  /** columnas de la tabla */
  tecBack = {
    dependencies: [
      { name: '@nestjs/common', version: '^9.0.0' },
      { name: '@nestjs/core', version: '^9.0.0' },
      { name: '@nestjs/jwt', version: '10.0.2' },
      { name: '@nestjs/passport', version: '^9.0.3' },
      { name: '@nestjs/platform-express', version: '^9.0.0' },
      { name: '@nestjs/swagger', version: '^6.2.1' },
      { name: '@nestjs/typeorm', version: '^9.0.1' },
      { name: 'bcrypt', version: '^5.1.0' },
      { name: 'class-transformer', version: '0.5.1' },
      { name: 'class-validator', version: '0.14.0' },
      { name: 'mysql2', version: '^3.1.2' },
      { name: 'passport', version: '^0.6.0' },
      { name: 'passport-jwt', version: '4.0.1' },
      { name: 'passport-local', version: '^1.0.0' },
      { name: 'reflect-metadata', version: '^0.1.13' },
      { name: 'rimraf', version: '^3.0.2' },
      { name: 'rxjs', version: '^7.2.0' },
      { name: 'typeorm', version: '^0.3.12' },
    ],
    devDependencies: [
      { name: '@compodoc/compodoc', version: '^1.1.19' },
      { name: '@nestjs/cli', version: '^9.0.0' },
      { name: '@nestjs/schematics', version: '^9.0.0' },
      { name: '@nestjs/testing', version: '^9.3.9' },
      { name: '@types/bcrypt', version: '^5.0.0' },
      { name: '@types/express', version: '^4.17.13' },
      { name: '@types/jest', version: '28.1.8' },
      { name: '@types/node', version: '^16.0.0' },
      { name: '@types/passport-jwt', version: '^3.0.8' },
      { name: '@types/passport-local', version: '^1.0.35' },
      { name: '@types/supertest', version: '^2.0.11' },
      { name: '@typescript-eslint/eslint-plugin', version: '^5.0.0' },
      { name: '@typescript-eslint/parser', version: '^5.0.0' },
      { name: 'eslint', version: '^8.0.1' },
      { name: 'eslint-config-prettier', version: '^8.3.0' },
      { name: 'eslint-plugin-prettier', version: '^4.0.0' },
      { name: 'jest', version: '28.1.3' },
      { name: 'prettier', version: '^2.3.2' },
      { name: 'source-map-support', version: '^0.5.20' },
      { name: 'supertest', version: '^6.1.3' },
      { name: 'ts-jest', version: '28.0.8' },
      { name: 'ts-loader', version: '^9.2.3' },
      { name: 'ts-node', version: '^10.0.0' },
      { name: 'tsconfig-paths', version: '4.1.0' },
      { name: 'typescript', version: '^4.7.4' },
    ],
  };
}
