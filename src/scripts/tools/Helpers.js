const Helpers = {

    isMobile() {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check || this.isIPAD() || this.isTouch() || window.innerWidth < 769;
    },

    isTouch() {
        let isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
        return isMobile;
    },

    iOS() {
        let iDevices = [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ];

        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) {
                return true;
            }
        }

        return false;
    },


    isIPAD() {
        let ua = navigator.userAgent;
        return /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
    },


    get_browser_info() {
        let ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) {
                return {name: 'Opera', version: tem[1]};
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    getRandomFromArray(array) {
        return array[getRandomInt(0, array.length - 1)];
    },

    declension(num, expressions) {
        let result;
        let count = num % 100;
        if (count >= 5 && count <= 20) {
            result = expressions['2'];
        } else {
            count = count % 10;
            if (count == 1) {
                result = expressions['0'];
            } else if (count >= 2 && count <= 4) {
                result = expressions['1'];
            } else {
                result = expressions['2'];
            }
        }
        return result;
    },

    isIE() {
        let ua = window.navigator.userAgent;
        if (ua.indexOf('Edge/') > 0 ||
            ua.indexOf('Trident/') > 0 ||
            ua.indexOf('MSIE ') > 0) {
            return true;
        } else {
            return false;
        }
    },

    ga() {
        let analitics = {
            send: function (category, action, label, id) {
                if (typeof ga !== 'undefined') {

                    if (typeof label !== 'undefined' && label !== '') {
                        if (id)
                            ga('send', 'event', category, action, label, id);
                        else
                            ga('send', 'event', category, action, label);
                    } else {
                        ga('send', 'event', category, action);
                    }
                }
            }
        };
        return analitics;
    },


    share(network, link, callback) {
        switch (network) {
            case "vk":
                sharePopup("https://vk.com/share.php?url=" + link, 550, 300, callback);
                break;
            case "fb":
                sharePopup('https://www.facebook.com/sharer/sharer.php?u=' + link, 550, 300, callback);
                break;
            case "tw":
                sharePopup("https://twitter.com/intent/tweet?original_referer=" + link + "&tw_p=tweetbutton&url=" + link, 550, 300, callback);
                break;
            case "ok":
                sharePopup("https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st._aid=ExternalShareWidget_SharePreview&st.shareUrl=" + link, 550, 300, callback);
                break;
            case "tg":
                sharePopup("https://telegram.me/share/url?url=" + link, 550, 300, callback);
                break;
        }

        function sharePopup(url, width, height, callback) {
            //  console.log(url);
            if (!width) width = 400;
            if (!height) height = 400;

            let share_window = window.open(url, '_blank', 'height=' + height + ',width=' + width + ',menubar=no,toolbar=no,location=no');
            let uri_regex = new RegExp(window.location.host);
            //console.log('document.location.host',document.location.host)
            let watch_timer = setInterval(function () {
                if (share_window.closed) {
                    clearInterval(watch_timer);
                    if (typeof callback != 'undefined') {
                        callback();
                    }
                    return;
                }
            }, 200);

        }
    },
    isScrolledIntoView: function (el) {
        let elemTop = el.getBoundingClientRect().top;
        let elemBottom = el.getBoundingClientRect().bottom;
        let elHeight = elemBottom - elemTop;
        //return (elemTop >= -window.innerHeight/2) && (elemTop <= window.innerHeight/2) && (elemBottom >= window.innerHeight/2) && (elemBottom <= 3*window.innerHeight/2);
        return elemBottom <= elHeight;
    },

    dLayer: function (data) {
        if ('dataLayer' in window) {
            dataLayer.push(data);
        }
    },

    getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    },

    isMac() {
        return this.getOS() === 'Mac OS';
    },


    getLang() {
        let lang = localStorage.getItem('DEVELUP_LANG');
        let browserLang = navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage;
        browserLang = browserLang.indexOf('ru') >= 0 ? 'ru' : 'en';
        return lang ? lang : browserLang;
    },

    createMatches() {
        // проверяем поддержку
        if (!Element.prototype.matches) {

            // определяем свойство
            Element.prototype.matches = Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector;

        }
    },

    createClosest() {
        // проверяем поддержку
        if (!Element.prototype.closest) {

            // реализуем
            Element.prototype.closest = function (css) {
                let node = this;

                while (node) {
                    if ( node.matches(css) || node.msMatchesSelector(css) ) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    },

    forEachPoll() {
        if (!Array.prototype.forEach) {

            Array.prototype.forEach = function (callback, thisArg) {

                var T, k;

                if (this == null) {
                    throw new TypeError(' this is null or not defined');
                }

                // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
                var O = Object(this);
                // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
                // 3. Положим len равным ToUint32(lenValue).
                var len = O.length >>> 0;

                // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
                // Смотрите: http://es5.github.com/#x9.11
                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }

                // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
                if (arguments.length > 1) {
                    T = thisArg;
                }

                // 6. Положим k равным 0
                k = 0;

                // 7. Пока k < len, будем повторять
                while (k < len) {

                    var kValue;

                    // a. Положим Pk равным ToString(k).
                    //   Это неявное преобразование для левостороннего операнда в операторе in
                    // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
                    //   Этот шаг может быть объединён с шагом c
                    // c. Если kPresent равен true, то
                    if (k in O) {

                        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
                        kValue = O[k];

                        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
                        // списком аргументов, содержащим kValue, k и O.
                        callback.call(T, kValue, k, O);
                    }
                    // d. Увеличим k на 1.
                    k++;
                }
                // 8. Вернём undefined.
            };
        }
    }
};

export default Helpers;
