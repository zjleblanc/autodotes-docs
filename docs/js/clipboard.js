function getIconElement(id) {
  const src = `https://cdn.jsdelivr.net/gh/jdecked/twemoji@14.1.2/assets/svg/${id}.svg`;
  return `<img alt="clipboard" class="twemoji" src="${src}" title="emojipedia">`
}

const clipboardIconId = "1f4cb";
const checkIconId = "2714";

$(document).ready(function() {
  // use a class selector if available
  let blocks = document.querySelectorAll("pre");
  
  blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
  
      button.innerHTML = getIconElement(clipboardIconId);
      block.appendChild(button);
  
      button.addEventListener("click", async (event) => {
        await copyCode(event.currentTarget, block);
      });
    }
  });
  
  async function copyCode(button, block) {
    let code = block.querySelector("code");
    let text = code.innerText;
  
    await navigator.clipboard.writeText(text);

    button.innerHTML = getIconElement(checkIconId);
    setTimeout(function() {
      button.innerHTML = getIconElement(clipboardIconId);
    }, 1000)
  }
});