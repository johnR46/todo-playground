var arr = Array.of("a1,a2,a3,a5");
var rr = this.mockSplit(",", arr);
console.log(rr);
function mockSplit(keyword, arr) {
    var result = arr
        .map(function (v) {
        if (v === keyword) {
            return;
        }
        else {
            return v;
        }
    })
        .filter(function (v) { return v; })
        .reduce(function (p, c, i) {
        if (c >= "0" && "9" <= c && i !== 0) {
            return p + "," + c;
        }
        return p + c;
    }, "");
    return result;
}
// with checkbox
var sss = checkboxToChoice();
function checkboxToChoice() {
    return [true, true, false, false]
        .map(function (v, i) { return ({
        name: "A" + (i + 1),
        check: v
    }); })
        .filter(function (w) { return w.check; })
        .map(function (y) { return y.name; });
}
