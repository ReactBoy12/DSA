function printStarPatttern(n) {
  // for (let i = 0; i < n; i++) {
  //   let row = " ";
  //   for (let j = 0; j < n; j++) {
  //     row = row + " * ";
  //   }
  //   console.log(row);
  // }
  //2.
  // *
  // **
  // ***
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j <= i; j++) {
  //     row = row + " * ";
  //   }
  //   console.log(row);
  // }
  //3.
  // 1
  // 12
  // 123
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j <= i; j++) {
  //     // row = row + " " + `${j + 1}`;
  //     row = row + (j + 1);
  //   }
  //   console.log(row);
  // }
  //4.
  // 1
  // 22
  // 333
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j <= i; j++) {
  //     row = row + (i + 1);
  //   }
  //   console.log(row);
  // }
  //4.
  // 123
  // 12
  // 1
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j < n - i; j++) {
  //     // row = row + (j + 1);
  //     //for star "*" pattern
  //     row = row + " * ";
  //   }
  //   console.log(row);
  // }
  // 5.
  //       *
  //     * *
  //   * * *
  // * * * *
  // for (let i = 0; i < n; i++) {
  //   let row = " ";
  //   for (let j = 0; j < n - i + 1; j++) {
  //     row = row + " ";
  //   }
  //   for (let k = 0; k < i + 1; k++) {
  //     row = row + "*";
  //   }
  //   console.log(row);
  // }

  // 6.
  // 1
  // 1 0
  // 1 0 1
  // 1 0 1 0
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j < i + 1; j++) {
  //     if (j == 0) {
  //       row = row + "1";
  //     } else if (j % 2 == 0) {
  //       row = row + "1";
  //     } else {
  //       row = row + "0";
  //     }
  //   }
  //   console.log(row);
  // }

  // 6.
  // 1
  // 0 1
  // 0 1 0
  // 1 0 1 0
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

printStarPatttern(4);
