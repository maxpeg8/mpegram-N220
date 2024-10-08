let itemList = {
  items: [],
  name: "Todo List",
  showList() {
    document.getElementById("list").innerHTML = "";

    this.items.forEach(function (item) {
      document.getElementById("list").innerHTML += "<li>" + item + "</li>";
    });
  },
};

function addItem() {
  itemList.items.push(document.getElementById("item").value);
  itemList.showList();
  //   console.log(itemList.showList.itemName);
}

const summaryPTag = document.getElementById("summary");

function summarizeList() {
  summaryPTag.innerHTML = `1. Total Items: 
  <li>${itemList.items.length}</li> 
  <br /> 
  2. First Item: 
  <li>${itemList.items[0]}</li>
  <br />
  3. Last Item: 
  <li>${itemList.items[itemList.items.length - 1]}</li>`;
}
