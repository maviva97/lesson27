// const root = document.getElementById('root');

// const getData = (url) => {
//     return fetch(url).then((res) => res.json())
// }

// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

// const renderList = (list, name) => {
//     const parent = document.createElement('div');
//     const listWrapper = document.createElement('ul');    
//     const title = document.createElement('p');

//     title.innerText = name;

//     list.forEach((post) => {
//         const li = document.createElement('li');
//         li.innerText = post.title
//         listWrapper.appendChild(li);
//     })

//     parent.appendChild(title);
//     parent.appendChild(listWrapper);

//     root.appendChild(parent)
// }

// Promise.all([
//     getData(usersUrl),
//     getData(postsUrl),
// ]).then(([users, posts]) => {

//     users.forEach((user) => {
//         const postList = posts.filter((post) => post.userId === user.id);

//         renderList(postList, user.name)
//     })

// }).catch(err => console.log(err))


// const arr = [3,1,2,4,5,6,7];
//output: 8

// const func = (list) => {
//     return list.sort((a,b) => a - b).reduce((acc, curr, index, arr) => {
//         if(index === 0) return acc;

//         if(acc !== list[list.length - 1] + 1) {
//             return acc;
//         }
        
//         return  curr - arr[index - 1] === 1 ? acc : curr - 1;
        
//     }, arr[arr.length - 1] + 1)
// }

// const func = (list) => {
//     const sortedList = list.sort((a, b) => a - b);

//     let result = sortedList[list.length -1] + 1;

//     for(let i = 1; i < list.length; i++) {
//         if(result !== sortedList[list.length -1] + 1) return result;

//         result = sortedList[i] - sortedList[i - 1] === 1 ? result : sortedList[i] - 1;        
//     }

//     return result;
// }

// console.log(func(arr))

// input: 'Helow World!'
// output: '!dlroW woleH'

// const func = (str) => {
//     return str.split('').reverse().join('');
// }

// console.log(func('Hello World!'))

// const list = [
//     {
//         nume: true,
//         city: false,
//         age: true,
//         hobby: false
//     },
//     {
//         nume: false,
//         city: false,
//         age: true,
//         hobby: true,
//     },
//     {
//         nume: true,
//         city: false,
//         age: true,
//         hobby: true
//     },
// ]

// const func = (arr) => {
//     return arr.reduce((acc, curr) => {
//         const accLength = Object.values(acc).filter(item => item).length;
//         const currLength = Object.values(curr).filter(item => item).length;

//         return accLength > currLength ? acc : curr;
//     })
// }

// console.log(func(list))