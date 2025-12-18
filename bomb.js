
const paragraphs = [
  document.getElementById("para1"),
  document.getElementById("para2"),
  document.getElementById("para3"),
  document.getElementById("para4")
];


const fontMap = {
  "hairline": { weight: 100, style: "normal" },
  "hairline-italic": { weight: 100, style: "italic" },
  "thin": { weight: 100, style: "normal" },
  "thin-italic": { weight: 100, style: "italic" },
  "extralight": { weight: 200, style: "normal" },
  "extralight-italic": { weight: 200, style: "italic" },
  "light": { weight: 300, style: "normal" },
  "light-italic": { weight: 300, style: "italic" },
  "regular": { weight: 400, style: "normal" },
  "regular-italic": { weight: 400, style: "italic" },
  "medium": { weight: 500, style: "normal" },
  "medium-italic": { weight: 500, style: "italic" },
  "semibold": { weight: 600, style: "normal" },
  "semibold-italic": { weight: 600, style: "italic" },
  "bold": { weight: 700, style: "normal" },
  "bold-italic": { weight: 700, style: "italic" },
  "extrabold": { weight: 800, style: "normal" },
  "extrabold-italic": { weight: 800, style: "italic" },
  "black": { weight: 900, style: "normal" },
  "black-italic": { weight: 900, style: "italic" }
};

const listItems = document.querySelectorAll(".listitem");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    const font = fontMap[item.id];
    if (!font) return;

    paragraphs.forEach(p => {
      p.style.fontWeight = font.weight;
      p.style.fontStyle = font.style;
    });

    listItems.forEach(li => li.classList.remove('pressed'));
    item.classList.add('pressed');
  });
});




