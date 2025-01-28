function createQR(site) {
    const qrContainer = document.getElementById('qrcode');

    if (!qrContainer) {
        console.error("Элемент #qrcode не найден!");
        return;
    }

    new QRCode(qrContainer, {
        text: site,
        width: 200,                   
        height: 200,                  
        colorDark: "#000000",         
        colorLight: "#ffffff",         
        correctLevel: QRCode.CorrectLevel.H
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id, allFrames: true },
            world: "MAIN",
            files: ["popup.js"],
        });
    } catch (error) {
        alert("Error:", error);
    }

    createQR("https://example.com");
});
  