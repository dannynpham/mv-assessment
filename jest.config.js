module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^Components(.*)$": "<rootDir>/components$1",
    "^Services(.*)$": "<rootDir>/services$1",
    "^Hooks(.*)$": "<rootDir>/hooks$1",
    "^Utils(.*)$": "<rootDir>/utils$1",

    "^Pages(.*)$": "<rootDir>/pages$1",
    "^Mocks(.*)$": "<rootDir>/test/mocks$1",
  },
};