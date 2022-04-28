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

const source1 = Observable
	.create(observer => {
		observer.next(1)
		observer.next(2)
    // setTimeout(() => {
		// 	observer.next(3)
		// }, 300)
    throw new Error('error')
	})

const source2 = of(1, 2, 3, 4)

const source3 = from(new Promise((resolve, reject) => {
  // reject('error')
  setTimeout(() => {
    resolve(1);
  }, 3000)
}))

const source4 = interval(500)

const button = document.querySelector('button')
const source5 = fromEvent(button, 'click')

const source6 = Observable.create(observer => {
  setInterval(() => {
    observer.next(1)
  }, 500)
})

const source7 = Observable.create(observer => {
  setInterval(() => {
    observer.next(2)
  }, 5000)
})

// ======= 1 =======  
// console.log('===== start =====');  
// source1.subscribe(value => console.log(value))
// console.log('===== end =====');


// ======= 2 =======
// const observer = {
// 	next: value => {
// 		console.log(value);
// 	}
// }
// source1.subscribe(observer)

// ======= 3 =======
// source1.subscribe(
//   value => console.log(value),
//   error => console.error(error),
//   () => console.log('complete')
// )

// source1.subscribe(
//   console.log,
//   console.info,
//   console.info
// )

// ======= 4 =======
// source3.subscribe(data => console.log(data))

// ======= 5 =======
// source5.subscribe(data => console.log(data))

// ======= 6 =======
// const source2 = of([1, 2, 3, 4])

// source2.pipe(
//   map(data => data),
//   take(2),
// ).subscribe(data => {
//   console.log(data)
// })

// ======= 7 =======
// combineLatest([
//   source6,
//   source7
// ]).pipe(take(10)).subscribe(data => console.log(data, new Date()))

// ======= 8 =======
// merge(source6, source7).subscribe(data => console.log(data))

// ======= 9 =======
// concat(source6.pipe(take(11)), source7).subscribe(data => console.log(data))

// ======= 10 =======
// source6.pipe(withLatestFrom(source7)).subscribe(data => console.log(data))

// ======= 11 =======
// const subscriber1 = source6.subscribe(data => console.log(data + '_1'))
// const subscriber2 = source6.subscribe(data => console.log(data + '_2'))
//
// setTimeout(() => {
//   subscriber1.unsubscribe()
// }, 1000)
//
// setTimeout(() => {
//   subscriber2.unsubscribe()
// }, 2000)

// ======= 11 =======
// fromEvent(button, 'click')
//   .pipe(
//     exhaustMap(() => interval(1000).pipe(take(5)))
//   )
//   .subscribe(console.log);

// ======= 11 =======
// const source8 = of(2000, 1000);
//
// source8.pipe(
//     switchMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
//   )
//   .subscribe(console.log);  


// ======= 12 =======
// const source8 = of(2000, 1000);
// const example = source8.pipe(
//   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
// );
// const subscribe = example.subscribe(val =>
//   console.log(`With concatMap: ${val}`)
// );
//
// const mergeMapExample = source8
//   .pipe(
//     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
//   )
//   .subscribe(val => console.log(`With mergeMap: ${val}`));

// ======= 13 =======
// const COUNTDOWN_TIME = 10;
// const countdownElem = document.getElementById('countdown');
// const click$ = fromEvent(button, 'click');
// const countdown$ = interval(1000).pipe(
//   scan((acc, _) => --acc, COUNTDOWN_TIME),
//   startWith(COUNTDOWN_TIME)
// );

// click$
//   .pipe(
//     switchMapTo(countdown$),
//     takeWhile(val => val >= 0),
//     finalize(() => (countdownElem.innerHTML = "We're done here!"))
//   )
//   .subscribe(val => (countdownElem.innerHTML = val));


//////////////////////////////////////////////////////////////////////
// function* generator(){
//   let num1 = yield "give me first number"
//   if (isNaN(num1)) {
//     return;
//   }
//   let num2 = yield "give me second number"
//   if (isNaN(num2)) {
//     return;
//   }
//   return `${num1} ${num2}`;
// }
//
// const gen = generator()
// console.log(gen.next())
// console.log(gen.next(1))
// console.log(gen.next(2))
// console.log(gen.next())

//////////////////////////////////////////////////////////////////////
// const a = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello')
//   }, 1000);
// })
//
// const b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('world')
//   }, 1500);
// })

// console.log('start');
// a.then(data1 => {
//   b.then(data2 => {
//     console.log(`${data1} ${data2}`)
//   })
// });
// console.log('end');

//////////////////////////////////////////////////////////////////////
// async function a() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello')
//     }, 1000);
//   })
//   return await promise
// }
//
// async function b() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('world')
//     }, 1500);
//   })
//   return await promise
// }
//
// const print = async () => {
//   console.log('start');
//   const data1 = await a();
//   const data2 = await b();
//   console.log(data1, data2);
//   console.log('end');
// }
// print();

//////////////////////////////////////////////////////////////////////
// const promise1$ = from(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 1000)
// }))
//
// const promise2$ = from(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('world');
//   }, 1500)
// }))
//
// combineLatest([promise1$, promise2$]).subscribe(([data1, data2]) => console.log(data1, data2))