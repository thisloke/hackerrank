import {describe, it, skip} from 'node:test';
import * as assert from "node:assert";
import {Hourglass} from "./hourglass";
import {Matrix} from "./matrix";
import {TwoDimensionVector} from "./2d-array";
describe("2D Array", () => {
   describe("extractFromMatrix", () => {
      it("should extract the hourglasses matrices", () => {
          const hourglasses = Hourglass.extractFromMatrix(new Matrix([
              [1, 1, 1, 0, 0, 0],
              [0, 1, 0, 0, 0, 0],
              [1, 1, 1, 0, 0, 0],
              [0, 0, 2, 4, 4, 0],
              [0, 0, 0, 2, 0, 0],
              [0, 0, 1, 2, 4, 0]
          ]));

          const matrixOfHourglasses: TwoDimensionVector[] = [];
          hourglasses.forEach(hG => {
              matrixOfHourglasses.push(hG.items);
          })
          assert.deepStrictEqual(matrixOfHourglasses, [
              [[1, 1, 1], [0, 1, 0], [1, 1, 1]],
              [[1, 1, 0], [0, 0, 0], [1, 1, 0]],
              [[1, 0, 0], [0, 0, 0], [1, 0, 0]],
              [[0, 0, 0], [0, 0, 0], [0, 0, 0]],

              [[0, 1, 0], [0, 1, 0], [0, 0, 2]],
              [[1, 0, 0], [0, 1, 0], [0, 2, 4]],
              [[0, 0, 0], [0, 0, 0], [2, 4, 4]],
              [[0, 0, 0], [0, 0, 0], [4, 4, 0]],

              [[1, 1, 1], [0, 0, 0], [0, 0, 0]],
              [[1, 1, 0], [0, 2, 0], [0, 0, 2]],
              [[1, 0, 0], [0, 4, 0], [0, 2, 0]],
              [[0, 0, 0], [0, 4, 0], [2, 0, 0]],

              [[0, 0, 2], [0, 0, 0], [0, 0, 1]],
              [[0, 2, 4], [0, 0, 0], [0, 1, 2]],
              [[2, 4, 4], [0, 2, 0], [1, 2, 4]],
              [[4, 4, 0], [0, 0, 0], [2, 4, 0]],
          ])
      })

      it("should return a single hourglass", () => {
          const hourglasses = Hourglass.extractFromMatrix(
              (new Matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]
              ])));

          assert.equal(hourglasses.length, 1)
          assert.deepStrictEqual(hourglasses[0].items, [[1, 1, 1], [0, 1, 0], [1, 1, 1]])
      })

      it("should return zero hourglass", () => {
         assert.deepStrictEqual(Hourglass.extractFromMatrix(
             new Matrix([])), [])
      })

      it("should return zero hourglass", () => {
         assert.deepStrictEqual(Hourglass.extractFromMatrix(
             new Matrix([[1, 2], [3, 4]])), [])
      })
   });

   describe("sum", () => {
         it("should return the sum of every item in an hourglass", () => {
            assert.equal(new Hourglass([[1, 1, 1], [1, 1, 1], [1, 1, 1]]).sum(),7);
         })
   })

   describe("hourglassify", () => {
      it("should convert a 3x3 matrix in an hourglass", () => {
         assert.deepStrictEqual(Hourglass.hourglassify([[1, 1, 1], [1, 1, 1], [1, 1, 1]]),[[1, 1, 1], [0, 1, 0], [1, 1, 1]]);
      })
   })
});