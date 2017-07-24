import { Injectable } from '@angular/core';

import { Article } from './Article';
import { ARTICLES } from './data'

@Injectable()
export class ArticleService {
  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }
}