var videos = document.getElementsByTagName('video')
var videoTag = videos.item(0)
var element = document.getElementById('video-content')
var script = document.createElement('script')

var vpaidAd = {}

function initAd(url) {
    script.type = "application/javascript"
    script.src = url
    script.onload = function() {
        vpaidAd = getVPAIDAd()
        var version = vpaidAd.handshakeVersion()
        if ( version != 2.0) {
            return onAdNotSupported()
        }
        vpaidAd.subscribe(onAdLoaded, 'AdLoaded', this)
        vpaidAd.subscribe(onAdStopped, 'AdStopped', this)
        vpaidAd.subscribe(onAdSkipped, 'AdSkipped', this)
        vpaidAd.subscribe(onAdVideoStart, 'AdStarted', this)
        vpaidAd.subscribe(onAdError, 'AdError', this)
        videoTag.ondurationchange = onDurationChange
        videoTag.ontimeupdate = onTimeUpdate
        
        vpaidAd.initAd(400, 500, null, null,
                       {
                       AdParameters: '{"videos": [{"mimetype":"video/mp4", "url":"https://cdn.vidible.tv/prod/2017-12/11/5a2eb5b1955a310959beb897_853x480_v2.mp4"}]}'
                       },
                       {
                       slot: document.getElementById('video-content'),
                       videoSlot: document.getElementById('video-player')
                       }); 
        vpaidAd.startAd()
    }
    element.appendChild(script)
}

function onAdLoaded() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdLoaded',
                                                                      "value" : null
                                                                      }))
}
function onAdNotSupported() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdNotSupported',
                                                                      "value" : null
                                                                      }))
}
function onAdStopped() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdStopped',
                                                                      "value" : null
                                                                      }))
}
function onAdVideoStart() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdStarted',
                                                                      "value" : null
                                                                      }))
}
function onAdSkipped() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdSkipped',
                                                                      "value" : null
                                                                      }))
}
function onAdError() {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdError',
                                                                      "value" : "" + video.error.code
                                                                      }))
}

function onDurationChange () {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdDurationChanged',
                                                                      "value" : "" + videoTag.duration
                                                                      }))
}

function onTimeUpdate () {
    window.webkit.messageHandlers.observer.postMessage(JSON.stringify({
                                                                      "name" : 'AdCurrentTimeChanged',
                                                                      "value" : "" + videoTag.currentTime
                                                                      }))
}

function startAd() {
    vpaidAd.startAd()
}

function stopAd() {
    vpaidAd.stopAd()
}

function pauseAd() {
    vpaidAd.pauseAd()
}

function resumeAd() {
    vpaidAd.resumeAd()
}

function finishPlayback() {
    vpaidAd.stopAd()
}

function mute() {
    videoTag.muted = true
}

function unmute() {
    videoTag.muted = false
}



