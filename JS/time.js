const now = new Date();
console.log(now);
console.log(typeof now);
console.log(now.toString());


//year, month, day, time
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());

//תאריך בזמן אמת
console.log(now.toLocaleDateString());
//שעה בזמן אמת
console.log(now.toLocaleTimeString());


console.log(new Date('february 1 2022'));
console.log(new Date('2008-05-13'));


//html להציג שעון רץ בזמן אמת על ה
setInterval(() => {
    const time = document.getElementById("iTime");
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);


//יופיע השעה לא משנה באיזה מסך יופיע שעון של 24 שעות
setInterval(() => {
    const time = document.getElementById("time1");
    time.innerHTML = new Date().toLocaleTimeString({ hour12: false });
}, 1000);

//שעון של מקום אחר בעולם

//console.log(parisTime.toLocaleTimeString());

setInterval(() => {
    const franceTime = new Date();
    franceTime.setHours(franceTime.getHours() - 1);
    const newTime = document.getElementById("fTime");
    newTime.innerHTML = franceTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const usaTime = new Date();
    usaTime.setHours(usaTime.getHours() - 7);
    const newTime = document.getElementById("uTime");
    newTime.innerHTML = usaTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const englendTime = new Date();
    englendTime.setHours(englendTime.getHours() - 2);
    const newTime = document.getElementById("eTime");
    newTime.innerHTML = englendTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const germanyTime = new Date();
    germanyTime.setHours(germanyTime.getHours() - 1);
    const el = document.getElementById("gTime");
    el.innerHTML = germanyTime.toLocaleTimeString();
}, 1000)

setInterval(() => {
    const italyTime = new Date();
    italyTime.setHours(italyTime.getHours() - 1);
    const el = document.getElementById("itTime");
    el.innerHTML = italyTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const chinaTime = new Date();
    chinaTime.setHours(chinaTime.getHours() + 6);
    const el = document.getElementById("cTime");
    el.innerHTML = chinaTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const mexicoTime = new Date();
    mexicoTime.setHours(mexicoTime.getHours() - 7);
    const el = document.getElementById("mTime");
    el.innerHTML = mexicoTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const brazilTime = new Date();
    brazilTime.setHours(brazilTime.getHours() - 5);
    const el = document.getElementById("bTime");
    el.innerHTML = brazilTime.toLocaleTimeString();
}, 1000)



