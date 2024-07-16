class SplashScreen {
  constructor({ id, screens, duration = 1000 }) {
    this.id = id;
    this.screens = screens;
    this.duration = duration;
  }

  createScreenElement(index, { image, text }) {
    let screenElement;
    if (index === 0) {
      screenElement = `
        <div id="screen-${index + 1}" class="h-full w-full relative">
          <img src="${image}" alt="pln" class="h-full w-full object-cover absolute">
          <div class="h-full w-full absolute bg-white opacity-[.62] flex items-center justify-center">
            <h1 class="text-black font-bold opacity-65 text-7xl md:text-[224px] text-center">${text}</h1>
          </div>
        </div>
      `;
    } else {
      screenElement = `
        <div id="screen-${index + 1}" class="h-full w-full relative hidden">
          <img src="${image}" alt="pln" class="h-full w-full object-cover absolute">
          <div class="h-full w-full absolute bg-white opacity-[.62] flex items-center justify-center">
            <h1 class="text-black font-bold opacity-65 text-7xl md:text-[224px] text-center">${text}</h1>
          </div>
        </div>
      `;
    }
    return screenElement;
  }

  runSplash(index) {
    const splashScreen = document.getElementById(this.id);
    const screens = splashScreen.children;

    setTimeout(() => {
      screens[index].classList.add("hidden");
      if (index < screens.length - 1) {
        screens[index + 1].classList.remove("hidden");
        this.runSplash(index + 1);
      } else {
        splashScreen.remove();
      }
    }, this.duration);
  }

  start() {
    const splashScreen = document.getElementById(this.id);
    splashScreen.classList.add("h-screen", "w-screen");
    this.screens.forEach((screen, index) => {
      splashScreen.innerHTML += this.createScreenElement(index, screen);
    });

    this.runSplash(0);
  }
}
