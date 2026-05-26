/** @type {import("stylelint").Config} */
export default {
  "plugins": ["stylelint-no-unsupported-browser-features"],
  "rules": {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "browsers": [">0.3%, defaults and fully supports es6-module and baseline widely available"],
      }
    ]
  },
  "extends": ["stylelint-config-standard"],
  "ignoreFiles": ["public/dist/**/*.css",
    "public/elements.css"
  ]
};
