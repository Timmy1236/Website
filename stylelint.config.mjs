/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "plugins": ["stylelint-no-unsupported-browser-features"],
  "rules": {
    "comment-empty-line-before": null,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "browsers": [">0.3%, defaults and fully supports es6-module and baseline widely available"],
        "ignorePartialSupport": true
      }
    ]
  },
  "ignoreFiles": [
    "public/dist/**/*.css",
    "public/elements.css"
  ]
};
