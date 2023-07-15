(function ($) {
  const _loadersList = [
    `<svg style="width: 60px; height: 60px;" class="arindam-loader0 spinner spinner--circle" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader1 spinner spinner--circle-10">
        <div style="transform: scale(0.6);" class="spinner-inner">
            <div class="loader-xbox"></div>
        </div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader2 spinner spinner--circle-11">
        <div class="spinner-inner"></div>
    </div>`,
    `<div style="width: 60px; height: 60px; border-width: 5px; border-style: solid; border-color: rgb(53, 73, 94) rgb(65, 184, 131) rgb(65, 184, 131); border-image: initial;" class="arindam-loader3 spinner spinner--circle-2"></div>`,
    `<div style="width: 60px; height: 60px; border: 0px solid rgb(65, 184, 131); box-shadow: rgb(65, 184, 131) 0px -20px 0px 21px inset;" class="arindam-loader4 spinner spinner--circle-3"></div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader5 spinner spinner--circle-4"></div>`,
    `<div style="background-color: rgb(65, 184, 131); width: 60px; height: 60px; animation-duration: 1.2s;" class="arindam-loader6 spinner spinner--rotate-square"></div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader7 spinner spinner--rotate-square-2"></div>`,
    `<svg  style="width: 60px; height: 60px;" class="arindam-loader8 spinner spinner--cube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.00001 500.00001">
        <g fill="#41b883">
            <path class="b0" d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z"></path>
            <path class="b2" d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z"></path>
            <path class="b1" d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z"></path>
            <path class="b3" d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z"></path>
            <path class="b4" d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z"></path>
        </g>
    </svg>`,
    `<div class="arindam-loader9 spinner spinner--rotate-square4">
        <span class="loader-inner"></span>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader10 spinner spinner--rotate-square-5">
        <div style="transform: scale(0.75);" class="spinner-inner">
            <span class="load3 one"></span>
            <span class="load3 two"></span>
            <span class="load3-center"></span>
        </div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader11 spinner spinner--rotate-square-6">
        <div style="border: 2px solid rgb(65, 184, 131); width: 48px; height: 48px;" class="inner-square inner-square-1"></div>
        <div style="border: 2px solid rgb(65, 184, 131); width: 24px; height: 24px;" class="inner-square inner-square-2"></div>
    </div>`,
    `<div style="width: 60px; height: 60px; background-color: rgb(65, 184, 131); animation-duration: 1.8s;" class="arindam-loader12 spinner spinner--cube-shadow"></div>`,
    `<div class="arindam-loader13 spinner spinner--cube-grid" style="width: 60px; height: 60px;"><div class="sk-cube sk-cube1" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube2" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube3" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube4" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube5" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube6" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube7" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube8" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div><div class="sk-cube sk-cube9" style="background-color: rgb(65, 184, 131); animation-duration: 1.3s;"></div></div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader14 spinner spinner--double-bounce">
        <div class="double-bounce1" style="background-color: rgb(65, 184, 131); animation-duration: 2s;"></div>
        <div class="double-bounce2" style="background-color: rgb(65, 184, 131); animation-duration: 2s;"></div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader15 spinner spinner--stretch">
        <div style="background-color: rgb(65, 184, 131); animation-duration: 1.2s;" class="rect rect-1"></div>
        <div style="background-color: rgb(65, 184, 131); animation-duration: 1.2s;" class="rect rect-2"></div>
        <div style="background-color: rgb(65, 184, 131); animation-duration: 1.2s;" class="rect rect-3"></div>
        <div style="background-color: rgb(65, 184, 131); animation-duration: 1.2s;" class="rect rect-4"></div>
        <div style="background-color: rgb(65, 184, 131); animation-duration: 1.2s;" class="rect rect-5"></div>
    </div>`,
    `<div style="width: 60px; height: 60px; background-color: rgb(65, 184, 131); animation-duration: 1s;" class="arindam-loader16 spinner spinner--scale-out"></div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader17 spinner spinner--jumper">
        <div style="" ></div>
        <div style="" ></div>
        <div style="" ></div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader18 spinner spinner--wave">
        <div></div>
        <div></div>
        <div></div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader19 spinner spinner--circle-8">
        <div style="transform: scale(1.36364);" class="spinner-inner">
            <div class="ball-container">
                <div class="contener_mixte"><div class="ballcolor ball_1">&nbsp;</div></div>
                <div class="contener_mixte"><div class="ballcolor ball_2">&nbsp;</div></div>
                <div class="contener_mixte"><div class="ballcolor ball_3">&nbsp;</div></div>
                <div class="contener_mixte"><div class="ballcolor ball_4">&nbsp;</div></div>
            </div>
        </div>
    </div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader20 spinner spinner--circle-9">
        <div style="transform: scale(0.5);" class="spinner-inner">
            <div class='loading spin-1'>
                <div class='loading spin-2'>
                    <div class='loading spin-3'>
                        <div class='loading spin-4'>
                            <div class='loading spin-5'>
                                <div class='loading spin-6'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="arindam-loader21 spinner spinner--google" style="width: 60px; height: 60px;"></div>`,
    `<div style="width: 60px; height: 60px;" class="arindam-loader22 spinner">
        <div style="border-color: rgb(65, 184, 131);" class="blob top"></div>
        <div style="border-color: rgb(65, 184, 131);" class="blob bottom"></div>
        <div style="border-color: rgb(65, 184, 131);" class="blob left"></div>
        <div style="border-color: rgb(65, 184, 131); background: rgb(65, 184, 131);" class="blob move-blob"></div>
    </div>`,
    `<div class="arindam-loader23 spinner spinner--gauge" style="width: 60px; height: 30px;"><div class="spinner-inner" style="transform: scale(1);"></div></div>`,
    `<div  class="arindam-loader24 spinner spinner-origami"  style="width: 60px; height: 60px;"><div  class="spinner-inner loading" style="transform: scale(1);"><span  class="slice"></span> <span  class="slice"></span> <span  class="slice"></span> <span  class="slice"></span> <span  class="slice"></span> <span  class="slice"></span></div></div>`,
    `<div  class="arindam-loader25 spinner spinner--hexagon" style="width: 60px; height: 60px;"><div  class="spinner-inner" style="transform: scale(0.365854);"><ul  class="hexagon-container"><li  class="hexagon hex_1"></li> <li  class="hexagon hex_2"></li> <li  class="hexagon hex_3"></li> <li  class="hexagon hex_4"></li> <li  class="hexagon hex_5"></li> <li  class="hexagon hex_6"></li> <li  class="hexagon hex_7"></li></ul></div></div>`,
    `<div  class="arindam-loader26 spinner spinner--hour-glass" style="width: 60px; height: 60px;"><div  class="spinner-inner" style="transform: scale(0.9375);"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none" class="hourglass"><path  d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z" class="middle"></path> <path  d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z" class="outer"></path></svg></div></div>`,
    `<div  class="arindam-loader27 spinner spinner--plane" style="width: 60px; height: 60px;"><div  class="spinner-inner" style="width: 60px; height: 60px; transform: scale(0.857143);"><div  id="top" class="mask"><div  class="plane"></div></div> <div  id="middle" class="mask"><div  class="plane"></div></div> <div  id="bottom" class="mask"><div  class="plane"></div></div></div></div>`,
    `<div  class="arindam-loader28 spinner spinner--mikepad" style="width: 60px; height: 60px;"><div  class="spinner-inner" style="transform: scale(1.93548);"><div  class="binding"></div> <div  class="pad"><div  class="line line1"></div> <div  class="line line2"></div> <div  class="line line3"></div></div></div></div>`,
    `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677.34762 182.15429" class="arindam-loader29 spinner spinner--pencil" style="max-width: 60px; max-height: 60px; fill: rgb(65, 184, 131);"><g ><path  d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z" class="body-pencil"></path> <path  d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z" class="line"></path></g></svg>`,
    `<div  class="arindam-loader30 spinner spinner--jawn"><div  class="spinner-inner" style="width: 60px; height: 60px;"><div  class="jawn" style="transform: scale(0.857143);"></div></div></div>`
  ];

  $.fn.arindamLoader = (action = 'show', loaderNo = 0, options = {}) => {
    var settings = $.extend(
      {
        basecolor: '#41b883',
        background: '#fff',
        opacity: '0.8',
        zindex: '9999',
      },
      options
    );

    $loaderContainer = $('<div/>');
    $loaderContainer.prop('id', 'arindamLoaderContainer');
    $loaderContainer.prop('class', 'arindam-loader-container');
    $loaderContainer.css({
      'background-color': settings.background,
      opacity: settings.opacity,
      'z-index': settings.zindex,
    });

    $loaderInner = $('<div/>');
    $loaderInner.prop('id', 'arindamLoaderInner');
    $loaderInner.prop('class', 'arindam-loader-inner');

    if (action == 'hide') {
      $.fn.arindamLoader.hideLoader('arindamLoaderContainer');
    } else {
      $loaderInner.html($.fn.arindamLoader.getLoader(loaderNo));
      $loaderInner.appendTo($loaderContainer);
      $loaderContainer.appendTo('body');
    }
  };

  $.fn.arindamLoader.getLoader = (loaderNo) => {
    let _loaderLength = _loadersList.length;
    let _defaultLoaderIcon = _loadersList[0];
    if (loaderNo <= _loaderLength && _loadersList[loaderNo] != undefined) {
      return _loadersList[loaderNo];
    } else {
      return _defaultLoaderIcon;
    }
  };

  $.fn.arindamLoader.hideLoader = (containerId) => {
    $('#' + containerId).remove();
  };
})(jQuery);
