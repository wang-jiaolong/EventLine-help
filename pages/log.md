# 更新日志

<script setup>

const logs = [
    {
        version: "1.9.0",
        date:"2024-08-11",
        items: [
            "时间线标题支持输入emoji", "修复若干问题"
        ],
        subVersions: [
            {
                version: "1.9.1",
                date:"2024-08-12",
                items: [
                    "bug修复"
                ]
            }
        ]
    },
    {
        version: "1.8.0",
        date:"2024-07-8",
        items: [
            "全局搜索"
        ]
    },
    {
        version: "1.7.0",
        date:"2024-06-10",
        msg: "通过了毕业答辩，并抽空更新了点功能。准备去毕业旅行啦！",
        items: [
            "新增移动事件",
            "App内实现云/本地容器切换",
            "自动备份功能正式上线",
        ],
        subVersions: [
            {
                version: "1.7.1",
                date:"2024-06-11",
                items: [
                    "bug修复"
                ]
            },
            {
                version: "1.7.2",
                date:"2024-06-12",
                items: [
                    "修复iOS18跳转失效"
                ]
            },
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


## v1.16.0 <Badge type="tip" text="🧑🏻‍💻开发中" />

- 新增点击项目名进入项目功能
- 修复日历偏好选择失败问题

<div v-for="log in logs">
<div v-if="log.active">

## v{{log.version}} <Badge type="tip" text="🧑🏻‍💻开发中" />
</div>
<div v-else>

## v{{log.version}} <Badge type="info" :text="log.date" />
</div>

<div v-if="log.msg">

> {{ log.msg }}
</div>

<div v-for="item in log.items">

<li>{{item}}</li>
</div>

<div v-for="item in log.subVersions">

::: details v{{ item.version }} <Badge type="info" :text="item.date" />
<div v-for="item in item.items">

<li>{{item}}</li>
</div>
:::
</div>



</div>


...