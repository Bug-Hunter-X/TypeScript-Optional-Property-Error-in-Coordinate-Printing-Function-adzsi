function printCoord(pt: { x?: number; y?: number }) {
  console.log("The coordinate's x value is " + (pt.x ?? 'undefined'));
  console.log("The coordinate's y value is " + (pt.y ?? 'undefined'));
}

printCoord({ x: 3, y: 7 });
printCoord({});
printCoord({ x: 3});