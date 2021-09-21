# JS-patterns

## Requirements
- nodeJS v 16+     - use imports natively

- module files (*.mjs)  ES6 and nodeJS will work with imports natively

## Adapter pattern

- used as a wrapper in situations when trying to reuse another library or other external functionality which can change later
- benefit can adjust logic or imports in one place
- lets say using uuid4 n later comes uuid5 so there is only 1 place where it is imported n everywhere else using only this custom class, which can consume any version
- best practice create abstraction around interfaces for 3rd party libs:
  - axios
  - lodash
  - moment
  - uuid
  - ...