let cartItems = [];

    function addToCart(productName, price) {
      cartItems.push({ name: productName, price: price });
      updateCartContent();
    }

    function updateCartContent() {
      const cartContent = document.getElementById('cart-content');
      cartContent.innerHTML = '';

      if (cartItems.length === 0) {
        cartContent.innerHTML = 'Koszyk jest pusty.';
      } else {
        cartItems.forEach(item => {
          cartContent.innerHTML += `${item.name} - ${item.price} zł<br>`;
        });

        const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
        cartContent.innerHTML += `<strong>Łączna cena: ${totalPrice} zł</strong>`;
      }
    }

    function toggleCart() {
      const cartContent = document.getElementById('cart-content');
      cartContent.style.display = (cartContent.style.display === 'block') ? 'none' : 'block';
    }