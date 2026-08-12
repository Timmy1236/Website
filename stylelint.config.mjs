/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "comment-empty-line-before": null,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        ignorePartialSupport: true
      }
    ]
  },
  ignoreFiles: [
    "public/dist/**/*.css",
    "public/elements.css"
  ]
};
