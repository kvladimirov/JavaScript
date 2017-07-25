import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ArticlesList } from './articles-list.component'
import { ArticleDetails } from './article-details.component'




@NgModule({
  declarations: [
    AppComponent,
    ArticlesList,
    ArticleDetails
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
