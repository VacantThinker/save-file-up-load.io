import {
  menuIdabcFn,
  watchTabonBeforeNavigateFn,
} from './_common.js';

browser.runtime.onMessage.addListener(async (message) => {
//  console.log(`meslog browser.runtime.onMessage message=\n`, message);
  let action = message.action;
  switch (action) {
    // *********** upload_form.js
    case 'watchTabonBeforeNavigate':
      await watchTabonBeforeNavigateFn(message);
      break;

  }
});

let menuIdabc = browser.contextMenus.create({
  id: 'menuIdabc', title: 'save file to up-load.io',
  contexts: [
    'link', 'image'
  ],
}, null);

browser.contextMenus.onClicked.addListener(
  async (info, tab) => {
    console.log(`meslog info=\n`, info);
    
    switch (info.menuItemId) {
      case menuIdabc:
        let downlink = info.linkUrl || info.srcUrl
        await menuIdabcFn({downlink});
        break;
    }

  });