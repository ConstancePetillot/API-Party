const url = "http://bastiencalou.fr:3000";
document.querySelector(".partyForm)").addEventListenner("submit", (event) => {
  event.preventDefault();
});

function postParty() {
  console.log(document.querrySelectorAll("input"));
  axios.post(`${url}/party`, {
    name: document.querySelector("input[name='name']").value,
    author: document.querySelector("input[name='author']").value,
    date: document.querySelector("input[name='date']").value,
  });
}

function postParty() {}
 status
 