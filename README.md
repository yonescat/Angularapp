# NG Drupal POC
## Angular 2 Drupal 8 Proof of concept

This project is "Proof of concept" (POC) for decoupling Drupal 8 using new Angular 2 framework and Drupal REST API existing in Drupal core.

Done with:
* Node.js: 6.7.0
* Angular 2: 2.1
* Angular-CLI: 1.0.0-beta.18
* Drupal 8.2.2

This "POC" covers:

###Drupal decoupling
* Login
* Register (ToDo)
* Get and Display list of nodes with Data from a Drupal REST View
* CRUD Operations for nodes

###Angular 2

Besides the basic modules, components implementations.
* Services: HTTP services
* Routing with Guards and Resolvers.
* Nested Components
* Dependency injection
* Use Bootstrap 4 for templates.


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
* Install CORS module  
  https://www.drupal.org/project/cors  
  This module is required for requests a resource from a different domain.  
  Cross-origin resource sharing (CORS) is a mechanism that allows a web page to make XMLHttpRequests to another domain.

* Import Drupal Configs  
  In the "drupal-configs" folder of the project there are 2 config files
  * "rest.settings.yml" to enable the REST for node and user entities
  * "views.view.node_rest_export.yml" for the REST list of nodes.
  * "cors.settings.yml" for the CORS settings  
  Maybe the CORS settings needs to be updated if the Angular App address is different than "http://localhost:4200".  
  Those configs files can be imported in the Drupal "Configuration synchronization"  
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
  In the "app-configs" folder you will find a config file that you need to update with your Drupal credentials.  
  @see : app.config.ts file.
* Install the project  
  `npm install`
* Run / Test the app: with Angular-CLI  
  `ng serve`
* See the app in the browser  
  http://localhost:4200
* Enjoy

## ToDo
* Register
* Files management on nodes.
* Paginations
* Search

  .. more to come...

## Credits
This project is sponsored by [Actualys](https://actualys.com).
