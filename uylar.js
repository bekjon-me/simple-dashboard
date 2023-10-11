let placeToRender = document.querySelector('#houses-table');
console.log(placeToRender);

const houses = [
  {
    id: 1,
    head: 'ПУЛАТОВ АЗИЗ',
    totalHouses: 45,
  },
  {
    id: 2,
    head: 'ХОЛМАТОВ ИЛХОМ',
    totalHouses: 34,
  },
  {
    id: 5,
    head: 'НАФАСОВ ЖАХОНГИР',
    totalHouses: 23,
  },
  {
    id: 3,
    head: 'КОБИЛОВ ЭЛЁР',
    totalHouses: 55,
  },
  {
    id: 72,
    head: 'ШАМСИЕВА ШАХЛО',
    totalHouses: 12,
  },
  {
    id: 9,
    head: 'НАЗАРОВ ГОЛИБЖОН',
    totalHouses: 43,
  },
  {
    id: 11,
    head: 'ТУРДИЕВА ЗУХРА',
    totalHouses: 32,
  },
  {
    id: 62,
    head: 'Норкулов Илхом',
    totalHouses: 15,
  },
  {
    id: 6,
    head: 'ДОНАЕВА МАЛИКА',
    totalHouses: 29,
  },
  {
    id: 7,
    head: 'Хусанов Гайбулло',
    totalHouses: 35,
  },
];

houses.forEach((house) => {
  let template = `
  <tr>
  <td
    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
  >
    ${house.id} - uy
  </td>
  <td
    class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
  >
    ${house.head}
  </td>
  <td
    class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600"
  >
    ${house.totalHouses}
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
  window.location.pathname = `xonadonlar${randomNum}.html`;
}
