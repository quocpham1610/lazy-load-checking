document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Simulated gallery items
    const items = [
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",
        "https://i2.wp.com/pbs.twimg.com/media/DbL13LWVMAUGmE9.jpg",

    ];

    function lazyLoad() {
        items.forEach((item) => {
            const img = new Image();
            img.src = item;
            img.onload = function () {
                console.log("Image loaded:", item);
                const galleryItem = document.createElement("div");
                galleryItem.classList.add("gallery-item");
                const imgElement = document.createElement("img");
                imgElement.src = item;
                galleryItem.appendChild(imgElement);
                gallery.appendChild(galleryItem);
            };
        });
    }


    // Call lazy load function
    lazyLoad();

    // Custom scroll
    let isScrolling;

    gallery.addEventListener("scroll", function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            // Your custom scroll code here
        }, 250);
    }, false);
});
