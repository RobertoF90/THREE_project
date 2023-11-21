const uiBR = document.getElementById("ui-br") as HTMLElement;
const uiTR = document.getElementById("ui-tr") as HTMLElement;
const ctxBR = uiBR.getContext("2d");
const ctxTR = uiTR.getContext('2d')
ctxBR.canvas.width = window.innerWidth / 2;
ctxBR.canvas.height = window.innerHeight / 6;
ctxTR.canvas.width = window.innerWidth / 4;

function draw() {
    if (uiBR.getContext) { 
        const width = uiBR.clientWidth;
        const height = uiBR.clientHeight;
        const padding = 12;

      ctxBR.fillStyle = "#FFA500";
      ctxBR.fillRect(0 , 0,  width  , height  );
      
      ctxBR.fillStyle = "#000000";
      ctxBR.font = "24px serif";
      ctxBR.fillText("ATB", padding * 2, height / 2.5);
      ctxBR.font = "24px serif";
      ctxBR.fillText("LIMIT", padding * 2, height / 1.2 );

      console.log((width / 4 ) )
     console.log(padding * 19)

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect(width / 4 , height / 4 , width / 4 - padding , padding  );

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect((width / 4) * 2 , height / 4 , width / 4 - padding , padding  );

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect((width / 4) * 3 , height / 4 , width / 4 - padding , padding  );

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect(width / 4 ,  height / 1.5 , width / 4 - padding ,  padding  );

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect((width / 4) * 2 ,height / 1.5, width / 4 - padding , padding  );

      ctxBR.fillStyle = "#fff";
      ctxBR.fillRect((width / 4) * 3 ,height / 1.5, width / 4 - padding , padding  );
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