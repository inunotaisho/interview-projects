import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

module.exports = {
  getBrowser : function() {
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera    // eslint-disable-line no-undef
                    || navigator.userAgent.indexOf(' OPR/') >= 0;
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    const isEdge = !(isIE) && !!window.StyleMedia;
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    const isBlink = (isChrome || isOpera) && !!window.CSS;
    let browser;

    if (isOpera) {
      browser = 'opera';
    } else if (isFirefox) {
      browser = 'firefox';
    } else if (isSafari) {
      browser = 'safari';
    } else if (isIE) {
      browser = 'ie';
    } else if (isEdge) {
      browser = 'edge';
    } else if (isChrome) {
      browser = 'chrome';
    } else if (isBlink) {
      browser = 'blink';
    } else {
      browser = 'unknown';
    }
    return browser;
  },
  getDevice : function() {
    let device = md.mobile();
    if(device != '' && device != null && device != undefined) {
      return "mobile";
    } else {
      return "desktop";
    }
  },
  getUTCDate : function() {
    let options = { hour12: false };
      let localDate = new Date().toLocaleString('en-US', options);
      let currentDtTm = localDate.split(',');
      let date = currentDtTm[0].split('/');
      let time = currentDtTm[1].split(':');
      return new Date(Date.UTC(date[2], date[0] - 1,date[1], time[0], time[1], time[2]));
  }
};
