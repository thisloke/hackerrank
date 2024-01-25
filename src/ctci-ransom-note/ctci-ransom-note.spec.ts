import {describe, it} from "node:test";
import assert = require("node:assert");
import {checkMagazine} from "./ctci-ransom-note";

describe("Ctci Ransom Note", () => {
    describe("checkMagazine",  () => {
        it("if note is empty should return Yes", () => {
            assert.deepStrictEqual(checkMagazine(["bla", "ble", "bli"], []), "Yes");
        })

        it("if magazine is empty and note have words should return No",  () => {
            assert.deepStrictEqual(checkMagazine([], ["bla", "ble", "bli"]), "No");
        })

        it("Yes case", () => {
            assert.deepStrictEqual(checkMagazine(["give", "me", "one", "grand" ,"today" ,"night"], ["give", "one", "grand", "today"]), "Yes");
        })

        it("No case due case-sensitive in magazines", () => {
            assert.deepStrictEqual(checkMagazine(["give", "me", "one", "Grand" ,"today" ,"night"], ["give", "one", "grand", "today"]), "No");
        })

        it("No case due case-sensitive in note", () => {
            assert.deepStrictEqual(checkMagazine(["give", "me", "one", "grand" ,"today" ,"night"], ["give", "one", "Grand", "today"]), "No");
        })

        it("No case for lack of duplicated words", () => {
            assert.deepStrictEqual(checkMagazine(["two", "times", "three", "is" ,"not" ,"four"], ["two", "times", "two", "is", "four"]), "No");
        })

        it("No case",  () => {
            assert.deepStrictEqual(checkMagazine(["ive", "got", "a", "lovely" ,"bunch" ,"of", "coconuts"], ["ive", "got", "some", "coconuts"]), "No");
        })

    });
})