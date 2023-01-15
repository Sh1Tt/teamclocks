const Title = {
    get: () => localStorage.getItem("title") || "GhostBuddy Event Clock",
    gradient: () => localStorage.getItem("gradient") || "linear-gradient(-7deg, rgb(0, 238, 255) 0%, rgb(255, 0, 221) 100%)",
    set: input => {
        localStorage.setItem("title", JSON.stringify(input));
    },
    element: document.getElementById("title")
};
const Team = {
    get: () => JSON.parse(localStorage.getItem("team")) || [
        {
            name: "Example 8:00 PM (EST)", 
            timezone: "EST"
        },
        {
            name: "Maurice", 
            timezone: "Europe/Amsterdam"
        }
    ],
    set: input => {
        localStorage.setItem("team", JSON.stringify(input));
    }
};

const Clocks = {
    display: () => {
        const container = document.getElementById("clock-container");
        let clocks = "";
        team.forEach(member => {
            const time = moment().tz(member.timezone).format("hh:mm A");
            clocks += `<div class='clock glass-panel'>${member.name}<br>${time}</div>`;
        });
        container.innerHTML = clocks;
    }
};

const Background = {
    display: () => {
        const background = localStorage.getItem("background") || "gb-bg-0.png";
        document.body.style.backgroundImage = `url(${background})`;
    }
};

Background.display();
const title = Title.get();
document.title = title;
Title.element.innerText = title;
Title.element.style.background = Title.gradient();
Title.element.style.webkitTextFillColor = "transparent";
Title.element.style.webkitBackgroundClip = "text";
const team = Team.get();
Team.set(team);
setInterval(Clocks.display, 1000);
Clocks.display();