let placeToRender = document.querySelector('#houses-table');
let filterButton = document.querySelector('#menu-button');
let filterDropdown = document.querySelector('#filter-dropdown');

console.log(filterButton);
const houses = [
  {
    id: 1,
    location: 'Ойдин МФЙ  62/2 Манзилобод УЖМШ, 4-kv',
    head: 'Мавлянова дилфуза',
    number: '914610009',
    gas: -32843.65,
    electricity: +226602.81,
    water: 0,
  },
  {
    id: 2,
    location: 'Ойдин МФЙ  62/1 Манзилобод УЖМШ, 13-kv',
    head: 'Пардаева Зебо',
    number: '906705121',
    gas: 0,
    electricity: 0,
    water: -1226602.81,
  },
  {
    id: 3,
    location: 'Ойдин МФЙ  62/1 Манзилобод УЖМШ, 8-kv',
    head: 'Менгликулова Дилбор',
    number: '939326157',
    gas: +76543.78,
    electricity: -78593.81,
    water: +12136.81,
  },
  {
    id: 4,
    location: 'Ойдин МФЙ  62/1 Манзилобод УЖМШ, 1-kv',
    head: 'Рахимкулова Мухлиса',
    number: '907216433',
    gas: +784.76,
    electricity: -67439.81,
    water: 0,
  },
  {
    id: 5,
    location: 'Ойдин МФЙ  62/1 Манзилобод УЖМШ, 20-kv',
    head: 'Назарова Нилуфар',
    number: '906669886',
    gas: +57423.5,
    electricity: -2004313.81,
    water: 53743.81,
  },
  {
    id: 6,
    location: 'Ойдин МФЙ  62/2 Манзилобод УЖМШ, 3-kv',
    head: 'Жуманов Бекзод',
    number: '977998902',
    gas: -73491.65,
    electricity: 0,
    water: -226602.81,
  },
  {
    id: 7,
    location: 'Ойдин МФЙ  62/2 Манзилобод УЖМШ, 12-kv',
    head: 'Жабборова Гули',
    number: '907167284',
    gas: 0,
    electricity: 0,
    water: 0,
  },
  {
    id: 8,
    location: 'Ойдин МФЙ  62/2 Манзилобод УЖМШ, 2-kv',
    head: 'Сотникова Татяна',
    number: '906742815',
    gas: +47282.65,
    electricity: -76392.76,
    water: -12573.76,
  },
  {
    id: 9,
    location: 'Ойдин МФЙ  62/2 Манзилобод УЖМШ, 9-kv',
    head: 'Жумаев Улугбек',
    number: '996658387',
    gas: +65392.76,
    electricity: -226602.81,
    water: -57396.81,
  },
  {
    id: 10,
    location: 'Ойдин МФЙ  62/1 Манзилобод УЖМШ, 34-kv',
    head: 'Пулатов Достон',
    number: '916375357',
    gas: 0,
    electricity: 0,
    water: +4723.65,
  },
];

houses.forEach((house) => {
  let template = `
    <tr class="divide-x divide-gray-200">
        <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
        >
            ${house.location}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
            ${house.head}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
            ${house.number}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
            ${house.gas}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
            ${house.electricity}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
            ${house.water}
        </td>
        <td
            class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
        >
        <span
        onclick="openHouse()"
        class="text-blue-500 cursor-pointer"
        >Ochish</span
        </td>
    </tr>
      `;

  placeToRender.innerHTML += template;
});

function openHouse() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  window.location.pathname = `xonadon${randomNum}.html`;
}

filterButton.addEventListener('click', () => {
  let isExist = [...filterDropdown.classList].includes('hidden');

  if (isExist) {
    filterDropdown.classList.remove('hidden');
  } else {
    filterDropdown.classList.add('hidden');
  }
});
