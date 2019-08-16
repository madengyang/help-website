<template>
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
</template>
<script>
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
export default {
    name:"Layout",
    components:{
        Header,
        Content,
        Footer
    }
}
</script>