async function watchTabonBeforeNavigate(e){await browser.runtime.sendMessage({...e,action:"watchTabonBeforeNavigate"})}browser.runtime.onMessage.addListener((async e=>{let{downlink:t,tabId:a}=e;await watchTabonBeforeNavigate({tabId:a,title:"saved ok"}),document.querySelector("#select_url").click(),document.querySelector("textarea[name=url_mass]").value=`${t}`,setTimeout((()=>{document.querySelector("button[class*=btn-upload][type=button]").click()}),1200)}));