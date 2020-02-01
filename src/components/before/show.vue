<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>我的空间</BreadcrumbItem>
      <BreadcrumbItem>展示页</BreadcrumbItem>
    </Breadcrumb>
    <Content>
      <div class="sony">
        <a href="http://www.sony.com.cn">
          <img
            class="sony-logo "
            src="_a/sony.svg"
            alt=""
          ></a>
      </div>
      <div class="f-c">
        <Carousel
          autoplay
          loop
          style="width:1512px"
          class="f-c"
        >
          <CarouselItem>
            <div class="demo-carousel"><img
                src="_a/gow.jpg"
                width="1512"
              ></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img
                src="_a/sekiro1.jpg"
                width="1512"
              ></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img
                src="_a/gta5.jpg"
                width="1512"
              ></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img
                src="_a/horizon.jpg"
                width="1512"
              ></div>
          </CarouselItem>
        </Carousel>
      </div>
      <Card :style="{ background: '#fff'}" class="mt-3 pt-3 contain">
        <p class="f-c size-26">
          PS4超乎想象的持续进化
        </p>
        <Row class="mt-3 pb-5">
          <Col
            span="6"
            offset="6"
          >
          <img
            src="_a/PS4.png"
            alt="PS4"
            class="w-100"
          >
          </Col>
          <Col
            span="6"
            class="ml-2"
          >
          <p>PS4运用超群的描绘能力及处理性能，提供充满临场感的影像及犹如身历其境的游戏体验。</p>
          <br>
          <p>只需要一个按钮便能向全世界展现自己的游玩过程，或是与世界各地的玩者们互相交流，通过网络体验各种乐趣。</p>
          <br>
          <p>通过变得更加精巧的PS4，享受各式各样充满创新意念的精彩游戏。</p>
          <br>
          <Button
            type="primary"
            class="mt-3 btn-p"
          ><a href="https://www.playstation.com.cn/index.html">了解更多</a></Button>
          </Col>
        </Row>
      </Card>
      <div class="ps4bg pt-5 pb-5 font-fff">
        <p class="f-c size-26">
          提供全新附加价值的PS4 Pro
        </p>
        <Row class="mt-3">
          <Col
            span="6"
            offset="6"
            class=" pr-2"
          >
          <p>PS4 Pro是针对希望拥有更高质量PS4体验的用户，提供全新附加价值的主机。</p>
          <br>
          <p>只要与支持4K的电视机连接，便能以4K画质游玩支持此显示方式的PS4游戏。PS4 Pro亦支持高动态范围（HDR）影像技术。</p>
          <br>
          <p>请尽情享受高画质、高帧率所描绘出的精致流畅影像。</p>
          <Button
            class="mt-3 btn-p"
            type="primary"
          ><a href="https://www.playstation.com.cn/index.html">了解更多</a></Button>
          </Col>
          <Col span="6">
          <img
            src="_a/PS4pro.png"
            alt="PS4pro"
            class="w-100"
          >
          </Col>
        </Row>
      </div>
      <p class="f-c size-26 pt-5">
        PS4游戏
      </p>
      <Row
        type="flex"
        justify="center"
        class="mt-3 pb-2"
      >
        <Col
          span="5"
          class="pl-3"
        >
        <img
          src="_a/三国无双.jpg"
          alt="三国无双"
          width="95%"
        >
        <p>真·三国无双</p>
        </Col>
        <Col
          span="5"
          class="pl-3"
        >
        <img
          src="_a/巨像之咆哮.jpg"
          alt="巨像之咆哮"
          width="95%"
        >
        <p>巨像之咆哮</p>
        </Col>
        <Col
          span="5"
          class="pl-3"
        >
        <img
          src="_a/NBA 2K18.jpg"
          alt="NBA 2K18"
          width="95%"
        >
        <p>NBA 2K18</p>
        </Col>
      </Row>
      <div class="f-c pt-5 pb-5 ">
        <Button
          type="primary"
          class="btn-p"
        ><a href="https://www.playstation.com.cn/index.html">查看更多游戏</a></Button>
      </div>

      <div class="bg pt-5 pb-14 font-fff">
        <p class="f-c size-26  font-000">
          游戏以外的充实娱乐机能
        </p>
        <Row class="mt-7">
          <Col
            span="6"
            offset="6"
            class=" pr-2 viewbg"
          >
          <p>PS4可以享受的不只是游戏。</p>
          <br>
          <p>您可以用来收看Blu-ray Disc™或DVD；使用影像播送服务观看电影、连续剧或动画。</p>
          <br>
          <p>多样化的内容服务让全家人都能乐在其中。客厅中只要有PS4，就能为生活增添丰富娱乐元素。</p>
          <br>
          </Col>
        </Row>
      </div>
      <div class="f-c pt-5 pb-5 ">
        <Button
          type="success"
          class="btn-p btn-success"
        ><a href="https://asia.playstation.com.cn/chs-cn/psn/">加入我们</a></Button>
      </div>
    </Content>
  </div>
</template>

<script>
export default {
  name: "show",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../less/index";
/deep/.ivu-icon-ios-arrow-forward {
  margin: 12px;
}
/deep/.ivu-icon-ios-arrow-back {
  margin: 12px;
}
.contain{
  border-radius: 15px;
  margin-bottom: 30px;
}
.ps4bg {
  background-image: url(../../assets/PS4bg.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
}
.viewbg {
  background-color: rgba(31, 31, 31, 0.6);
  padding: 20px;
}
.bg {
  background-image: url(../../assets/bg.png);
  // background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center -150px;
}
a {
  color: #ffffff;
}
.sony {
  padding: 0 23px;
  background-color: #000000;
  text-align: right;
  height: 36px;
  width: 1512px;
  line-height: 1;
  margin: 0 auto;
}
.sony-logo {
  display: inline-block;
  padding: 12px 0 12px 0;
}
</style>