let match = /(porn)|(sex)|(abuse)|(child)|(xxx)|(rap((e)|(ing)))|(young)|(loli)|(shota)|(hurtcore)|(cp)|(little (girl(s?))|(boy(s?)))|(gore)|(vore)|(tied)|(kids)|(teen)|(scat)|(underage)|(hardcore)|(bab((y)|(ies)))|(pecker)|(penis)|(pussy)|(cum)|(vagina)|(anal)|(dick)|(cock)|(video)|(photo)|(deepweb)|(darknet)|(onion)|(pedo)|(be(a?)stiality)|(.+((ph)|(f))il((e)|(ia)))|(nsfw)|(starianna)|(hitman)|(hire)|(cunt)|(slut)|(asshole)|(fuck)|(year(s?) old)|(bitch)|(choke)|(die)|(kill)|(scream)|(on top)|(on bottom)|(poop)|(blood)|(incest)|(daughter)|(son)|(slave)|(forbidden)|(secret)|(cruel)|(paincore)|(http(s)?:\/\/)|(boner)|(breath)|(action)|(conscious)|(for the win)|(materials)|(dumb)|(kys)|(ratio)|(retar((d)|(ted)))|(nigg((er)|(a)))|(abuse)|(electric)|(pov)|(hack)|(touch grass)|(kid)|(exterminat((e)|(ion)|(ed)))|(hidden)|(access denied)|(dark web)|(hell)|(vendors)|(virgin)|(video)|(affair)|(collection)|(pic)|(sperm)|(penetrat)|(slut)|(anus)/gi;
let clearChatFunction = () => {
    let page = document.getElementById("page_chatfield").children;
    let global = document.getElementById("global_chatfield").children;
    for (let i = 0; i < page.length; i++) {
        let content = page[i].innerText;
        if (content.match(match) !== null) {
            page[i].remove();
        }
    }
    for (let i = 0; i < global.length; i++) {
        let content = global[i].innerText;
        if (content.match(match) !== null) {
            global[i].remove();
        }
    }
};
let websocket = new WebSocket(w.socket.socket.url);
websocket.onmessage = function(evt) {
    let data = JSON.parse(evt.data);
    if (data.kind == 'chat') {
        if (data.nickname.match(match) !== null || data.message.match(match) !== null) {
            w.chat.send('/block '+data.id, {"location": "page"});
        }
    }
    clearChatFunction();
}
setInterval(clearChatFunction, 500);
