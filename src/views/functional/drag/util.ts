import { ref } from 'vue';
export const bombs: Bomb[] = [];
export const score = ref(0);
export class Bullet {
  el: HTMLSpanElement;
  top: number;
  can: boolean;
  constructor(target: HTMLDivElement) {
    const { left, top } = target.getBoundingClientRect();
    this.el = document.createElement('span');
    this.el.classList.add('fighter');
    this.el.style.left = left + 8 + 'px';
    this.el.style.top = top - 32 + 'px';
    document.body.appendChild(this.el);
    this.top = 0;
    this.can = true;
    window.requestAnimationFrame(this.start.bind(this));
  }
  start() {
    this.top += 2;
    this.el.style.transform = `translate3d(0,${-this.top}px,0)`;
    const { left, top, x } = this.el.getBoundingClientRect();

    for (let i = 0; i < bombs.length; i++) {
      const bomb = bombs[i];
      const { left: bLeft, top: bTop } = bomb.getRect();
      if (Math.abs(bLeft - left) < 32 && Math.abs(bTop - top) < 32) {
        bomb.destroy();
        this.remove();
      }
    }
    if (this.can) {
      window.requestAnimationFrame(this.start.bind(this));
      if (this.el.getBoundingClientRect().top < 0) {
        this.remove();
      }
    }
  }
  remove() {
    this.can = false;
    this.el.parentNode?.removeChild(this.el);
  }
}

export class Bomb {
  el: HTMLSpanElement;
  parent: HTMLDivElement;
  top: number;
  can: boolean;
  maxTop: number;
  constructor(parent: HTMLDivElement) {
    this.el = document.createElement('span');
    this.el.classList.add('bomb');
    this.top = 0;
    this.can = true;
    this.parent = parent;
    parent.appendChild(this.el);
    const { offsetWidth, offsetHeight } = this.parent;
    this.maxTop = offsetHeight;
    this.create(offsetWidth);
    window.requestAnimationFrame(this.start.bind(this));
  }
  create(offsetWidth: number) {
    this.el.style.left = createRandomLeft(offsetWidth) + 'px';
  }
  start() {
    this.top += 1;
    this.el.style.transform = `translate3d(0,${this.top}px,0)`;
    if (this.can) {
      window.requestAnimationFrame(this.start.bind(this));
      if (this.el.getBoundingClientRect().top > this.maxTop + 80) {
        this.remove();
      }
    }
  }
  remove() {
    this.can = false;
    this.el.parentNode?.removeChild(this.el);
    const index = bombs.indexOf(this);
    if (index > -1) {
      bombs.splice(index, 1);
    }
  }
  destroy() {
    this.can = false;
    this.el.classList.add('blast');
    score.value++;
    setTimeout(() => {
      this.el.parentNode?.removeChild(this.el);
      const index = bombs.indexOf(this);
      if (index > -1) {
        bombs.splice(index, 1);
      }
    }, 300);
  }
  getRect() {
    return this.el.getBoundingClientRect();
  }
}

export const createRandomLeft = (regionWidth: number) => {
  const sourceWidth: number = 32;
  const maxNum = Math.ceil(regionWidth / sourceWidth);
  const leftIndex = Math.ceil(Math.random() * maxNum);
  return leftIndex * 32;
};
