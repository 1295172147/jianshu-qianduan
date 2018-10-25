<template>
  <b-row>
    <b-col cols="8">
      <!--轮播-->
      <v-carousel></v-carousel>

      <!--热门专题·-->
      <v-collections></v-collections>

      <!--左下文章-->
      <v-article></v-article>

    </b-col>
    <b-col>
      <!--右上七月热门,二维码-->
      <div class="board" style="width:29.16667% ; margin-left:4.16667%">
        <div>
          <b-img height="50"
                 src="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"></b-img>
        </div>
        <div style="margin-top: 15px">
          <b-img height="50" weight="180"
                 src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"></b-img>
        </div>
        <div style="margin-top: 15px">
          <b-img height="50" weight="180"
                 src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></b-img>
        </div>
        <div style="margin-top: 15px">
          <b-img height="50" weight="180"
                 src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></b-img>
        </div>
        <div style="margin-top: 15px">
          <b-img height="50" weight="180"
                 src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"></b-img>
        </div>
      </div>
      <div style="margin-left: 4.16667%;margin-top: 20px">
        <img width="70px" height="70px" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
        <span>下载简书手机app></span>
      </div>

      <!--作者推荐-->
      <v-RecomAuthor></v-RecomAuthor>
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vArticle from '../common/Article';
  import vRecomAuthor from '../common/RecomAuthor';
  import vTopics from '../common/Topics';
  import vCollections from '../page/Collections';

  export default {
    name: "Index",
    components: {
      vCarousel,
      vArticle,
      vRecomAuthor,
      vTopics,
      vCollections,
    }
  }
</script>

<style scoped>

</style>
