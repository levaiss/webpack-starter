import '../styles/index.scss';
import './icons';

import {isIE, isIOS, isMobile} from './tools/Helpers';

import Typograf from 'typograf';

const LAYOUT_SETTINGS = {
  desktop: {
    defaultFont: 20,
    defaultWidth: 1920,
    defaultHeight: 1080,
    minWidth: 1200,
    minHeight: 640
  },
  tablet: {
    defaultFont: 20,
    defaultWidth: 720,
    defaultHeight: 1024,
    minWidth: 640,
    minHeight: 800
  },
  mobile: {
    defaultFont: 16,
    defaultWidth: 320,
    defaultHeight: 568,
    minWidth: 320,
    minHeight: 568
  }
};

if (isIE) document.getElementById('app').classList.add('app--ie');

if (isIOS) document.getElementById('app').classList.add('app--ios');

import Form from "./modules/Form";
import MMenu from "./modules/MMenu";

class App {
  constructor({el}) {
    this.el = el;
    this.elClassList = this.el.classList;
    this.deviceData = null;
    this.deviceOrientation = null;

    this.setLayoutSettings();

    this.initTypograf(this.el);
    this.setLayoutSettings();
    this.listenScroll();

    this.form = Form();
    this.mmenu = new MMenu({elSelector: '.js-mmenu', actionSelector: '.js-mmenu-action'});

    window.addEventListener('resize', this.listenResize.bind(this));
    window.addEventListener('scroll', this.listenScroll.bind(this));
    window.addEventListener('load', () => this.elClassList.add('app--loaded'));
  }

  setLayoutSettings() {
    this.windowW = window.innerWidth;
    this.windowH = window.innerHeight;

    this.device = (isMobile() && this.windowW < 1024) ? 'mobile' : 'desktop';

    if (this.elClassList.contains(`app--${this.deviceData}`)) {
      this.elClassList.remove(`app--${this.deviceData}`);
    }

    this.elClassList.add(`app--${this.device}`);
    this.deviceData = this.device;

    this.el.style.cssText = `font-size: ${this.fSize()}px; --vh: ${this.vh()}px`;
  }

  getOrientation() {
    let result = null;

    if (window.matchMedia("(orientation: portrait)").matches) {
      result = 'portrait';
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      result = 'landscape';
    }

    return result;
  }

  listenResize() {
    let prevDeviceOrientation = this.deviceOrientation;
    this.deviceOrientation = this.getOrientation();

    if (this.device === 'mobile' && (prevDeviceOrientation !== this.deviceOrientation)) {
      this.setLayoutSettings();
    }

    if (this.device !== 'mobile' || window.innerWidth > 1023) {
      this.setLayoutSettings();
    }
  }

  listenScroll() {
    let scrollY = window.scrollY || window.pageYOffset;
  }

  fSize() {
    let device = (this.device === 'mobile' && this.windowW >= 640) ? 'tablet' : this.device;

    return (
      LAYOUT_SETTINGS[device].defaultFont *
      Math.min(Math.max(LAYOUT_SETTINGS[device].minWidth, this.windowW) / LAYOUT_SETTINGS[device].defaultWidth)
    ).toFixed(2);
    //Math.max(LAYOUT_SETTINGS[this.device].minHeight, this.windowH) / LAYOUT_SETTINGS[this.device].defaultHeight
  }

  vh() {
    return this.windowH * 0.01;
  }

  initTypograf(container) {
    let Tp = new Typograf({locale: ['ru', 'en-US']});
    let els = container.querySelectorAll('[data-typograf]'), i;
    els = Array.from(els);

    for (i = 0; i < els.length; i++) {
      els[i].innerHTML = Tp.execute(els[i].innerHTML);
    }
  }
}

window.App = new App({el: document.getElementById('app')});
