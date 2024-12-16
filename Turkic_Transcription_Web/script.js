/**
 * 将输入文本转换为突厥字母
 */

// 转换拉丁到突厥字母
function convertToOldTurkic() {
  // 获取用户输入的文本
  const inputText = document.getElementById("inputText").value;

  // 转换后的文本结果
  let convertedText = "";

  // 遍历输入文本
  for (let i = 0; i < inputText.length; ) {
    let found = false;

    // 检查从当前字符开始的多字符匹配（从最长匹配开始）
    for (let len = 4; len > 0; len--) {
      const substr = inputText.slice(i, i + len); // 提取子字符串
      if (latinToTurkicMap[substr]) {
        // 如果找到匹配，将对应的 Old Turkic 字符加入结果
        convertedText += latinToTurkicMap[substr];
        i += len; // 跳过已经匹配的部分
        found = true;
        break;
      }
    }

    // 如果没有匹配，保留原始字符
    if (!found) {
      convertedText += inputText[i];
      i++;
    }
  }

  // 更新输出框
  document.getElementById("outputText").value = convertedText;
}



// 清空输入框和输出框
function clearText() {
    document.getElementById("inputText").value = ""; // 清空输入框内容
    document.getElementById("outputText").value = ""; // 清空输出框内容
}




// 加载规则说明内容
function loadNotes() {
    // 使用 Fetch API 加载外部 JSON 文件
    fetch("notes.json")
        .then(response => response.json()) // 解析 JSON 内容
        .then(data => {
            // 获取 HTML 容器
            const notesSection = document.getElementById("notes-section");

            // 创建标题
            const title = document.createElement("h2");
            title.className = "notes-title text-center notes-text im-fell-english-regular";
            title.innerText = data.title;

            // 创建内容容器
            const content = document.createElement("div");
            content.className = "notes-text im-fell-english-regular";

            // 创建规则
            const rules = document.createElement("p");
            rules.className = "notes-rules";
            rules.innerText = data.rules;

            // 动态插入每条规则为段落
            data.content.forEach(rule => {
                const paragraph = document.createElement("p");
                paragraph.innerText = rule;
                content.appendChild(paragraph);
            });


            // 将标题和内容添加到页面
            notesSection.appendChild(title);
            notesSection.appendChild(content);
            notesSection.appendChild(rules);

        })
        .catch(error => console.error("Failed to load rules:", error));
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", loadNotes);





//rules
// 定义拉丁字母到突厥字母的映射表
const latinToTurkicMap = {
    // Vowels
    "a": "\u{10C00}", "a1": "\u{10C01}", "a'": "\u{10C02}",
    "i": "\u{10C03}", "i1": "\u{10C04}",
    "e": "\u{10C05}",
    "w": "\u{10C06}", "w'": "\u{10C07}", "w1'": "\u{10C08}",

    // Consonants
    "B": "\u{10C09}", "B1": "\u{10C0A}",
    "b": "\u{10C0B}", "b1": "\u{10C0C}",
    "G": "\u{10C0D}", "G1": "\u{10C0E}",
    "g": "\u{10C0F}", "g1": "\u{10C10}",
    "D": "\u{10C11}", "D1": "\u{10C12}",
    "d": "\u{10C13}",
    "Y": "\u{10C16}", "Y1": "\u{10C17}",
    "y": "\u{10C18}", "y1": "\u{10C19}",
    "k": "\u{10C1A}", "k1": "\u{10C1B}",
    "L": "\u{10C1E}", "L1": "\u{10C1F}",
    "l": "\u{10C20}",
    "N": "\u{10C23}",
    "n": "\u{10C24}", "n1": "\u{10C25}",
    "K": "\u{10C34}", "K1": "\u{10C35}",
    "R": "\u{10C3A}", "R1": "\u{10C3B}",
    "r": "\u{10C3C}",
    "S": "\u{10C3D}", "s": "\u{10C3E}",
    "T": "\u{10C43}", "T1": "\u{10C44}",
    "t": "\u{10C45}", "t1": "\u{10C46}",
    "z": "\u{10C14}", "z1": "\u{10C15}",
    "m": "\u{10C22}",
    "ng1": "\u{10C2C}", "ng": "\u{10C2D}", "ng2": "\u{10C2E}",
    "p": "\u{10C2F}",
    "ch": "\u{10C32}", "ch1": "\u{10C33}",
    "SH": "\u{10C40}", "sh": "\u{10C41}", "sh1": "\u{10C42}",

    // Additional characters
    "ICH": "\u{10C31}",
    "Wk": "\u{10C1C}", "Wk1": "\u{10C1D}",
    "lt.": "\u{10C21}",
    "nt.": "\u{10C26}", "nt1.": "\u{10C27}",
    "nch.": "\u{10C28}", "nch1.": "\u{10C29}",
    "ny.": "\u{10C2A}", "ny1.": "\u{10C2B}",
    "OP": "\u{10C30}",
    "IK": "\u{10C36}", "IK1": "\u{10C37}",
    "OK": "\u{10C38}", "OK1": "\u{10C39}",
    "ASH": "\u{10C3F}",
    "OT": "\u{10C47}",
    "BASH": "\u{10C48}",

    // Special punctuation
    "/": "\u205A"
};