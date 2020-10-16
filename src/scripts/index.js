import '../styles/index.scss';
import './icons';

import {isIE, isIOS, isMobile} from './tools/Helpers';

import Typograf from 'typograf';

import {LAYOUT_SETTINGS} from "./config/layout-settings";

import Form from "./modules/Form";
import MMenu from "./modules/MMenu";

class App {
  constructor({el}) {
    this.el = el;
    this.elClassList = this.el.classList;
    this.deviceData = null;
    this.deviceOrientation = null;

    this.initTypograf(this.el);
    this.setLayoutSettings();
    this.handlerScroll();

    this.form = Form();
    this.mmenu = new MMenu({elSelector: '.js-mmenu', actionSelector: '.js-mmenu-action'});

    window.addEventListener('resize', this.handlerResize.bind(this), {passive: true});
    window.addEventListener('scroll', this.handlerScroll.bind(this), {passive: true});
    window.addEventListener('load', this.handlerLoad.bind(this));
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

  handlerResize() {
    let prevDeviceOrientation = this.deviceOrientation;
    this.deviceOrientation = this.getOrientation();

    if (this.device === 'mobile' && (prevDeviceOrientation !== this.deviceOrientation)) {
      this.setLayoutSettings();
    }

    if (this.device !== 'mobile' || window.innerWidth > 1023) {
      this.setLayoutSettings();
    }
  }

  handlerScroll() {
    let scrollY = window.scrollY || window.pageYOffset;
  }

  handlerLoad() {
    this.elClassList.add('app--loaded');
  }

  fSize() {
    let device = (this.device === 'mobile' && this.windowW >= LAYOUT_SETTINGS['tablet'].minWidth) ? 'tablet' : this.device;

    let horizontalRatio = Math.max(LAYOUT_SETTINGS[device].minWidth, this.windowW) / LAYOUT_SETTINGS[device].defaultWidth;
    let verticalRatio = Math.max(LAYOUT_SETTINGS[device].minHeight, this.windowH) / LAYOUT_SETTINGS[device].defaultHeight;

    return (LAYOUT_SETTINGS[device].defaultFont * Math.min(horizontalRatio, verticalRatio)).toFixed(2);
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

const APP_DOM = document.getElementById('app');

if (isIE) APP_DOM.classList.add('app--ie');
if (isIOS) APP_DOM.classList.add('app--ios');

window.App = new App({el: APP_DOM});
