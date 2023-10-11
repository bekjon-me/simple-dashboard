const placeToRenderCards = document.querySelector('.rendered-cards');

const data = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 300,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "160000 so'm",
  },
];

let template = '';

data.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
  <li class="col-span-1 flex rounded-md shadow-sm">
    <div
      class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
    >
      ${abbreviation}
    </div>
    <div
      class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
    >
      <div class="flex-1 truncate px-4 py-2 text-sm">
        <a
          href="#"
          class="font-medium text-gray-900 hover:text-gray-600"
          >${item.name}</a
        >
        <p class="text-gray-500">${item.total}</p>
      </div>
      <div class="flex-shrink-0 pr-2">
        <button
          type="button"
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="sr-only">Open options</span>
          <!-- Heroicon name: mini/ellipsis-vertical -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </li>
    `;

  template += li;
});

let renderedTemplate = `
<h2 class="mt-4 text-lg font-bold">Umumiy ma'lumotlar</h2>
<ul
  role="list"
  class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
>
${template}
</ul>`;

placeToRenderCards.innerHTML += renderedTemplate;

const data2 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 50,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "12000 so'm",
  },
];

let template2 = '';

data2.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div
        class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
      >
        ${abbreviation}
      </div>
      <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
      >
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a
            href="#"
            class="font-medium text-gray-900 hover:text-gray-600"
            >${item.name}</a
          >
          <p class="text-gray-500">${item.total}</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            type="button"
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open options</span>
            <!-- Heroicon name: mini/ellipsis-vertical -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
      `;

  template2 += li;
});

let renderedTemplate2 = `
  <h2 class="mt-4 text-lg font-bold">Elektr toki bo'yicha qarzdorlik</h2>
  <ul
    role="list"
    class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
  >
  ${template2}
  </ul>`;

placeToRenderCards.innerHTML += renderedTemplate2;

const data3 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 75,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "58000 so'm",
  },
];

let template3 = '';

data3.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div
          class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
        >
          ${abbreviation}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              href="#"
              class="font-medium text-gray-900 hover:text-gray-600"
              >${item.name}</a
            >
            <p class="text-gray-500">${item.total}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <!-- Heroicon name: mini/ellipsis-vertical -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
        `;

  template3 += li;
});

let renderedTemplate3 = `
    <h2 class="mt-4 text-lg font-bold">Gaz bo'yicha qarzdorlik</h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
    ${template3}
    </ul>`;

placeToRenderCards.innerHTML += renderedTemplate3;

const data4 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 102,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "35000 so'm",
  },
];

let template4 = '';

data4.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div
          class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
        >
          ${abbreviation}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              href="#"
              class="font-medium text-gray-900 hover:text-gray-600"
              >${item.name}</a
            >
            <p class="text-gray-500">${item.total}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <!-- Heroicon name: mini/ellipsis-vertical -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
        `;

  template4 += li;
});

let renderedTemplate4 = `
    <h2 class="mt-4 text-lg font-bold">Ichimlik suvi bo'yicha qarzdorlik</h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
    ${template4}
    </ul>`;

placeToRenderCards.innerHTML += renderedTemplate4;

const data5 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 50,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "12000 so'm",
  },
];

let template5 = '';

data5.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div
          class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
        >
          ${abbreviation}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              href="#"
              class="font-medium text-gray-900 hover:text-gray-600"
              >${item.name}</a
            >
            <p class="text-gray-500">${item.total}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <!-- Heroicon name: mini/ellipsis-vertical -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
        `;

  template5 += li;
});

let renderedTemplate5 = `
    <h2 class="mt-4 text-lg font-bold">Chiqindi bo'yicha qarzdorlik</h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
    ${template5}
    </ul>`;

placeToRenderCards.innerHTML += renderedTemplate5;

const data6 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 78,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "56000 so'm",
  },
];

let template6 = '';

data6.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div
          class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
        >
          ${abbreviation}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              href="#"
              class="font-medium text-gray-900 hover:text-gray-600"
              >${item.name}</a
            >
            <p class="text-gray-500">${item.total}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <!-- Heroicon name: mini/ellipsis-vertical -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
        `;

  template6 += li;
});

let renderedTemplate6 = `
    <h2 class="mt-4 text-lg font-bold">Shirkat bo'yicha qarzdorlik</h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
    ${template6}
    </ul>`;

placeToRenderCards.innerHTML += renderedTemplate6;

const data7 = [
  {
    color: 'bg-red-600',
    name: 'Xonadonlar',
    total: 460,
  },
  {
    color: 'bg-pink-600',
    name: 'Uylar',
    total: 12,
  },
  {
    color: 'bg-blue-600',
    name: 'Qarzdorlar soni',
    total: 23,
  },
  {
    color: 'bg-orange-600',
    name: 'Jami qarzdorlik',
    total: "11000 so'm",
  },
];

let template7 = '';

data7.forEach((item) => {
  const abbreviation = item.name.slice(0, 2).toUpperCase();
  const li = `
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div
          class="flex-shrink-0 flex items-center justify-center w-16 ${item.color} text-white text-sm font-medium rounded-l-md"
        >
          ${abbreviation}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a
              href="#"
              class="font-medium text-gray-900 hover:text-gray-600"
              >${item.name}</a
            >
            <p class="text-gray-500">${item.total}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <!-- Heroicon name: mini/ellipsis-vertical -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
        `;

  template7 += li;
});

let renderedTemplate7 = `
    <h2 class="mt-4 text-lg font-bold">Soliq bo'yicha qarzdorlik</h2>
    <ul
    role="list"
    class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
    ${template7}
    </ul>
    `;

placeToRenderCards.innerHTML += renderedTemplate7;
