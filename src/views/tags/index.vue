<template>
    <div class="tag-wrapper">
        <a
            class="tag"
            v-for="(articles,tag) in tags"
            @click="$router.push({path:'/archives',query:{tag}})"
            :key="tag"
            type="primary"
            :style="'font-size:'+12*articles.length+'px'"
        >{{tag}}</a>
    </div>
</template>
</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    created() {},
    computed: {
        tags() {
            return this.$store.getters["articles/getTags"];
        }
    }
};
</script>

<style scoped>
.tag-wrapper {
    width: 400px;
    /* height: calc(100%);
  height: 100%;
  height: -moz-available; 
  height: -webkit-fill-available; */
    height: fill-available;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
}

.tag {
    margin: 10px;
	cursor: pointer;
	font-weight: bold
}
</style>
