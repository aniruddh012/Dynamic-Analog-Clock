let hour=document.querySelector('.hour');
    let minute=document.querySelector('.minute');
    let second=document.querySelector('.second');
    let clock = document.querySelector('.clock');
    const time = setInterval(() => {
        let d = new Date().toLocaleTimeString();
        clock.innerHTML = d;
        let h= new Date().getHours();
        let m= new Date().getMinutes();
        let s= new Date().getSeconds();
        hour.style.transform=`rotate(${h*30+m/2}deg)`;
        minute.style.transform=`rotate(${m*6}deg)`;
        second.style.transform=`rotate(${s*6}deg)`;
    }, 1000);
    let date = document.querySelector('.date');
    const dat = setInterval(() => {
        let D = new Date().toLocaleDateString();
        date.innerHTML = D;
    }, 1000);