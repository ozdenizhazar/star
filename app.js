window.onload = () => {
    const SW = 600;
    const SH = 400;

    const screen = document.createElement("div");
    const stl = {
        backgroundColor: "black",
        background: "url('./space.jpg')",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        width: SW + "px",
        height: SH + "px",
        margin: "10px auto",
        border: "solid 4px #fff",
    }
    Object.assign(screen.style, stl);
    document.body.append(screen);
    document.body.style.backgroundColor = "#777";

    const stars = [];
    const count = 100;

    for (let n = 0; n < count; n++) {
        const star = document.createElement("div");
        star.x = Math.round(Math.random() * (SW + 10))
        star.y = Math.round(Math.random() * SH);
        star.s = 1 + Math.random() * 4;

        const stsy = {
            backgroundColor: "#fff",
            position: "absolute",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            left: star.x + "px",
            top: star.y + "px"
        }
        Object.assign(star.style, stsy);
        screen.append(star);
        stars.push(star);

    }
    new Audio("./imt.mp3").play();

    setInterval(() => {
        for (star of stars) {
            if (star.x < SW) star.x += star.s * 3;
            else star.x = 0;

            //if (star.y < SH) star.y += (3 - Math.random() * 1);
            //else star.y = 0;
            star.style.top = star.y + "px";
            star.style.left = star.x + "px";
        }
    }, 40);
}