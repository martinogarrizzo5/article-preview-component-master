let isButtonToggled = false;
const button = $("#share-button");
const shareContainer = $("#share-container");

const author = $("#author");

button.on("click", () => {
    isButtonToggled = !isButtonToggled;
    if (isButtonToggled) shareContainer.css("display", "flex");
    else shareContainer.css("display", "none");
});
