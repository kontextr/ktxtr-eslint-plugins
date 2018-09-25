## [kontextR](https://www.kontextr.com/en/) eslint plugins

_Created by **yours truly**_ :heart:

This repository holds eslint plugins which were created to improve the consistency in 
[kontextR's](https://www.kontextr.com/en/) source code. In order to use most of them (they will be marked accordingly), 
you will need to run them using [`prettier-eslint`](https://github.com/prettier/prettier-eslint). <br/>
The source code is published under the [MIT license](https://opensource.org/licenses/MIT).

### How to use it
Install the plugin like any other using npm `npm install --save-dev @ktxtr/eslint-plugin-{name}`.
You can use it by adding `plugins: [ "@ktxtr/{name}" ]` to your `.eslintrc` file.

### Available packages

- @ktxtr/eslint-plugin-prettier - auto-fixers and formatters for our prettier2eslint bridge

### Publishing plugins

- Commit all changes, but don't modify package.json version
- Run `npm run publish` and select appropriate version change
- Lerna will increment the version, create git tags & push them and finally publish the package on npmjs

### Creating new plugins

Create a new directory inside this repository with the same structure as our template - `eslint-plugin-prettier`.
We use lerna for publishing (See [lernajs.io](https://lernajs.io/)) - commit all your changes and mark the initial
package version as `0.0.0`. Once you run `npm run publish` lerna will prompt you for a version bump - select either
`0.0.1` (unstable packages) or `1.0.0` (stable enough).

### Creating new rules

In order to create a new rule, create a file named `your-rule.js` inside `lib/rules` and import & export it within `index.js`.
For the structure inside your rule source, you can use the provided `no-long-implicit-arrow.js` rule as a template.

#### Resources in order to help you develop additional rules

- [Eslint's official custom rule guide](https://eslint.org/docs/developer-guide/working-with-rules)
- [AST tree explorer](https://astexplorer.net/)
- [Eslint's official rules with their source](https://github.com/eslint/eslint/blob/master/lib/rules)
