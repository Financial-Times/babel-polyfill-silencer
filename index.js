// Dummy Symbol implementations purely to avoid babelified code
// that expects these to be defined erroring
window.__BabelPolyfillSilencerSymbol = function () {
	console.warn('Symbol is not available in this browser yet. You may have a race condition with code reliant on Symbol executing before a polyfill has loaded')
	return {}
};
window.__BabelPolyfillSilencerSymbol.iterator = {};
