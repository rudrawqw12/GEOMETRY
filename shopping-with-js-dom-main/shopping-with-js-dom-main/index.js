
// for first card 

let serial = 0;
document.getElementById('first-card').addEventListener('click',function(){
  serial +=1;
  const productName=document.getElementById('first-name').innerText;
  const productPrice=document.getElementById('first-price').innerText;
  const productQuantity=document.getElementById('first-quantity').innerText;
  console.log(productName,productPrice);

  const totalPrice =parseInt(productPrice)*parseInt(productQuantity);

  displayData(productName ,productPrice,productQuantity,totalPrice);

});

document.getElementById('second-card').addEventListener('click',function(e){  //event hocce jei buttonke click korbo seitar body soho puro tag guloke dhorar jonno
  console.log(e.target.parentNode.parentNode.children[0]);
  serial+=1;

const productName =e.target.parentNode.parentNode.children[0].innerText;
const productPrice =e.target.parentNode.parentNode.children[2].children[0].innerText;
const productQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText;

const sumTotal = parseInt(productPrice)+parseInt(productQuantity);
console.log(sumTotal);
displayData(productName ,productPrice,productQuantity,sumTotal);

})







// third card 

document.getElementById('third-card').addEventListener('click',function(){
  serial +=1;

  getAllCommonData('third-name','third-price','third-quantity');
  





});


function getAllCommonData(elementName,elementPrice,elementQuantity){
  const productName=document.getElementById(elementName).innerText;
  const productPrice=document.getElementById(elementPrice).innerText;
  const productQuantity=document.getElementById(elementQuantity).innerText;
  const totalPrice =parseInt(productPrice)-parseInt(productQuantity);

  displayData(productName ,productPrice,productQuantity,totalPrice);
}
document.getElementById('btn-last').addEventListener('click',function(){
  const productName = document.getElementById('product-name').innerText;
  const input1 =document.getElementById('inputField1-field').value;
  const input2 =document.getElementById('inputField2-field').value;

  const total=parseInt(input1) * parseInt(input2);
  displayData(productName,input1,input2,total);



})


// common function 
// function get all common data 
















function displayData(productName ,productPrice,productQuantity,totalPrice){

  const container =document.getElementById('table-container');
  const tr =document.createElement('tr');
  tr.innerHTML =`
  <td>${serial}</td>
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${productQuantity}</td>
  <td>${totalPrice}</td>

  
  
  `;
  container.appendChild(tr);
}