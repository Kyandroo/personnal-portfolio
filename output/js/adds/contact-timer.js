const digitalTimer = () => {
  const clock = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    const loadDescription = `Kyandro's local time ${hour}:${minute}:${second}`;

    document.getElementById("contact-clock").innerHTML = loadDescription;
  };

  window.addEventListener("load", () => {
    clock();

    setInterval(clock, 1000);
  });
};

export default digitalTimer;
