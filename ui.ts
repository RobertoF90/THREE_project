const uiBR = document.getElementById("ui") as HTMLElement;
const uiTR = document.getElementById("ui-tr") as HTMLElement;
const ctxBR = uiBR.getContext("2d");
const ctxTR = uiTR.getContext('2d')
ctxBR.canvas.width = window.innerWidth;
ctxTR.canvas.width = window.innerWidth / 4;

function draw() {
    if (uiBR.getContext) { 
        const width = uiBR.clientWidth;
        const height = uiBR.clientHeight;
        const padding = 15;
      ctxBR.fillStyle = "#FFA500";

      ctxBR.fillRect(width / 2, padding  , width - width / 2 - padding, height - padding * 2 );
    }
    if (uiTR.getContext) { 
      const width = uiTR.clientWidth;
      const height = uiTR.clientHeight;
      const padding = 15;
    ctxTR.fillStyle = "#FFA500";

    ctxTR.fillRect(padding , padding  , width - padding * 2, height - padding * 2 );
  }

  }
  draw()