
/* 랜덤유저 정보 20개 */

fetch('https://randomuser.me/api/?results=20')
  .then(response => response.json())
  .then(data => {
    console.log(data.results);

    const container = document.getElementById('user-list');

    data.results.forEach(user => {
      const card = createUserCard(user);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('에러 발생, error')
  })


function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('user-card');

  card.innerHTML = `
  <div class="profile">
  <img src="${user.picture.thumbnail}" id= "thumbnail" alt = "프로필사진">
  <div class="text">
  <h2>${user.name.first} ${user.name.last}</h2>
  <div class="detail">
  <p>Email: ${user.email}</p>
  <p>Phone: ${user.phone}</p>
  </div>
  </div>
  </div>
  `;
  return card;
}




