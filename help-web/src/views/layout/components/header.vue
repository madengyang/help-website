<template>
    <div class="header">
        <Menu mode="horizontal" theme="dark" :active-name="routerList[0].name + routerList[0].children[0].name" >
            <ul v-for="item in routerList" :key="item.name + item.children[0].name">
    <!-- 一级菜单 -->
    <div>
                <template v-if="!item.hidden">
                    <MenuItem v-if="!item.meta" :name="item.name + item.children[0].name">
                        <Icon :type="item.children[0].meta.icon" />
                        <router-link :to="item.path">{{item.children[0].meta.title}}</router-link>
                    </MenuItem>
            <!-- 二级菜单 -->
                    <Submenu v-else :name="item.name"  >
                        <template slot="title">
                            <Icon :type="item.meta.icon" />
                            {{item.meta.title}}
                        </template>
                        <MenuItem v-for="child in item.children" :key="item.name + child.name" :name="item.name + child.name" >
                            <Icon :type="child.meta.icon" />
                            <router-link :to="item.path + child.path">{{child.meta.title}}</router-link>
                        </MenuItem>
                    </Submenu>
                </template>
                </div>
            </ul>
        </Menu>
    </div>
</template>
<script>
import Router from '@/router/index'
export default {
    name:"Header",
    data(){
        return {
            routerList:[],
        }
    },
    created(){
        //获取全部路由表
        this.routerList = Router.options.routes
    }
}
</script>
<style scoped>
.header li {
    list-style:none;
}
.header a, .header a:link,.header a:visited,.header a:hover,.header a:active{
    text-decoration: none;
    color:inherit;
}
</style>