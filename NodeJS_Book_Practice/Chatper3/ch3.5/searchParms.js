const url = require('url');

const {URL} = url;
const myURL = new URL('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); // 키(category)에 해당하는 모든 값을 가져옵니다.
console.log('searchParams.get():', myURL.searchParams.get('limit'));  // 키(limit)에 해당하는 첫번째값만 가져옵니다.
console.log('searchParams.has():', myURL.searchParams.has('page')); // 해당 키(page)가 있는지 없는지 검사합니다.

console.log('searchParams.keys():', myURL.searchParams.keys()); // searchParams의 모든 키를 반복기 객체로 가져옵니다.
console.log('searchParams.values():', myURL.searchParams.values()); // searchParams의 모든 값을 반복기 객체로 가져옵니다.

myURL.searchParams.append('filter', 'es3'); // append(키, 값): 해당 키를 추가합니다, 같은 키의 값이 있다면 유지하고 하나 더 추가
myURL.searchParams.append('filter', 'es5'); 
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6'); // set(키, 값): 같은 키의 값들을 모두 지우고 새로 추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); // 해당 키 제거
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); // 조작한 SearchParams객체를 다시 문자열로 만듭니다. 이 문자열을 search에 대입하면 주소 객체에 반영됩니다.
myURL.search = myURL.searchParams.toString();