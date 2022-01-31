import React, { Component } from 'react'
import DailyNews from './DailyNews'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export default class News extends Component {
    artile=[
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Nasa sets new date for James Webb space telescope launch  The Guardian",
            "description": "The instrument will be the largest and most powerful telescope ever to be launched into space",
            "url": "https://amp.theguardian.com/science/2021/dec/19/nasasetsnewdateforjameswebbspacetelescopelaunch",
            "urlToImage": null,
            "publishedAt": "20211219T01:39:00Z",
            "content": "SpaceThe instrument will be the largest and most powerful telescope ever to be launched into space \r\nSat 18 Dec 2021 20.39 EST\r\nThe muchdelayed launch of the James Webb space telescope will go ahead… [+1678 chars]"
        },
        
        {
            
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sara Ashley O'Brien, CNN Business",
            "title": "Elizabeth Holmes' criminal fraud case heads to jury as closing arguments conclude  CNN",
            "description": "After three months of testimony from 32 witnesses, the criminal fraud case of Theranos founder Elizabeth Holmes has made its way to the jury of eight men and four women who will decide her fate.",
            "url": "https://www.cnn.com/2021/12/17/tech/elizabethholmesclosingarguments/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/21121613002201elizabethholmestheranosfraudtrial1216supertease.jpg",
            "publishedAt": "20211219T00:20:00Z",
            "content": "San Jose, California (CNN)After three months of testimony from 32 witnesses, the criminal fraud case of Theranos founder Elizabeth Holmes has made its way to the jury of eight men and four women who … [+7596 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "'SNL' to air without live audience and Charli XCX amid omicron  NPR",
            "description": "Paul Rudd will host Saturday Night Live's last episode of the year, with no live audience and a limited cast and crew. It's not the first time the show has had to adapt to the coronavirus pandemic.",
            "url": "https://www.npr.org/2021/12/18/1065558615/snlditchesaudiencecharlixcxpullsoutasomicronspreads",
            "urlToImage": "https://media.npr.org/assets/img/2021/12/18/ap21352840882969_widec1c242a9246d782bf0e6f9af11664fdb348058b8.jpg?s=1400",
            "publishedAt": "20211219T00:14:02Z",
            "content": "Charli XCX, pictured at a benefit during the 2019 international Cannes film festival, in southern France. The singer bowed out as musical guest on \"Saturday Night Live,\" citing the limited crew for t… [+3040 chars]"
        },
        
        
        {
            
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Associated Press",
            "title": "Must employers follow Biden's vaccine mandates?  Fox Business",
            "description": "Tens of millions of workers across the U.S. are in limbo as federal courts have issued different rulings related to President Joe Biden’s COVID19 vaccine mandates",
            "url": "https://www.foxbusiness.com/politics/mustemployersfollowbidensvaccinemandates",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/0/0/AP21336580434677.jpg?ve=1&tl=1",
            "publishedAt": "20211218T22:29:33Z",
            "content": "Tens of millions of workers across the U.S. are in limbo as federal courts have issued different rulings related to President Joe Biden’s COVID19 vaccine mandates for larger private companies, certa… [+9023 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "All those missing in Kentucky after tornado are accounted for, governor says  NPR",
            "description": "Between 75 and 78 people are confirmed dead after a destructive tornado tore through Kentucky last weekend. Many more had been reported missing but are now accounted for, the governor said.",
            "url": "https://www.npr.org/2021/12/18/1065546490/allthosemissinginkentuckyaftertornadoareaccountedforgovernorsays",
            "urlToImage": "https://media.npr.org/assets/img/2021/12/18/ap21348612563458_wide2b32e0ef1bc31cabd636563e3ead84d6192be8a7.jpg?s=1400",
            "publishedAt": "20211218T22:15:59Z",
            "content": "Dena Ausdorn stands at the remains of her home on Sunday after a tornado in Dawson Springs, Ky.\r\nMichael Clubb/AP\r\nNASHVILLE, Tenn. All of the people reported missing in Kentucky after tornadoes swep… [+2279 chars]"
        },
        
        {
            
            "source": {
                "id": "nflnews",
                "name": "NFL News"
            },
            "author": null,
            "title": "Former Jaguars head coach Urban Meyer discusses his firing, apologizes to Jacksonville  NFL.com",
            "description": "In a 23minute exclusive interview with NFL.com, Urban Meyer discusses his firing as head coach of the Jaguars and addresses several of the controversies that plagued his Jacksonville tenure.",
            "url": "https://www.nfl.com/news/formerjaguarsheadcoachurbanmeyerdiscusseshisfiring",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/hoknulfl9y2bjfc2tb0v",
            "publishedAt": "20211218T21:59:00Z",
            "content": "Urban Meyer can still remember how he felt upon being hired and the hope he held for a winning Jaguars franchise. He can still recall the visions he had of a packed house that he would help fill.\r\nWh… [+10927 chars]"
        }
    ]
    static defaultProps={
        country:'in',
        pagesize:6,
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state={artile:this.artile,loading:false,page:1}
        document.title=this.props.category;
    }
    async updateData(){
        this.props.setprogress(10)
        let  url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df025e59db814eacb7a058ba7f243fd8&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.props.setprogress(40)
        this.setState({loading:true})
        this.props.setprogress(55)
        let data=await fetch(url);
        this.props.setprogress(70)
        let parsedata=await data.json();
        this.props.setprogress(85)
        this.setState({artile:parsedata.articles,totalresults:parsedata.totalResults,loading:false});
        this.props.setprogress(100)
    }
    async componentDidMount(){
        this.updateData();
    }

    priviousclick = async ()=>{
        this.setState({page:this.state.page-1});
        this.updateData();
    }
    nextclick = async ()=>{
        this.setState({page:this.state.page+1})
        this.updateData();
    }
    render() {
        return (
            <div>
                <div className="container">
                <h2 className="text-center text-primary">Top {this.props.category} News Updates</h2>
                {this.state.loading && <Spinner/>}
                    <div className="row">
                        {this.state.artile.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                                <DailyNews title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.priviousclick}>&larr; Privious</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.nextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
