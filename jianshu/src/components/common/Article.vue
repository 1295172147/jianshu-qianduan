<template>

  <b-row>
    <b-col cols="8" v-for="article in articleList" :key="article.id">
      <div class="collection-wrap">
        <b-card style="width: 730px">
          <!--<router-link :to="'/c/'+article.id">-->
          <!--</router-link>-->
          <!--<div>-->
            <!--<div style="float: left">-->
              <!--<div class="articleName" style="font-size: x-large">{{article.articleName}}</div>-->
              <!--<div class="articleContent">{{article.articleContent}}</div>-->
            <!--</div>-->
            <!--<div style="float: left">-->
              <!--<img :src="article.articleUrl" class="small-img"/>-->
            <!--</div>-->
          <!--</div>-->
          <b-media right-align vertical-align="center">
            <b-img :src="article.articleUrl" slot="aside" width="80px" height="90px" alt="placeholder" />
            <div style="font-size: x-large">
              <router-link :to="'/c/'+article.id">
                {{article.articleName}}
              </router-link>
            </div>
            <div>{{article.articleContent}}</div>
          </b-media>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        articleList: [
          {
            "id": 1,
            "articleUrl": "https://upload-images.jianshu.io/upload_images/2491339-7d6c28e1e5ceccd7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            "articleName": "额济纳旗：胡杨林遇上最美日出",
            "articleContent": "额济纳的胡杨林 一大早起床吃一屉包子，喝碗小米粥，裹着大衣便进了额济纳的胡杨林景区。 流经额济纳旗的额济纳河分支多，桥也多，达来呼布镇往东的公路...",
            "articleAuthor": "lemon青柠檬",
            "comments": "129",
            "likes": "1211"
          },
          {
            "id": 2,
            "articleUrl": "https://upload-images.jianshu.io/upload_images/12598121-1b2d4d26c0a8571a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            "articleName": "姑苏城外的世外桃源-穹窿山",
            "articleContent": "这是藏身山水之间的第232天，周4，室外温度17°，注意添衣~ 记得我说过:我喜欢每天伴随着窗外叽叽喳喳的鸟儿带来的乐章，以及这个优美的深秋下的...",
            "articleAuthor": "一场带着问号的人生征途",
            "comments": "2324",
            "likes": "12111"
          },
          {
            "id": 3,
            "articleUrl": "https://upload-images.jianshu.io/upload_images/5366326-8a5d16ea01be6b57.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            "articleName": "边境线游走",
            "articleContent": "上回写了从乌鲁木齐到可可托海的故事，发文后有很多朋友告诉我说收尾太仓促，还没看尽兴就结束了。 的确，我本来也只想写可可托海的那几天，因为那里的人...",
            "articleAuthor": "畅聊聊",
            "comments": "545",
            "likes": "2435"
          },
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
