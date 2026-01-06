window.onload = function () {

    const container = document.createElement("div");
    container.className = "container";

    const heading = document.createElement("h1");
    heading.innerText = "QR Code Generator";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "qrText";
    input.placeholder = "Enter text or URL";

    const button = document.createElement("button");
    button.innerText = "Generate QR Code";
    button.addEventListener("click", generateQR);

    const imgBox = document.createElement("div");
    imgBox.id = "imgBox";

    const img = document.createElement("img");
    img.id = "qrImage";

    imgBox.appendChild(img);

    container.appendChild(heading);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(imgBox);

    document.body.appendChild(container);
};
