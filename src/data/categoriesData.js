// src/data/categoriesData.js

//fruits
import banana from '../assets/Fruits/banana.jpg';
import papaya from '../assets/Fruits/papaya.jpg';
import pineapple from '../assets/Fruits/pineapple.jpg';
import grapes from '../assets/Fruits/grapes.jpg';
import watermelon from '../assets/Fruits/watermelon.jpg';
import mango from '../assets/Fruits/mango.jpg';
import pomegranate from '../assets/Fruits/pomegranate.jpg'

//Vegetables
import brinjal from '../assets/Vegetables/brinjal.jpg';
import carrot from '../assets/Vegetables/carrot.jpg';
import greenBeans from '../assets/Vegetables/green beans.jpg';
import tomatoes from '../assets/Vegetables/tomatoes.jpg';
import lemon from '../assets/Vegetables/lemon.jpg'
import cucumber from '../assets/Vegetables/cucumber.jpg'


//Dairies
import milk from '../assets/dairies/milk.jpg';
import curd from '../assets/dairies/curd.jpg';
import eggs from '../assets/eggs.png';


//Oil
import coconutOil from '../assets/oil/coconut oil.jpg';
import peanutOil from '../assets/oil/peanut oil.jpg';
import oliveOil from '../assets/oil/Olive oil.jpg';

//Flower
import crossandra from '../assets/Flower/crossandra.jpg'
import rose from '../assets/Flower/rose.jpg'

//Meats
import chicken from '../assets/Meat/Chicken.jpg';
import goat from '../assets/Meat/goat.jpg';
import quail from '../assets/Meat/quail.jpeg';
import duck from '../assets/Meat/duck.jpg';


//Background



const categoriesData = [
  {
    title: "Dairies & Eggs",
    items: [
      { name: "Full Cream Fresh Milk", weight: "500 ml", price: "₹34", image: milk },
      { name: "Curd", weight: "500 g", price: "₹35", image: curd },
      { name: "Cow Fresh Milk", weight: "500 ml", price: "₹29", image: milk },
      { name: "Chicken Eggs", weight: "1 dozen", price: "₹60", image: eggs },
      { name: "Quail Eggs", weight: "1 dozen", price: "₹180", image: eggs },
      { name: "Duck Eggs", weight: "1 dozen", price: "₹120", image: eggs },
    ],
  },
  {
    title: "Meats",
    items: [
      { name: "Chicken", weight: "1 kg", price: "₹150", image: chicken },
      { name: "Mutton", weight: "1 kg", price: "₹800", image: goat },
      { name: "Duck", weight: "1 kg", price: "₹400", image: duck },
      { name: "Quail", weight: "1 kg(10 Pieces)", price: "₹900", image: quail },
    ],
  },
  {
    title: "Vegetables",
    items: [
      { name: "Brinjal", weight: "1 kg", price: "₹20", image: brinjal },
      { name: "Carrot", weight: "1 kg", price: "₹30", image: carrot },
      { name: "Green Beans", weight: "1 kg", price: "₹35", image: greenBeans },
      { name: "Tomatoes", weight: "1 kg", price: "₹40", image: tomatoes },
      { name: "Chilli", weight: "1 kg", price: "₹50", image: greenBeans },
      { name: "Cucumber", weight: "1 kg", price: "₹40", image: cucumber },
      { name: "Lemon", weight: "1 kg", price: "₹60", image: lemon },
      { name: "Lady finger", weight: "1 kg", price: "₹40", image:greenBeans},
      { name: "Bottle Guard", weight: "1 kg", price: "₹40", image: greenBeans },
      { name: "Drum Stick", weight: "1 kg", price: "₹50", image: greenBeans },
    ],
  },
  {
    title: "Fruits",
    items: [
      { name: "Bananas", weight: "1 dozen", price: "₹50", image: banana },
      { name: "Papaya", weight: "1 kg", price: "₹90", image: papaya },
      { name: "Pineapple", weight: "1 kg", price: "₹80", image: pineapple },
      { name: "Grapes", weight: "1 kg", price: "₹80", image: grapes },
      { name: "Watermelon", weight: "1 kg", price: "₹80", image: watermelon },
      { name: "Pomegranate", weight: "1 kg", price: "₹120", image: pomegranate },
      { name: "Guava", weight: "1 KG", price: "90", image: papaya },
      { name: "Mango", weight: "1 kg", price: "₹75", image: mango },
      { name: "Jack Fruit", weight: "1", price: "₹60", image: mango },
    ],
  },
  {
    title: "Flowers",
    items: [
      { name: "Rose Flower", weight: "1 kg", price: "₹150", image: rose },
      { name: "Jasmine flower ", weight: "500 ml", price: "₹250", image: crossandra },
      { name: "Arabian jasmine", weight: "1L", price: "₹150", image: rose },
      { name: "crossandra flower", weight: "500 ml", price: "₹250", image: crossandra },
      { name: "flower ", weight: "1L", price: "₹150", image: crossandra },
      { name: "flower ", weight: "500 ml", price: "₹250", image: rose },
    ],
  },
  {
    title: "Oils",
    items: [
      { name: "Coconut Oil", weight: "1L", price: "₹150", image: coconutOil },
      { name: "Olive Oil", weight: "500 ml", price: "₹250", image: peanutOil },
      { name: "Peanut Oil", weight: "1L", price: "₹150", image: coconutOil },
      { name: "Olive Oil", weight: "500 ml", price: "₹250", image: oliveOil },
      { name: "Coconut Oil", weight: "1L", price: "₹150", image: coconutOil },
      { name: "Olive Oil", weight: "500 ml", price: "₹250", image: oliveOil },
    ],
  },
];

export default categoriesData;
