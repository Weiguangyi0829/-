<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>GameCenter</BreadcrumbItem>
      <BreadcrumbItem>游戏评分</BreadcrumbItem>
    </Breadcrumb>
    <Content>
      <Row style="background:#eee;padding:10px">
        <Col span="10" offset="3">
        <Card>
        <p slot="title" class="size-23">
          <Icon type="logo-playstation" />
          <Icon type="logo-xbox" />
          <Icon type="logo-steam" />
          游戏评分
        </p>
        <a
          href="#"
          slot="extra"
          @click.prevent="changeLimit"
        >
        <p class="size-23"><Icon type="md-arrow-round-forward" /></p>
         
        </a>
        <ul class="pl-2 pb-2">
          <li v-for="item in randomMovieList">
            <span target="_blank" class="mr-2 size-23">{{ item.name }}</span>
            <span class="yellow" v-if="item.rate == 10 ">
            <Icon type="md-star" v-for="n in 5" :key="n"/>
              {{ item.rate }}
            </span>
             <span class="yellow" v-else-if="item.rate >= 9.0">
            <Icon type="md-star" v-for="n in 4" :key="n"/><Icon type="md-star-half" />
              {{ item.rate }}
            </span>
            <span class="yellow" v-else-if="item.rate >= 8.0">
            <Icon type="md-star" v-for="n in 4" :key="n"/><Icon type="md-star-outline" />
              {{ item.rate }}
            </span>
             <span class="yellow" v-else-if="item.rate >= 7.0">
            <Icon type="md-star" v-for="n in 3" :key="n"/><Icon type="md-star-half" /><Icon type="md-star-outline" />
              {{ item.rate }}
            </span>
               <span class="yellow" v-else>
            <Icon type="md-star" v-for="n in 3" :key="n"/><Icon type="md-star-outline" /><Icon type="md-star-outline" />
              {{ item.rate }}
            </span>
          </li>
        </ul>
      </Card>
        </Col>
        <Col span="8">
          <Card :bordered="false" class="size-15">
                <p slot="title" class="size-23">myCard</p>
                 <br>
                <p>Londoners are under starter's orders as the city gets ready for the Olympic Games, which will begin one year today.</p>
                <br>
                <p>To mark the start of the 366-day countdown (2012 is a leap year), special events are planned for today.</p>
                 <br>
                <p>The design of the Olympic medals will be unveiled tonight in a live ceremony from Trafalgar Square.</p>
                 <br>
                <p>Over at the brand new Aquatics Centre, Britain's star diver Tom Daley is going to perform an official launch dive into the Olympic pool.</p>
                 <br>
                <p>With this building, the organisers have attempted to give London a landmark to rival Beijing's Water Cube from 2008.</p>
                 <br>
                <p>It was designed by the prestigious architect Zaha Hadid and has a wave-like roof that is 160 metres long.</p>
                 <br>
                <p>Today's special events are designed to arouse interest in the Olympics around the world and to encourage British fans too.</p>
                 <br>
                <p>Many failed to get Olympic tickets in the recent sales process. </p>
                 <br>
                <p>According to a new survey for the BBC, 53% of Londoners think the process was "not fair".</p>
                 <br>
            </Card>
        </Col>
      </Row>
    </Content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          name: "看门狗2",
          rate: 8.9
        },
        {
          name: "地平线：零之曙光",
          rate: 10
        },
        {
          name: "只狼：影逝二度",
          rate: 9.4
        },
        {
          name: "底特律：成为人类",
          rate: 7.4
        },
        {
          name: "噬神者3",
          rate: 7.6
        },
        {
          name: "古墓丽影：暗影",
          rate: 9.6
        },
        {
          name: "古墓丽影：崛起",
          rate: 9.4
        },
        {
          name: "泰坦陨落2",
          rate: 8.6
        },
        {
          name: "LEGO Marvel’s Avengers ",
          rate: 7.5
        },
        {
          name: "神秘海域4",
          rate: 10
        },
        {
          name: "神秘海域：失落的遗产",
          rate: 9.8
        },
        {
          name: "怪物猎人：世界",
          rate: 9.5
        },
        {
          name: "gta5",
          rate: 9.8
        },
        {
          name: "战神4",
          rate: 10
        },
        {
          name: "LocoRoco",
          rate: 7.5
        },
        {
          name: "伊苏8",
          rate: 8.0
        },
        {
          name: "刺客信条：大革命",
          rate: 7.2
        },
        {
          name: "新三国无双8",
          rate: 6.7
        },
        {
          name: "漫威蜘蛛侠 ",
          rate: 9.7
        },
        {
          name: "荒野大镖客2 ",
          rate: 9.5
        },
        {
          name: "战地V ",
          rate: 5.1
        },
        {
          name: "尼尔机械纪元 ",
          rate: 7.1
        }
      ],
      randomMovieList: []
    };
  },
  methods: {
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.movieList, 25);
    }
  },
  mounted() {
    this.changeLimit();
  }
};
</script>

<style lang="less" scoped>
@import "../less/index";
/deep/.ivu-icon-ios-star,
/deep/.ivu-icon-ios-star-half,
.yellow {
  color: #ffa500;
  font-size: 20px;
}
li {
  list-style: none;
}
/deep/.ivu-card-extra {
  top: 7px;
  right: 30px;
}
/deep/.ivu-card-head p, /deep/.ivu-card-head-inner{
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
}
</style>