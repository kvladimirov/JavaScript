import { Component, OnInit } from '@angular/core'
import { Article } from './Article'
import { ArticleService } from './article.service'


@Component({
  selector: 'articles-titles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  providers: [ArticleService]
})

export class ArticlesList implements OnInit {   
  articles: Article[]
  selectedArticle: Article

  constructor(private articleService: ArticleService) { }
 
  getArticles(): void {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }
 
  ngOnInit(): void {
    this.getArticles();
  }

  selectArticle(article: Article): void {
      this.selectedArticle = article
  }
}
