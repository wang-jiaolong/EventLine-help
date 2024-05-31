# 更新日志

<script setup>

const logs = [
    {
        version: "1.7.0",
        active: 1,
        date:"",
        msg: "通过了毕业答辩，并抽空更新了点功能。准备去毕业旅行啦！",
        items: [
            "新增移动事件",
            "App内实现云/本地容器切换",
            "自动备份功能正式上线",
            "..."
        ]
    },
    {
        version: "1.6.0",
        date:"2024-04-03",
        items: [
            "新增了个人头像以及昵称"
        ]
    },
    {
        version: "1.5.0",
        date:"2024-03-05",
        items: [
            "增加实验功能：自动备份"
        ]
    },
    {
        version: "1.4.2",
        date:"2024-02-27",
        items: [
            "修复编辑焦点问题",
            "修复分组按钮点击失效问题",
            "优化若干细节"
        ]
    },
]

</script>


<div v-for="log in logs" class="content-card">
<div v-if="log.active">

## v{{log.version}} <Badge type="tip" text="🧑🏻‍💻开发中" />
</div>
<div v-else>

## v{{log.version}} <Badge type="info" :text="log.date" />
</div>

<div v-if="log.msg">

> {{ log.msg }}
</div>

<div v-for="item in log.items" class="content-card">

<li>{{item}}</li>
</div>

</div>

