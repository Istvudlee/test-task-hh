describe("serchMaxNum", function () {

	it("находит индекс максимального значения массива 1-вариант", function () {
		assert.equal(searchMaxNumFirst([1, 5, 25, 2, 78, 15, 88]), 6);
	});

	it("находит индекс максимального значения массива 2-вариант", function () {
		assert.equal(searchMaxNumSecond([1, 5, 25, 2, 98, 15, 88]), 4);

	});

	it("находит индекс максимального значения массива 3-вариант", function () {
		assert.equal(searchMaxNumThird([1, 5, 25, 2, 128, 150, 18]), 5);
	});
});