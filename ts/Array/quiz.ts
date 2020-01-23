const arr = Array.from("a1,a2,a3,a5");
const rr = this.mockSplit(",", arr);
console.log(rr);

function mockSplit(keyword: string, arr: Array<string>): string {
  const result = arr
    .map(v => {
      if (v === keyword) {
        return;
      } else {
        return v;
      }
    })
    .filter(v => v)
    .reduce((p, c, i) => {
      if (c >= "0" && "9" <= c && i !== 0) {
        return p + "," + c;
      }
      return p + c;
    }, "");

  return result;
}

// with checkbox
const sss = checkboxToChoice();

function checkboxToChoice() {
  return [true, true, false, false]
    .map((v, i) => ({
      name: `A${i + 1}`,
      check: v
    }))
    .filter(w => w.check)
    .map(y => y.name);
}
