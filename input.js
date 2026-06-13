function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerText = "Good Afternoon!";
}
function turn_on()
{
    let light = document.getElementById("on");
    light.src = "on light.jpeg";
}
function turn_off()
{
    let light = document.getElementById("on");
    light.src = "off light.jpeg";
}
function change_color()
{
    let colour = document.getElementById("cap");

    colour.style.backgroundColor =
        colour.style.backgroundColor === "black" ? "white" : "black";

    colour.style.color =
        colour.style.color === "white" ? "black" : "white";
}