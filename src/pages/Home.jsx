import React from 'react'
import { Nav,Footer, Hero, Sponsors, ListA, ListB,ExplanationA,TextExplanationA,TextExplanationB,Posts } from '../components'

const Home = ()=> {
    let link = { title: "", url: " " }
    let items = [{ title: "", description: "" }, { title: "", description: "" }]
    let content = { overline: "optional", title: "", description: "", link: link }
    let button = { title: "", url: "" }
    let posts = [{date:"",title:"",postId:""}]
    return (
        <div>Home
            <div>
                <Nav/>
                <Hero />
            </div>
            <Sponsors />
            <ListA title="" link={link} items={items} />
            <ListB title="" link={link} items={items}/>
            <ExplanationA title="" link={link} content={content}/>
            <TextExplanationA overline="optional" title="" button={button} />
            <TextExplanationB overline="optional" title="" button={button} />
            <Posts title="" posts={posts} />
            <Footer />
        </div>
    )
}
export default Home

