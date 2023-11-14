module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
