const containerEl=document.querySelector('.container');

const kits=["crash","kick","snare","tom"];

kits.forEach((kit)=>{
    const btnEl=document.createElement('button');
    btnEl.style.backgroundImage="url(images/"+kit+".jpg)";

    for(let i=0;i<kits.length;i++)
    {
        btnEl.innerText=kit
    }

    containerEl.appendChild(btnEl);

    const audioEl=document.createElement('audio');
    audioEl.src="audio/"+kit+".mp3";

    containerEl.appendChild(audioEl);

    btnEl.addEventListener('click',()=>{
        audioEl.play()
    })

    window.addEventListener('keypress',(e)=>{
        if(e.key===kit.slice(0,1))
        {
            audioEl.play();
            btnEl.style.transform="scale(0.9)";
            setTimeout(()=>{
                btnEl.style.transform="scale(1.0)";
            },100);
        }
    })

})