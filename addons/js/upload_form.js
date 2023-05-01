async function watchTabonBeforeNavigate(message) {
  await browser.runtime.sendMessage({
    ...message, action: 'watchTabonBeforeNavigate'
  })
}

browser.runtime.onMessage.addListener(
  /**
   *
   * @param message{{downlink, tabId}}
   */
  async (message) => {
    let {downlink, tabId} = message;
    await watchTabonBeforeNavigate({
      tabId,
      title: 'saved ok',
    })

    // todo "remote url upload" click()
    document.querySelector('#select_url')
      .click();

    // todo fill the textarea with downlink
    document.querySelector('textarea[name=url_mass]')
      .value = `${downlink}`;

    setTimeout(() => {
      // todo
      document.querySelector('button[class*=btn-upload][type=button]')
        .click();
    }, 1200);
  });