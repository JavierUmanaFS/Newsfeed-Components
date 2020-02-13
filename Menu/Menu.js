/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Sign In',
  'LAMBDA'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuCom(array){
  // Define new elements
  const menuDiv = document.createElement('div');
  const menuUl = document.createElement('ul');

  // const listItem = document.createElement('li');
  // Create new list items
  array.forEach((e) => {
    const listItems = document.createElement('li');
    listItems.textContent = e;
    menuUl.appendChild(listItems);
    return listItems
  });

  // Set up the structure of our element
  menuDiv.appendChild(menuUl);

  // Add classes to elements
  menuDiv.classList.add('menu')

  // Set text content

  menuBtn.addEventListener('click', e =>{
    menuDiv.classList.toggle('menu--open');
    console.log(e.target)
  })

  return menuDiv;
}

const menuBtn = document.querySelector('.menu-button');


const header = document.querySelector('.header');


menuItems.map(e => {
  header.appendChild(menuCom(menuItems));
})

document.querySelector('body').append(menuCom(menuItems))
console.log(menuCom(menuItems));