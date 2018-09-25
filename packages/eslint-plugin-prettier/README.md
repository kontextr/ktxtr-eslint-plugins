## [kontextR](https://www.kontextr.com/en/) prettier2eslint plugin

### How to use it

You will need to install `prettier-eslint` and preconfigure both using the `@ktxtr/eslint-config` package.

Include this rule in your eslint configuration with:
```
plugins: [
  "@ktxtr/prettier"
],
rules: {
  "@ktxtr/prettier/{rule}": ...
}
```

### Available rules

#### `no-long-implicit-arrow`

You might want to write an arrow function which looks like this:
```js
const sayHello = () => console.log("hello!")
```

This is fine as long as the function is short enough. If it is too long though it becomes difficult to read:
```js
const sayLongHello = (name = 'Mr. Incognito') => console.log(`This is just a test method. \n Hi${name}! That's all buddy!`);
```

This rule will break the method arguments into their own line, if it figures it will reduce the line length under the specified limit.

```js
const sayLongHello = (name = 'Mr. Incognito') => console.log(
  `This is just a test method. \n Hi${name}! That's all buddy!`
);
```

You can use it with:
```js
  "rules": {
    "@ktxtr/prettier/no-long-implicit-arrow": [{severity}, {max-arrow-line-length}]
  } 
```
It also accepts [general settings](https://eslint.org/docs/user-guide/configuring#adding-shared-settings):
```
settings: {
  maxLength: {max-arrow-line-length}
}
```

> This rules ensures consistency between prettier's arrow function formatting and eslint's implicit-arrow-line-break.

