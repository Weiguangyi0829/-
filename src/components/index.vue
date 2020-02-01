<style lang="less" scoped>
@import "./less/index.less";
.layout-footer-center {
  text-align: center;
  // background-color: #515a6e;
}
.active {
  display: none;
}
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header>
          <Menu
            class="head"
            mode="horizontal"
            theme="dark"
            active-name="1"
          >
            <Row>
              <Col
                span="6"
                class="homelink"
              >
              <div class="mt-1">
                <span
                  class="homefont"
                  @click="home()"
                >Home</span>
                <span class="homespace">|</span>
                <span
                  class="homefont"
                  @click="gameCenter()"
                >GameCenter</span>
                <span class="homespace">|</span>
                <span
                  class="homefont"
                  @click="setting()"
                >设置</span>
              </div>
              </Col>
              <Col
                span="2"
                offset="16"
              >
              <Row
                @mouseover.native="selectStyle()"
                @mouseout.native="outStyle()"
              >
                <Col
                  span="12"
                  v-show="active"
                >
                <div class="name">魏广逸</div>
                <div class="name">170204102381</div>
                </Col>
                <Col
                  span="12"
                  v-show="logoactive"
                >
                <Icon
                  class="pslogo"
                  type="logo-playstation"
                />
                </Col>
              </Row>
              </Col>
            </Row>
          </Menu>
        </Header>
        <Layout>
          <Sider
            hide-trigger
            :style="{background: '#fff'}"
          >
            <Menu
              theme="light"
              width="auto"
              :open-names="['1']"
            >
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-happy" />
                  我的空间
                </template>
                <MenuItem
                  :name="'1-'+index"
                  v-for="(item,index) in mList"
                  :key="index"
                  @click.native="tab(item)"
                >{{item.listItem}}</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  GameCenter
                </template>
                <MenuItem
                  :name="'2-'+index"
                  v-for="(item,index) in gList"
                  :key="index"
                  @click.native="tab(item)"
                >{{item.listItem}}</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="md-settings" />
                  相关设置
                </template>
                <MenuItem
                  :name="'3-'+index"
                  v-for="(item,index) in sList"
                  :key="index"
                  @click.native="tab(item)"
                >{{item.listItem}}</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">

            <router-view />

          </Layout>
        </Layout>
      </Layout>
    </div>
    <BackTop></BackTop>
    <Footer>
      <div style="padding:20px">
        <Row
          type="flex"
          justify="center"
        >
          <Col
            span="7"
            offset="2"
          >
          <div>
            <Icon
              type="md-bookmark"
              class="mr-2 size-15"
            />专业：数字媒体技术</div>
          <div>
            <Icon
              type="md-school"
              class="mr-2 size-15"
            />院校：北京理工大学珠海学院</div>
          <div>
            <Icon
              type="md-locate"
              class="mr-2 size-15"
            />地址：广东省珠海市唐家湾金凤路6号</div>
          <div>
            <Icon
              type="md-call"
              class="mr-2 size-15"
            />联系方式：0756-3622745</div>
          <div>
            <Icon
              type="md-mail"
              class="mr-2 size-15"
            />邮箱：zhbit@zhbit.com</div>
          </Col>
          <Col span="8">
          <Row>
            <Col span="12">
            <div class="fr">
              <div><img
                  src="../assets/wechat.png"
                  width="14px"
                  class="mr-1"
                >官方微信：</div>
              <img
                src="../assets/zhbit_QRcode.jpg"
                width="90"
              >
            </div>
            </Col>
            <Col span="12">
            <div class="fr pr-2p">
              <div><img
                  src="../assets/小程序.png"
                  width="14px"
                  class="mr-1"
                >微门户：</div>
              <img
                src="../assets/zhbit_QRcode2.jpg"
                width="87"
              >
            </div>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
    </Footer>
    <Footer class="layout-footer-center">2019 &copy; GalileoUtra</Footer>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      mList: [
        { listItem: "展示页", path: "/show" },
        { listItem: "ps4聊天室", path: "/ps4" },
        { listItem: "我的MG动画", path: "/video" }
      ],
      gList: [
        { listItem: "近期游戏心得", path: "/sekiro" },
        { listItem: "游戏评分", path: "/grade" }
      ],
      sList: [
        { listItem: "Option1", path: "/setting" },
        { listItem: "Option2", path: "/setting" }
      ],
      active: true,
      logoactive: false
    };
  },
  methods: {
    tab(item) {
      this.$router.push({
        path: item.path
      });
    },
    home() {
      this.$router.push({ path: "/show" });
    },
    gameCenter() {
      this.$router.push({ path: "/sekiro" });
    },
    setting() {
      this.$router.push({ path: "/setting" });
    },
    selectStyle() {
      console.log(11);

      this.active = true;
      this.logoactive = false;
    },
    outStyle() {
      this.active = false;
      this.logoactive = true;
    }
  }
};
</script>