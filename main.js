import Vue from 'vue';
import App from './App';
import GoEasy from '@/uni_modules/GOEASY-IM/js_sdk/goeasy-2.6.1.esm.min.js'

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
    ...App
});
app.$mount();
const goEasy = GoEasy.getInstance({
    host: 'hangzhou.goeasy.io',	//应用所在的区域地址: [hangzhou.goeasy.io, 新加坡暂不支持IM，敬请期待]
    appkey: 'BC-9caf6716d89444568346eefac6cc0eae',	// common key,
    modules: ['im'],
    // true表示支持通知栏提醒，false则表示不需要通知栏提醒
    allowNotification: true //仅有效于app,小程序和H5将会被自动忽略
});
var onPrivateMessageReceived = function (message) {
    console.log("received private message:" + JSON.stringify(message));
};
//监听和接收单聊消息
goEasy.im.on(GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED, onPrivateMessageReceived);

Vue.prototype.GoEasy = GoEasy;
Vue.prototype.goEasy = goEasy;