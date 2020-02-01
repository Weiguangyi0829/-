<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>我的空间</BreadcrumbItem>
      <BreadcrumbItem>我的MG动画</BreadcrumbItem>
    </Breadcrumb>
    <Card class="myCard">
      <div class="f-r">
        <div>
          <video
            id="myVideo"
            class="video-js"
          >
            <source
              src="@/assets/1.mp4"
              type="video/mp4"
            >
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="m-c contain">
          <div class="font ml-6">
            <p>“ 还有</p>
            <p>一分钟</p>
            <p>完整版 ”</p>
          </div>
          <p class="font2 m-c ml-6">向前，不要放弃思考</p>
        </div>
        <div>

        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1080px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "720px"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./less/index";
/deep/.vjs-big-play-button {
  bottom: 10%;
  left: 8%;
  top: auto;
  line-height: 1.8em;
  height: 1.8em;
}
/deep/.video-js {
  cursor: pointer;
}
/deep/.ivu-card:hover {
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);
}
/deep/.ivu-card-bordered {
  border: 0px;
}
.contain {
  width: 300px;
}
.myCard {
  background-color: #ffffff;
}
.font2,
.font {
  display: none;
}

.myCard:hover {
  background-color: #5b6270;
}
.myCard:hover .font {
  margin-top: 200px;
  display: block;
  font-style: italic;
  animation-name: fadeIn; /*动画名称*/
  animation-duration: 1s; /*动画持续时间*/
  animation-iteration-count: 1; /*动画次数*/
  animation-delay: 0s; /*延迟时间*/
  animation-fill-mode: forwards;
  color: #ffffff;
}
.myCard:hover .font2 {
  top: 100px;
  font-size: 19px;
  display: block;
  position: relative;
  font-style: normal;
  animation-name: fadeIn2; /*动画名称*/
  animation-duration: 1s; /*动画持续时间*/
  animation-iteration-count: 1; /*动画次数*/
  animation-delay: 0s; /*延迟时间*/
  animation-fill-mode: forwards;
  color: #ffffff;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    font-size: 40px;
  }
  10% {
    opacity: 0.1;
    font-size: 41px;
  }
  20% {
    opacity: 0.2;
    font-size: 42px;
  }
  30% {
    opacity: 0.3;
    font-size: 43px;
  }
  40% {
    opacity: 0.4;
    font-size: 44px;
  }
  50% {
    opacity: 0.5;
    font-size: 45px;
  }
  60% {
    opacity: 0.6;
    font-size: 46px;
  }
  70% {
    opacity: 0.7;
    font-size: 47px;
  }
  80% {
    opacity: 0.8;
    font-size: 48px;
  }
  90% {
    opacity: 0.9;
    font-size: 49px;
  }
  100% {
    opacity: 1;
    font-size: 50px;
  }
}
@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  20% {
    opacity: 0.2;
  }
  30% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.5;
  }
  60% {
    opacity: 0.6;
  }
  70% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>