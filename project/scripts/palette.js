document.addEventListener("DOMContentLoaded", () => {
    const paletteContainer = document.getElementById("palette");
    const savedContainer = document.getElementById("saved");
    const addBtn = document.getElementById("addSlot");
    const removeBtn = document.getElementById("removeSlot");

    function getRandomColor() {
        const hex = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + hex.padStart(6, "0");
    }

    function createColorBox(color = getRandomColor()) {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        const label = document.createElement("p");
        label.textContent = color;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.onclick = () => saveColor(color);

        box.appendChild(label);
        box.appendChild(saveBtn);
        paletteContainer.appendChild(box);
    }

    function saveColor(color) {
        const savedBox = document.createElement("div");
        savedBox.className = "color-box";
        savedBox.style.backgroundColor = color;

        const label = document.createElement("p");
        label.textContent = color;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => savedContainer.removeChild(savedBox);

        savedBox.appendChild(label);
        savedBox.appendChild(removeBtn);
        savedContainer.appendChild(savedBox);
    }

    const generateBtn = document.getElementById("generateColors");

    generateBtn.onclick = () => {
        const boxes = document.querySelectorAll("#palette .color-box");
        boxes.forEach(box => {
            const newColor = getRandomColor();
            box.style.backgroundColor = newColor;
            box.querySelector("p").textContent = newColor;

            // Update the save button to save the new color
            const saveBtn = box.querySelector("button");
            saveBtn.onclick = () => saveColor(newColor);
        });
    };


    addBtn.onclick = () => createColorBox();
    removeBtn.onclick = () => {
        if (paletteContainer.lastChild) {
            paletteContainer.removeChild(paletteContainer.lastChild);
        }
    };

    // Initialize with 3 colors
    for (let i = 0; i < 3; i++) {
        createColorBox();
    }
});