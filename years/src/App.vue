<template>
    <div id="app" class="app">

        <router-view></router-view>
        
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    *
    {
        font-style: normal;
        margin: 0;
        padding: 0;
    }
    html,body
    {
        width:100%;
        height:100%;
        overflow: hidden;
    }
    html
    {
        font-size: 100px;
    }
    .home,.find,.mzine,.shopping,.mine,.guanyu,.login,.register
    {
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        flex-direction: column;
    }
    .app
    {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 0.14rem;
        display: -webkit-flex;
        flex-direction: column;
    }
</style>
