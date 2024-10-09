AOS.init({
    duration: 800,
    once: false // Allow animations every scroll
});

const video = document.getElementById('logoVideo');

if (video) {
    video.currentTime = 5;
    video.playbackRate = 3;

    video.addEventListener('ended', () => {
        video.currentTime = 5; // Reset to 2 seconds
        video.play(); // Restart playback
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
} else {
    console.error('Video element not found');
}