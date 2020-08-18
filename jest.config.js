module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "http://www.google.com"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}