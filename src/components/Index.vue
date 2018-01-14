<template>
    <div class="index">
        <Icon type="ios-bolt-outline" size="150"></Icon>
        <!-- <img src="../assets/logo.png"> -->
        <h1>Parcel-VUE</h1>
        <br/>
        <h2>前言：伴随着webpack越发复杂臃肿，前端<b>零配置</b>的需求越来越高，parcel为前端构建带来了革命性的变化</h2>
        <br/>
        <h3>parcel-vue是全新的组件化构建开发模板，追求最零化的配置，支持vux/iview等组件框架，提供秒级开发与部署</h3>
        <br/>
        <Row type="flex" justify="space-around">
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <!-- <router-link to="/layout/devup"> -->
                        <Icon type="ios-trash-outline" size="100"></Icon>
                    <!-- </router-link> -->
                    <h2>零配置</h2>
                    <h3>完全没有单独的构建配置文件</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <!-- <router-link to="/layout/devcli"> -->
                        <Icon type="hammer" size="100"></Icon>
                    <!-- </router-link> -->
                    <h2>秒级构建</h2>
                    <h3>iView工程初次构建时间5s左右</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center">
                    <!-- <img src="../../images/logo.png"> -->
                    <!-- <router-link to="/layout/devkoa"> -->
                        <Icon type="social-nodejs" size="100"></Icon>
                    <!-- </router-link> -->
                    <h2>毫秒级热部署</h2>
                    <h3>修改源码，响应时间通常1-10ms</h3>
                </div>
            </Card>
            </Col>
            <Col span="5">
            <Card>
                <div style="text-align:center" @click="showClick">
                    <!-- <img src="../../images/logo.png"> -->
                    <!-- <router-link to="/layout/devcomponents"> -->
                        <Icon type="play" size="100"></Icon>
                    <!-- </router-link> -->
                    <h2>快速开始</h2>
                    <h3>开始您的parcel-vue之旅</h3>
                </div>
            </Card>
            </Col>
        </Row>
        <br/>
        <Row type="flex" justify="space-around" v-show="showTip">
            <Col span="20">
            <Card>
                <div style="text-align:center">
                    <pre><b><font>npm install xserver-cli -g</font></b> <i><font color="grey">安装CLI工具</font></i></pre>
                    <pre><b><font color="#CC3333">x-cli parcel-vue myproject</font></b> <i><font color="grey">初始化项目</font></i></pre>
                    <pre><b><font color="green">cd myproject && npm run dev</font></b> <i><font color="grey">启动运行</font></i></pre>
                </div>
            </Card>
            </Col>
        </Row>
        <br/>
        <br/>
        <ul>
            <li><a href="https://github.com/cheneyweb" target="_blank">Thanks</a></li>
            <li><a href="https://github.com/cheneyweb/parcel-vue" target="_blank">Github</a></li>
            <li><a href="https://github.com/cheneyweb/parcel-vue" target="_blank">Support</a></li>
            <li><a href="mailto:457299596@qq.com" target="_blank">Email</a></li>
            <br>
            <br>
            <li><a href="http://www.xserver.top" target="_blank">Powered by XServer</a></li>
            <br>
            <br>
            <li><a href="https://github.com/cheneyweb" target="_blank">Donate</a></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      showTip: false
    };
  },
  methods: {
    showClick() {
      this.showTip = true;
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.index {
  text-align: center;
}
</style>
