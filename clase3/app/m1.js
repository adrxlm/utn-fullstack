// IIFE
// EXPRESION FUNCIONAL INMEDIATA (?
// Node implementa su propio scope con las variables que
// aparecen entre paréntesis
(function(require, module, exports, __filename, __dirname) {
    console.log('require', require);
    console.log('module', module);
    console.log('exports', exports);
    console.log('__filename', __filename);
    console.log('__dirname', __dirname);
})(require, module, exports, __filename, __dirname);