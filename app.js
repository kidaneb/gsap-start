const video = document.querySelector('video');
video.play();
video.playbackRate = 0.8;
gsap.to(['.middle-container', '.last-container'], {
    duration:3,
    top:('50%'),
    stagger: {
        each:0.6,
    },
    ease:"power1inout"

})
gsap.to('.menu-layer', {
    duration:3.5,
    top:('0%'),
    ease:'bounceinout'
})
gsap.to('.name', {
    duration:5,
    top:('50%'),
    stagger:{
        each:1,
        from:('center')
    }
})

gsap.to('.letter', {
    duration:3,
    scale:0.1,
    repeat:-1,
    yoyo:true,
    stagger:{
        each:0.5,
        from:'center',
    }
})