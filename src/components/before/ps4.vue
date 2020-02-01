<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>我的空间</BreadcrumbItem>
      <BreadcrumbItem>PS4聊天室</BreadcrumbItem>
    </Breadcrumb>
    <Content
      :style="{padding: '24px', minHeight: '800px', background: '#fff'}"
      class="contain"
    >
      <div  class="input">
        <Input
          search
          enter-button="搜索"
          placeholder="..."
        />
        </div>
      <List item-layout="vertical">
        <ListItem
          v-for="item in data"
          :key="item.title"
        >
          <ListItemMeta
            :title="item.title"
            :description="item.description"
          />
          {{ item.content }}
          <template slot="action">
            <li>
              <Icon type="ios-star-outline" /> 123
            </li>
            <li>
              <Icon type="ios-thumbs-up-outline" /> 234
            </li>
            <li>
              <Icon type="ios-chatbubbles-outline" /> 345
            </li>
          </template>
          <template slot="extra">
            <img
              src="_a/ps4/large.jpg"
              style="width: 280px"
            >
          </template>
        </ListItem>
      </List>
      <Page
        class="f-c mt-3"
        :total="100"
        show-elevator
      />
    </Content>
  </div>
</template>

<script>
export default {
  name: "ps4",
  data() {
    return {
      data: [
        {
          title: "这些只是假数据",
          description: "自己传给自己",
          content:
            "没有写接口，纯静态页面。使用循环把数据渲染上来，原装iview组件。"
        },
        {
          title: "PS5将于2020年末开卖",
          description: "开始存钱中",
          content:
            "2019年10月8日，索尼官方回应PS5相关传闻时表示，下一代游戏机PlayStation 5将于2020年年末发售。"
        },
        {
          title: "懒得找资料",
          description: "Ctrl+c 几份",
          content: "新闻内容"
        },
        {
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 4",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 5",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "假翻页",
          description: "内容不多，没有发布模块",
          content: "仅仅视觉效果"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../less/index";
.contain {
  margin: 0 auto;
  width: 1000px;
}
.input {
 display: flex;
 flex-direction: row-reverse;
 margin-bottom: 30px;
 width: 300px;
}
</style>