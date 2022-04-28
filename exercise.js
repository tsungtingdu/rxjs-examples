const { 
    Observable, 
    from, 
    of, 
    interval, 
    fromEvent,
    pipe,
    take,
    combineLatest,
    merge,
    concat,
    withLatestFrom,
    switchMap,
    exhaustMap,
    concatMap,
    delay,
    mergeMap,
    switchMapTo,
    takeWhile,
    finalize,
    scan,
    startWith,
    map
  } = rxjs 

// Exercise 1 - filter out even numbers
// const source = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// source.pipe(
//  // add operator here
// ).subscribe(data => console.log(data));

// Exercise 2 - add 1 to all items in the array
// const source = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// source.pipe(
//    // add operator here
// ).subscribe(data => console.log(data));

// Exercise 3 - filter out even numbers, and add 1 to them
// const source = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// source.pipe(
//    // add operators here
// ).subscribe(data => console.log(data));

// Exercise 4 - debounce click event by 1 second
// const button = document.querySelector('button')
// const source = fromEvent(button, 'click')
// source.pipe(
//    // add operators here
// ).subscribe(data => console.log(data));

// Exercise 5 - skip first 3 clicks
// const button = document.querySelector('button')
// const source = fromEvent(button, 'click')
// source.pipe(
//    // add operators here
// ).subscribe(data => console.log(data));

// Exercise 6 - only take first 3 clicks
// const button = document.querySelector('button')
// const source = fromEvent(button, 'click')
// source.pipe(
//    // add operators here
// ).subscribe(data => console.log(data));

// Exercise 7 - filter out even numbers only after user click the button
// const dataSource = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const button = document.querySelector('button')
// const eventSource = fromEvent(button, 'click')
//
// hint: combineLatest, withLatestFrom