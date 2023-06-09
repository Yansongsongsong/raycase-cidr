import { ipRangeToCIDR } from "../src/utils/cidr-utils";

describe("ip range to cidr", function () {
  it("[10, 0, 0, 1], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 1], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 1], 32],
      [[10, 0, 0, 2], 31],
      [[10, 0, 0, 4], 30],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 2], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 2], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 2], 31],
      [[10, 0, 0, 4], 30],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 3], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 3], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 3], 32],
      [[10, 0, 0, 4], 30],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 4], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 4], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 4], 30],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 5], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 5], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 5], 32],
      [[10, 0, 0, 6], 31],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 6], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 6], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 6], 31],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 7], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 7], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 7], 32],
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 8], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 8], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 8], 29],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 9], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 9], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 9], 32],
      [[10, 0, 0, 10], 31],
      [[10, 0, 0, 12], 30],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 10], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 10], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 10], 31],
      [[10, 0, 0, 12], 30],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 11], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 11], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 11], 32],
      [[10, 0, 0, 12], 30],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 12], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 12], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 12], 30],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 13], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 13], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 13], 32],
      [[10, 0, 0, 14], 31],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 14], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 14], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 14], 31],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 15], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 15], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 15], 32],
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 16], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 16], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 16], 28],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 17], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 17], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 17], 32],
      [[10, 0, 0, 18], 31],
      [[10, 0, 0, 20], 30],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 18], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 18], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 18], 31],
      [[10, 0, 0, 20], 30],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 19], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 19], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 19], 32],
      [[10, 0, 0, 20], 30],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 20], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 20], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 20], 30],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 21], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 21], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 21], 32],
      [[10, 0, 0, 22], 31],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 22], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 22], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 22], 31],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 23], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 23], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 23], 32],
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 24], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 24], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 24], 29],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 25], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 25], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 25], 32],
      [[10, 0, 0, 26], 31],
      [[10, 0, 0, 28], 30],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 26], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 26], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 26], 31],
      [[10, 0, 0, 28], 30],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 27], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 27], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 27], 32],
      [[10, 0, 0, 28], 30],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 28], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 28], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 28], 30],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 29], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 29], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 29], 32],
      [[10, 0, 0, 30], 31],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 30], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 30], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 30], 31],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 31], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 31], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 31], 32],
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 32], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 32], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 32], 27],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 33], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 33], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 33], 32],
      [[10, 0, 0, 34], 31],
      [[10, 0, 0, 36], 30],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 34], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 34], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 34], 31],
      [[10, 0, 0, 36], 30],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 35], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 35], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 35], 32],
      [[10, 0, 0, 36], 30],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 36], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 36], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 36], 30],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 37], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 37], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 37], 32],
      [[10, 0, 0, 38], 31],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 38], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 38], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 38], 31],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 39], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 39], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 39], 32],
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 40], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 40], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 40], 29],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 41], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 41], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 41], 32],
      [[10, 0, 0, 42], 31],
      [[10, 0, 0, 44], 30],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 42], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 42], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 42], 31],
      [[10, 0, 0, 44], 30],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 43], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 43], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 43], 32],
      [[10, 0, 0, 44], 30],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 44], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 44], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 44], 30],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 45], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 45], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 45], 32],
      [[10, 0, 0, 46], 31],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 46], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 46], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 46], 31],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 47], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 47], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 47], 32],
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 48], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 48], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 48], 28],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 49], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 49], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 49], 32],
      [[10, 0, 0, 50], 31],
      [[10, 0, 0, 52], 30],
      [[10, 0, 0, 56], 29],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[10, 0, 0, 50], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([10, 0, 0, 50], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[10, 0, 0, 50], 31],
      [[10, 0, 0, 52], 30],
      [[10, 0, 0, 56], 29],
      [[10, 0, 0, 64], 26],
      [[10, 0, 0, 128], 25],
    ]);
  });

  it("[0, 0, 0, 0], [10, 0, 0, 255]", function () {
    const res = ipRangeToCIDR([0, 0, 0, 0], [10, 0, 0, 255]);
    expect(res.ok).toBe(true);
    expect(res.val).toEqual([
      [[0, 0, 0, 0], 5],
      [[8, 0, 0, 0], 7],
      [[10, 0, 0, 0], 24],
    ]);
  });
});
