import React, { useEffect } from 'react';

export function dzThemeSettings() {
  var dzThemeSettings = '<ul class="theme-color-settings"><li><input class="filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color-red" /><label for="primary_color_1"></label></li><li><input class="filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color-green" /> <label for="primary_color_2"></label></li><li><input class="filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color-blue" /> <label for="primary_color_3"></label></li><li><input class="filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color-pink" /> <label for="primary_color_4"></label></li><li><input class="filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color-yellow" /> <label for="primary_color_5"></label></li><li><input class="filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color-orange" /> <label for="primary_color_6"></label></li><li><input class="filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color-purple" /> <label for="primary_color_7"></label></li><li><input class="filled-in" id="primary_color_8" name="primary_bg" type="radio" value="color-deeppurple" /> <label for="primary_color_8"></label></li><li><input class="filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color-lightblue" /> <label for="primary_color_9"></label></li><li><input class="filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color-teal" /> <label for="primary_color_10"></label></li><li><input class="filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color-lime" /> <label for="primary_color_11"></label></li><li><input class="filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color-deeporange" /> <label for="primary_color_12"></label></li></ul>';
}

export const themeOption = ['themeColor', 'themeVersion'];

function ThemeSettings() {
  useEffect(() => {
    dzThemeSettings();

    //get the DOM elements from right sidebar
    const versionSelect = document.querySelector('#theme_version');

    //change the theme version controller
    /* versionSelect.onchange = function() {
      body.setAttribute('data-theme-version', this.value);
      setCookie('themeVersion_value', this.value);
    }; */

    //change the theme version controller
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.onclick = function() {
      document.body.classList.toggle('theme-dark');
      themeBtn.classList.toggle('active');
      if (document.body.classList.contains('theme-dark')) {
        setCookie('themeVersion_value', 'theme-dark');
      } else {
        setCookie('themeVersion_value', '');
      }
    };

    //change the primary color controller
    const themeColorInputs = document.querySelectorAll('input[name="theme_color"]');
    themeColorInputs.forEach((input) => {
      input.onclick = function() {
        document.body.setAttribute('data-theme-color', this.value);
        setCookie('themeColor_value', this.value);
      };
    });

    // Set Theme By Cookie
    setThemePanel();
  }, []);

  // Cookies Function
  function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 60 * 1000)); /* 30 Minutes */
    var expires = 'expires=' + d.toString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  function setThemePanel() {
    themeOption.forEach((themeOptionItem) => {
      var themeOptionItemValue = getCookie(themeOptionItem + '_value');

      if (themeOptionItemValue != '' && themeOptionItemValue != 1) {
        if (themeOptionItem === 'themeColor') {
          document.body.setAttribute('data-theme-color', themeOptionItemValue);
        } else if (themeOptionItem === 'themeVersion') {
          document.body.classList.add(themeOptionItemValue);
          document.querySelector('.theme-btn').classList.add('active');
        }
      }
    });

    // Uncomment the following code if you need to handle logo image changes based on cookies
    /*
    var ts_logo_selector = getCookie('themeStandardColor_logo_selector');
    var tf_logo_selector = getCookie('themeFullColor_logo_selector');

    if (ts_logo_selector != '' && tf_logo_selector != 1) {
      var ts_logo_image = getCookie('themeStandardColor_logo_image');
      var logoSelectorArr = ts_logo_selector.split(',');
      var logoSrcArr = ts_logo_image.split(',');
      var arrCount = logoSelectorArr.length;
      for (var i = 0; i < arrCount; i++) {
        document.querySelector(logoSelectorArr[i]).setAttribute('src', logoSrcArr[i]);
      }
    }

    if (tf_logo_selector != '' && tf_logo_selector != 1) {
      var tf_logo_image = getCookie('themeFullColor_logo_image');
      var logoSelectorArr = tf_logo_selector.split(',');
      var logoSrcArr = tf_logo_image.split(',');
      var arrCount = logoSelectorArr.length;
      for (var i = 0; i < arrCount; i++) {
        document.querySelector(logoSelectorArr[i]).setAttribute('src', logoSrcArr[i]);
      }
    }
    */
  }

  return <></>; // Since it's a utility component, you can return an empty fragment or customize as needed
}

export default ThemeSettings;

