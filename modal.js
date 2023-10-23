// Находим кнопки открытия и закрытия модального окна
const openModalButton = document.getElementById("open-burger");
const closeModalButton = document.getElementById("button-burger-close");

// Находим модальное окно
const modal = document.getElementById("modal");

// Добавляем обработчики событий для открытия и закрытия модального окна
openModalButton.addEventListener("click", () => {
modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
modal.style.display = "none";
});

// Закрываем модальное окно, если пользователь щелкает за его пределами
window.addEventListener("click", (event) => {
if (event.target === modal) {
    modal.style.display = "none";
}
});

const openModalButtonx2 = document.getElementById("buttonx2");
const closeModalButtonx2 = document.getElementById("buttonx2-close");

const modalx2 = document.getElementById("modalx2");

openModalButtonx2.addEventListener("click", () => {
modalx2.style.display = "block";
});

closeModalButtonx2.addEventListener("click", () => {
modalx2.style.display = "none";
});

window.addEventListener("click", (event) => {
if (event.target === modalx2) {
    modalx2.style.display = "none";
}
});
