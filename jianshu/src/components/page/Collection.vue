<!--专题详情页面<-->
<template>
  <div>
    <b-row>
      <!--左侧-->
      <b-col cols="8">
        <b-media vertical-align="center" class="article-box">
          <div style="margin: 30px">
            <div style="float: left">
              <img :src="topic.topicUrl" class="article-thumbnail"/>
            </div>
            <div style="float: left;margin-left: 20px">
              <h6 class="mt-0 mb-1 title">{{topic.topicName}}</h6>
              <p class="abstract">
                <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}关注</span>
              </p>
            </div>
            <div style="float: left;margin-left: 150px">
              <p>
                <b-button rounded="circle" variant="outline-success">投稿</b-button>
              </p>
            </div>
            <div style="float: left;margin-left: 20px">
              <p>
                <b-button variant="success">关注</b-button>
              </p>
            </div>
          </div>
        </b-media>
        <b-tabs style="width: 580px;height: 100px;margin-top: 35px;margin: 30px">
          <b-tab title="最新评论" active>
            <v-article></v-article>
          </b-tab>

          <b-tab title="最新收录" active>
          </b-tab>
          <b-tab title="热门" active>
          </b-tab>
        </b-tabs>
      </b-col>
      <!--右侧-->
      <b-col>
        <div>
          <span>专题公告</span>
        </div>
        <div>
          <p>
            投稿须知:
            读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。
            文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。
            文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。
            投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37
            进群请添加主编微信: MYH561...
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import vArticle from '../common/Article'
  export default {
    components:{
      vArticle
    },
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description":"fdfdf",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"跳槽的7大原因，哪个击中了你？\n",
              "summary":"01.每个想跳槽的人都有自己的原因 在国内跳槽已经是一件非常司空见惯的事情了，每个想要跳槽、准备跳槽、已经跳槽的人都有自己各种各样的理由。日本虽.....",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/7147525-900082d4bbac9a4f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "nickname":"半岛_日语自由翻译",
              "comments":1234,
              "likes":12
            }
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"11.png"
            }
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>

</style>
