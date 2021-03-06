module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: ["**/src/**/*.+(test).+(ts|tsx)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "^.+\\.(css)$": "identity-obj-proxy",
    },
};
