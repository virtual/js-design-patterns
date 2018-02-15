/* MODEL */
// Model is an object literal with current cat set to null
let model = {
  prevCat: null,
  currentCat: null,
  cats: [{
      "image": "images/alexandru-zdrobau-176844.jpg",
      "name": "Whiskers",
      "count": 0
    },
    {
      "image": "images/cat-mapper-max-ogden-204436.jpg",
      "name": "Cassandra",
      "count": 0
    },
    {
      "image": "images/eric-han-455080.jpg",
      "name": "Trix",
      "count": 0
    },
    {
      "image": "images/nirzar-pangarkar-217994.jpg",
      "name": "Lila",
      "count": 0
    },
    {
      "image": "images/pacto-visual-157776.jpg",
      "name": "Phoenix",
      "count": 0
    },
    {
      "image": "images/paul-291714.jpg",
      "name": "Clawed",
      "count": 0
    }
  ]
}
/* MODEL end */

/* CONTROLLER */
let controller = {
  init: function () {
    model.currentCat = model.cats[0];
    catView.init();
    catListView.init();
  },
  getCurrentCat: function () {
    return model.currentCat;
  },
  setCurrentCat: function (cat) {
    model.currentCat = cat;
    catView.render();
  },
  getAllCats: function () {
    return model.cats;
  },
  incrementCatCount: function () {
    model.currentCat.count++;
    catView.render();
  }
}
/* CONTROLLER end */

/* VIEW Featured Cat */
let catView = {
  init: function () {
    // Now we can always reference these elements
    this.catEl = document.getElementById('cat');
    this.catNameEl = document.getElementById('cat-name');
    this.catCountEl = document.getElementById('cat-count');
    this.catImgEl = document.getElementById('cat-img');

    this.catImgEl.addEventListener('click', ((e) => {
      controller.incrementCatCount(e);
    }));

    this.render();
  },
  render: function () {
    let featuredCat = controller.getCurrentCat();

    this.catNameEl.innerHTML = featuredCat.name;
    this.catCountEl.innerHTML = featuredCat.count;
    this.catImgEl.src = featuredCat.image;
  }
}
/* VIEW Featured Cat end */

/* VIEW Cat List */
let catListView = {
  init: function () {
    this.catListEl = document.getElementById('cat-list');

    this.render();
  },
  render: function () {
    let cats = controller.getAllCats();
    this.catListEl.innerHTML = ''; // empty list

    cats.map((cat) => {
      let li = document.createElement('li');
      li.innerHTML = cat.name;
      li.addEventListener('click', (function (catCopy) {
        return function () {
          controller.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));
      this.catListEl.appendChild(li);
    });
  }
}
/* VIEW Cat List end */

// Make it all run
controller.init();