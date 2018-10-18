<template>
  <b-row>
    <b-col cols="8">
      <div>
        <b-img rounded="circle" width="35" height="35" src="../../static/img/avator.png"/>
        <h2>爱唱歌的小姐姐</h2>
        <b-tabs>
          <b-tab title="文章" active>
            <b-card
              title="读书"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  投稿须知:
                  读书专题仅收录与读书有关的书评、读...              </p>
              </b-card-body>
            </b-card>
            <b-card
              title="故事"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的...              </p>
              </b-card-body>
            </b-card>
          </b-tab>

          <b-tab title="动态" active>
            <b-card
              title="乔汉童"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  合抱之木，生于毫末 九层之台，起于垒土 千里之行，始于足下             </p>
              </b-card-body>
            </b-card>
            <b-card
              title="王诗翔"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  已出版小说《不夜谈系列》，目前全国各大书店均无销售
                  可能已经不...              </p>
              </b-card-body>
            </b-card>
          </b-tab>

          <b-tab title="最新评论" active>
            <b-card
              title="读书"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  投稿须知:
                  读书专题仅收录与读书有关的书评、读...              </p>
              </b-card-body>
            </b-card>
            <b-card
              title="故事"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的...              </p>
              </b-card-body>
            </b-card>
          </b-tab>

          <b-tab title="热门" active>
            <b-card
              title="乔汉童"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  合抱之木，生于毫末 九层之台，起于垒土 千里之行，始于足下             </p>
              </b-card-body>
            </b-card>
            <b-card
              title="王诗翔"
              style="max-width: 50rem;"
              img-src=""
              img-alt="Image"
              img-top>
              <b-card-body>
                <p class="card-text">
                  已出版小说《不夜谈系列》，目前全国各大书店均无销售
                  可能已经不...              </p>
              </b-card-body>
            </b-card>
          </b-tab>
        </b-tabs>
      </div>
    </b-col>
    <b-col>
      <b-list-group style="width: 250px">
        <b-list-group-item>
          <span>个人介绍</span>
        </b-list-group-item>
        <b-list-group-item>
          <span>我关注的专题/文集/连载</span>
          <span>我喜欢的文章</span>
        </b-list-group-item>
        <b-list-group-item>
          我创建的专题
          创建一个新专题
        </b-list-group-item>
        <b-list-group-item>
          我的文集
          日记本
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
