import {describe, it} from "node:test";
import assert = require("node:assert");
import {rotLeft} from "./ctci-array-left-rotation";

describe("Ctci Array Left Rotation", () => {
    describe("rotLeft", () => {
        it("an empty array return itself ", () => {
            assert.deepStrictEqual(rotLeft([], 100), [])
            assert.deepStrictEqual(rotLeft([], 1), [])
            assert.deepStrictEqual(rotLeft([], 0), [])
        })

        it("rotate an array of X position should return the array rotated left by X position", () => {
            assert.deepStrictEqual(rotLeft([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
        })
    });
})