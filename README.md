# NG Drupal POC
## Angular 2 Drupal 8 Proof of concept

This project is "Proof of concept" (POC) for decoupling Drupal 8 using new Angular 2 framework and Drupal REST API existing in Drupal core.

This "POC" covers:

###Drupal decouppling
- Login
- Register (ToDo)
- Get and Dsiplay list of nodes with Data from a Drupal REST View
- CRUD Operations for nodes

###Angular 2

Besides the basic modules, components implementations.
* Services: HTTP services
* Routing with Guards and Resolvers.
* Nested Components
* Dependency injection
* Use Bootstrap 4 for temlates.


### Getting Started

####Drupal side:
* Install new Drupal 8 on your environment
  A good "kickstart" is Drupal project composer template
  https://github.com/drupal-composer/drupal-project
* Install REST UI module
  https://www.drupal.org/project/restui
  with composer template
```
composer require drupal/devel
```

* Install Devel Generate module
  https://www.drupal.org/project/devel
  Useful for Generate new content

  with composer template
```
composer require drupal/devel
```
* Import Drupal Configs
  In the "drupal-configs" folder of the project there are 2 config files
  * "rest.settings.yml" to enable the REST for node and user entities
  * "views.view.node_rest_export.yml" for the REST list of nodes.
  Those configs can be importated in the Drupal "Configuration synchronization"
  Home > Administration >  Configuration > Development > Synchronize > Single item
  "admin/config/development/configuration/single/import"
* Generate or create content
  Either you create manually nodes or using Devel Generate, the recommendation is to use 
  Articles Content type.

####Angular side
* Install node.js
https://nodejs.org/en/
* Install Angular-CLI
  https://github.com/angular/angular-cli
  This project is built with Angular-CLI, so it is required. 
  `npm install -g angular-cli`
  `sudo` could be required on some machines
* Download this project
  `git clone git@github.com:vasike/ng-drupal-poc.git`
* `cd ng-drupal-poc`
* Update the App configs
  In the "app-configs" folder you find a congif file that you need to update with your Drupal credentials.
  @see : app.config.ts file.
* Install the project
  `npm install`
* Run / Test the app: with Angular-CLI
  `ng serve`
* See the app in the browser
  http://localhost:4200
* Enjoy

## ToDo
  .. more to come...

------
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
