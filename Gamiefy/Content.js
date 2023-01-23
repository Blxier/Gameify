let gameImgs = [
    "https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg",
    "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VAL_2560x1440-a875b64f871200771ee9397df1d7050b",
    "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg",
    "https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg",
    "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
    "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/AGB_WZ_0309_TOUT.jpg",
    "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/19/gaming-total-war-rome-2-packart.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1240360/capsule_616x353.jpg?t=1581550498",
    "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2011/11/10/1320919365445/Elder-Scrolls-V-Skyrim-007.jpg?width=465&quality=85&dpr=1&s=none",
    "https://imgcdn.gamefound.com/og-image-fb/projects/887/896ee7d3-c196-4ac8-bc26-8accbad07384.jpg"

]


const imgs = document.getElementsByTagName("img")
let i = 0;
let x = imgs.length


for (image of imgs) {
    
    image.src = gameImgs[i];
    i++;
    if (i == gameImgs.length){
        i = 0;
    }
}