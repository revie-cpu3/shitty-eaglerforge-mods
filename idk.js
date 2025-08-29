ModAPI.require('player');
async function onload() {
    await new Promise(resolve => {
        let x = setInterval(() => {
            if (ModAPI.player ? (ModAPI.player.isPlayer() ? true : false) : false) {
                clearInterval(x);
                resolve()
            }
        }, 50)
    })
    ModAPI.displayToChat({
        msg: ModAPI.getFPS()
    });
}
onload();
