import RestaurantDicoding from '../../data/restaurant-dicoding';
import API_ENDPOINT from '../../globals/api-endpoint';

const Home = {
  async renderBanner() {
    return `
           <img
          src="./images/heros/hero-image_2.jpg"
          class="dark-overlay"
          style="width: 100%"
          alt="Hero Background"
        />
        <div class="centered">
          <font class="text-head">My Desired Utopias</font><br />
          <font class="text-head2"
            >there is a fragmentary of neverland for sure.</font
          >
        </div>
        `;
  },

  async render() {
    return `
          <div class="container">
        <div class="row text-center">
          <h1>Explore Your Utopias</h1>
        </div>
      </div>
      <div class="container p-15 flex-wrap" id="explore-content"></div>
      <div class="container">
        <div class="row text-center p-15">
          <h1>in a collaboration with</h1>
        </div>
      </div>
      <div class="container p-15">
        <div class="text-center relative row" style="margin-bottom: 35px">
          <img
            src="./images/heros/starbucks.png"
            class="starbuck-overlay"
            style="width: 500px; margin: auto"
            alt="Starbucks"
          />
        </div>
      </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await RestaurantDicoding.list();

    let html = '';
    restaurant.restaurants.forEach((resto) => {
      html += `
  <article class="card explore-image">
  <a href="#/detail/${resto.id}">
  <div class="row relative">
    <img style="height: 315px;"
      src="${API_ENDPOINT.IMAGE_MEDIUM(resto.pictureId)}"
      alt="${resto.name}"
    />
    <div class="image-badge">${resto.city} State</div>
  </div>
  <div class="card-body">
    <div class="row inline-block">
      <div class="left"><h4>${resto.name}</h4></div>
      <div class="right flex mt-20">
        <div>
          <img
            src="./images/heros/star.png"
            alt="Star"
            style="width: 21px"
          />
        </div>
        <font class="b-18">
          &nbsp${resto.rating}<font class="f-12">/5 </font>
        </font>
      </div>
    </div>
    <p style="margin-top: -10px">${this.limit(resto.description, 200)}...</p>
  </div>
  </a>
  </article>
  `;
      document.getElementById('explore-content').innerHTML = html;
    });
  },

  limit(string = '', limit = 0) {
    return string.substring(0, limit);
  },
};

export default Home;