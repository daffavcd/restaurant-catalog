const Favourites = {
  async render() {
    return `
      <div class="row text-center first-container">
        <h1>Favourites Restaurant</h1>
      </div>
      <div class="container p-15 flex-wrap container--favourites" id="favourites-content">
        <article class="card--favourites explore-image">
          <a href="/detail.html">
            <div class="row flex row--favourites">
              <div>
                <img
                  style="width: 450px; border-radius: 5px 0px 0px 5px"
                  src="https://restaurant-api.dicoding.dev/images/medium/41"
                  alt="image resto"
                />
              </div>
              <div
                class="row"
                style="text-align: left; padding: 10px 0px 0px 15px"
              >
                <font class="header--favourites">Bring Your Phone Cafe</font>
                <br />
                <div class="flex" style="margin-top: 10px">
                  <div>
                    <img
                      src="./images/heros/star.png"
                      alt="Star"
                      style="width: 18px"
                    />
                  </div>
                  <font class="b-18">
                    &nbsp;4.6<font class="f-12">/5 </font>
                  </font>
                </div>
                <div class="row" style="margin-top: -15px">
                  <p>Jln. Pandeglang no 19, Medan</p>
                </div>
                <div class="row" style="color: #ab9e9e; margin-top: -15px">
                  <p>Italia, Moderen</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      `;
  },

  async afterRender() {
    //adding black text navbar
    document.getElementById('my-header').classList.add('white-nav');
    document.getElementById('my-list1').classList.add('black');
    document.getElementById('my-list2').classList.add('black');
    document.getElementById('my-list3').classList.add('black');
  },
};

export default Favourites;
