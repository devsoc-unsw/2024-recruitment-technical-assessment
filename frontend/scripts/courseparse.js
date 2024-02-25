document.addEventListener("DOMContentLoaded", function() {
  fetch("./courses.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('grid-container');
      data.forEach(item => {
        const rec = document.createElement('div');
        rec.className = "rectangle";

        // for the names of the tiles
        const cont1 = document.createElement('div');
        const name = document.createElement('div');
        name.className = "name";
        name.innerHTML = `${item.course_prefix}${item.course_code}` 
        const title = document.createElement('div');
        title.className = "full-name";
        title.innerHTML = `${item.course_title}`
        cont1.appendChild(name);
        cont1.appendChild(title);
        rec.appendChild(cont1);

        // the terms indicator
        const cont2 = document.createElement('div');
        cont2.className = "term-container";
        for (avail_term of item.offered_terms) {
          const term = document.createElement('div');
          term.className = "term";
          term.innerHTML = `${avail_term}`;
          cont2.appendChild(term);
        }
        rec.appendChild(cont2);

        // the ratings system
        const cont3 = document.createElement('div');
        cont3.className = "star-rating";
        const star_num = Math.floor(item.average_stars) // simplifying the star indicator
        const review_num = document.createElement('div');
        review_num.className = "reviews";
        if (item.total_reviews === 1) {
          review_num.innerHTML = `${item.total_reviews}` + " review";
        } else {
          review_num.innerHTML = `${item.total_reviews}` + " reviews";
        }
        switch (star_num) {
          case 0:
            cont3.innerHTML = "☆☆☆☆☆";
            break;
          case 1:
            cont3.innerHTML = "★☆☆☆☆";
            break;
          case 2:
            cont3.innerHTML = "★★☆☆☆";
            break;
          case 3:
            cont3.innerHTML = "★★★☆☆";
            break;
          case 4:
            cont3.innerHTML = "★★★★☆";
            break;
          case 5:
            cont3.innerHTML = "★★★★★";
            break;
          default:
            cont3.innerHTML = "☆☆☆☆☆";
        }
        cont3.appendChild(review_num);
        rec.appendChild(cont3);


        container.appendChild(rec);
      });
    })
    .catch(error => console.error('Error:', error));
});
