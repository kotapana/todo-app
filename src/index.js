import "./styles.css";

// クリックイベント作成
const onClickAdd = () => {
  //テキスト取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li取得
  const li = document.createElement("li");

  // div取得,クラス名付与
  const div = document.createElement("div");
  div.className = "list-row";

  // p取得,テキスト挿入
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    document.getElementById("incomplete-list").removeChild(completeTarget);
    alert("完了");
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // DOM生成して挿入
  li.appendChild(div).appendChild(p);
  li.appendChild(div).appendChild(completeButton);
  li.appendChild(div).appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};

// クリックイベント走らせる
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
