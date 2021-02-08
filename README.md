**DEPRECATED**

# babel-polyfill-silencer
Microlibrary for use by webpack to avoid babel implicitly importing core-js polyfills

## Usage

In your client side code use `require('babel-polyfill-silencer')` on the first line. This is only necessary if you want to avoid a race condition if loading a `Symbol` polyfill asynchronously, e.g. `https://cdn.polyfill.io/v2/docs/`

In your webpack config use/extend `require('babel-polyfill-silencer/aliases')` in your aliases config.

It's probably possible to do something similar with other client packagers. PRs documenting this are welcome :smile:

Finally, if using `babel-transform-runtime` pass it the option `{polyfill: false}`
