const addListBtn = document.querySelector(".container .add-todo");
const input = document.querySelector(".container .input-todo");
const listItem = document.querySelector(".listContainer");
const allReadyListItem = document.querySelector(".listContainer2");
const ul = document.querySelector(".listContainer ul"); //ul元素
const ul2 = document.querySelector(".listContainer2 ul"); //ul元素

addListBtn.onclick = function () {
    //添加事件处理函数
    listItem.style.display = "block";
    let value = input.value; //获取输入框的值
    let li = document.createElement("li"); //创建li元素 createElement
    li.innerText = value; //设置li元素的文本内容为输入框中的值 innerText
    ul.appendChild(li); //将li元素添加到ul元素中 appendChild
    input.value = ""; //清空输入框

    //给li元素添加删除按钮
    let btn = document.createElement("button"); //创建按钮元素
    btn.innerText = "删除"; //设置按钮的文本内容
    li.appendChild(btn); //将按钮添加到li元素中 appendChild
    let btn2 = document.createElement("button"); //创建按钮元素
    btn2.innerText = "已完成"; //设置按钮的文本内容
    li.appendChild(btn2); //将按钮添加到li元素中 appendChild
    btn.onclick = function () { //给按钮添加点击事件处理函数
        //删除li元素 remove() 方法可以删除元素，removeChild() 方法可以删除子元素
        li.remove(); //删除li元素
        if (ul.children.length === 0) { //如果ul元素没有子元素，则隐藏listItem
            listItem.style.display = "none";
        }
    }
    btn2.onclick = function () { //给按钮添加点击事件处理函数
        //删除li元素 remove() 方法可以删除元素，removeChild() 方法可以删除子元素
        li.remove(); //删除li元素
        if (ul.children.length === 0) { //如果ul元素没有子元素，则隐藏listItem
            listItem.style.display = "none";
        }
        allReadyListItem.style.display = "block"; //显示已完成列表
        let li2 = document.createElement("li"); //创建li元素 createElement
        li2.innerText = value; //设置li元素的文本内容为输入框中的值 innerText
        ul2.appendChild(li2); //将li元素添加到ul元素中 appendChild
        let btn3 = document.createElement("button"); //创建按钮元素
        btn3.innerText = "彻底删除"; //设置按钮的文本内容
        li2.appendChild(btn3); //将按钮添加到li元素中 appendChild

        btn3.onclick = function () { //给按钮添加点击事件处理函数
            //删除li元素 remove() 方法可以删除元素，removeChild() 方法可以删除子元素
            li2.remove(); //删除li元素
            if (ul2.children.length === 0) { //如果ul元素没有子元素，则隐藏listItem
                allReadyListItem.style.display = "none"; //隐藏已完成列表
            }
        }
    }
}