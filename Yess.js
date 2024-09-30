const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "You are being so cold",
    "I will buy you a candy??",
    "I am not going to ask again!",
    "Ok now this is the last time!",
    "You are now just being mean!!",
    "Dammnn thats so cold and mean!!",
    "Ughh thats mean you know",
    "No noo you are not supposed to say that",
    "Ok, Lets just start over.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "https://media.tenor.com/EQ1XagNtbr8AAAAM/love-you-forever.gif";
        refreshBanner();

    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    document.querySelector(".heading").style.display = "none";
    let banner = document.getElementById('banner');
    banner.src = "https://media.tenor.com/cd9zqSTIIdUAAAAM/you-brown-bear-me-white-bear-i-loveeee-you.gif";
    refreshBanner();
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
