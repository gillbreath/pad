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
  - each property of this object is an object describing a data entity (DE)
  - DEs will eventually have support comparable to Rails' model & migration
  - `fields` property is an object
    - `dataType`. Will eventually support explicit database types, like `varchar-[length]`; and also implicit/semantic types, like `email` or `short-text`. Any value currently unsupported gets treated as `text`.
    - `validations`: an array of aliases corresponding to vanilla JS functions, which can run client- or server-side.
    - `inputHint` and `defaultValue` behave as expected
    - `preLoad` data to populate entities on load. Temporary / convenience functionality, will eventually be replaced by offline-first local storage + optimistic fetching.
- `pageRoutes`
  - describe client-side behavior. The concept of a "page" corresponds to a "screen" in a mobile app.
  - `path` dynamically registers as client-side URLs
  - `children` describes "page" contents, recursively. Can be low, DOM-level elements, or high level, like composable widgets and data renderers. Some current element types:
    - `dataEntity`: automatically renders a PAD dataEntity in a common format, like a table or link list
    - `routerLink`: name is specific to web tech, but represents the concept of a link that stays within the app as opposed to a hyperlink
- `padOptions`
  - config that doesn't fit the other two categories
  - `appName` lives here
  - `layouts`
    - arbitrary header and footer elements which wrap around dynamic content
    - follows the same page content API as `children` under `pageRoutes`
    - `children` from `pageRoutes` can control via `updateDynamicLayout` event
    - name the most common layout in your app `DefaultLayout`, change to other layouts as desired

## Lead maintainer
The lead maintainer at this time is Elias Carlston. His email is elias@eliascarlston.com.

## License
[MIT](https://github.com/gillbreath/pad/blob/main/LICENSE)
