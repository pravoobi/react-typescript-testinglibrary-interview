const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/setuptests.ts"
  ]
};

module.exports = config;