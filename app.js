(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "underscore"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"), require("underscore"));
  } else {
    root.Requester = factory(root.$, root._);
  }
})(this, function ($, _) {
  return {
    hello: function () {
      console.log("Hello World!");
    },
  };
});
