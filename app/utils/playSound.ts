function playSound(src: string){
    const audio = new Audio(src);
    audio.play();
}

export default playSound