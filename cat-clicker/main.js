let animals = {
  "cats": [{
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
let prev;

function displayGridItem(e, i) {
  let id = (i !== undefined) ? "photo"+i : "thefeature";
 console.log(e) 
 return '<figure id="'+id + '"> \
 <figcaption>' + e.name + ': <span class="clickcount">' + e.count + '</span> clicks</figcaption> \
 <img src=' + e.image + ' alt="' + e.name + '" /> \
</figure>';
}
function displayGrid(obj) {
  var html = '';
  obj.map((e, i) => {
    html += displayGridItem(e, i);
    
  });
  return html;
}
function handleClick(e) {
  var span = document.getElementById(e).childNodes[1].getElementsByTagName('span')[0];
  if (prev) document.getElementById(prev).className = ""
  document.getElementById(e).className = "active"
  let count = parseInt(span.innerHTML) + 1;
  span.innerHTML = count;
  prev = e;
}
function displayCats() {
  document.getElementById("animals").innerHTML = displayGrid(animals.cats);
  var photos = Array.prototype.slice.call(document.getElementsByTagName('figure'));
  photos.forEach((e, i) => {
    e.addEventListener('click', (function (index) {
      return function () {
        handleClick("photo" + index);
        animals.cats[index].count = parseInt(animals.cats[index].count) + 1;
        document.getElementById("feature").innerHTML = displayGridItem(animals.cats[index])
        console.log(animals.cats[index].count)
      };
    })(i));
  });
}

displayCats();
document.getElementById("feature").innerHTML = displayGridItem(animals.cats[0])