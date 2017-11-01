import Vue from "vue";
import vuex from 'vuex'

Vue.use(vuex)
import action_type from "./action_type.js"
var store = new vuex.Store({
    state: {
        headData: [],
        articleAll: [],
        articleList: [],
        toplist: [],
        newlist: [],
        breadcast: [],
        menuList: [{
            id: 1,
            bg: "/static/img/menu1.jpg",
            tit: "HOME",
            con: "主页(this)",
            path: "/index",
            id: "home"
        }, {
            id: 2,
            bg: "/static/img/menu2.jpg",
            tit: "WORKS",
            con: "作品集(is)",
            path: "/page_works",
            id: "works"
        }, {
            id: 3,
            bg: "/static/img/menu3.jpg",
            tit: "BLOG",
            con: "博客(my)",
            path: "/page_blog",
            id: "blog"
        }, {
            id: 4,
            bg: "/static/img/menu4.jpg",
            tit: "CONTACT",
            con: "联系我(free)",
            path: "/page_contact",
            id: "contact"
        }, {
            id: 5,
            bg: "/static/img/menu5.jpg",
            tit: "ABOUT",
            con: "关于我(style)",
            path: "/page_about",
            id: "about"
        }]
    },
    actions: {
        [action_type.ARTICLEALL.actions]({ commit }, _this) {
            return new Promise(function(resolve, reject) {
                _this.axios.get("/api/front_article/getArticleAll").then(function(data) {
                    commit(action_type.ARTICLEALL.mutations, data)
                        //_this.$router.push({path:"/index"})
                    resolve("ok")
                }, function(err) {
                    reject(err)
                })
            })
        },
        [action_type.HEADDATA.actions]({ commit }, _this) {
            return new Promise(function(resolve, reject) {
                _this.axios.get("/api/front_article/getNav").then(function(data) {
                    commit(action_type.HEADDATA.mutations, data)
                        //_this.$router.push({path:"/index"})
                    resolve("ok")
                }, function(err) {
                    reject(err)
                })
            })
        },
        [action_type.DEFAULEDATA.actions]({ dispatch, commit }, _this) {
            Promise.all([dispatch(action_type.HEADDATA.actions, _this), dispatch(action_type.ARTICLEALL.actions, _this)]).then(function(data) {
                commit(action_type.RECOMMENDDATA.mutations)
                commit(action_type.TOPDATA.mutations)
                commit(action_type.NEWDATA.mutations)
                commit(action_type.BREADCASTDATA.mutations, "index")
                _this.$router.push("/index")
            }, function(err) {
                _this.$router.push("/error")
            }).catch(function(err) {
                console.log(err)
            })

        },
        //header点击更变数据
        [action_type.HEADCHANGEDATA.actions]({ dispatch, commit }, type) {
            commit(action_type.HEADCHANGEDATA.mutations, type)
        },
        //全站搜索
        [action_type.SEARCHDATA.actions]({ dispatch, commit }, name) {
            commit(action_type.SEARCHDATA.mutations, name)
        },
        //文章推荐列表
        [action_type.RECOMMENDDATA.actions]({ dispatch, commit }, data) {
            commit(action_type.RECOMMENDDATA.mutations)
            commit(action_type.BREADCASTDATA.mutations, "index")
        },
        //breadcast数组更变
        [action_type.BREADCASTDATA.actions]({ dispatch, commit }, data) {
            commit(action_type.BREADCASTDATA.mutations)
        },
        //头部二级分类点击时触发面包屑数组更变
        [action_type.HEADBREADDATA.actions]({ dispatch, commit }, data) {
            // 触发面包屑数组
            commit(action_type.BREADCASTDATA.mutations, data)
        },
        //一级分类点击时触发面包屑数组更变
        [action_type.HEADONECHANGEDATA.actions]({ dispatch, commit }, data) {
            // 触发面包屑数组
            commit(action_type.BREADCASTDATA.mutations, [data])
                // 重新计算当前一级分类文章数
            commit(action_type.HEADONECHANGEDATA.mutations, data.oneId)
        }
    },
    mutations: {
        [action_type.HEADDATA.mutations](state, data) {
            state.headData = data.data.data;
        },
        [action_type.ARTICLEALL.mutations](state, data) {
            state.articleAll = data.data.data;
        },
        //header二级分类点击更变文章数据
        [action_type.HEADCHANGEDATA.mutations](state, type) {
            state.articleList = state.articleAll.filter(function(i) {
                return i.twoId == type
            })
            console.log(state.articleList)

        },
        //搜索
        [action_type.SEARCHDATA.mutations](state, name) {
            // console.log(name)
            state.articleList = state.articleAll.filter(function(i) {
                return i.article_name.includes(name)
            })
            console.log(state.articleList)
        },
        // 推荐列表
        [action_type.RECOMMENDDATA.mutations](state, name) {
            // console.log(state.articleAll)
            state.articleList = state.articleAll.filter(function(i) {
                return i.recommend == "1"
            })
            console.log(state.articleList)
        },
        // 首页breadcast数组
        [action_type.BREADCASTDATA.mutations](state, data) {
            // console.log(state.articleAll)
            state.breadcast = [{ cnname: "首页", oneId: null, twoId: null }]
            if (data !== "index") {
                state.breadcast.push(...data)
            }

            console.log(state.breadcast)
        },
        // 点击排行
        [action_type.TOPDATA.mutations](state, name) {
            console.log(state.articleAll)
            state.toplist = state.articleAll.sort(function(a, b) {
                return a.visitors < b.visitors
            })
            state.toplist = state.toplist.slice(0, 5)
            console.log(state.toplist)
        },
        // 最新排行
        [action_type.NEWDATA.mutations](state, name) {
            console.log(state.articleAll)

            state.newlist = state.articleAll.sort(function(a, b) {
                return Date.parse(b.TIME) - Date.parse(a.TIME);
            })
            state.newlist = state.newlist.map(function(i) {
                i.TIME = i.TIME.substr(0, 10)
                return i
            })
            state.newlist = state.newlist.slice(0, 5)
            console.log(state.newlist)
        }
    }
})

export default store;