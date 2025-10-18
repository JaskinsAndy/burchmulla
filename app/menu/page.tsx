"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChefHat,
  Sparkles,
  Star,
  Search,
  Filter,
  UtensilsCrossed,
  Coffee,
  Wine,
  Dessert,
  Flame,
  Fish,
  Beef,
  FileText,
  Download
} from "lucide-react";

// Type definition for menu items
interface MenuItem {
  name: string;
  nameRu: string;
  price: number;
  description?: string;
  descriptionRu?: string;
  badges?: string[];
}

// Menu data structure
const menuData: Record<string, MenuItem[]> = {
  "Cold Appetizers": [
    {
      name: "Salmon Tar-Tar",
      nameRu: "Тар-Тар из лосося",
      price: 250000,
      description: "Smoked salmon, cucumber, avocado, capers, quail eggs, rye bread, olive oil, mustard",
      descriptionRu: "Лосось слабосоленый, огурцы, авокадо, каперсы, перепелиные яйца, хлеб ржаной, оливковое масло, горчица",
      badges: ["NEW"],
    },
    {
      name: "Salmon Bruschetta",
      nameRu: "Брускетта с лососем",
      price: 200000,
      description: "Baguette, smoked salmon, cream cheese, arugula, micro herbs, avocado",
      descriptionRu: "Багет, лосось слабосоленый, креметта, руккола, микрозелень, авокадо",
      badges: ["NEW"],
    },
    {
      name: "Tomatoes Bruschetta",
      nameRu: "Брускетта с томатами",
      price: 45000,
      description: "Baguette, tomatoes, garlic, basil, parmesan",
      descriptionRu: "Багет, помидоры, чеснок, базилик, сыр пармезан",
      badges: ["NEW"],
    },
    {
      name: "Suzma",
      nameRu: "Сузьма",
      price: 30000,
      badges: ["NEW"],
    },
    {
      name: "Bread Basket",
      nameRu: "Хлебная корзина",
      price: 30000,
      badges: ["NEW"],
    },
    {
      name: "Pickled Vegetables",
      nameRu: "Овощи маринованные",
      price: 80000,
      description: "Champignons, cherry tomatoes, cucumbers, jalapeño, squash, dill",
      descriptionRu: "Шампиньоны, черри, огурцы, халапеньо, патиссоны, укроп",
      badges: ["NEW", "BEST SELLER"],
    },
    {
      name: "Cheese Platter",
      nameRu: "Сырная тарелка",
      price: 150000,
      description: "Maasdam, gouda, parmesan, brie, dor-blue, honey, walnuts, dried apricots",
      descriptionRu: "Мааздам, гауда, пармезан, бри, дор-блю, мед, грецкие орехи, курага",
      badges: ["NEW"],
    },
    {
      name: "Vegetable Mix",
      nameRu: "Овощной букет",
      price: 100000,
      description: "Tomatoes, cucumbers, capsicum, radish, dill, chili pepper",
      descriptionRu: "Помидоры, огурцы, болгарский перец, редиска, укроп, перец стручковый",
    },
    {
      name: "Herring with Potatoes",
      nameRu: "Селедка с картофелем",
      price: 100000,
      description: "Herring, potatoes, onion, black olives, dill",
      descriptionRu: "Сельдь, картофель, лук, маслины, укроп",
    },
    {
      name: "Assorted Meat",
      nameRu: "Мясная нарезка",
      price: 250000,
      description: "Kazy, smoked-in-pine meat, chicken kazy, servelat, smoked sausage, black olives, cherry tomatoes",
      descriptionRu: "Казы, арча рулет, куриный казы, сервелат, охотничьи колбаски, маслины, черри",
    },
  ],
  "Salads": [
    {
      name: "Arugula Cherry Salad",
      nameRu: "Руккола с черри",
      price: 80000,
      description: "Arugula, balsamic cream, cherry tomatoes, parmesan, olive oil, pine nuts",
      descriptionRu: "Руккола, бальзамический крем, черри, пармезан, оливковое масло, кедровые орехи",
      badges: ["NEW", "BEST SELLER"],
    },
    {
      name: "Greek Salad",
      nameRu: "Греческий салат",
      price: 120000,
      description: "Cucumber, tomatoes, capsicum, black olives, olives, iceberg, feta, lemon juice, olive oil, black pepper, onion, oregano",
      descriptionRu: "Огурцы, помидоры, болгарский перец, маслины, оливки, айсберг, сыр фета, лимонный сок, оливковое масло, перец, лук, орегано",
    },
    {
      name: "Achik-chuchuk",
      nameRu: "Ачик-чучук",
      price: 45000,
      description: "Tomatoes, cucumbers, onion, basil, vegetable oil, chili pepper",
      descriptionRu: "Помидоры, огурцы, лук, базилик, растительное масло, стручковый перец",
      badges: ["NEW"],
    },
    {
      name: "Spring Salad",
      nameRu: "Весенний салат",
      price: 60000,
      description: "Cucumber, radish, dill, cilantro, sour cream, black pepper",
      descriptionRu: "Огурцы, редиска, укроп, кинза, сметана, перец",
    },
    {
      name: "Gourmet Salad",
      nameRu: 'Салат "Гурман"',
      price: 130000,
      description: "Kazy, chicken kazy, salami, pickles, pickled mushrooms, iceberg, parmesan, gouda",
      descriptionRu: "Казы, казы куриный, салями, майонез, маринованные огурцы, маринованные шампиньоны, айсберг, пармезан, гауда",
      badges: ["NEW"],
    },
    {
      name: "Peach Salad",
      nameRu: "Салат с персиками",
      price: 100000,
      description: "Peach, lollo rosso, arugula, iceberg, cream cheese, olive oil, lemon juice",
      descriptionRu: "Персик, лолло росса, руккола, айсберг, креметта, оливковое масло, сок лимона",
      badges: ["NEW"],
    },
    {
      name: "Chef's Steak Salad",
      nameRu: "Стейк салат от шефа",
      price: 150000,
      description: "Beef tenderloin, arugula, lollo rosso, pine nuts, cherry tomatoes, honey, balsamic cream, lime, capsicum, soy sauce, olive oil",
      descriptionRu: "Бон филе, руккола, лолло-росса, кедровые орехи, черри, мед, бальзамический крем, лайм, перец болгарский, соевый соус, оливковое масло",
      badges: ["NEW"],
    },
    {
      name: "Artichoke Salad",
      nameRu: "Прованский салат с артишоками",
      price: 150000,
      description: "Arugula, cherry tomatoes, quail eggs, artichoke, black pepper, thyme, oregano, olives, lime/lemon juice, balsamic cream, parmesan",
      descriptionRu: "Руккола, черри, перепелиные яйца, артишоки, перец, тимьян, орегано, оливки, лимонный сок, оливковое масло, бальзамический крем, пармезан",
      badges: ["NEW"],
    },
    {
      name: "Chicken Caesar",
      nameRu: "Цезарь с курицей",
      price: 120000,
      description: "Chicken breast, iceberg, caesar sauce, cherry tomatoes, parmesan, croutons",
      descriptionRu: "Куриная грудка, айсберг, соус цезарь, черри, крутоны, пармезан",
    },
    {
      name: "Crispy Eggplant Salad",
      nameRu: "Салат с хрустящими баклажанами",
      price: 120000,
      description: "Eggplant, arugula, cherry tomatoes, cream cheese, pine nuts, sweet chili sauce, balsamic sauce",
      descriptionRu: "Баклажаны, руккола, помидоры, креметта, кедровые орехи, соус свит чили, соус бальзамический",
    },
  ],
  "Hot Appetizers": [
    {
      name: "Fish & Chips",
      nameRu: "Рыбные палочки в Лондонском стиле",
      price: 120000,
      description: "Fried fish (sudak), french fries, garlic sauce",
      descriptionRu: "Судак в панировке, картофель фри, чесночный соус",
      badges: ["NEW"],
    },
    {
      name: "Chicken Strips",
      nameRu: "Куриные палочки",
      price: 90000,
      description: "Fried chicken strips, cheese sauce, french fries",
      descriptionRu: "Куриная грудка в панировке, сырный соус",
      badges: ["BEST SELLER"],
    },
    {
      name: "Pita Bread with Tomatoes & Cheese",
      nameRu: "Конвертики с сыром и помидорами",
      price: 80000,
      description: "Lavash, gouda, cilantro, tomatoes, butter, mayo",
      descriptionRu: "Лаваш, сыр гауда, кинза, помидоры, сливочное масло, майонез",
      badges: ["NEW"],
    },
    {
      name: "Pita Bread with Salmon",
      nameRu: "Конвертики с семгой",
      price: 200000,
      description: "Lavash, salmon, spinach, cream, pepper, olive oil, butter",
      descriptionRu: "Лаваш, семга, шпинат, сливки, перец, оливковое масло, сливочное масло",
      badges: ["NEW"],
    },
  ],
  "Soups": [
    {
      name: "Fish Soup with Pike Caviar",
      nameRu: "Рыбный суп с щучьей икрой",
      price: 120000,
      description: "Trout, pike-perch, carrot, parsley, potato, broccoli, caviar",
      descriptionRu: "Форель, судак, морковь, петрушка, картофель, брокколи, икра",
      badges: ["NEW"],
    },
    {
      name: "Chicken Noodle Soup",
      nameRu: "Куриный суп с лапшой",
      price: 50000,
      description: "Chicken, onion, carrot, noodles, dill",
      descriptionRu: "Курица, лук, морковь, лапша, укроп",
    },
    {
      name: "Mastava Soup",
      nameRu: "Суп Мастава",
      price: 80000,
      description: "Capsicum, onion, beef, lamb, carrot, tomatoes, garlic",
      descriptionRu: "Болгарский перец, лук, говядина, баранина, морковь, томаты, чеснок",
    },
    {
      name: "Pumpkin Cream Soup",
      nameRu: "Тыквенный крем суп",
      price: 80000,
      description: "Pumpkin, carrot, onion, pepper, olive oil, cream cheese, pumpkin seeds, sesame",
      descriptionRu: "Тыква, морковь, лук, перец, оливковое масло, креметта, тыквенные семечки, кунжут",
    },
  ],
  "Pasta": [
    {
      name: "Spaghetti al Pomodoro",
      nameRu: "Спагетти Аль Помодоро",
      price: 80000,
      description: "Mutti sauce, tomatoes, olive oil, garlic, spaghetti, pepper, parmesan, basil",
      descriptionRu: "Соус Mutti, помидоры, оливковое масло, чеснок, спагетти, перец, пармезан, базилик",
    },
    {
      name: "Penne Arrabbiata with Pastrami",
      nameRu: "Пенне Арабьята с пастрами",
      price: 150000,
      description: "Mutti sauce, tomatoes, olive oil, shallot, basil, parmesan, garlic",
      descriptionRu: "Соус Mutti, помидоры, оливковое масло, лук-шалот, базилик, пармезан, чеснок",
      badges: ["NEW"],
    },
    {
      name: "Fettuccine Alfredo",
      nameRu: "Феттучини Альфредо",
      price: 120000,
      description: "Mushrooms, shallot, chicken breast, cream, pepper, thyme, spaghetti/fettuccine, parmesan",
      descriptionRu: "Грибы, лук-шалот, куриная грудка, сливки, перец, тимьян, спагетти/феттучини, пармезан",
    },
  ],
  "Burgers": [
    {
      name: "Chicken Burger",
      nameRu: "Гамбургер с куриной котлетой",
      price: 80000,
      description: "Iceberg lettuce, pickles, ketchup, shallot, tomatoes, chicken patty, french fries, garlic sauce",
      descriptionRu: "Салат айсберг, маринованные огурцы, кетчуп, лук-шалот, помидоры, куриная котлета, картофель фри, чесночный соус",
    },
    {
      name: "Beef Burger",
      nameRu: "Гамбургер с говяжьей котлетой",
      price: 110000,
      description: "Iceberg lettuce, pickles, ketchup, shallot, tomatoes, beef patty, french fries",
      descriptionRu: "Салат айсберг, маринованные огурцы, кетчуп, лук-шалот, помидоры, говяжья котлета, картофель фри",
    },
    {
      name: "Chicken Cheeseburger",
      nameRu: "Куриный чизбургер",
      price: 80000,
      description: "Chicken patty, iceberg, pickles, ketchup, shallot, tomatoes, french fries, garlic sauce, cheddar",
      descriptionRu: "Куриная котлета, айсберг, маринованные огурцы, кетчуп, лук-шалот, помидоры, картофель фри, чесночный соус, чеддер",
      badges: ["NEW"],
    },
    {
      name: "Cheeseburger",
      nameRu: "Чизбургер",
      price: 110000,
      description: "Iceberg, pickles, ketchup, shallot, tomatoes, beef patty, french fries, cheese",
      descriptionRu: "Айсберг, маринованные огурцы, кетчуп, лук-шалот, помидоры, говяжья котлета, картофель фри, сыр",
      badges: ["NEW"],
    },
  ],
  "Pizza": [
    {
      name: "Margherita",
      nameRu: "Маргарита",
      price: 100000,
      description: "Oregano, basil, Mutti tomato sauce, mozzarella, cheddar, tomatoes",
      descriptionRu: "Орегано, базилик, томатный соус Mutti, моцарелла, чеддер, помидоры",
      badges: ["BEST SELLER"],
    },
    {
      name: "Ortolano",
      nameRu: "Пицца Ортолано",
      price: 100000,
      description: "Capsicum, cherry tomatoes, zucchini, oregano, Mutti sauce, mozzarella, basil",
      descriptionRu: "Болгарский перец, черри, цукини, орегано, соус Mutti, моцарелла, базилик",
    },
    {
      name: "Pepperoni",
      nameRu: "Пепперони",
      price: 130000,
      description: "Smoked sausage, Mutti sauce, mozzarella, oregano",
      descriptionRu: "Копченая колбаса, соус Mutti, моцарелла, орегано",
      badges: ["NEW"],
    },
  ],
  "Main Courses": [
    {
      name: "Baked Dorado",
      nameRu: "Дорадо запеченная",
      price: 250000,
      description: "Parsley, capsicum, shallot, zucchini, olive oil, steamed rice, dorado, pepper, thyme, lemon",
      descriptionRu: "Петрушка, болгарский перец, лук-шалот, цукини, оливковое масло, рис отварной, дорадо, перец, тимьян, лимон",
      badges: ["NEW"],
    },
    {
      name: "Salmon in Black Caviar Sauce",
      nameRu: "Семга в черном икорном соусе",
      price: 300000,
      description: "Green onion, pike caviar, micro greens, cherry tomatoes, zucchini, salmon, cream, pepper, lemon",
      descriptionRu: "Лук зеленый, икра щуки, микрозелень, черри, цукини, семга, сливки, перец, лимон",
      badges: ["NEW"],
    },
    {
      name: "Chicken Breast with Orange Sauce",
      nameRu: "Куриная грудка с апельсиновым соусом",
      price: 100000,
      description: "Lollo rosso, arugula, micro greens, cherry tomatoes, garlic, olive oil, chicken breast, pepper, thyme, orange, lemon",
      descriptionRu: "Лолло росса, руккола, микрозелень, черри, чеснок, оливковое масло, куриная грудка, перец, тимьян, апельсин, лимон",
      badges: ["NEW"],
    },
    {
      name: "Pike-Perch with Vegetables",
      nameRu: "Судак на овощной подушке",
      price: 230000,
      description: "Carrot, capsicum, cream, zucchini, mustard, pike-perch, pepper, thyme, lemon, turmeric",
      descriptionRu: "Морковь, болгарский перец, сливки, цукини, горчица, судак, перец, тимьян, лимон, куркума",
      badges: ["NEW"],
    },
    {
      name: "Homemade Beef",
      nameRu: "Говядина по домашнему",
      price: 140000,
      description: "Cilantro, vegetable oil, beef tenderloin, potatoes, onion, tomatoes, pepper",
      descriptionRu: "Кинза, растительное масло, бон-филе, картофель, лук, помидоры, перец",
      badges: ["NEW"],
    },
  ],
  "Steaks": [
    {
      name: "Beef Medallions with Mash",
      nameRu: "Говяжьи медальоны с картофельным пюре",
      price: 160000,
      description: "Micro greens, beef tenderloin, mushrooms, garlic, mashed potatoes",
      descriptionRu: "Микрозелень, бон-филе, шампиньоны, чеснок, картофельное пюре",
      badges: ["NEW"],
    },
    {
      name: "New York Steak",
      nameRu: "Стейк Нью-Йорк",
      price: 300000,
      description: "Rosemary, butter, striploin, garlic, corn, sea salt, pepper, chimichurri sauce",
      descriptionRu: "Розмарин, сливочное масло, стриплойн, чеснок, кукуруза, морская соль, перец, соус чимичурри",
      badges: ["NEW"],
    },
    {
      name: "Classic Steak",
      nameRu: "Стейк классический",
      price: 230000,
      description: "Parsley, rosemary, butter, beef tenderloin, garlic, oregano, sea salt, pepper, thyme",
      descriptionRu: "Петрушка, розмарин, сливочное масло, бон-филе, чеснок, орегано, морская соль, перец, тимьян",
      badges: ["BEST SELLER"],
    },
    {
      name: "Rib-Eye Steak",
      nameRu: "Рибай стейк",
      price: 270000,
      description: "Ribeye, sea salt, pepper, garlic",
      descriptionRu: "Рибай, морская соль, перец, чеснок",
      badges: ["BEST SELLER"],
    },
    {
      name: "Meat Feast",
      nameRu: "Мясной пир",
      price: 800000,
      description: "Ribeye, beef tenderloin, chicken, lamb chops, kazy, garlic, butter, thyme, corn, grilled vegetables",
      descriptionRu: "Рибай, бон-филе, цыпленок, баранья корейка, казы, чеснок, сливочное масло, тимьян, кукуруза, овощи-гриль",
    },
    {
      name: "Roasted Lamb Leg (1 pc)",
      nameRu: "Запеченная баранья ляжка (1 шт)",
      price: 1400000,
      description: "Lamb leg, pepper, cumin, tomatoes, rosemary, garlic, capsicum",
      descriptionRu: "Баранья ляжка, перец, зира, помидоры, розмарин, чеснок, болгарский перец",
    },
  ],
  "Chef Special": [
    {
      name: "Bukhara Carp (1 kg)",
      nameRu: "Сазан по Бухарски (1 кг)",
      price: 400000,
      description: "Carp, oil, lemon, cilantro, flour, pepper, garlic, dill, tomato sauce",
      descriptionRu: "Сазан, масло, лимон, кинза, мука, перец, чеснок, укроп, томатный соус",
    },
    {
      name: "Festive Pilaf (1 kg)",
      nameRu: "Плов праздничный (1 кг)",
      price: 600000,
      description: "Carrot, onion, cumin, lamb tail fat, lamb shoulder, chickpeas, raisins, rice, kazy, quail egg, beef",
      descriptionRu: "Морковь, лук, зира, баранья думба, баранья лопатка, нут, изюм, рис, казы, перепелиное яйцо, говядина",
    },
    {
      name: "Chaihana Pilaf (1 kg)",
      nameRu: "Плов чайханский (1 кг)",
      price: 600000,
      description: "Carrot, onion, cumin, lamb shoulder, garlic, chili pepper, barberry, oil, rice, quail eggs, kazy",
      descriptionRu: "Морковь, лук, зира, баранья лопатка, чеснок, стручковый перец, барбарис, масло, рис, перепелиные яйца, казы",
    },
    {
      name: "Trout Baked in Sea Salt (1 pc)",
      nameRu: "Форель запеченная в морской соли (1 шт)",
      price: 600000,
      description: "Trout, lemon, pepper, thyme, garlic, olive oil, zucchini, chili pepper, eggplant, tomatoes, mushrooms, oil",
      descriptionRu: "Форель, лимон, перец, тимьян, чеснок, оливковое масло, цукини, стручковый перец, баклажан, помидоры, шампиньоны, масло",
    },
    {
      name: "Kazan Kebab (1 kg)",
      nameRu: "Казан кебаб (1 кг)",
      price: 400000,
      description: "Potatoes, oil, lamb chops, cumin, cilantro, onion, pepper",
      descriptionRu: "Картофель, масло, баранья корейка, зира, кинза, лук, перец",
    },
    {
      name: "Shurpa Soup (1 portion)",
      nameRu: "Суп Шурпа (1 порция)",
      price: 70000,
    },
  ],
  "Grilled Dishes": [
    {
      name: "Kazan Kebab",
      nameRu: "Казан кабоб",
      price: 180000,
      description: "Dill, oil, lamb chops, potatoes, onion, cucumbers, coriander, cumin",
      descriptionRu: "Укроп, масло, баранья корейка, картофель, лук, огурцы, кориандр, зира",
    },
    {
      name: "Beef Kebab",
      nameRu: "Шашлык из говядины",
      price: 0,
      description: "Lamb tail fat, cilantro, beef, onion, coriander, cumin, paprika, pepper, vinegar, tomatoes",
      descriptionRu: "Баранья думба, кинза, говядина, лук, кориандр, зира, паприка, перец, уксус, помидоры",
      badges: ["NATIONAL"],
    },
    {
      name: "Lamb Kebab",
      nameRu: "Шашлык из баранины",
      price: 0,
      description: "Lamb tail fat, lamb thigh, onion, coriander, cumin, paprika, pepper, vinegar",
      descriptionRu: "Баранья думба, баранье бедро, лук, кориандр, зира, паприка, перец, уксус",
      badges: ["NATIONAL"],
    },
    {
      name: "Minced Meat Kebab",
      nameRu: "Шашлык молотый",
      price: 0,
      description: "Lamb leg, cilantro, beef, onion, coriander, cumin, paprika, pepper, vinegar",
      descriptionRu: "Баранья ляжка, кинза, говядина, лук, кориандр, зира, паприка, перец, уксус",
      badges: ["NATIONAL"],
    },
    {
      name: "BBQ Chicken Wings",
      nameRu: "Крылышки с соусом BBQ",
      price: 70000,
      description: "Onion, olive oil, chicken wings, BBQ sauce, soy sauce, coriander, paprika",
      descriptionRu: "Лук, оливковое масло, куриные крылья, соус BBQ, соевый соус, кориандр, паприка",
      badges: ["BEST SELLER", "NATIONAL"],
    },
    {
      name: "Chicken Kebab",
      nameRu: "Шашлык куриный",
      price: 45000,
      description: "Chicken thigh, cilantro, onion, coriander, soy sauce, paprika, pepper, vinegar",
      descriptionRu: "Куриное бедро, кинза, лук, кориандр, соевый соус, паприка, перец, уксус",
      badges: ["NATIONAL"],
    },
  ],
  "Side Dishes": [
    {
      name: "French Fries",
      nameRu: "Картофель фри",
      price: 30000,
    },
    {
      name: "Steamed Rice",
      nameRu: "Рис отварной",
      price: 40000,
    },
    {
      name: "Mashed Potatoes",
      nameRu: "Картофельное пюре",
      price: 40000,
      badges: ["NEW"],
    },
    {
      name: "Village Potatoes",
      nameRu: "Картофель по-деревенски",
      price: 55000,
    },
    {
      name: "Grilled Vegetables",
      nameRu: "Овощи гриль",
      price: 40000,
      badges: ["BEST SELLER"],
    },
  ],
  "Desserts": [
    {
      name: "Honey Cake",
      nameRu: "Медовик",
      price: 50000,
      badges: ["NEW"],
    },
    {
      name: "Saint Sebastian",
      nameRu: "Сан Себастьян",
      price: 250000,
      badges: ["NEW"],
    },
    {
      name: "Apple Strudel",
      nameRu: "Яблочный штрудель",
      price: 100000,
      badges: ["BEST SELLER"],
    },
    {
      name: "Esterhazy",
      nameRu: "Эстерхази",
      price: 95000,
      badges: ["NEW"],
    },
    {
      name: "Meringue Roll",
      nameRu: "Меренговый рулет",
      price: 70000,
      badges: ["NEW"],
    },
    {
      name: "Ice Cream",
      nameRu: "Мороженое",
      price: 70000,
      badges: ["NEW"],
    },
    {
      name: "Fruit Assortment",
      nameRu: "Фруктовое ассорти",
      price: 80000,
      badges: ["NEW"],
    },
  ],
  "Coffee": [
    {
      name: "Bumble",
      nameRu: "Бамбл",
      price: 60000,
    },
    {
      name: "Espresso",
      nameRu: "Эспрессо",
      price: 35000,
    },
    {
      name: "Double Espresso",
      nameRu: "Дабл эспрессо",
      price: 45000,
    },
    {
      name: "Americano",
      nameRu: "Американо",
      price: 45000,
    },
    {
      name: "Ice Coffee",
      nameRu: "Холодный кофе",
      price: 60000,
    },
    {
      name: "Flat White",
      nameRu: "Флэт вайт",
      price: 55000,
    },
    {
      name: "Cappuccino",
      nameRu: "Капучино",
      price: 55000,
    },
    {
      name: "Latte",
      nameRu: "Латте",
      price: 60000,
    },
    {
      name: "Raf Coffee",
      nameRu: "Раф кофе",
      price: 60000,
    },
  ],
  "Tea": [
    {
      name: "Citrus Tea",
      nameRu: "Чай цитрусовый",
      price: 50000,
    },
    {
      name: "Sea Buckthorn–Orange",
      nameRu: "Чай облепиха–апельсин",
      price: 60000,
    },
    {
      name: "Cranberry–Mint",
      nameRu: "Чай клюква–мята",
      price: 50000,
    },
    {
      name: "Black Tea",
      nameRu: "Черный чай",
      price: 20000,
    },
    {
      name: "Green Tea",
      nameRu: "Зеленый чай",
      price: 20000,
    },
    {
      name: "Assam",
      nameRu: "Чай черный Althaus Assam",
      price: 45000,
    },
    {
      name: "Earl Grey",
      nameRu: "Чай черный Althaus Earl Grey",
      price: 45000,
    },
    {
      name: "English Breakfast",
      nameRu: "Чай черный Althaus English Breakfast",
      price: 45000,
    },
    {
      name: "Sencha Sen Pay",
      nameRu: "Чай зеленый Althaus Sencha Sen Pay",
      price: 45000,
    },
    {
      name: "Bavarian Mint",
      nameRu: "Чай зеленый Althaus Bavarian Mint",
      price: 45000,
    },
    {
      name: "Palm Beach",
      nameRu: "Чай зеленый Althaus Palm Beach",
      price: 45000,
    },
    {
      name: "Grün Matinee",
      nameRu: "Чай зеленый Althaus Grün Matinee",
      price: 45000,
    },
  ],
  "Smoothies & Shakes": [
    {
      name: "Chocolate Smoothie",
      nameRu: "Шоколадный смузи с бананом и молоком",
      price: 55000,
      description: "Banana, milk, chocolate",
    },
    {
      name: "Cucumber–Basil Smoothie",
      nameRu: "Огуречно–базиликовый смузи",
      price: 55000,
    },
    {
      name: "Banana Shake",
      nameRu: "Банановый шейк",
      price: 55000,
    },
    {
      name: "Strawberry Shake",
      nameRu: "Клубничный шейк",
      price: 55000,
    },
    {
      name: "Vanilla Shake",
      nameRu: "Ванильный шейк",
      price: 55000,
    },
    {
      name: "Mojito",
      nameRu: "Мохито",
      price: 50000,
    },
    {
      name: "Berry Breeze",
      nameRu: "Ягодный бриз",
      price: 50000,
    },
    {
      name: "That Incredible",
      nameRu: "Не может быть",
      price: 60000,
    },
    {
      name: "Citrus Explosion",
      nameRu: "Цитрусовый взрыв",
      price: 50000,
    },
    {
      name: "Classic",
      nameRu: "Классик",
      price: 50000,
    },
    {
      name: "Strawberry",
      nameRu: "Клубничный",
      price: 60000,
    },
  ],
  "Soft Drinks": [
    {
      name: "Coca-Cola",
      nameRu: "Coca-Cola",
      price: 25000,
    },
    {
      name: "Fanta",
      nameRu: "Fanta",
      price: 25000,
    },
    {
      name: "Sprite",
      nameRu: "Sprite",
      price: 25000,
    },
    {
      name: "Blanc Blue Water (Still)",
      nameRu: "Blanc Blue вода (still)",
      price: 26000,
      description: "0.5L / 1.0L: 26,000 / 35,000 сум",
    },
    {
      name: "Blanc Blue Water (Sparkling)",
      nameRu: "Blanc Blue вода (sparkling)",
      price: 26000,
      description: "0.5L / 1.0L: 26,000 / 35,000 сум",
    },
    {
      name: "Blanc Blue Healing Water",
      nameRu: "Blanc Blue лечебная",
      price: 35000,
      description: "0.5L / 1.0L: 35,000 / 50,000 сум",
    },
    {
      name: "Rich Juice",
      nameRu: "Сок Rich (ассортимент)",
      price: 35000,
      description: "0.2L / 1.0L: 35,000 / 50,000 сум",
    },
  ],
  "Sauces": [
    {
      name: "Pepper",
      nameRu: "Пепер",
      price: 20000,
    },
    {
      name: "Demi-glace",
      nameRu: "Демиглас",
      price: 20000,
    },
    {
      name: "Chimichurri",
      nameRu: "Чимичурри",
      price: 20000,
    },
    {
      name: "Garlic",
      nameRu: "Чесночный",
      price: 15000,
    },
    {
      name: "Barbecue",
      nameRu: "Барбекю",
      price: 15000,
    },
    {
      name: "Cheese",
      nameRu: "Сырный",
      price: 15000,
    },
    {
      name: "Ketchup",
      nameRu: "Кетчуп",
      price: 15000,
    },
    {
      name: "Sriracha Spicy",
      nameRu: "Шрирача острый",
      price: 20000,
    },
  ],
};

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  "Cold Appetizers": <Fish className="h-6 w-6" />,
  "Salads": <UtensilsCrossed className="h-6 w-6" />,
  "Hot Appetizers": <Flame className="h-6 w-6" />,
  "Soups": <UtensilsCrossed className="h-6 w-6" />,
  "Pasta": <UtensilsCrossed className="h-6 w-6" />,
  "Burgers": <UtensilsCrossed className="h-6 w-6" />,
  "Pizza": <UtensilsCrossed className="h-6 w-6" />,
  "Main Courses": <ChefHat className="h-6 w-6" />,
  "Steaks": <Beef className="h-6 w-6" />,
  "Chef Special": <Star className="h-6 w-6" />,
  "Grilled Dishes": <Flame className="h-6 w-6" />,
  "Side Dishes": <UtensilsCrossed className="h-6 w-6" />,
  "Desserts": <Dessert className="h-6 w-6" />,
  "Coffee": <Coffee className="h-6 w-6" />,
  "Tea": <Coffee className="h-6 w-6" />,
  "Smoothies & Shakes": <Wine className="h-6 w-6" />,
  "Soft Drinks": <Wine className="h-6 w-6" />,
  "Sauces": <UtensilsCrossed className="h-6 w-6" />,
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBestSellers, setShowBestSellers] = useState(false);
  const [showNew, setShowNew] = useState(false);

  // Format price in UZS
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price) + " сум";
  };

  // Filter menu items based on search and filters
  const filteredMenu = Object.entries(menuData).reduce((acc, [category, items]) => {
    const filteredItems = items.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ("description" in item &&
          item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesBestSeller = !showBestSellers || item.badges?.includes("BEST SELLER");
      const matchesNew = !showNew || item.badges?.includes("NEW");
      const matchesCategory = !selectedCategory || selectedCategory === category;

      return matchesSearch && matchesBestSeller && matchesNew && matchesCategory;
    });

    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {} as typeof menuData);

  const allCategories = Object.keys(menuData);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Dining Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
          >
            Discover authentic Uzbek cuisine and international favorites
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
          >
            <a
              href="/Menu/burchmenu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              <span>View PDF Menu</span>
              <Download className="h-4 w-4" />
            </a>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <Sparkles className="h-5 w-5" />
              <span>Service Charge: 10%</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky top-16 sm:top-20 lg:top-24 z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 items-center w-full lg:w-auto justify-center lg:justify-start">
              <button
                onClick={() => setShowBestSellers(!showBestSellers)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all min-h-[44px] ${
                  showBestSellers
                    ? "bg-primary text-white"
                    : "bg-muted text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="hidden sm:inline">Best Sellers</span>
                  <span className="sm:hidden">Best</span>
                </span>
              </button>
              <button
                onClick={() => setShowNew(!showNew)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all min-h-[44px] ${
                  showNew
                    ? "bg-primary text-white"
                    : "bg-muted text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>New</span>
                </span>
              </button>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium transition-all min-h-[44px]"
                >
                  <span className="hidden sm:inline">Clear Category</span>
                  <span className="sm:hidden">Clear</span>
                </button>
              )}
              <a
                href="/Menu/burchmenu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base bg-primary text-white hover:bg-primary/90 font-medium transition-all flex items-center space-x-1 sm:space-x-2 min-h-[44px]"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">PDF Menu</span>
                <span className="sm:hidden">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(selectedCategory === category ? null : category)
                }
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span className="flex items-center space-x-2">
                  {categoryIcons[category]}
                  <span>{category}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(filteredMenu).length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            Object.entries(filteredMenu).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {categoryIcons[category]}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                      {category}
                    </h2>
                    <p className="text-gray-600">{items.length} items</p>
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group bg-muted rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">{item.nameRu}</p>
                        </div>
                        {item.price > 0 && (
                          <div className="ml-4 text-right">
                            <p className="text-xl font-bold text-primary whitespace-nowrap">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        )}
                      </div>

                      {"description" in item && item.description && (
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.badges && item.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                badge === "BEST SELLER"
                                  ? "bg-secondary/20 text-secondary-foreground"
                                  : badge === "NEW"
                                  ? "bg-primary/20 text-primary"
                                  : "bg-accent/20 text-accent"
                              }`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
