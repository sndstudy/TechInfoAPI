"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./demo");
test("hoge", () => {
    const demo = new demo_1.DemoClass();
    expect(demo.sum(2, 4)).toBe(6);
});
//# sourceMappingURL=demo.test.js.map