// add sr-texts for external links
document.querySelectorAll('a').forEach(function (element) {
    var ownPathStart = location.protocol + '//' + location.hostname;
    if (element.href.indexOf('http') === 0 && element.href.indexOf(ownPathStart) === -1) {
        if (element.target === '_blank') {
            element.innerHTML += '<span class="sr-only">externer Link in neuem Tab</span>';
        } else {
            element.innerHTML += '<span class="sr-only">externer Link</span>';
        }
    }
});

<!-- Matomo -->


<!-- Matomo -->
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["setDoNotTrack", true]);
    _paq.push(["disableCookies"]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
    var u="//analytics.wbt.wien/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
<!-- End Matomo Code -->