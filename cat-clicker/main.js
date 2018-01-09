let animals = {
  "cats": [{
      "image": "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
      "name": "Whiskers"
    },
    {
      "image": "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426",
      "name": "Pillow"
    }
  ]
}
function displayAnimals(obj) {
  var html = '';
  obj.map((e, i) => {
    html += '<figure id="photo' + i + '"> \
      <figcaption>' + e.name + ': <span class="clickcount">0</span> clicks</figcaption> \
      <img src=' + e.image + ' alt="' + e.name + '" /> \
    </figure>';
  });
  return html;
}
function handleClick(e) {
  var span = document.getElementById(e).childNodes[1].getElementsByTagName('span')[0];
  span.innerHTML = parseInt(span.innerHTML) + 1;
}
function displayCats() {
  document.getElementById("animals").innerHTML = displayAnimals(animals.cats);
  var photos = Array.prototype.slice.call(document.getElementsByTagName('figure'));
  photos.forEach((e, i) => {
    e.addEventListener('click', (function (index) {
      return function () {
        handleClick("photo" + index);
      };
    })(i));
  });
}

displayCats();