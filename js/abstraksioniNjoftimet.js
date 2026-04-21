class Notification {
  constructor(message) {
    this.message = message;
    this.container = document.getElementById("notification-area");
  }

  _createElement() {
    const div = document.createElement("div");
    div.className = "alert-box";
    div.innerText = this.message;

    return div;
  }
  show() {
    const element = this._createElement();
    this.container.appendChild(element);
    setTimeout(() => {
      element.remove();
    }, 3000);
  }
}

const buttoni = document.getElementById("btnNjoftimi");
buttoni.addEventListener("click", () => {
  const njoftimi = new Notification("Detyra u realizua me sukses!");
  njoftimi.show();
});
