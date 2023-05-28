const objKeys = require('./1_keys');
const objValues = require('./2_values');
const objThis = require('./3_this');
const objMoreThis = require('./4_moreThis');
const objMostThis = require('./5_mostThis');

const testObj = {
    class: 'javascript',
    time: 'All day',
    'favorite teacher': 'Sol'
}

test('Object keys', () => {
    const output = ['class', 'time', 'favorite teacher'];
    expect(objKeys(testObj)).toEqual(output);
});

test('Object values', () => {
    const output = ['javascript', 'All day', 'Sol'];
    expect(objValues(testObj)).toEqual(output);
});

test('Object this', () => {
    const inputObj = {
        ...testObj,
        learning: function () {
            return `Im learning ${this.class}`;
        }
    }
    expect(objThis(inputObj)).toBe('Im learning javascript');
});

test('Object More This', () => {
    const inputObj = {
        students: 7,
        teachers: 2,
        everyone: function () {}
    }

    expect(objMoreThis(inputObj).everyone()).toBe(9);
});

test('Object Most This', () => {
    const inputObj = {
        students: 7,
        teachers: 2,
        everyone: function () {}
    }

    function getThis () {
        return this.students;
    }

    expect(objMostThis(inputObj, getThis).getThis()).toBe(7);
});

test('Object Most This Undefined', () => {
    const inputObj = {
        students: 7,
        teachers: 2,
        everyone: function () {}
    }

    const getThis = () => {
        return this.students;
    }

    expect(objMostThis(inputObj, getThis).getThis()).toBe(undefined);
});
