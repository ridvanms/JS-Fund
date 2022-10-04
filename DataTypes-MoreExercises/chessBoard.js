function chessBoard(n) {
  let chessBoard = '<div class="chessboard">';

  let currentColor = "black";
  let preveousColor = "";
  for (let i = 1; i <= n; i++) {
    let spans = "";
    for (let s = 1; s <= n; s++) {
      spans += `\n    <span class="${currentColor}"></span>`;
      preveousColor = currentColor;
      currentColor = preveousColor === "black" ? "white" : "black";
    }
    chessBoard += `\n  <div>   ${spans}\n  </div>`;

    if (n % 2 === 0) {
      preveousColor = currentColor;
      currentColor = preveousColor === "black" ? "white" : "black";
    }
  }
  chessBoard += "\n</div>";

  console.log(chessBoard);
}
chessBoard(4);
