document.getElementById('Github').addEventListener('click', () => window.open("https://github.com/Paul---?tab=repositories","_blank" )  );
document.getElementById('Github2').addEventListener('click', () => window.open("https://github.com/Paul---?tab=repositories","_blank" )  );
document.getElementById('Linked-in').addEventListener('click', () => window.open("https://www.linkedin.com/in/paul-pilcher-56a366162/", "_blank") );
document.getElementById('Linked-In2').addEventListener('click', () => window.open("https://www.linkedin.com/in/paul-pilcher-56a366162/", "_blank") );
document.getElementById('Contact').addEventListener('click', () =>  {
  let x = document.getElementById("contact-section");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.textAlign = "center";
  } else {
    x.style.display = "none";
}
});
document.getElementById('email-me').addEventListener('click', () => {
  let x = document.getElementById("contact-section2");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.textAlign = "center";
  } else {
    x.style.display = "none";
  }
});