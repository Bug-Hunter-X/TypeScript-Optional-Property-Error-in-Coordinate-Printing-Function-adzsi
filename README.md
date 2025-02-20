# TypeScript Optional Property Bug

This repository demonstrates a common error in TypeScript involving optional properties. The `printCoord` function assumes both `x` and `y` properties exist, leading to a runtime error if an object with missing properties is passed.  The solution illustrates how to handle optional properties correctly.

## Bug

The original code lacks proper handling for optional properties, resulting in a runtime error if an incomplete coordinate object is provided. 

## Solution

The solution demonstrates using optional properties and conditional checks to prevent runtime errors. By declaring `x` and `y` as optional (`?`), and using optional chaining or nullish coalescing, the code robustly handles missing properties. 