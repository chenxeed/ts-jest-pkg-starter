module.exports = {
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)test)\\.ts$",
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.ts"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "json"
  ],
}