jQuery.noConflict();
jQuery(document).on('click', 'input[type="file"]', function () {
    alert('To upload media, drag and drop the file into the WhatsApp Web window.');
});

this.Notification = function (title, options) {
    webkit.messageHandlers.notification.postMessage([title, options.body, options.tag]);
};
this.Notification.permission = 'granted';
this.Notification.requestPermission = function(callback) {callback('granted');};


var styleAdditions = document.createElement('style');
styleAdditions.textContent = 'div.pane-list-user { opacity:0; } \
div.pane-list-user > div.avatar { width: 0px; height: 0px; } \
div.app-wrapper::before { opacity: 0; } \
div.drawer-title { left:60px; bottom:17px; } \
div.chat.media-chat > div.chat-avatar { opacity: 0;} \
div.app.three, div.app.two { top: 0px; width: 100%; height: 100%; } \
@media screen and (max-width:1024px) { \
    .pane-list, .drawer-container-left { width: 38%; } \
    .drawer-container-mid, .drawer-container-right, .pane-chat, .pane-intro, .pane-info, .drawer-container-panel { width: 62%; } \
} \
@media screen and (min-width:1024px) and (max-width:1199px) { \
    .pane-list, .drawer-container-left, .pane-info, .drawer-container-panel { width: 30%; } \
    .drawer-container-mid, .drawer-container-right, .pane-chat, .pane-intro { width: 70%; } \
    .three .drawer-container-mid, .three .drawer-container-right, .three .pane-chat, .three .pane-intro { width: 40%; } \
} \
@media screen and (min-width:1200px) { \
    .pane-list, .drawer-container-left, .pane-info, .drawer-container-panel { width: 359px; } \
    .drawer-container-mid, .drawer-container-right, .pane-chat, .pane-intro { width: calc(100% - 359px); } \
    .three .drawer-container-mid, .three .drawer-container-right, .three .pane-chat, .three .pane-intro { width: calc(100% - 718px); } \
}\
@media screen and (min-width:1320px) {\
    .pane-list, .drawer-container-left, .pane-info, .drawer-container-panel { width: 388px; } \
    .drawer-container-mid, .drawer-container-right, .pane-chat, .pane-intro { width: calc(100% - 388px); } \
    .three .drawer-container-mid, .three .drawer-container-right, .three .pane-chat, .three .pane-intro { width: calc(100% - 718px); } \
}\
.image-thumb-lores { -webkit-transform: translate3d(0,0,0); } \
.avatar-image { -webkit-transform: translate3d(0,0,0); } \
';
document.documentElement.appendChild(styleAdditions);

function activateSearchField () {
    document.querySelector('input.input-search').focus();
}

function dispatch(target, eventType, char) {
    var evt = document.createEvent("TextEvent");
    evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
    target.focus();
    target.dispatchEvent(evt);
}


function triggerClick() {
    var event = new MouseEvent('click', {
                               'view': window,
                               'bubbles': true,
                               'cancelable': true
                               });
    document.querySelector(".icon.btn-icon.icon-send").dispatchEvent(event)
}


function newConversation () {
document.querySelector('button.icon-chat').click();
document.querySelector('input.input-search').focus();

var header = document.querySelector('div.drawer-title');
header.style.left = '0px';
header.style.bottom = '12px';
}
