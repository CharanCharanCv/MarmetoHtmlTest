document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const productImage = document.getElementById('productImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            productImage.src = this.src;
        });
    });

    const originalPrice = 12999.00;
    const compareAtPrice = 19999.00;
    const discountPercentage = ((compareAtPrice - originalPrice) / compareAtPrice) * 100;
    const discountElement = document.querySelector('.discount');
    discountElement.textContent = discountPercentage.toFixed(0) + '% Off';

    const addToCartButton = document.querySelector('.add-to-cart');
    const cartMessage = document.querySelector('.cart-message');
    // addToCartButton.addEventListener('click', function() {
    //     // const selectedSize = document.querySelector('input[name="size"]:checked').id;
    //     // const selectedColor = document.querySelector('input[type="color"]:checked').id;
    //     const quantity = document.querySelector('.quantityInput').value;
    //     const message = `Added to cart: ${quantity} ${selectedColor} ${selectedSize}(s)`;
    //     cartMessage.textContent = message;
    //     cartMessage.style.display = 'block';
    // });
});
let color ="";
function icon(flag) {
    const icon1 = document.getElementById("myIcon1");
    const icon2 = document.getElementById("myIcon2");
    const icon3 = document.getElementById("myIcon3");
    const icon4 = document.getElementById("myIcon4"); 
    const colorElement = document.getElementById("currentColor");
       if (flag ===1) {
        icon1.style.display = "inline-block";
        icon3.style.display = "none";
        icon2.style.display = "none";
        icon4.style.display = "none";
         color = "Peach";
        colorElement.style.backgroundColor = "#ECDECC";

        // colorElement.textContent = `Embrace Sideboard with color ${color} and   with size ${size}  added to cart`;

    } else if (flag ===2) {
        icon2.style.display = "inline-block";
        icon3.style.display = "none";
        icon1.style.display = "none";
        icon4.style.display = "none";
         color = "Green";
        colorElement.style.backgroundColor = "#BBD278";

        // colorElement.textContent = `Embrace Sideboard with color ${color} and  with size ${size}   added to cart`;
    }
    else if (flag ===3) {
        icon3.style.display = "inline-block";
        icon1.style.display = "none";
        icon2.style.display = "none";
        icon4.style.display = "none";
         color = "light blue";
        colorElement.style.backgroundColor = "#BBC1F8";

        // colorElement.textContent = `Embrace Sideboard with color ${color} and    with size ${size}   added to cart`;
      }
      else if (flag ===4) {
        icon4.style.display = "inline-block";
        icon3.style.display = "none";
        icon2.style.display = "none";
        icon1.style.display = "none";
         color = "pink";
        colorElement.style.backgroundColor = "#FFD3F8";

        // colorElement.textContent = `Embrace Sideboard with color ${color} and  with size ${size}  added to cart`;
      }
  }

  function addTocart(){
    const colorElement = document.getElementById("currentColor");
    colorElement.style.display = "inline-block";
    colorElement.textContent = `Embrace Sideboard with color ${color} and  with size ${size}  added to cart`;

    setTimeout(function() {
        colorElement.style.display = "none";
    }, 3000);
    
  }
  let  size ="";

  function selectedSize(){
    size = document.querySelector('input[name="size"]:checked').id;
    console.log("Selected size: " + size);
  }