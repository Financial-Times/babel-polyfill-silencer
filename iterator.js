Object.defineProperty(module.exports, 'default', {
  get: function () {
      return window.Symbol.iterator || window.__BabelPolyfillSilencerSymbol.iterator;
  }
})
