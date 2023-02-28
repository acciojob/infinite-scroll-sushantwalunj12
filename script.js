const infiList = document.getElementById('infi-list');
let counter = 10;

// Add 10 list items to the list by default
for (let i = 1; i <= counter; i++) {
  const listItem = document.createElement('li');
  listItem.innerText = `List item ${i}`;
  infiList.appendChild(listItem);
}

// Add 2 more list items when the user reaches the end of the list
infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    for (let i = counter + 1; i <= counter + 2; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = `List item ${i}`;
      infiList.appendChild(listItem);
    }
    counter += 2;
  }
});
