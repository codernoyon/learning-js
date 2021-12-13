const btn = document.getElementById('btn');
const paragrph = document.getElementById('paragraph');

btn.addEventListener('click', showSomthing);

function showSomthing() {
    paragrph.innerHTML = "The button is clicked";
}