// Korn Chotpitakkul

const find_alien_name = (n, aliens) => {
  const arr = [...aliens];
  const arr_len = arr.length;

  if (n <= arr_len) {
    return arr[n - 1];
  } else {
    for (let i = 0, len = n - arr_len; i < len; i++) {
      const feed = arr.shift();
      arr.push(feed, feed);
    }

    return arr[n - 1];
  }
}

console.log(find_alien_name(2, ['A', 'B', 'C']));
// B

console.log(find_alien_name(100, ['A']));
// A

console.log(find_alien_name(714282, ['A', 'B', 'C', 'D', 'E', 'F', 'G']));
// D
