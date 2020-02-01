<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>设置</BreadcrumbItem>
      <BreadcrumbItem>Option1</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '800px', background: '#fff'}">
        <Card class="f-c card">
            <img class="mt-1" src="../assets/logo.png" alt="">
            <p class="f-c mt-1 settingfont">暂无设置</p>
        </Card>
         <Card class="f-c card">
            <img class="mt-1" src="../assets/js.png" alt="">
            <p class="f-c mt-1 settingfont">暂无设置</p>
        </Card>
         <Card class="f-c card">
            <img class="mt-1" src="../assets/webpack.png" alt="">
            <p class="f-c mt-1 settingfont">暂无设置</p>
        </Card>
    </Content>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./less/index";
/deep/.ivu-card-head{
    padding: 0;
}
</style>