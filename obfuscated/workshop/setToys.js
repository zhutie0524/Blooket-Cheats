/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var o,e=document.createElement("iframe");document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",(await Object.values(webpackJsonp.push([[],{"":(o,e,t)=>{e.cache=t.c}},[[""]]]).cache).find(o=>o.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(o=>parseInt("0"+o.data.questions.find(o=>"../cheats/workshop/setToys.js"==o.question)?.answers?.[0]))<1678659483056||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats"))&&(console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetToys.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),e=document.createElement("iframe"),document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),e=parseInt(prompt("How many toys would you like?")),o=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],o.setState({toys:e}),o.props.liveGameController.setVal({path:"c/".concat(o.props.client.name),val:{b:o.props.client.blook,t:e}}))})();