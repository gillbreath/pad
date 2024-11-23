# pad
1. About
2. Get Involved
1. Quick Start/Install
1. Lead Maintainer
1. License

## About
Portable Application Definition (PAD), inspired by the Rails approach, extends the concepts to full-stack JavaScript.

### What is the Rails approach?
- Don't Repeat Yourself (DRY): reuse as much as possible.
- Convention Over Configuration: the majority / typical case should be the default. Specify only what's different, leave implied all that's the same.

Ruby on Rails was a huge success, and quickly inspired ports to other languages: Django (Python), Grails (Java), Cake (PHP).
But Rails never made it to JS (see below for why).

### What problems did the Rails approach help solve?
Large parts of most web apps' code, especially [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), require connection code across layers that doesn't add business value. For example, adding a field to the database also requires adding that field to the middleware which fetches from the database, returns the database result, creates or updates a record. Same field, same name, must be added in multiple places.

Without some reusable framework, Devs have to re-build the same stuff over and over again. And the more devs have to re-build, the slower app dev goes and the more likely one of those spots will have a bug.

### What problems did the Rails approach not help with?
- Business logic and content are allowed / implicitly encouraged to get embedded and intertwined with implementation code.
- Rails predates what we today call front-end development. Front-end support has been added but feels like an add-on.

### What is the PAD approach?
Strict separation of code into two parts: definition, and interpretation.
- the PAD file format contains a definition of all application-specific behavior (including copy/content, business logic, data models, user flows). PAD uses JSON format because it's lightweight, highly human-readable, and widely supported.
- the implementation code, written in any language or framework, which only interprets and executes a PAD-formatted file

Everything about your app lives in its PAD file. Implementation code only reads the PAD format and executes what it finds.

Rails partially implements this separation:
- Model layer (highly separated): your code never contains SQL/DML/DDL, only Rails data APIs (models, migrations). Consequently your code has almost no coupling to whatever database is in use.
- Controller layer (somewhat separated): Routes are dynamically generated from model definitions, but controllers can contain arbitrary business logic.
- Presentation layer (not separated): Templates mix together multiple concerns. Layout and functional logic are intermingled with business logic and copy. Code is highly coupled to whatever template format is being used.

### Why PAD?
- Encourages reusability and composability. PAD format makes repetition obvious, instead of hidden mixed in with implementation code.
- Enforces separation of concerns. Changes in copy or business logic are confined to the PAD file; changes to PAD interpretation are in different files. Version control becomes crystal clear, enables continuous delivery of PAD file.
- Enforces a portable API. The output of any frameworks that support PAD should be indistinguishable, even if the frameworks are in different languages. Switching between frameworks should be close to trivial, if they implement PAD the same way.

### Why is there no Rails for JS already?
By the time Node became a mature server-side runtime, several factors combined to reduce the desire for a Rails JS. One, Ruby on Rails quickly inspired ports to other languages: Django (Python), Grails (Java), CakePHP. These frameworks were already well established. Two, many early JS servers were simple facades implementing REST / async patterns in front of a legacy API. Three, Ruby on Rails was open-sourced in a visionary act of community by 37 Signals. Many enterprises have proprietary versions of Rails JS.

## Get Involved
Contribute to the framework by joining our social impact project. Fill out this [short form](https://forms.gle/xRJGopE8coVYDV4i6) and we'll be in touch.

## Quick Start/Install
- `git clone` repo locally
- `cd vue-scaffold && npm i && npm run start`
- Cypress will launch. Choose Chrome (other browsers not yet supported)
- Open localhost:4173

## Features
- `dataEntities`
  - data described here will automatically get CRUD functionality, routes & forms
  - data entities can also be automatically be rendered as tables or ULs
- `pageRoutes`
  - describe non-data functionality here

## Lead maintainer
The lead maintainer at this time is Elias Carlston. His email is elias@eliascarlston.com.

## License
[MIT](https://github.com/gillbreath/pad/blob/main/LICENSE)
