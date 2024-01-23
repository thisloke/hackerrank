import {describe, it} from 'node:test';
import * as assert from "node:assert";
import {countA, countInstanceOfCharInAString} from "./repeated-string";

describe("Repeated String", () => {
    describe("countA", () => {
        it("should return 0 if the s string is empty", (t) => {
            assert.equal(countA("", 0), 0);
        })

        it("should return 0 if the n is zero", (t) => {
            assert.equal(countA("", 0), 0);
        })

        it("should return 1 if the string is 'a' and n is 1", (t) => {
            assert.equal(countA("a", 1), 1);
        })

        it("should return 2 if the string is 'a' and n is 2", (t) => {
            assert.equal(countA("a", 2), 2);
        })

        it("should return 1 if the string is 'acab' and n is 2", (t) => {
            assert.equal(countA("acab", 2), 1);
        })

        it("should return 4 if the string is 'abcac' and n is 10", (t) => {
            assert.equal(countA("abcac", 10), 4);
        })

        it("should return 2 if the string is 'ababa' and n is 3", (t) => {
            assert.equal(countA("ababa", 3), 2)
        });
    })

    describe("countInstanceOfCharInAString", () => {
        it("should return 0 if the s string is empty", (t) => {
            assert.equal(countInstanceOfCharInAString("a", ""), 0);
        })

        it("should return 0 if the char is empty", (t) => {
            assert.equal(countInstanceOfCharInAString("", "hola"), 0);
        })

        it("should return 0 if the char is empty and the string is empty", (t) => {
            assert.equal(countInstanceOfCharInAString("", ""), 0);
        })

        it("should return 3 if the char is 'a' and the string is 'aaa'", (t) => {
            assert.equal(countInstanceOfCharInAString("a", "aaa"), 3);
        })
    })
});