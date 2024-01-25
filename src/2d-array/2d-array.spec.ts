import {describe, it, skip} from 'node:test';
import * as assert from "node:assert";
import {findHighestHourglassSum} from "./2d-array";
import {Matrix} from "./matrix";
describe("2D Array", () => {
   describe("findHighestHourglassSum", () => {
      it("should return 0 if the matrix is empty", () => {
         assert.equal(findHighestHourglassSum(new Matrix([])), 0);
      })

      it("should return 19 with this matrix", () => {
         assert.equal(findHighestHourglassSum(
             new Matrix([
                [1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]]
             )), 19);
      })
   })
})