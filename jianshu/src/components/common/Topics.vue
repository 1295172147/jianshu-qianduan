<!--更多热门专题页面-->
<template>
  <div class="recommend-collection">
    <div style="text-align: center">
      <img style="width: 1000px;height: 100px"
           src="https://cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png"/>
    </div>

    <div style="text-align: center;margin-left: 52px;margin-top: 30px">
      <b-tabs style="width: 1000px;height: 100px">
        <b-tab title="推荐" active>
          <a class="collection" v-for="topic in topicList" :key="topic.id">
            <b-card style="width: 280px;height: 250px;float: left;margin: 25px;margin-top: 100px">
              <div><img :src="topic.topicUrl" class="small-img" style="width: 90px;height: 90px;margin-top: -80px"/>
              </div>
              <router-link :to="'/c/'+topic.id">
                <div class="name more">{{topic.topicName}}</div>
              </router-link>
              <p>{{topic.summary}}</p>
              <p>
                <b-button variant="success">关注</b-button>
              </p>
              <p class="abstract">
                <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}关注</span>
              </p>
            </b-card>
          </a>
        </b-tab>

        <b-tab title="热门">
          <br>I'm the second tab content
        </b-tab>
        <b-tab title="城市">
          <br>I'm the three tab content
        </b-tab>
        <b-tab title="校园">
          <br>I'm the four tab content
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        topicList: [
          {
            "id": 1,
            "topicUrl": "https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "@IT·互联网",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "4598",
            "fans": "129.3k"
          },
          {
            "id": 2,
            "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "摄影",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "3233",
            "fans": "323.3k"
          },
          {
            "id": 3,
            "topicUrl": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "故事",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "2344",
            "fans": "329.3k"
          },
          {
            "id": 4,
            "topicUrl": "https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "简书电影",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "2983",
            "fans": "934.7k"
          },
          {
            "id": 5,
            "topicUrl": "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "旅行·在路上",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "1746",
            "fans": "294.5k"
          },
          {
            "id": 6,
            "topicUrl": "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "topicName": "手绘",
            "summary": "欢迎关注公共号简宝玉",
            "articleCount": "2365",
            "fans": "145.3k"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
