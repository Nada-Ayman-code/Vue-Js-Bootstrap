const {createApp}= Vue;

createApp(
    {
      data(){
         return { 
          products: [{id: 1, name: "Milk", price: 25,  alert: false, inStock: true, description: "Fresh cow milk, 1 L", discount: 10, thumbnail: "https://gourmetegypt.com/media/catalog/product/i/m/imgi_9_milkmanp1.jpg"},
  {id: 2, name: "Bread", price: 15, inStock: true, alert: false, description: "Whole wheat bread loaf", thumbnail: "https://www.backerhausveit.com/wp-content/uploads/2021/03/17783-1.jpg"},
  {id: 3, name: "Eggs", price: 60, inStock: false,alert: false, description: "Pack of 12 farm eggs", discount: 15, thumbnail: "https://cdn.mafrservices.com/sys-master-root/h87/ha1/28115701956638/1808229_main.jpg"},
  {id: 4, name: "Cheese", price: 120, inStock: true,alert: false, description: "Cheddar cheese block 500 g", discount: 20, thumbnail: "https://d2j6dbq0eux0bg.cloudfront.net/images/76643759/3131245059.jpg"},
  {id: 5, name: "Butter", price: 45, inStock: true,alert: false, description: "Creamy salted butter 200 g", thumbnail: "https://images.unsplash.com/photo-1603048293734-384a21eca4d1?auto=format&fit=crop&w=600&q=60"},
  {id: 6, name: "Apples", price: 30, inStock: true,alert: false, description: "Fresh red apples (1 kg)", discount: 5, thumbnail: "https://images.unsplash.com/photo-102104/pexels-photo-102104.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 7, name: "Bananas", price: 20, inStock: true, alert: false,description: "Ripe bananas (1 kg)", thumbnail: "https://images.unsplash.com/photo-1111315/pexels-photo-1111315.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 8, name: "Oranges", price: 35, inStock: false, alert: false,description: "Juicy oranges (1 kg)", discount: 10, thumbnail: "https://images.unsplash.com/photo-42059/pexels-photo-42059.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 9, name: "Tomatoes", price: 18, inStock: true,alert: false, description: "Organic tomatoes (1 kg)", thumbnail: "https://images.unsplash.com/photo-8390/food-healthy-vegetables-red.jpg?auto=format&fit=crop&w=600&q=60"},
  {id: 10, name: "Potatoes", price: 22, inStock: true, alert: false,description: "Fresh potatoes (1 kg)", discount: 5, thumbnail: "https://images.unsplash.com/photo-158707/pexels-photo-158707.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 11, name: "Onions", price: 17, inStock: true, alert: false,description: "Golden onions (1 kg)", thumbnail: "https://images.unsplash.com/photo-2232/vegetables-onion-garlic-kitchen.jpg?auto=format&fit=crop&w=600&q=60"},
  {id: 12, name: "Carrots", price: 25, inStock: false, alert: false,description: "Crunchy carrots (1 kg)", discount: 20, thumbnail: "https://images.unsplash.com/photo-776132/pexels-photo-776132.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 13, name: "Cucumber", price: 19, inStock: true, alert: false,description: "Fresh cucumbers (1 kg)", thumbnail: "https://images.unsplash.com/photo-8032540/pexels-photo-8032540.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 14, name: "Lettuce", price: 12, inStock: true,alert: false, description: "Crisp green lettuce", discount: 5, thumbnail: "https://images.unsplash.com/photo-693415/pexels-photo-693415.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 15, name: "Chicken", price: 150, inStock: true, alert: false,description: "Fresh whole chicken (1.5 kg)", thumbnail: "https://images.unsplash.com/photo-616354/pexels-photo-616354.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 16, name: "Beef", price: 250, inStock: false, alert: false,description: "Premium beef steak (1 kg)", discount: 25, thumbnail: "https://images.unsplash.com/photo-675951/pexels-photo-675951.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 17, name: "Fish", price: 180, inStock: true, alert: false,description: "Fresh tilapia (1 kg)", discount: 15, thumbnail: "https://images.unsplash.com/photo-46239/salmon-dish-food-healthy-46239.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 18, name: "Shrimp", price: 300, inStock: true, alert: false,description: "Large shrimp (1 kg)", thumbnail: "https://images.unsplash.com/photo-616332/pexels-photo-616332.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 19, name: "Rice", price: 90, inStock: true, alert: false,description: "White rice (5 kg)", thumbnail: "https://images.unsplash.com/photo-5908/rice-white-food-grain.jpg?auto=format&fit=crop&w=600&q=60"},
  {id: 20, name: "Pasta", price: 40, inStock: true, alert: false,description: "Durum wheat pasta", discount: 10, thumbnail: "https://images.unsplash.com/photo-1279330/pexels-photo-1279330.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 21, name: "Olive Oil", price: 220, inStock: true, alert: false,description: "Extra virgin olive oil (1 L)", thumbnail: "https://images.unsplash.com/photo-251997/pexels-photo-251997.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 22, name: "Sugar", price: 75, inStock: true, alert: false,description: "Granulated sugar (5 kg)", discount: 5, thumbnail: "https://images.unsplash.com/photo-41398/sugar-cupfood-ingredient-sweet-41398.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 23, name: "Salt", price: 10, inStock: true, alert: false,description: "Table salt (1 kg)", thumbnail: "https://images.unsplash.com/photo-252374/pexels-photo-252374.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 24, name: "Black Pepper", price: 35, inStock: true, alert: false,description: "Ground black pepper (100 g)", discount: 10, thumbnail: "https://images.unsplash.com/photo-34138/pepper-black-grain-spice.jpg?auto=format&fit=crop&w=600&q=60"},
  {id: 25, name: "Tea", price: 95, inStock: false, alert: false,description: "Premium black tea (250 g)", thumbnail: "https://images.unsplash.com/photo-302899/pexels-photo-302899.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 26, name: "Coffee", price: 150, inStock: true, alert: false,description: "Roasted coffee beans (500 g)", discount: 20, thumbnail: "https://images.unsplash.com/photo-302899/pexels-photo-302899.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 27, name: "Juice", price: 50, inStock: true, alert: false,description: "Orange juice carton (1 L)", thumbnail: "https://images.unsplash.com/photo-96974/pexels-photo-96974.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 28, name: "Water", price: 8, inStock: true, alert: false,description: "Mineral water bottle (1.5 L)", discount: 5, thumbnail: "https://images.unsplash.com/photo-4504757/pexels-photo-4504757.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 29, name: "Chips", price: 20, inStock: true, alert: false,description: "Potato chips pack", discount: 10, thumbnail: "https://images.unsplash.com/photo-1643632/pexels-photo-1643632.jpeg?auto=format&fit=crop&w=600&q=60"},
  {id: 30, name: "Chocolate", price: 55, inStock: true, alert: false,description: "Milk chocolate bar 100 g", thumbnail: "https://images.unsplash.com/photo-4099128/pexels-photo-4099128.jpeg?auto=format&fit=crop&w=600&q=60"}],
       cartcount: 0,
       showProducts: true,
            }
    },

      methods:{
           
        productAdded(productid){
          this.cartcount++;
          let filt= this.products.find((item)=> 
            item.id===productid)

          filt.alert= !filt.alert;
          let stop= setInterval( (item)=>{
           filt.alert= !filt.alert;
        } ,3000);

        setTimeout( ()=>{
          clearInterval(stop);}
        ,3000);
        
      },

    }
  }
).mount("#app-root");