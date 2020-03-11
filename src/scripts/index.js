import '../styles/index.scss';
import Helper from './tools/Helpers';

const LAYOUT_SETTINGS = {
    desktop: {
        defaultFont: 16,
        defaultWidth: 1600,
        defaultHeight: 900,
        minWidth: 1200,
        minHeight: 640
    },
    mobile: {
        defaultFont: 32,
        defaultWidth: 640,
        defaultHeight: 1100,
        minWidth: 320,
        minHeight: 568
    }
};

if (Helper.isIE()) {
    // Helper.forEachPoll();
    // Helper.createMatches();
    // Helper.createClosest();
    document.getElementById('app').classList.add('app--ie');
}

window.App = {
    init() {
        this.el = document.getElementById('app');
        this.elClassList = this.el.classList;
        this.deviceData = null;

        this.setLayoutSettings();

        window.addEventListener('resize', this.listenResize.bind(this));
        window.onload = () => {
            this.elClassList.add('app--loaded');
        };
    },
    setLayoutSettings() {
        this.windowW = window.innerWidth;
        this.windowH = window.innerHeight;

        this.device = (Helper.isMobile() && this.windowW < 1024) ? 'mobile' : 'desktop';

        if (this.elClassList.contains(`app--${this.deviceData}`)) {
            this.elClassList.remove(`app--${this.deviceData}`);
        }

        this.elClassList.add(`app--${this.device}`);
        this.deviceData = this.device;

        if (this.windowW > 767 && this.windowW < 1023) {
            this.el.style.cssText = `--vh: ${this.vh()}px`;
        } else {
            this.el.style.cssText = `font-size: ${this.fSize()}px; --vh: ${this.vh()}px`;
        }
    },
    listenResize() {
        if (this.device !== 'mobile' || window.innerWidth > 1023) {
            this.setLayoutSettings();
        }
    },
    fSize() {
        return (
            LAYOUT_SETTINGS[this.device].defaultFont *
            Math.min(
                Math.max(LAYOUT_SETTINGS[this.device].minWidth, this.windowW) / LAYOUT_SETTINGS[this.device].defaultWidth,
                Math.max(LAYOUT_SETTINGS[this.device].minHeight, this.windowH) / LAYOUT_SETTINGS[this.device].defaultHeight)
        ).toFixed(2);
    },
    vh() {
        return this.windowH * 0.01;
    }
};

App.init();
