import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesList } from './articles-list.component';
import { ArticleDetails } from './article-details.component';
import { StyleArticle } from './style.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesList,
    ArticleDetails,
    StyleArticle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
