# babel-polyfill-silencer
Microlibrary for use by webpack to avoid babel implicitly importing core-js polyfills

## Usage

In your client side code use `require('babel-polyfill-silencer')` on the first line.

In your webpack config define the following aliases

```
{
  'core-js/library/fn/symbol/iterator': 'babel-polyfill-silencer/iterator',
  'core-js/library/fn/symbol': 'babel-polyfill-silencer/symbol'
}
```

It's probably possible to do something similar with other client packagers. PRs documenting this are welcome :smile:

Finally, if using `babel-transform-runtime` pass it the option `{polyfill: false}`
