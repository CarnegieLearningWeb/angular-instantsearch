# AngularInstantsearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project angular-instantsearch` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-instantsearch`.

> Note: Don't forget to add `--project angular-instantsearch` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build angular-instantsearch` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing (deprecated)

After building your library with `ng build angular-instantsearch`, go to the dist folder `cd dist/angular-instantsearch` and run `npm publish`.

## Publishing to Nexus and Code Artifact

You need to manually bump the npmVersion number in the pom.xml

- Run `mvn clean install` to install all dependencies
- Run `mvn deploy` to trigger both `npm publish` commands (npm-publish-nexus and npm-publish-codeartifact), first to Nexus and then to Code Artifact.

## Running unit tests

Run `ng test angular-instantsearch` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
