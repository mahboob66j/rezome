let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(" header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);


  menuIcon.classList.remove('fa-times');
  navbar.classList.remove('active');

};


const project = [
  {
    Id: 1,
    tittle: "categories by js",
    category: "js",
    img: "assets/screencapture-file-C-Users-Arshian-Desktop-menuproject-index-html-2024-02-06-23_07_22.png",
  },
  {
    Id: 2,
    tittle: "display grid",
    category: "grid",
    img: "assets/screencapture-file-C-Users-Arshian-Desktop-practice-7-index-html-2024-02-06-23_08_53.png",
  },
  {
    Id: 3,
    tittle: "display flex",
    category: "flex",
    img: "assets/screencapture-file-C-Users-Arshian-Desktop-practice9-index-html-2024-02-06-23_10_11.png",
  },
];
const addProjectList = (itemList = []) => {
  document.getElementById("Project-list").innerHTML = itemList
    .map(
      (pr) => ` <div class="project-item">
      <img src="${pr.img}"/>
      <h3>${pr.tittle}</h3> 
      </div>`
  
    ).join(" ");
};
const setactiveClass = (button) => { 
  if (button) {
  document.querySelectorAll('.but').forEach((b) => {
    b.classList.remove('active-but')
  });

  button.classList.add('active-but')
}
};
const addCategoruButtons = () => {
  const categorylist = project.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["all"]
  );
  const buttons = categorylist.map(
    (cat) => `<button class="but   ${cat === 'all' ? 'active-but' : ' ' }" categori-id="${cat}">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("menu-categories").innerHTML = buttons.join("");
  }
  document.querySelectorAll('.but').forEach((item) => {
    const categoryType = item.getAttribute('categori-id')


    item.addEventListener('click' , function(){

      setactiveClass(item);
      item.classList.add("active-but");

      if (categoryType === 'all') {
        addProjectList(project) 
        return;
      }
     const filteredList =  project.filter((item) => item.category === categoryType 
     );
    addProjectList(filteredList) 
    })
  })
};

document.addEventListener("DOMContentLoaded", function () {
  addCategoruButtons();
  addProjectList(project);
});
