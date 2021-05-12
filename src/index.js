import "./styles.css";

// クリックイベント作成
const onClickAdd = () => {
  //テキスト取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addTodo(inputText);
};

// todoリストに追加
const addTodo = (text) => {
  // li取得
  const li = document.createElement("li");

  // div取得,クラス名付与
  const div = document.createElement("div");
  div.className = "list-row";

  // p取得,テキスト挿入
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 削除
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFn(completeTarget);

    // 完了に追加
    const completeText =
      completeTarget.firstElementChild.firstElementChild.innerText;

    completeTarget.textContent = null;

    const div = document.createElement("div");
    div.className = "list-row";

    // p取得,テキスト挿入
    const p = document.createElement("p");
    p.innerText = completeText;

    // 戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      console.log(deleteTarget);
      console.log(deleteTarget.firstElementChild);
      console.log(deleteTarget.firstElementChild.firstElementChild);
      addTodo(text);
    });

    // DOM生成して挿入
    completeTarget.appendChild(div).appendChild(p);
    completeTarget.appendChild(div).appendChild(backButton);
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFn(deleteTarget);
  });

  // DOM生成して挿入
  li.appendChild(div).appendChild(p);
  li.appendChild(div).appendChild(completeButton);
  li.appendChild(div).appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};

// 削除関数
const deleteFn = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// クリックイベント走らせる
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
