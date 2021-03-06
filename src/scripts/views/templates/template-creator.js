import apiEndpoint from '../../globals/api-endpoint';

const createFavouriteButtonTemplate = () => `
    <button aria-label="favourite this restaurant" id="favourite-btn" class="my-btn min-44">
        <i class="fas fa-plus">
        </i> Add to favorites
    </button>
`;

const createFavouritedButtonTemplate = () => `
    <button aria-label="unfavourite this restaurant" id="favourite-btn" class="my-btn min-44">
        <i class="fas fa-minus">
        </i> Remove to favorites
    </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <article class="card explore-image">
        <div class="row relative">
          <div class="row head-skeleton"></div>
        </div>
        <div class="card-body">
          <div class="row body-skeleton"></div>
        </div>
      </article>
  `;
  }
  return template;
};

const createFavoritesRestaurantTemplate = (resto) => `
    <article class="card--favourites explore-image">
          <a href="#/detail/${resto.id}">
            <div class="row flex row--favourites">
              <div>
                <img
                  style="width: 450px; border-radius: 5px 0px 0px 5px"
                  width="331"
                  height="222"
                  src="${apiEndpoint.IMAGE_MEDIUM(resto.pictureId)}"
                  alt="${resto.name}"
                />
              </div>
              <div
                class="row"
                style="text-align: left; padding: 10px 0px 0px 15px"
              >
                <font class="header--favourites">${resto.name}</font>
                <br />
                <div class="flex" style="margin-top: 10px">
                  <div>
                    <img
                      src="./images/core/star.png"
                      alt="Star"
                      style="width: 18px"
                    />
                  </div>
                  <font class="b-18">
                    &nbsp;${resto.rating}<font class="f-12">/5 </font>
                  </font>
                </div>
                <div class="row" style="margin-top: -15px">
                  <p>${resto.address}, ${resto.city}</p>
                </div>
                <div class="row" style="color: #ab9e9e; margin-top: -15px">
                  <p>${resto.categories.map((element) => element.name)}</p>
                </div>
              </div>
            </div>
          </a>
    </article>
`;

export {
  createFavouriteButtonTemplate,
  createFavouritedButtonTemplate,
  createFavoritesRestaurantTemplate,
  createSkeletonRestaurantTemplate,
};
