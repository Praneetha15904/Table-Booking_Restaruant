const topButton = document.getElementById("topButton");
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.opacity = 1;
    } else {
      topButton.style.opacity = 0;
    }
  }

  topButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const nav = document.getElementById("nav");
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      nav.style.backgroundColor = "#000";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  }
let productdata = [
   {
    productname : "Mexican Pizza",
    price :  330,
    image : "https://media.istockphoto.com/id/904333278/photo/homemade-spicy-mexican-taco-pizza.jpg?s=1024x1024&w=is&k=20&c=8gpIPYvFrdVN-we4BoNl1tb5VdhhnzcliwiGxHHzNpw="
   },
   {
    productname : "The Mushroom Melt",
    price : 250,
    image : "https://www.eatingwell.com/thmb/wXyOukWEMKuAGrleoVf-Lqmpumc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mushroom-melt-2000-a85a44ef8ca04648a09f7a83d810c88f.jpg"
   },
   {
    productname : "French Fries",
    price : 220,
    image : "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg"
   },
   {
    productname : "Grilled Chicken",
    price : 350,
    image : "https://rachlmansfield.com/wp-content/uploads/2023/05/IMG_5028-1152x1536.jpg"
   },
   {
    productname : "Grilled Sandwich",
    price :  200,
    image : "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-1.jpg"
   },
   {
    productname : "Coco Spice",
    price : 40
   },
   {
    productname : "Punch",
    price : 40
   },
   {
    productname : "Punja",
    price : 40
   },

]

for (let index = 0; index < 4; index++) {
    document.getElementById("product-detail").innerHTML += `
    <div class="card">
    <img src="${productdata[index].image}" alt="">
    <h3>${productdata[index].productname}</h3>
    <h5>${productdata[index].price}£</h5></div>`;
}