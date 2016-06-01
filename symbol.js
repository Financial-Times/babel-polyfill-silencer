Object.defineProperty(module.exports, 'default', {
  get: function () {
      return window.Symbol || window.__BabelPolyfillSilencerSymbol;
  }
})
