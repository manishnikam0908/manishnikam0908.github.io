

            let btn1 =  document.getElementById("mybutton");
            let btn2 =  document.getElementById("mybutton2");
            let copydiv = document.querySelector(".copyCode")
            let rgb1 = "#667eea";
            let rgb2 = "#764ba2";

           

 const hexValue = () => {
    let myHexavalue = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += myHexavalue[Math.floor(Math.random() * 16)];
    }

    return color;  
};





const handelbutton1 = () => {
    rgb1 = hexValue();   // update only left color
    btn1.innerText = rgb1;

    document.body.style.backgroundImage =
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;

    copydiv.innerHTML =
        `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

const handelbutton2 = () => {
    rgb2 = hexValue();   // update only right color
    btn2.innerText = rgb2;

    document.body.style.backgroundImage =
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;

    copydiv.innerHTML =
        `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};






            btn1.addEventListener("click", handelbutton1)
            btn2.addEventListener("click", handelbutton2)

            copydiv.addEventListener("click", () =>
        {
            navigator.clipboard.writeText(copydiv.innerText);
            alert("Gradient code copied successfully! ✅");
        });
  