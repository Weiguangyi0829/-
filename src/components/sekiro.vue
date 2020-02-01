<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>GameCenter</BreadcrumbItem>
      <BreadcrumbItem>近期游戏心得</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '30px', minHeight: '800px', background: '#fff'}">
      <p class="size-38">只狼：影逝二度</p>
      <p class="size-15">Sekiro: Shadows Die Twice</p>

      <div class="sekirobg1">
        <div class="contain none">
          <p class="size-29">只狼</p>
          <br>
          <p>侍奉御子的壮年忍者。</p>
          <br>
          <p>虽然因为忍者守则而显得少言寡语，但他实际上是一位为了完成任务会不择手段的残忍角色。狼是没有感情的，只懂得杀戮。优秀的忍者，亦是如此。</p>
          <br>
          <p>故事起初因败于苇名的武将，而失去了御子与左手，继而取得了用来代替的“忍义手”。</p>
          <br>
          <p>“主人是绝对唯一的。赌上性命也要守护主人，即便被夺走也一定要夺回来。”作为忍者，规则就是行动的守则，而忍者的规则促成了他复仇的动力。</p>
        </div>
      </div>
      <div>
        <p class="size-38 pt-5">隐藏内容</p>
        <p class="size-15">@media媒体查询的使用方法，仅这页写了</p>
        <div class="size-23 pt-5 none">
          <p class="size-18">Tips：缩小浏览器宽度</p>
          <br>
          <p>使用Media Queries必须要使用“@media”开头，设备类型，设备特性</p>
          <p>“max-width”是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。</p>
          <p>“min-width”与“max-width”相反，指的是媒体类型大于或等于指定宽度时，样式生效。</p>
          <br>
          <p>多媒体特性使用</p>
          <img
            src="../assets/code/1.png"
            alt=""
            class="pt-3 pl-2 pb-5"
          >


          <p>not关键词</p>
          <p>使用关键词“not”是用来排除某种制定的媒体类型，也就是用来排除符合表达式的设备。换句话说，not关键词表示对后面的表达式执行取反操作</p>
          <img src="../assets/code/2.png" alt=""class="pt-3 pl-2 pb-5">
 
          <p>only关键词</p>
          <p>only用来指定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。</p>
          <br>
          <p>其实only很多时候是用来对那些不支持Media Query但却支持Media Type的设备隐藏样式表的。</p>
          <br>
          <p>其主要有：支持媒体特性的设备，正常调用样式，此时就当only不存在；表示不支持媒体特性但又支持媒体类型的设备，这样就会不读样式，因为其先会读取only而不是screen；</p>
          <p>另外不支持Media Queries的浏览器，不论是否支持only，样式都不会被采用。</p>
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
export default {
  name: "sekiro",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./less/index";
.contain {
  padding: 26px;
  background-color: rgba(31, 31, 31, 0.6);
  color: #ffffff;
  margin-top: 30px;
  font-size: 21px;
  max-width: 1500px;
}
.sekirobg1 {
  background-image: url(../assets/sekiro/1.jpg);
  background-attachment: fixed;
  background-position: 90px center;
  background-repeat: no-repeat;
  margin-top: 60px;
  padding: 20px 180px 200px;
  min-height: 700px;
}
</style>