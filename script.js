window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  if (window.navigator.userAgent.toLocaleLowerCase() === 'android') {
    body.innerHTML = '';
  } else {
    const welcomeBlock = document.querySelector('.welcomeBlock');
    const welcomeScreen = document.querySelector('.welcomeScreen');
    const content = document.querySelector('.content');

    welcomeBlock.addEventListener('click', () => {
      welcomeScreen.style.opacity = '0';
      content.style.display = 'block';

      setTimeout(() => {
        welcomeScreen.remove();
      }, 1000);
    });

    const btn = document.querySelector('.btn');
    const heart = document.querySelector('.heart');
    const containerImg = document.querySelector('.img');
    const arrClass = ['ease-in', 'ease-in2', 'ease-out2', 'ease-out', 'ease-in-out2', 'ease-in-out'];
    let arrImg = [];

    btn.addEventListener('click', () => {
      clone();
      rand(arrClass);
      up();
    });

    function clone() {
      for (let i = 0; i < 15; i++) {
        const clone = heart.cloneNode(true);
        containerImg.appendChild(clone);
        arrImg.push(clone);
      }
    }

    function up() {
      const counter = arrImg.length;
      btn.disabled = true;

      arrImg.map((element) => {
        const animation = element.animate(
          [
            {
              transform: 'translateY(0)',
            },
            {
              transform: `translateY(-${document.body.offsetHeight + element.offsetHeight}px)`,
            },
          ],
          {
            duration: Math.floor(Math.round(Math.random() * 10000)),
            easing: 'ease-in-out',
            fill: 'forwards',
          }
        );

        animation.addEventListener('finish', () => {
          counter--;
          if (counter === 0) {
            btn.disabled = false;
            clear(arrImg);
          }
        });
      });
    }

    function rand(cl) {
      arrImg.forEach((element) => {
        const index = Math.floor(Math.random() * arrClass.length);
        element.classList.add(cl[index]);
      });
    }

    /**
     * @param {Array<HTMLElement>} list
     */
    function clear(list) {
      list.forEach((el) => el.remove());
    }
  }
});
