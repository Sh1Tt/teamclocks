const getTeam = () => JSON.parse(localStorage.getItem("team")) || [
    {
        name: "Isaiah", 
        timezone: "America/Los_Angeles"
    },
    {
        name: "Mo", 
        timezone: "Europe/Amsterdam"
    }
];
const storeTeam = () => {
    localStorage.setItem("team", JSON.stringify(team));
};
const displayClocks = () => {
    const clockContainer = document.getElementById("clock-container");
    let clocks = "";
    team.forEach(member => {
        const time = moment().tz(member.timezone).format("hh:mm A");
        clocks += `<div class='clock'>${member.name}<br>${time}</div>`;
    });
    clockContainer.innerHTML = clocks;
};
const team = getTeam();
storeTeam();
setInterval(displayClocks, 1000);
displayClocks();