import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [], // Initialize with an empty array
      loading: false
    };
  }

  componentDidMount() {
    // Fetch the articles and update the state here
    this.setState({
      articles: [
        {
          title: "Champions Trophy tug of war shows India's 'stranglehold' on cricket",
          description: "Pakistan's loss of several Champions Trophy matches underlines India's dominance of cricket.",
          imageurl: "https://cdn.24.co.za/files/Cms/General/d/12549/1acc6293ab4d42ee87bc22ed7f534fc6.jpg",
          newsUrl: "http://www.news24.com/sport/cricket/champions-trophy-tug-of-war-shows-indias-stranglehold-on-cricket-20241219"
        },
        {
          title: "Ravichandran Ashwin: A spin legend who redefined Indian cricket",
          description: "The legendary spinner shocked the cricket world with his sudden retirement.",
          imageurl: "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6b48/live/240e69b0-bd37-11ef-a2ca-e99d0c9a24e3.jpg",
          newsUrl: "http://www.bbc.co.uk/news/articles/ckgxeq82ydvo"
        },
        {
          title: "India to play Champions Trophy matches at neutral venue",
          description: "India will play its matches at the 2025 Champions Trophy in Pakistan at a neutral venue.",
          imageurl: "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/547d/live/103531d0-bdfa-11ef-8e9d-2d56144e0daf.jpg",
          newsUrl: "http://www.bbc.co.uk/sport/cricket/articles/c2ldxxw4de4o"
        },
        {
          title: "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          description: "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          imageurl: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          newsUrl: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket"
        },
        { title: "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          description: "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          newsUrl: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          imageurl: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        }
      ]
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageurl={article.imageurl}
                newsUrl={article.newsUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }


  
}

export default News;
