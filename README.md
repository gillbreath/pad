# pad
Reference Implementation for a Portable Application Definition

“Less than 10% of code has to do with the ostensible purpose of a system. The rest deals with input-output, data validation, data structure maintenance, and other housekeeping.” 
— Mary Shaw, Software Engineer and Carnegie Mellon Computer Science Professor

Portable Application Definition is a proposal for a convention-driven approach to isolating what's unique about a system.
- Full-stack but stack-agnostic scaffolding / generator
- Starts from a hierarchical definition of the application's behaviors, written in JSON (the PAD format)
- Abstraction at the data, API, and front end layers that interprets the PAD
- Dynamically produces most common app behavior
- Supports 'overriding' the convention to write app code directly, at any level

The first reference implementations will be in Vue / Express / Sqlite, for convenience. Other stack implementations TBD as the project grows.

## Setup
### CSS
Vite (Vue bundler) imports css to embed styles within components. This import/embed can't be made dynamic (results in FOUC). Two solutions, both in `vue-scaffold/src/`:
- Edit `main.js` to point directly at the desired css file(s), or
- Create a symlink named `nonrepo` pointing to an assets directory containing a file named `main.css`. This dir can also be used to store images, favicon, etc.

## License
[MIT](https://github.com/gillbreath/pad/blob/main/LICENSE)
