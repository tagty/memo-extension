document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("memo");

  // 初期読み込み
  textarea.value = localStorage.getItem("memo") || "";

  // 入力ごとに自動保存
  textarea.addEventListener("input", () => {
    localStorage.setItem("memo", textarea.value);
  });
});
