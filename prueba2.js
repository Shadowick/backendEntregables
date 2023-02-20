function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
      veggies.push(veggie);
      console.log(`New veggies collection is: ${veggies}`);
    } else {
      console.log(`${veggie} already exists in the veggies collection.`);
    }
  }
  
  const veggies = ["potato", "tomato", "chillies", "green-pepper"];
  
  console.log(updateVegetablesCollection(veggies, "potato"));
  // New veggies collection is: potato,tomato,chillies,green-pepper,spinach
  console.log(updateVegetablesCollection(veggies, "spinach"));
  // spinach already exists in the veggies collection.